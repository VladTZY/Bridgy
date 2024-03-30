import axios from "axios";
import { logout } from "../store/authSlice";
import { store } from "../store/store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // if we have auth error
    if (error.response.status == 401) {
      // try to refresh the token
      await axios
        .post(
          `${import.meta.env.VITE_API_URL}/user/refresh`,
          {},
          { withCredentials: true }
        )
        .then((res) => {
          originalRequest._retry = true;
        })
        .catch(async (error) => {
          // if refresh token has error, we logout
          await axios.post(
            `${import.meta.env.VITE_API_URL}/user/logout`,
            {},
            { withCredentials: true }
          );
          store.dispatch(logout());
        });
      if (originalRequest._retry) {
        return axiosInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
