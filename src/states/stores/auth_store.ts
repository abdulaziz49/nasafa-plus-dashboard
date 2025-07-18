// src/features/auth/authStore.ts
import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware'; // Optional: for DevTools and persistence
import AppAxios, {getAuthAxiosConfig} from "../../utils/app_axios.ts";
import {
    emptyUser,
    type LoginCredentials,
    type User
} from "../../models/users/users_models.ts";

// Define the state shape for your auth store
interface AuthState {
    user: User;
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    error: string | null;
    token: string;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: (value: string) => Promise<void>;
    // fetchUser: () => Promise<void>;
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
            (set) => ({ // `set` to update state, `get` to read current state
                // Initial State
                user: emptyUser,
                isAuthenticated: false,
                isAuthLoading: true, // Initial check on app load
                error: null,
                token: "", // Initialize token from localStorage if available

                // --- Actions (replacing async thunks and reducers) ---

                login: async (credentials) => {
                    set({isAuthLoading: true, error: null});
                    try {
                        const response = await AppAxios.post('login', {
                            username: credentials.username,
                            password: credentials.password,
                        }, getAuthAxiosConfig());

                        const {user, token} = response.data.data;
                        // localStorage.setItem("data", JSON.stringify(response.data.data)); // Persist data

                        set({
                            isAuthLoading: false,
                            isAuthenticated: true,
                            user: user,
                            token: token,
                            error: null,
                        });
                        console.log("success login")
                    } catch (error: any) {
                        console.error("Login failed:", error.response?.data || error.message);
                        // localStorage.removeItem("data"); // Clear on failed login
                        set({
                            isAuthLoading: false,
                            isAuthenticated: false,
                            user: emptyUser,
                            token: "",
                            error: error.response?.data?.message || 'Login failed.',
                        });
                    }
                },

                logout: async (value) => {
                    set({isAuthLoading: true, error: null});
                    try {
                        try {
                            // Attempt SPA logout (web route) - session invalidation
                            await AppAxios.post('logout', {}, getAuthAxiosConfig(value));
                        } catch (err) {
                            console.warn("SPA logout failed or not applicable:", err);
                        }
                        // localStorage.removeItem("data"); // Clear localStorage regardless of server logout success
                        set({
                            isAuthLoading: false,
                            isAuthenticated: false,
                            user: emptyUser,
                            token: "",
                            error: null,
                        });
                    } catch (error: any) {
                        console.error("Logout failed:", error.response?.data || error.message);
                        // localStorage.removeItem("data"); // Ensure localStorage is cleared even if error
                        set({
                            isAuthLoading: false,
                            isAuthenticated: false, // Ensure state is cleared on client-side
                            user: emptyUser,
                            token: "",
                            error: error.response?.data?.message || 'Logout failed (client state cleared).',
                        });
                    }
                },

                // fetchUser: async () => {
                //     set({isAuthLoading: true, error: null});
                //     try {
                //         // Retrieve token from localStorage for the request
                //         // const stored = getStoredData();
                //         // const token = stored?.token;
                //
                //         // // Only proceed if a token exists in localStorage for the fetchUser request
                //         // if (!token) {
                //         //     throw new Error("No token found in local storage.");
                //         // }
                //
                //         // Adjust header if your API needs 'Authorization: Bearer <token>'
                //         // getAxiosHeaderJson(true, token) would be more appropriate if your API uses Bearer tokens
                //         const response = await AppAxios.get('user', getAxiosHeaderJson(true, token));
                //
                //         // Assuming 'response.data' is the User object directly
                //         const user = response.data;
                //
                //         set({
                //             isAuthLoading: false,
                //             isAuthenticated: true,
                //             user: user,
                //             token: response.data.token, // Keep the existing token, assuming it's still valid
                //             error: null,
                //         });
                //     } catch (error: any) {
                //         console.error("Fetch user failed:", error.response?.data || error.message);
                //         // Clear auth state if unauthorized or failed to fetch
                //         // localStorage.removeItem("data");
                //         set({
                //             isAuthLoading: false,
                //             isAuthenticated: false,
                //             user: emptyUser,
                //             token: "",
                //             error: error.response?.status === 401 ? 'Unauthorized or session expired' : (error.response?.data?.message || 'Failed to fetch user.'),
                //         });
                //     }
                // },

                clearAuth: () => {
                    // localStorage.removeItem("data"); // Clear localStorage
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
                name: "auth-storage", // name of the item in localStorage (or other storage)
                // getStorage: () => localStorage, // (optional) by default it's localStorage
                // Choose which parts of the state to persist.
                // We'll persist 'user', 'isAuthenticated', 'token'
                // 'isAuthLoading' and 'error' are runtime states, not for persistence.
                partialize: (state) => ({
                    user: state.user,
                    isAuthenticated: state.isAuthenticated,
                    token: state.token,
                    isAuthLoading: state.isAuthLoading
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
                            console.error('An error occurred during hydration', error);
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
                                storedState.isAuthLoading = false
                                storedState.isAuthenticated = false
                            }
                        }
                    };
                },
            }
        )
    )
);