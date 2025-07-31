// src/states/stores/auth_store.ts
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import AppAxios, { getAuthAxiosConfig } from "../../utils/app_axios.ts";
import {
    emptyUser,
    type LoginCredentials,
    type Auth,
} from "../../models/auth_models.ts";
import { toast } from "react-toastify"; // Keep toast for specific, user-facing messages
import axios from "axios";

/**
 * @interface AuthState
 * @description Defines the shape of the authentication store's state.
 * @property {Auth} user - The authenticated user's data. Defaults to `emptyUser`.
 * @property {boolean} isAuthenticated - Indicates if a user is currently logged in.
 * @property {boolean} isAuthLoading - Indicates if an authentication-related operation (login, refresh, logout) is in progress.
 * @property {string | null} error - Stores any authentication-related error message. `null` if no error.
 * @property {string} token - The authentication token. Empty string if not authenticated.
 * @property {NodeJS.Timeout | undefined} intervalID - ID for the main recurring token refresh interval (55 minutes).
 * @property {NodeJS.Timeout | undefined} retryIntervalID - ID for the token refresh retry interval (1 minute) after a non-401 failure.
 * @property {(credentials: LoginCredentials) => Promise<void>} login - Function to handle user login.
 * @property {(value: string) => Promise<void>} logout - Function to handle user logout.
 * @property {() => void} startTokenAutoRefresh - Function to initiate and manage the periodic token refresh.
 * @property {() => void} clearAuth - Utility function to clear all authentication-related state locally.
 */
interface AuthState {
    user: Auth;
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    error: string | null;
    token: string;
    intervalID: NodeJS.Timeout | undefined;
    retryIntervalID: NodeJS.Timeout | undefined;

    login: (credentials: LoginCredentials) => Promise<void>;
    logout: (value: string) => Promise<void>;
    startTokenAutoRefresh: () => void;
    clearAuth: () => void;
}

// --- Constants for intervals ---
/**
 * @constant {number} MAIN_REFRESH_INTERVAL - The primary interval for token refresh in milliseconds (55 minutes).
 */
const MAIN_REFRESH_INTERVAL = 55 * 60 * 1000; // 55 minutes in milliseconds
/**
 * @constant {number} RETRY_INTERVAL - The interval for retrying token refresh after a non-401 failure in milliseconds (1 minute).
 */
const RETRY_INTERVAL = 1 * 60 * 1000; // 1 minute in milliseconds

/**
 * @function useAuthStore
 * @description A Zustand store for managing authentication state, including login, logout,
 * and automatic token refreshing with retry logic.
 */
