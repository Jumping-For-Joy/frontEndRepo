import axios from 'axios';

const jumpingForJoyAPI = axios.create({
    baseURL: 'https://jumping-for-joy-api.herokuapp.com'
})

jumpingForJoyAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem('token')
    console.log("set token header:", token)
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})

export default jumpingForJoyAPI;