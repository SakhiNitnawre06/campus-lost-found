import axios from "axios";

const api = axios.create({
  baseURL: "https://campus-lost-found-frontend-tle2.onrender.com"
});

export default api;