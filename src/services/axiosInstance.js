import axios from "axios";
import { store } from "../store/store";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 10000,
});

// Debug logging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Axios Request:", {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`,
      headers: config.headers,
      data:
        config.method === "post"
          ? {
              // Log POST data but hide sensitive info
              hasData: !!config.data,
              dataKeys: config.data ? Object.keys(config.data) : [],
              email: config.data?.email || "not provided",
            }
          : "No POST data",
    });

    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Axios Request Error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(
      "Axios Response:",
      response.status,
      response.config.url,
      response.data,
    );
    return response;
  },
  (error) => {
    console.error(
      "Axios Response Error:",
      error.response?.status,
      error.config?.url,
      error.response?.data,
    );
    if (error.response?.status === 401) {
      // Token expired or invalid
      store.dispatch({ type: "auth/logout" });
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

/*
USAGE EXAMPLE:
Instead of: import axios from 'axios';
Use: import axiosInstance from '../services/axiosInstance';

Then make requests like:
const response = await axiosInstance.get('/users');
const response = await axiosInstance.post('/login', credentials);
*/
