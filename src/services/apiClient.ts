import axios, { AxiosError } from "axios";

import { API_URL } from "../constants";
import * as tokenService from './tokenService';
import * as subscriber from './subscriber';

enum HTTP_STATUSES {
  UNAUTHORIZED = 401
}

const axiosInstance = axios.create({
  baseURL: API_URL
});

axiosInstance.interceptors.request.use((config) => {
    const token = tokenService.getToken();

    if (token) {
        config.headers.authorization = `Token ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
  response => response.data,
  (error: AxiosError) => {
    if (
      error.response &&
      error.response.status === HTTP_STATUSES.UNAUTHORIZED
    ) {
      subscriber.publish('unauthorized');
    }

    return Promise.reject(error.response && error.response.data);
  }
);

export default axiosInstance;
