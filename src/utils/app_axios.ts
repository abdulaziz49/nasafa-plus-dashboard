// import axios, { type AxiosRequestConfig } from "axios";
// import { useAuthStore } from "../states/stores/auth_store";

// const AppAxios = axios.create({
//     baseURL: `https://${location.hostname}${import.meta.env.VITE_API_URL}`,
// });

// export const unauthAxiosHeaderJson = {
//     headers: {
//         "X-Requested-With": "XMLHttpRequest",
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
//     withCredentials: true,
// };

// interface AxionHeader extends AxiosRequestConfig {
//     headers: object;
//     withCredentials: boolean;
// }

// export const getAuthAxiosConfig = (token?: string): AxionHeader => {
//     const data: AxionHeader = {
//         headers: {
//             "X-Requested-With": "XMLHttpRequest",
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         withCredentials: true,
//     };

//     data.headers = token
//         ? { ...data.headers, Authorization: `Bearer ${token}` }
//         : data.headers;
//     return data;
// };

// // --- Response Interceptor (Highly Recommended for centralized error handling) ---
// AppAxios.interceptors.response.use(
//   response => {
//     // console.log('Response received:', response);
//     // You could hide a loading spinner here
//     return response;
//   },
//   error => {
//     // This is where you'll handle network errors and API errors
//     // console.error('Axios error:', error);

//     if (error.code === 'ERR_NETWORK') {
//       // This is the most common code for network-related issues in Axios
//       // It can cover ERR_INTERNET_DISCONNECTED, ERR_CONNECTION_REFUSED, etc.
//       console.error("Network Error: Please check your internet connection.");
//       // You might want to display a user-friendly message, e.g., using a toast library
//       // toast.error("No internet connection. Please try again.");
//     } else if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//     //   console.error("Server responded w.ith error:", error.response.status, error.response.data);
//       if (error.response.status === 401) {
//         // Handle unauthorized access, e.g., redirect to login
//         const {clearAuth} = useAuthStore()
//         clearAuth()
//       } else if (error.response.status === 404) {
//         // Handle not found
//         console.log("Resource not found.");
//       } else if (error.response.status >= 500) {
//         // Handle server errors
//         console.log("Server error. Please try again later.");
//       }
//       // You can also display a specific message from the server error response:
//       // toast.error(error.response.data.message || "An API error occurred.");
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an http.ClientRequest in node.js
//     //   console.error("No response received from server:", error.request);
//       // This could also be due to a timeout
//       if (error.code === 'ECONNABORTED') {
//           console.error("Request timed out.");
//           // toast.error("Request timed out. Please try again.");
//       } else {
//           console.error("Unknown network issue or request not sent properly.");
//       }
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error('Error setting up request:', error.message);
//       // toast.error("An unexpected error occurred.");
//     }
//     return Promise.reject(error); // Re-throw the error so it can be caught downstream
//   }
// );

// export default AppAxios;

import axios, { type AxiosRequestConfig, AxiosError } from "axios";
// Import the store directly, not the hook
import { useAuthStore } from "../states/stores/auth_store";
import { toast } from "react-toastify"; // Make sure react-toastify is imported

const AppAxios = axios.create({
  baseURL: `https://${location.hostname}${import.meta.env.VITE_API_URL}`,
  timeout: 15_000, // Good practice to set a timeout (e.g., 15 seconds)
});

export const unauthAxiosHeaderJson = {
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  headers?: {
    [key: string]: string;
    // Authorization: string;
  };
  withCredentials?: boolean;
}

export const getAuthAxiosConfig = (token?: string): CustomAxiosRequestConfig => {
  const config: CustomAxiosRequestConfig = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  if (token) {
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
  }
  return config;
};

// --- Response Interceptor for Centralized Error Handling ---
AppAxios.interceptors.response.use(
  (response) => {
    // console.log('Response received:', response);
    return response;
  },
  (error: AxiosError) => { // Type the error as AxiosError
    // Access the store's action directly from the store instance
    // This is safe because useAuthStore.getState() is a plain JS function
    const { clearAuth } = useAuthStore.getState();

    let errorMessage = "An unexpected error occurred.";
    let shouldClearAuth = false; // Flag to decide if auth should be cleared

    if (error.code === "ERR_NETWORK") {
      // This covers 'net::ERR_INTERNET_DISCONNECTED', 'ERR_CONNECTION_REFUSED', etc.
      errorMessage = "Network Error: Please check your internet connection and try again.";
      console.error("Axios Network Error:", error);
      toast.error(errorMessage);
      toast.error(error.status);
    } else if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = error.response;
      console.error(`Axios Server Error - Status: ${status}`, data);

      switch (status) {
        case 400: // Bad Request
          errorMessage = data?.message || "Bad Request: The request was malformed or invalid.";
          break;
        case 401: // Unauthorized
          errorMessage = "Unauthorized: Your session has expired or is invalid. Please log in again.";
          shouldClearAuth = true; // Mark for clearing auth
          break;
        case 403: // Forbidden
          errorMessage = data?.message || "Forbidden: You do not have permission to access this resource.";
          shouldClearAuth = true; // Mark for clearing auth (if it means token is valid but no role)
          break;
        case 404: // Not Found
          errorMessage = data?.message || "Not Found: The requested resource could not be found.";
          break;
        case 405: // Method Not Allowed
          errorMessage = data?.message || "Method Not Allowed: The HTTP method used is not supported for this resource.";
          break;
        case 408: // Request Timeout
          errorMessage = data?.message || "Request Timeout: The server did not respond in time.";
          break;
        case 422: // Unprocessable Entity (often used for validation errors)
          errorMessage = data?.message || "Validation Error: Please check your input.";
          // You might want to display specific validation errors from data.errors
          break;
        case 500: // Internal Server Error
          errorMessage = data?.message || "Server Error: Something went wrong on the server. Please try again later.";
          break;
        case 502: // Bad Gateway
          errorMessage = data?.message || "Bad Gateway: The server received an invalid response from an upstream server.";
          break;
        case 503: // Service Unavailable
          errorMessage = data?.message || "Service Unavailable: The server is currently unable to handle the request.";
          break;
        case 504: // Gateway Timeout
          errorMessage = data?.message || "Gateway Timeout: The server did not receive a timely response from an upstream server.";
          break;
        default:
          errorMessage = data?.message || `An error occurred with status ${status}.`;
          break;
      }
      toast.error(errorMessage);

      if (shouldClearAuth) {
        // Clear auth state immediately for 401/403
        clearAuth();
      }

    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // This often indicates a timeout or a server that's truly unreachable
      errorMessage = "No response from server. It might be down or unreachable.";
      console.error("Axios No Response Error:", error.request);
      toast.error(errorMessage);

    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = `Error setting up request: ${error.message}`;
      console.error("Axios Request Setup Error:", error.message);
      toast.error(errorMessage);
    }

    // Re-throw the error so it can be caught downstream if needed
    return Promise.reject(error);
  }
);

export default AppAxios;

// FIXME - correct error handling and make the AppAxios instance handles general errors like 401, 403, 500 and ...etc.