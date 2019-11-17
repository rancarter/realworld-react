import axios, { AxiosResponse, AxiosError } from "axios";

import { API_URL } from "../constants";

enum HTTP_STATUSES {
  UNAUTHORIZED = 401
}

const axiosInstance = axios.create({
  baseURL: API_URL
});

axiosInstance.interceptors.response.use(
  response => response.data,
  (error: AxiosError) => {
    if (
      error.response &&
      error.response.status === HTTP_STATUSES.UNAUTHORIZED
    ) {
      console.warn("Not authorized");
    }

    return Promise.reject(error.response && error.response.data);
  }
);

export default axiosInstance;
