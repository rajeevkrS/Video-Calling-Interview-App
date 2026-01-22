import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_API_URL // Dev mode
    : "/api", // Production Mode
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single request
});

export default axiosInstance;
