import axios from "axios"
// import {object} from "yup";

const AppAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// console.log(`api url: ${import.meta.env.VITE_API_URL}`)

export const unauthAxiosHeaderJson = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    // withXSRFToken: true,
    // xsrfCookieName: "XSRF-TOKEN",
    // xsrfHeaderName: "X-XSRF-TOKEN",
}

interface AxionHeader {
    headers: object
    withCredentials: boolean
}

export const getAxiosHeaderJson = (withToken: boolean, token?: string): AxionHeader => {
    const data: AxionHeader = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }

    data.headers = withToken ? {...data.headers, "Authorization": `Bearer ${token}`} : data.headers
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