import axios from 'axios';

const jumpingForJoyAPI = axios.create({
    baseURL: 'https://jumping-for-joy-api.herokuapp.com'
})

export default jumpingForJoyAPI;