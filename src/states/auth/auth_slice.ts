// // src/features/auth/authSlice.ts
// // import {createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit';
// import AppAxios, {getAxiosHeaderJson} from "../../utils/app_axios.ts";
// import {
//     type AuthState,
//     emptyUser,
//     type LoginCredentials,
//     type User
// } from "../../models/users/users_models.ts";
// // import {RootState} from '../store.ts'; // We'll define this later
//
//
// // --- Initial State ---
// const initialState: AuthState = {
//     user: emptyUser,
//     isAuthenticated: false,
//     isLoading: true, // Set to true initially for session check on app load
//     error: null,
//     token: ""
// };
//
// // --- Async Thunks ---
//
// // Helper thunk to fetch CSRF cookie (primarily for SPA login/init)
// // export const fetchCsrfCookie = createAsyncThunk(
// //     'auth/fetchCsrfCookie',
// //     async (_, {rejectWithValue}) => {
// //         try {
// //             await AppAxios.get('sanctum/csrf-cookie', {
// //                 headers: {
// //                     'X-Requested-With': 'XMLHttpRequest',
// //                     'Accept': 'application/json',
// //                     'Content-Type': 'application/json',
// //                     // 'Origin': document.URL
// //                 },
// //                 withCredentials: true,
// //             })
// //             return true;
// //         } catch (error: any) {
// //             console.error("Failed to fetch CSRF cookie:", error.response?.data || error.message);
// //             // This error typically doesn't stop the app, but indicates a setup issue or CORS problem.
// //             // rejectWithValue is useful if you want to handle this error in the UI.
// //             return rejectWithValue(error.response?.data?.message || 'Failed to fetch CSRF cookie');
// //         } finally {
// //             console.log(`final response cookie: ${document.cookie.split(';').find((row) => row.startsWith('XSRF-TOKEN='))}`)
// //         }
// //     }
// // );
//
//
// interface payloadType {
//     user: User,
//     token: string
// }
//
// export const login = createAsyncThunk(
//     'auth/login',
//     async (credentials: LoginCredentials, {rejectWithValue}) => {
//         try {
//             // Always attempt to get CSRF cookie first, especially important for SPA
//             // await dispatch(fetchCsrfCookie());
//
//             const response = await AppAxios.post('login', {
//                 username: credentials.username,
//                 password: credentials.password,
//             }, getAxiosHeaderJson(false));
//             // const apiData = response.data.data
//             localStorage.setItem("data", JSON.stringify(response.data.data))
//             const data: payloadType = {
//                 user: response.data.data.user,
//                 token: response.data.data.token
//             }
//             return data
//         } catch (error: any) {
//             // console.log(`cookie: ${document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='))?.split('=')[1]}`)
//             console.error("Login failed:", error.response?.data || error.message);
//             return rejectWithValue(error.message);
//         }
//     }
// );
//
// export const logout = createAsyncThunk(
//     'auth/logout',
//     async (_, {rejectWithValue}) => {
//         try {
//             // Attempt SPA logout (web route) - session invalidation
//             try {
//                 await AppAxios.post('logout', {}, getAxiosHeaderJson(false, ""));
//             } catch (err) {
//                 console.warn("SPA logout failed or not applicable:", err);
//             }
//
//             return true; // Indicate success
//         } catch (error: any) {
//             console.error("Logout failed:", error.response?.data || error.message);
//             return rejectWithValue(error.response?.data?.message || 'Logout failed');
//         }
//     }
// );
//
//
// export const fetchUser = createAsyncThunk(
//     'auth/fetchUser',
//     async (_, {rejectWithValue}) => {
//         try {
//             // Always attempt to get CSRF cookie for SPA session check on refresh
//             // await dispatch(fetchCsrfCookie());
//
//             const response = await AppAxios.get('user');
//             return response.data;
//         } catch (error: any) {
//             console.error("Fetch user failed:", error.response?.data || error.message);
//             // If authentication fails (e.g., 401 Unauthorized), clear token and reset state
//             if (error.response?.status === 401) {
//                 // You could dispatch clearAuth directly here, or let the reducer handle it.
//                 // It's usually cleaner to let the reducer handle state changes based on rejected thunks.
//                 return rejectWithValue('Unauthorized or session expired');
//             }
//             return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
//         }
//     }
// );
//
// // --- Auth Slice ---
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         // Reducer to manually clear auth state, e.g., if token is explicitly invalid
//         clearAuth: (state) => {
//             state.user = emptyUser;
//             state.isAuthenticated = false;
//             state.isLoading = false;
//             state.error = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             // --- Login ---
//             .addCase(login.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(login.fulfilled, (state, action: PayloadAction<payloadType>) => {
//                 state.isLoading = false;
//                 state.isAuthenticated = true;
//                 state.user = action.payload.user;
//                 state.error = null;
//                 state.token = action.payload.token;
//             })
//             .addCase(login.rejected, (state, action: PayloadAction<string | null>) => {
//                 state.isLoading = false;
//                 state.isAuthenticated = false; // <--- Set to false on login rejection
//                 state.user = emptyUser;       // <--- Reset user on login rejection
//                 state.error = action.payload || 'Login failed.';
//                 state.token = "";             // <--- Clear token on login rejection
//             })
//
//             // --- Logout ---
//             .addCase(logout.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(logout.fulfilled, (state) => {
//                 state.isLoading = false;
//                 state.isAuthenticated = false;
//                 state.user = emptyUser;
//                 state.error = null;
//                 state.token = "";
//             })
//             .addCase(logout.rejected, (state, action: PayloadAction<string | null>) => {
//                 state.isLoading = false;
//                 // Even if logout fails on server, client state should be cleared to reflect intent
//                 state.isAuthenticated = false; // <--- Explicitly set to false
//                 state.user = emptyUser;       // <--- Reset user
//                 state.token = "";             // <--- Clear token
//                 state.error = action.payload || 'Logout failed (client state cleared).';
//             })
//
//             // --- Fetch User (Initial Load/Refresh Check) ---
//             .addCase(fetchUser.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(fetchUser.fulfilled, (state, action: PayloadAction<payloadType>) => {
//                 state.isLoading = false;
//                 state.isAuthenticated = true;
//                 state.user = action.payload.user;
//                 state.error = null;
//                 state.token = action.payload.token;
//             })
//             .addCase(fetchUser.rejected, (state, action: PayloadAction<string | null>) => {
//                 state.isLoading = false;
//                 state.isAuthenticated = false; // <--- ADD THIS LINE
//                 state.user = emptyUser;       // <--- ADD THIS LINE
//                 state.error = action.payload || 'Failed to fetch user.';
//                 state.token = "";             // <--- ADD THIS LINE
//             });
//     },
// });
//
// export const {clearAuth} = authSlice.actions;
// export default authSlice.reducer;