// // src/features/auth/authStore.ts
// import { create } from "zustand";
// import { createJSONStorage, devtools, persist } from "zustand/middleware"; // Optional: for DevTools and persistence
// import AppAxios, { getAuthAxiosConfig } from "../../utils/app_axios.ts";
// import {
//     emptyUser,
//     type LoginCredentials,
//     type Auth,
// } from "../../models/auth_models.ts";
// import { toast } from "react-toastify";
// // import type { AxiosError } from "axios";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Define the state shape for your auth store
// interface AuthState {
//     user: Auth;
//     isAuthenticated: boolean;
//     isAuthLoading: boolean;
//     error: string | null;
//     token: string;
//     intervalID: NodeJS.Timeout | string | number | undefined;
//     login: (credentials: LoginCredentials) => Promise<void>;
//     logout: (value: string) => Promise<void>;
//     fetchUser: (value: string) => Promise<void>;
//     startAutoFetchUser: () => void;
//     clearAuth: () => void;
// }

// // // Helper to get stored data (assuming it's JSON stringified)
// // const getStoredData = () => {
// //     try {
// //         const stored = localStorage.getItem("data");
// //         return stored ? JSON.parse(stored) : null;
// //     } catch (e) {
// //         console.error("Failed to parse stored data from localStorage:", e);
// //         return null;
// //     }
// // };

// // --- Zustand Store ---
// export const useAuthStore = create<AuthState>()(
//     // Optional: devtools for browser extension, persist for localStorage
//     devtools(
//         persist(
//             (set, get) => ({
//                 // `set` to update state, `get` to read current state
//                 // Initial State
//                 user: emptyUser,
//                 isAuthenticated: false,
//                 isAuthLoading: false, // Initial check on app load
//                 error: null,
//                 token: "", // Initialize token from localStorage if available
//                 intervalID: undefined,

//                 login: async (credentials) => {
//                     set({ isAuthLoading: true, error: null });
//                     try {
//                         const response = await AppAxios.post(
//                             "login",
//                             {
//                                 username: credentials.username,
//                                 password: credentials.password,
//                             },
//                             getAuthAxiosConfig()
//                         );

//                         if (process.env.NODE_ENV === "development") {
//                             console.log(response.data);
//                         }

//                         const { user, token } = response.data.data;

//                         set({
//                             isAuthLoading: false,
//                             isAuthenticated: true,
//                             user,
//                             token,
//                             error: null,
//                         });
//                         get().startAutoFetchUser(); // Start auto-fetching user
//                         console.log("success login");
//                     } catch (error: unknown) {
//                         if (
//                             typeof error === "object" &&
//                             error !== null &&
//                             "response" in error
//                         ) {
//                             const err = error as {
//                                 response?: { data?: { message?: string } };
//                                 message?: string;
//                             };
//                             console.error(
//                                 "Login failed:",
//                                 err.response?.data || err.message
//                             );
//                             set({
//                                 isAuthLoading: false,
//                                 isAuthenticated: false,
//                                 user: emptyUser,
//                                 token: "",
//                                 error:
//                                     err.response?.data?.message ||
//                                     "Login failed.",
//                             });
//                         } else {
//                             console.error("Login failed:", error);
//                             set({
//                                 isAuthLoading: false,
//                                 isAuthenticated: false,
//                                 user: emptyUser,
//                                 token: "",
//                                 error: "Login failed.",
//                             });
//                         }
//                     }
//                 },

