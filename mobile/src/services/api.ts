import axios from "axios";

const api = axios.create({
  // baseURL: "https://nice-app-server-2.herokuapp.com",
  baseURL: "http://192.168.0.8:3333",

});

export default api;