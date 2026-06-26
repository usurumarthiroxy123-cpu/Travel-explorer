import axios from "axios";

const api = axios.create({
 baseURL: "https://backend-ivle.onrender.com"
});

export default api;