//                 logout: async (value) => {
//                     set({ isAuthLoading: true, error: null });
//                     try {
//                         try {
//                             await AppAxios.post(
//                                 "logout",
//                                 {},
//                                 getAuthAxiosConfig(value)
//                             );
//                         } catch (err) {
//                             console.warn(
//                                 "SPA logout failed or not applicable:",
//                                 err
//                             );
//                         }
//                         // clearInterval(get().intervalID));
//                         clearInterval(get().intervalID);
//                         set({
//                             isAuthLoading: false,
//                             isAuthenticated: false,
//                             user: emptyUser,
//                             token: "",
//                             error: null,
//                         });
//                     } catch (error: unknown) {
//                         if (
//                             typeof error === "object" &&
//                             error !== null &&
//                             "response" in error
//                         ) {
//                             const err = error as {
//                                 response?: { data?: { message?: string } };
//                                 message?: string;
//                             };
//                             console.error(
//                                 "Logout failed:",
//                                 err.response?.data || err.message
//                             );
//                             set({
//                                 isAuthLoading: false,
//                                 isAuthenticated: false, // Ensure state is cleared on client-side
//                                 user: emptyUser,
//                                 token: "",
//                                 error:
//                                     err.response?.data?.message ||
//                                     "Logout failed (client state cleared).",
//                             });
//                         } else {
//                             console.error("Logout failed:", error);
//                             set({
//                                 isAuthLoading: false,
//                                 isAuthenticated: false, // Ensure state is cleared on client-side
//                                 user: emptyUser,
//                                 token: "",
//                                 error: "Logout failed (client state cleared).",
//                             });
//                         }
//                     }
//                 },

//                 // FIXME - Fix refresh tokens by make it refetch new token every 55-59 minute
//                 fetchUser: async (value) => {
//                     set({ isAuthLoading: true, error: null });
//                     try {
//                         const response = await AppAxios.get(
//                             "user",
//                             getAuthAxiosConfig(value)
//                         );

//                         // Assuming 'response.data' is the User object directly
//                         const user = response.data;

//                         set({
//                             isAuthLoading: false,
//                             isAuthenticated: true,
//                             user,
//                             token: response.data.token, // Keep the existing token, assuming it's still valid
//                             error: null,
//                         });
//                     } catch (error) {
//                         if (axios.isAxiosError(error)) {
//                             // const err = error as AxiosError;
//                             console.error(
//                                 "Fetch user failed:",
//                                 error.response?.data || error?.message
//                             );
//                         }
//                         // Clear auth state if unauthorized or failed to fetch
//                         // localStorage.removeItem("data");
//                         set({
//                             isAuthLoading: false,
//                             isAuthenticated: false,
//                             user: emptyUser,
//                             token: "",
//                             error:
//                                 error.response?.status === 401
//                                     ? "Unauthorized or session expired"
//                                     : error.response?.data?.message ||
//                                       "Failed to fetch user.",
//                         });
//                     }
//                 },

//                 // FIXME - Function to start auto-fetching user data
//                 startAutoFetchUser: () => {
//                     const interval_Id:
//                         | NodeJS.Timeout
//                         | string
//                         | number
//                         | undefined = setInterval(() => {
//                         const { isAuthenticated, token } = get();
//                         if (isAuthenticated && token) {
//                             // Call fetchUser with the current token
//                             get().fetchUser(token);
//                             toast.success("fetched token successfully");
//                         } else {
//                             // If not authenticated or no token, clear the interval
//                             // clearInterval(intervalId);
//                             toast.error(
//                                 "Auto fetchUser stopped: not authenticated or no token."
//                             );
//                         }
//                     }, 55 * 60 * 1000); // 55 minutes in milliseconds

//                     set({ intervalId: interval_Id });

//                     // You might want to store the intervalId in the state
//                     // if you need to clear it manually later.
//                 },

//                 clearAuth: () => {
//                     set({
//                         user: emptyUser,
//                         isAuthenticated: false,
//                         isAuthLoading: false, // Should be false if manually clearing
//                         error: null,
//                         token: "",
//                     });
                    
