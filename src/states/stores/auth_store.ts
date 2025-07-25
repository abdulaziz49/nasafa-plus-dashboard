// src/features/auth/authStore.ts
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware"; // Optional: for DevTools and persistence
import AppAxios, { getAuthAxiosConfig } from "../../utils/app_axios.ts";
import {
    emptyUser,
    type LoginCredentials,
    type Auth,
} from "../../models/auth_models.ts";
import { toast } from "react-toastify";
// import type { AxiosError } from "axios";
import axios from "axios";

// Define the state shape for your auth store
interface AuthState {
    user: Auth;
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    error: string | null;
    token: string;
    intervalID: NodeJS.Timeout | string | number | undefined;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: (value: string) => Promise<void>;
    fetchUser: (value: string) => Promise<void>;
    startAutoFetchUser: () => void;
    clearAuth: () => void;
}

// // Helper to get stored data (assuming it's JSON stringified)
// const getStoredData = () => {
//     try {
//         const stored = localStorage.getItem("data");
//         return stored ? JSON.parse(stored) : null;
//     } catch (e) {
//         console.error("Failed to parse stored data from localStorage:", e);
//         return null;
//     }
// };

// --- Zustand Store ---
export const useAuthStore = create<AuthState>()(
    // Optional: devtools for browser extension, persist for localStorage
    devtools(
        persist(
            (set, get) => ({
                // `set` to update state, `get` to read current state
                // Initial State
                user: emptyUser,
                isAuthenticated: false,
                isAuthLoading: false, // Initial check on app load
                error: null,
                token: "", // Initialize token from localStorage if available
                intervalID: undefined,

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

                        if (process.env.NODE_ENV === "development") {
                            console.log(response.data);
                        }

                        const { user, token } = response.data.data;

                        set({
                            isAuthLoading: false,
                            isAuthenticated: true,
                            user,
                            token,
                            error: null,
                        });
                        get().startAutoFetchUser(); // Start auto-fetching user
                        console.log("success login");
                    } catch (error: unknown) {
                        if (
                            typeof error === "object" &&
                            error !== null &&
                            "response" in error
                        ) {
                            const err = error as {
                                response?: { data?: { message?: string } };
                                message?: string;
                            };
                            console.error(
                                "Login failed:",
                                err.response?.data || err.message
                            );
                            set({
                                isAuthLoading: false,
                                isAuthenticated: false,
                                user: emptyUser,
                                token: "",
                                error:
                                    err.response?.data?.message ||
                                    "Login failed.",
                            });
                        } else {
                            console.error("Login failed:", error);
                            set({
                                isAuthLoading: false,
                                isAuthenticated: false,
                                user: emptyUser,
                                token: "",
                                error: "Login failed.",
                            });
                        }
                    }
                },

                logout: async (value) => {
                    set({ isAuthLoading: true, error: null });
                    try {
                        try {
                            await AppAxios.post(
                                "logout",
                                {},
                                getAuthAxiosConfig(value)
                            );
                        } catch (err) {
                            console.warn(
                                "SPA logout failed or not applicable:",
                                err
                            );
                        }
                        // clearInterval(get().intervalID));
                        clearInterval(get().intervalID);
                        set({
                            isAuthLoading: false,
                            isAuthenticated: false,
                            user: emptyUser,
                            token: "",
                            error: null,
                        });
                    } catch (error: unknown) {
                        if (
                            typeof error === "object" &&
                            error !== null &&
                            "response" in error
                        ) {
                            const err = error as {
                                response?: { data?: { message?: string } };
                                message?: string;
                            };
                            console.error(
                                "Logout failed:",
                                err.response?.data || err.message
                            );
                            set({
                                isAuthLoading: false,
                                isAuthenticated: false, // Ensure state is cleared on client-side
                                user: emptyUser,
                                token: "",
                                error:
                                    err.response?.data?.message ||
                                    "Logout failed (client state cleared).",
                            });
                        } else {
                            console.error("Logout failed:", error);
                            set({
                                isAuthLoading: false,
                                isAuthenticated: false, // Ensure state is cleared on client-side
                                user: emptyUser,
                                token: "",
                                error: "Logout failed (client state cleared).",
                            });
                        }
                    }
                },

                fetchUser: async (value) => {
                    set({ isAuthLoading: true, error: null });
                    try {
                        const response = await AppAxios.get(
                            "user",
                            getAuthAxiosConfig(value)
                        );

                        // Assuming 'response.data' is the User object directly
                        const user = response.data;

                        set({
                            isAuthLoading: false,
                            isAuthenticated: true,
                            user,
                            token: response.data.token, // Keep the existing token, assuming it's still valid
                            error: null,
                        });
                    } catch (error) {
                        if (axios.isAxiosError(error)) {
                            // const err = error as AxiosError;
                            console.error(
                                "Fetch user failed:",
                                error.response?.data || error?.message
                            );
                        }
                        // Clear auth state if unauthorized or failed to fetch
                        // localStorage.removeItem("data");
                        set({
                            isAuthLoading: false,
                            isAuthenticated: false,
                            user: emptyUser,
                            token: "",
                            error:
                                error.response?.status === 401
                                    ? "Unauthorized or session expired"
                                    : error.response?.data?.message ||
                                      "Failed to fetch user.",
                        });
                    }
                },

                // Function to start auto-fetching user data
                startAutoFetchUser: () => {
                    const interval_Id:
                        | NodeJS.Timeout
                        | string
                        | number
                        | undefined = setInterval(() => {
                        const { isAuthenticated, token } = get();
                        if (isAuthenticated && token) {
                            // Call fetchUser with the current token
                            get().fetchUser(token);
                            toast.success("fetched token successfully");
                        } else {
                            // If not authenticated or no token, clear the interval
                            // clearInterval(intervalId);
                            toast.error(
                                "Auto fetchUser stopped: not authenticated or no token."
                            );
                        }
                    }, 55 * 60 * 1000); // 55 minutes in milliseconds

                    set({ intervalId: interval_Id });

                    // You might want to store the intervalId in the state
                    // if you need to clear it manually later.
                },

                clearAuth: () => {
                    set({
                        user: emptyUser,
                        isAuthenticated: false,
                        isAuthLoading: false, // Should be false if manually clearing
                        error: null,
                        token: "",
                    });
                },
            }),
            {
                name: "auth-storage",
                partialize: (state) => ({
                    user: state.user,
                    isAuthenticated: state.isAuthenticated,
                    token: state.token,
                    isAuthLoading: state.isAuthLoading,
                    intervalID: state.intervalID,
                }),
                // force using session storage instead of the default localstorage
                storage: createJSONStorage(() => sessionStorage),
                // Optional: Customize how the state is rehydrated
                // This is important for 'isAuthLoading' on initial load.
                onRehydrateStorage: (state) => {
                    if (state) {
                        // Set isAuthLoading to true initially when rehydrating
                        // This allows ProtectedRoute to show loading while fetchUser runs
                        state.isAuthLoading = false;
                    }
                    return (storedState, error) => {
                        if (error) {
                            console.error(
                                "An error occurred during hydration",
                                error
                            );
                        } else if (storedState) {
                            // After rehydration, if a token exists, attempt to fetch user
                            // This ensures the actual authentication status is checked
                            if (storedState.token) {
                                // Important: We call fetchUser directly here after hydration.
                                // This ensures the auth status is verified with the backend.
                                // It will update isAuthenticated and isAuthLoading correctly.
                                // storedState.fetchUser(); // Use `get()` to access current store actions
                            } else {
                                // If no token persisted, immediately set isAuthLoading to false
                                // as there's nothing to check.
                                storedState.isAuthLoading = false;
                                storedState.isAuthenticated = false;
                            }
                        }
                    };
                },
            }
        )
    )
);
