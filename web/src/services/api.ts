import axios from 'axios';

const api = axios.create({
    baseURL: "https://nice-app-server-2.herokuapp.com",
});

export default api;