export const useAuthStore = create<AuthState>()(
    // devtools enhances the store with Redux DevTools for easier debugging
    devtools(
        // persist allows the store state to be saved and rehydrated from storage (sessionStorage in this case)
        persist(
            (set, get) => ({
                // Initial State
                user: emptyUser,
                isAuthenticated: false,
                isAuthLoading: false,
                error: null,
                token: "",
                intervalID: undefined,
                retryIntervalID: undefined,

                /**
                 * @method login
                 * @description Handles user login by sending credentials to the backend.
                 * On successful login, sets user data, token, and starts the token auto-refresh.
                 * @param {LoginCredentials} credentials - User's username and password.
                 * @returns {Promise<void>}
                 */
                login: async (credentials) => {
                    set({ isAuthLoading: true, error: null });
                    try {
                        const response = await AppAxios.post(
                            "login",
                            {
                                username: credentials.username,
                                password: credentials.password,
                            },
                            getAuthAxiosConfig()
                        );

                        const { user, token } = response.data.data;

                        set({
                            isAuthLoading: false,
                            isAuthenticated: true,
                            user,
                            token,
                            error: null,
                        });
                        // After successful login, start the auto-refresh.
                        // The *first* refresh call will be scheduled after MAIN_REFRESH_INTERVAL.
                        get().startTokenAutoRefresh();
                        // toast.success("Login successful!"); // Keep this toast as it's a primary success feedback
                    } catch (error: unknown) {
                        set({
                            isAuthLoading: false,
                            isAuthenticated: false,
                            user: emptyUser,
                            token: "",
                        });
                        // AppAxios handles most network/server errors with toasts
                        // Only set a generic error message in store if AppAxios doesn't provide one
                        if (axios.isAxiosError(error) && error.response) {
                            const errorMessage =
                                error.response.data?.message || "Login failed.";
                            set({ error: errorMessage });
                        } else {
                            set({
                                error: "An unknown error occurred during login.",
                            });
                        }
                    }
                },

                /**
                 * @method logout
                 * @description Handles user logout by attempting to invalidate the session on the backend.
                 * Client-side state is cleared ONLY if the server logout request is successful.
                 * @param {string} currentToken - The current authentication token to invalidate.
                 * @returns {Promise<void>}
                 */
                logout: async (currentToken) => {
                    // Always clear any active auto-refresh intervals immediately on logout attempt
                    clearInterval(get().intervalID);
                    clearInterval(get().retryIntervalID);
                    set({ intervalID: undefined, retryIntervalID: undefined });
                    set({ isAuthLoading: true, error: null });

                    try {
                        const response = await AppAxios.post(
                            "logout",
                            {},
                            getAuthAxiosConfig(currentToken)
                        );

                        // Only clear client-side state if the server logout request was successful
                        if (
                            response.status === 200 ||
                            response.status === 201 ||
                            response.status === 204
                        ) {
                            set({
                                isAuthLoading: false,
                                isAuthenticated: false,
                                user: emptyUser,
                                token: "",
                                error: null,
                                intervalID: undefined,
                                retryIntervalID: undefined,
                            });
                            sessionStorage.removeItem("auth-storage"); // Clear persisted state
                            // toast.info("Logged out successfully."); // Keep this toast for success feedback
                        } else {
                            // If server responds with an unexpected success status, log a warning
                            // Client state is not cleared due to ambiguity.
                            console.warn(
                                `Server logout responded with unexpected status ${response.status}. Client state not cleared.`
                            );
                            set({
                                isAuthLoading: false,
                                error: "Logout failed due to unexpected server response.",
                            });
                        }
                    } catch (error: unknown) {
                        // AppAxios handles the toast notification for network/server errors.
                        // Client-side state is NOT cleared here, adhering to the requirement
                        // to only clear on successful server logout.
                        if (axios.isAxiosError(error)) {
                            set({ isAuthLoading: false });
                        }
                        // Only log specific warnings if AppAxios doesn't fully handle them
                        // if (axios.isAxiosError(error) && error.response?.status !== 401) {
                        //     console.warn("Server logout request failed, local state might remain active.", error);
                        // }
                    }
                },

                /**
                 * @method startTokenAutoRefresh
                 * @description Initiates and manages the automatic token refresh mechanism.
                 * Schedules the first refresh after `MAIN_REFRESH_INTERVAL`.
                 * On success, schedules the next refresh after `MAIN_REFRESH_INTERVAL`.
                 * On non-401 failure, retries after `RETRY_INTERVAL` until success.
                 * On 401 failure, clears authentication state and stops all intervals.
                 */
                startTokenAutoRefresh: () => {
                    const { token, isAuthenticated, clearAuth } = get();

                    // Clear any existing intervals to prevent duplicates or conflicts
                    clearInterval(get().intervalID);
                    clearInterval(get().retryIntervalID);
                    set({ intervalID: undefined, retryIntervalID: undefined });

                    if (!isAuthenticated || !token) {
                        // If not authenticated or no token, clear state to ensure consistency
                        clearAuth();
                        return;
                    }

                    // --- Internal function to handle the token refresh API call ---
                    const performTokenRefresh = async () => {
                        set({ isAuthLoading: true, error: null }); // Set loading state during refresh
                        try {
                            const response = await AppAxios.post(
                                "refresh", // Your token refresh endpoint
                                {},
                                getAuthAxiosConfig(get().token) // Use the current token in store
                            );

                            const { token: newToken } = response.data.data; // Assuming 'data.data.token' is the new token

                            set({
                                token: newToken, // Update the token with the new one
                                isAuthenticated: true,
                                isAuthLoading: false,
                                error: null,
                            });
                            // toast.success("Token refreshed successfully!"); // Removed: less crucial for auto-refresh

                            // On success, clear any pending retry interval and set the main interval
                            clearInterval(get().retryIntervalID);
                            set({ retryIntervalID: undefined }); // Clear retry ID
                            const nextIntervalID = setInterval(
                                performTokenRefresh,
                                MAIN_REFRESH_INTERVAL
                            );
                            set({ intervalID: nextIntervalID });
                            // toast.info(`Next auto-token refresh in ${MAIN_REFRESH_INTERVAL / 60000} minutes.`); // Removed: less crucial for auto-refresh
                        } catch (error: unknown) {
                            if (axios.isAxiosError(error)) {
                                set({ isAuthLoading: false }); // Turn off loading
                            }
                            // if (
                            //     axios.isAxiosError(error) &&
                            //     error.response?.status === 401
                            // ) {
                            //     // Critical error: token likely expired/invalid, force logout
                            //     toast.error(
                            //         "Session expired. Please log in again."
                            //     );
                            //     clearAuth(); // This will also clear all intervals
                            //     return; // Stop here, no retries
                            // }

                            // For other errors (network, server non-401), set a retry interval
                            clearInterval(get().intervalID);
                            set({ intervalID: undefined }); // Clear main ID
                            const nextRetryIntervalID = setInterval(
                                performTokenRefresh,
                                RETRY_INTERVAL
                            );
                            set({ retryIntervalID: nextRetryIntervalID });
                            // Keep this toast as it's important feedback for auto-retries
                            toast.error(
                                // TODO - translate this message
                                `Token refresh failed. Retrying in ${
                                    RETRY_INTERVAL / 60000
                                } minute.`
                            );
                            // AppAxios will display the specific error message via toast for the underlying request error.
                        }
                    };

                    // // Initial call to schedule the *first* refresh after MAIN_REFRESH_INTERVAL
                    const initialIntervalID = setInterval(
                        performTokenRefresh,
                        MAIN_REFRESH_INTERVAL
                    );
                    set({ intervalID: initialIntervalID });
                    // // Keep this toast as it indicates the start of the auto-refresh mechanism
                    // toast.info(
                    //     `Auto-token refresh scheduled to start in ${
                    //         MAIN_REFRESH_INTERVAL / 60000
                    //     } minutes.`
                    // );
                },

                /**
                 * @method clearAuth
                 * @description A utility function to completely clear all authentication-related state locally,
                 * including user data, token, and all active refresh/retry intervals.
                 */
                clearAuth: () => {
                    // Clear all intervals
                    clearInterval(get().intervalID);
                    clearInterval(get().retryIntervalID);
                    set({ intervalID: undefined, retryIntervalID: undefined });

                    set({
                        user: emptyUser,
                        isAuthenticated: false,
                        isAuthLoading: false,
                        error: null,
                        token: "",
                    });
                    sessionStorage.removeItem("auth-storage"); // Clear persisted state from session storage
                    toast.info("Authentication state cleared."); // TODO - translate this message
                },
            }),
            {
                name: "auth-storage",
                // partialize specifies which parts of the state to persist
                partialize: (state) => ({
                    user: state.user,
                    isAuthenticated: state.isAuthenticated,
                    isAuthLoading: state.isAuthLoading,
                    token: state.token,
                    error: state.error,
                    intervalID: state.intervalID,
                    retryIntervalID: state.retryIntervalID,
                }),
                // storage specifies where to persist the state (sessionStorage in this case)
                storage: createJSONStorage(() => sessionStorage),
                // onRehydrateStorage callback runs after the state has been rehydrated from storage
                onRehydrateStorage: () => {
                    return (storedState, error) => {
                        if (error) {
                            // Log error to console only for dev/debugging
                            console.error(
                                "An error occurred during hydration",
                                error
                            );
                            // storedState = ini
                            // useAuthStore.setState({
                            storedState!.isAuthenticated = false;
                            storedState!.isAuthLoading = false;
                            storedState!.user = emptyUser;
                            storedState!.token = "";
                            storedState!.error =
                                "Authentication data corrupted, please log in again.";
                            storedState!.intervalID = undefined;
                            storedState!.retryIntervalID = undefined;
                            // });
                            toast.error(
                                "Authentication data corrupted, please log in again."
                            );
                            return;
                        }
                        if (storedState?.token) {
                            // If a token was rehydrated, set isAuthenticated to true.
                            // isAuthLoading is set to false here as hydration is complete.
                            // The `App.tsx` useEffect will handle starting `startTokenAutoRefresh`.
                            // useAuthStore.setState({
                            storedState!.isAuthLoading = false;
                            storedState!.isAuthenticated = true;
                            // });
                        } else {
                            // No token rehydrated, ensure not loading and not authenticated
                            // useAuthStore.setState({
                            storedState!.isAuthLoading = false;
                            storedState!.isAuthenticated = false;
                            // });
                        }
                    };
                },
            }
        )
    )
);

// TODO - Encrypt username and password on login request
// TODO - Encrypt and Decrypt token
// TODO - Fix lcalstorage to prevent accessing data after closing all tabs and make it works when user have multiple tabs on the same window
