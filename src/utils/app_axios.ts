import axios from "axios"

const AppAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

console.log(`api url: ${import.meta.env.VITE_API_URL}`)

export const unauthAxiosHeaderJson = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
}

export default AppAxios