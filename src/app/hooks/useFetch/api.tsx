import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

export default api