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
  (error) => {
    // if we have auth error
    if (error.response.status == 401) {
      // try to refresh the token
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/user/refresh`,
          {},
          { withCredentials: true }
        )
        .then((res) => console.log(res))
        .catch(async (error) => {
          await axios.post(
            `${import.meta.env.VITE_API_URL}/user/logout`,
            {},
            { withCredentials: true }
          );
          store.dispatch(logout());
          console.log("sugi pula");
        });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
