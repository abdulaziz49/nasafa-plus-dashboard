import axios, {type AxiosRequestConfig} from "axios"

const AppAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const unauthAxiosHeaderJson = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
}

interface AxionHeader extends AxiosRequestConfig {
    headers: object
    withCredentials: boolean
}

export const getAuthAxiosConfig = (token?: string): AxionHeader => {
    const data: AxionHeader = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }

    data.headers = token ? {...data.headers, "Authorization": `Bearer ${token}`} : data.headers
    return data
}

// Request interceptor to automatically attach X-XSRF-TOKEN
// AppAxios.interceptors.request.use(async (config) => {
//     // Only attempt to get CSRF cookie for specific methods
//     const methodsRequiringCsrf = ['post', 'put', 'patch', 'delete'];
//     if (methodsRequiringCsrf.includes(config.method as string)) {
//         // Check if XSRF-TOKEN cookie exists and is not empty
//         const csrfToken = document.cookie.split('; ')
//             .find(row => row.startsWith('XSRF-TOKEN='))
//             ?.split('=')[1];
//
//         // If no CSRF token or it's empty, request a new one
//         // if (!csrfToken) {
//         //     try {
//         //         await axios.get('https://nasafa-plus-api.test:8443/sanctum/csrf-cookie', { withCredentials: true });
//         //         csrfToken = document.cookie.split('; ')
//         //             .find(row => row.startsWith('XSRF-TOKEN='))
//         //             ?.split('=')[1];
//         //     } catch (error) {
//         //         console.error('Failed to retrieve CSRF cookie:', error);
//         //         // You might want to handle this error more gracefully, e.g., throw or redirect
//         //         return Promise.reject(new Error('CSRF token not available.'));
//         //     }
//         // }
//
//         if (csrfToken) {
//             config.headers['X-XSRF-TOKEN'] = decodeURIComponent(csrfToken);
//         }
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

export default AppAxios

// import axios, {type AxiosRequestConfig, type RawAxiosRequestHeaders} from "axios";
//
// // 1. Create an Axios instance with a base URL
// //    The baseURL is essential for relative API calls.
// const AppAxios = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     // withCredentials: true, // Generally, this should be set once for the instance if all requests need it.
// });
//
// // 2. Define a more robust header type for clarity and type safety
// interface CommonHeaders extends RawAxiosRequestHeaders {
//     'X-Requested-With': 'XMLHttpRequest';
//     'Accept': 'application/json';
//     'Content-Type': 'application/json';
//     'Authorization'?: string; // Make Authorization optional
//     // "Origin"?: string,
// }
//
// // 3. Define a type for AxiosRequestConfig that includes your custom headers
// interface CustomAxiosRequestConfig extends AxiosRequestConfig {
//     headers?: CommonHeaders;
// }
//
// // 4. Reusable headers for unauthenticated requests
// //    This is useful for endpoints that don't require an auth token.
// export const unauthAxiosHeaderJson: CustomAxiosRequestConfig = {
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     withCredentials: true,
// };
//
// /**
//  * Generates Axios request configuration with common headers,
//  * optionally including an Authorization token.
//  *
//  * @param token - The authentication token to be included in the Authorization header.
//  * @returns An AxiosRequestConfig object with the appropriate headers.
//  */
// export const getAuthAxiosConfig = (token?: string): CustomAxiosRequestConfig => {
//     const headers: CommonHeaders = {
//         'X-Requested-With': 'XMLHttpRequest',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     };
//
//     if (token) {
//         headers.Authorization = `Bearer ${token}`;
//     }
//
//     // headers.Origin = (document.URL as string).substring(0, document.URL.length - 1)
//
//     return {
//         headers: headers,
//         withCredentials: true,
//     };
// };
//
// // 5. No Request Interceptor for CSRF Token in this version.
// //    If your backend doesn't use CSRF tokens (e.g., if you're using JWT alone
// //    and not session-based authentication like Laravel Sanctum),
// //    then this interceptor is not needed.
//
// export default AppAxios;