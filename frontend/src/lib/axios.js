import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single request
});

export default axiosInstance;