//                 },
//             }),
//             {
//                 name: "auth-storage",
//                 partialize: (state) => ({
//                     user: state.user,
//                     isAuthenticated: state.isAuthenticated,
//                     token: state.token,
//                     isAuthLoading: state.isAuthLoading,
//                     intervalID: state.intervalID,
//                 }),
//                 // force using session storage instead of the default localstorage
//                 storage: createJSONStorage(() => sessionStorage),
//                 // Optional: Customize how the state is rehydrated
//                 // This is important for 'isAuthLoading' on initial load.
//                 onRehydrateStorage: (state) => {
//                     if (state) {
//                         // Set isAuthLoading to true initially when rehydrating
//                         // This allows ProtectedRoute to show loading while fetchUser runs
//                         state.isAuthLoading = false;
//                     }
//                     return (storedState, error) => {
//                         if (error) {
//                             console.error(
//                                 "An error occurred during hydration",
//                                 error
//                             );
//                         } else if (storedState) {
//                             // After rehydration, if a token exists, attempt to fetch user
//                             // This ensures the actual authentication status is checked
//                             if (storedState.token) {
//                                 // Important: We call fetchUser directly here after hydration.
//                                 // This ensures the auth status is verified with the backend.
//                                 // It will update isAuthenticated and isAuthLoading correctly.
//                                 // storedState.fetchUser(); // Use `get()` to access current store actions
//                             } else {
//                                 // If no token persisted, immediately set isAuthLoading to false
//                                 // as there's nothing to check.
//                                 storedState.isAuthLoading = false;
//                                 storedState.isAuthenticated = false;
//                             }
//                         }
//                     };
//                 },
//             }
//         )
//     )
// );


// src/features/auth/authStore.ts
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import AppAxios, { getAuthAxiosConfig } from "../../utils/app_axios.ts";
import { emptyUser, type LoginCredentials, type Auth } from "../../models/auth_models.ts";
import { toast } from "react-toastify";
import axios from "axios";

// Define the state shape for your auth store
interface AuthState {
  user: Auth;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  error: string | null;
  token: string;
  intervalID: NodeJS.Timeout | undefined; // Better type for setInterval return

  login: (credentials: LoginCredentials) => Promise<void>;
  logout: (value: string) => Promise<void>;
  // Combined function: will handle both initial fetch and auto-refresh
  initializeAndFetchUser: (currentToken?: string) => Promise<boolean>;
  clearAuth: () => void;
}

