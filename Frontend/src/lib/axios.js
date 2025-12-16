import axios from "axios";

const BASE_URL = "http://localhost:5000" 

export const axiosInstance = axios.create({
  baseURL:import.meta.env.VITE_BASE_URL || BASE_URL,
  withCredentials: true, // send cookies with the request
});