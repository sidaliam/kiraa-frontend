import axios from "axios"
export const axiosinstance=axios.create({
    baseURL : "https://kiraa-backend.vercel.app/api"
})