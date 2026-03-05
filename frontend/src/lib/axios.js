import axios from "axios";

const api = axios.create({
  baseURL: "https://campus-lost-found-backend-tvn7.onrender.com/"
});

export default api;