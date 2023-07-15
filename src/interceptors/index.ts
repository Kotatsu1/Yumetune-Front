import axios from "axios";
import { useAppDispatch } from "@/app/hooks";
import { clearAuthenticated } from "@/features/Auth/AuthSlice";


const useAxios = () => {
  
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

const dispatch = useAppDispatch();

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axios.post(
          `${import.meta.env.VITE_APP_API}/auth/refresh`,
          {},
          {
            withCredentials: true,
          },
        );

        return api(originalRequest);
      } catch (refreshError) {
        dispatch(clearAuthenticated());
      }
    }

    return Promise.reject(error);
  },
);
return api;

}


export default useAxios;

