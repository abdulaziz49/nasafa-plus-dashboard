import axios from "axios"

const AppAxios = axios.create({
    baseURL: import.meta.env.API_URL
})

export default AppAxios