// --- Zustand Store ---
export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial State
        user: emptyUser,
        isAuthenticated: false,
        isAuthLoading: false,
        error: null,
        token: "",
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
              console.log("Login response:", response.data);
            }

            const { user, token } = response.data.data;

            set({
              isAuthLoading: false,
              isAuthenticated: true,
              user,
              token,
              error: null,
            });
            // After successful login, immediately attempt to initialize/fetch user (which starts the interval)
            get().initializeAndFetchUser(token);
            toast.success("Login successful!");
            console.log("Successfully logged in.");
          } catch (error: unknown) {
            set({ isAuthLoading: false, isAuthenticated: false, user: emptyUser, token: "" });

            if (axios.isAxiosError(error)) {
              if (error.code === "ERR_NETWORK") {
                const message = "Network Error: Please check your internet connection.";
                console.error(message, error);
                set({ error: message });
                toast.error(message);
              } else if (error.response) {
                const errorMessage = error.response.data?.message || `Login failed: Status ${error.response.status}`;
                console.error("Login failed:", errorMessage, error.response);
                set({ error: errorMessage });
                toast.error(errorMessage);
              } else if (error.request) {
                const message = "No response from server. It might be down or unreachable.";
                console.error(message, error.request);
                set({ error: message });
                toast.error(message);
              } else {
                const message = `An unexpected error occurred: ${error.message}`;
                console.error(message, error);
                set({ error: message });
                toast.error(message);
              }
            } else {
              console.error("An unknown error occurred during login:", error);
              set({ error: "An unknown error occurred during login." });
              toast.error("An unknown error occurred during login.");
            }
          }
        },

        logout: async (currentToken) => {
          set({ isAuthLoading: true, error: null });
          // Clear any active auto-refresh interval immediately
          if (get().intervalID) {
            clearInterval(get().intervalID);
            set({ intervalID: undefined });
          }

          try {
            await AppAxios.post("logout", {}, getAuthAxiosConfig(currentToken));
            toast.info("Logged out successfully.");
          } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              if (error.code === "ERR_NETWORK") {
                console.warn("Logout Network Error: Could not reach server to invalidate session.");
                toast.warn("Could not log out from server (network issue), but local session cleared.");
              } else if (error.response) {
                console.warn("Server logout failed (likely session already invalid):", error.response.status, error.response.data);
                toast.warn("Could not log out from server (already invalid), but local session cleared.");
              } else {
                console.warn("Logout request failed:", error.message);
                toast.warn("An error occurred during server logout, but local session cleared.");
              }
            } else {
              console.warn("An unknown error occurred during server logout:", error);
              toast.warn("An unknown error occurred during server logout, but local session cleared.");
            }
          } finally {
            // Always clear client-side auth state
            set({
              isAuthLoading: false,
              isAuthenticated: false,
              user: emptyUser,
              token: "",
              error: null,
              intervalID: undefined,
            });
            sessionStorage.removeItem("auth-storage"); // Ensure persistence is also cleared
          }
        },

        // Combined function for initial fetch and auto-refresh
        initializeAndFetchUser: async (passedToken?: string) => {
          const { token: currentTokenInStore, clearAuth, intervalID } = get();
          const tokenToUse = passedToken || currentTokenInStore;

          // Clear any existing interval to prevent duplicates or stale timers
          if (intervalID) {
            clearInterval(intervalID);
            set({ intervalID: undefined });
            console.log("Cleared existing auto-refresh interval.");
          }

          if (!tokenToUse) {
            console.log("No token available for fetching user data. Not starting auto-refresh.");
            set({ isAuthLoading: false, isAuthenticated: false, user: emptyUser, token: "" });
            return false;
          }

          set({ isAuthLoading: true, error: null });
          let success = false;

          try {
            const response = await AppAxios.get(
              "user",
              getAuthAxiosConfig(tokenToUse)
            );

            // Assuming your '/user' endpoint returns both user data and potentially a new token
            const { user, token: newToken } = response.data;

            set({
              isAuthLoading: false,
              isAuthenticated: true,
              user,
              token: newToken || tokenToUse, // Use the new token if provided, otherwise keep the one used for the request
              error: null,
            });
            toast.success("User data refreshed.");
            console.log("User data refreshed successfully.");
            success = true;

          } catch (error: unknown) {
            let errorMessage = "Failed to fetch user data.";
            if (axios.isAxiosError(error)) {
              if (error.code === "ERR_NETWORK") {
                errorMessage = "Network Error: Please check your internet connection.";
                console.error(errorMessage, error);
                toast.error(errorMessage);
                // For network errors, we might not clear auth, assuming connection could restore
                set({ isAuthLoading: false, error: errorMessage });
              } else if (error.response) {
                errorMessage = error.response.data?.message || `Fetch user failed: Status ${error.response.status}`;
                console.error("Fetch user failed:", errorMessage, error.response);
                toast.error(errorMessage);
                if (error.response.status === 401 || error.response.status === 403) {
                  // Token expired or invalid, force logout
                  console.log("Session expired or invalid. Clearing authentication.");
                  clearAuth(); // This will also stop the interval
                  toast.error("Session expired or invalid. Please log in again.");
                }
              } else if (error.request) {
                errorMessage = "No response from server when fetching user. It might be down or unreachable.";
                console.error(errorMessage, error.request);
                toast.error(errorMessage);
                set({ isAuthLoading: false, error: errorMessage });
              } else {
                errorMessage = `An unexpected error occurred while fetching user: ${error.message}`;
                console.error(errorMessage, error);
                toast.error(errorMessage);
                set({ isAuthLoading: false, error: errorMessage });
              }
            } else {
              console.error("An unknown error occurred during fetchUser:", error);
              toast.error("An unknown error occurred while fetching user.");
              set({ isAuthLoading: false, error: errorMessage });
            }
            success = false;
          }

          // If the fetch was successful, schedule the next auto-refresh
          if (success) {
            const intervalDuration = 55 * 60 * 1000; // 55 minutes in milliseconds
            const newIntervalID = setInterval(async () => {
              const { isAuthenticated, token } = get();
              if (isAuthenticated && token) {
                console.log("Attempting to auto-refresh user data...");
                // Call this same function for the refresh
                const refreshSuccess = await get().initializeAndFetchUser(token);
                if (!refreshSuccess) {
                  // If a refresh fetch fails (e.g., token expired), the nested call
                  // to initializeAndFetchUser would have handled clearing the state
                  // and stopping the interval. We just log here.
                  console.warn("Auto-refresh stopped due to authentication failure during refresh.");
                }
              } else {
                // If somehow state becomes unauthenticated, stop the interval
                clearInterval(newIntervalID);
                set({ intervalID: undefined });
                console.warn("Auto-refresh stopped: not authenticated or no token.");
              }
            }, intervalDuration);
            set({ intervalID: newIntervalID });
            toast.info("Auto-refresh of user data scheduled.");
            console.log(`Auto-refresh scheduled every ${intervalDuration / 60000} minutes.`);
          } else {
              // If the initial fetch failed, ensure no interval is running
              if (get().intervalID) { // Double check in case it was set by something else
                  clearInterval(get().intervalID);
                  set({ intervalID: undefined });
              }
              // If it was a 401/403, clearAuth would have run, resetting everything
              // For other errors, ensure isAuthenticated is false
              if (!get().isAuthenticated) {
                  set({ isAuthenticated: false, user: emptyUser, token: "" });
              }
          }

          return success; // Return success status
        },

        clearAuth: () => {
          // Clear interval if exists
          if (get().intervalID) {
            clearInterval(get().intervalID);
            set({ intervalID: undefined });
          }
          set({
            user: emptyUser,
            isAuthenticated: false,
            isAuthLoading: false,
            error: null,
            token: "",
            intervalID: undefined, // Ensure it's explicitly cleared
          });
          sessionStorage.removeItem("auth-storage"); // Clear persisted state from session storage
          toast.info("Authentication state cleared.");
          console.log("Authentication state and session storage cleared.");
        },
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
          token: state.token,
        }),
        storage: createJSONStorage(() => sessionStorage),
        onRehydrateStorage: () => {
          return (storedState, error) => {
            if (error) {
              console.error("An error occurred during hydration", error);
              useAuthStore.setState({
                isAuthenticated: false,
                isAuthLoading: false,
                user: emptyUser,
                token: "",
                error: "Authentication data corrupted, please log in again.",
                intervalID: undefined,
              });
              toast.error("Authentication data corrupted, please log in again.");
            }
            //  else if (storedState) {
            //   // After initial rehydration, if a token exists, set isAuthLoading true
            //   // for the `initializeAndFetchUser` call that should happen on app mount.
            //   if (storedState.token) {
            //     useAuthStore.setState({ isAuthLoading: true });
            //   } else {
            //     useAuthStore.setState({ isAuthLoading: false, isAuthenticated: false });
            //   }
            // }
          };
        },
      }
    )
  )
);

// How to use this in your root component (e.g., App.tsx):
/*
import React, { useEffect } from 'react';
import { useAuthStore } from './features/auth/authStore.ts';

function App() {
    const initializeAndFetchUser = useAuthStore((state) => state.initializeAndFetchUser);
    const { isAuthLoading } = useAuthStore();

    useEffect(() => {
        // This will be called once on app mount to check persisted token
        // and start the auto-refresh if successful.
        initializeAndFetchUser();
    }, [initializeAndFetchUser]);

    if (isAuthLoading) {
        return <div>Loading authentication...</div>; // Or a nice spinner
    }

    return (
        // Your application's main structure
        // <Router>
        //   {isAuthenticated ? <AuthenticatedRoutes /> : <PublicRoutes />}
        // </Router>
    );
}
*/