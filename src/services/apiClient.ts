import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../constants';
import { Article } from '../types';

enum HTTP_STATUSES {
  UNAUTHORIZED = 401,
}

export type ArticlesResponse = {
  articles: Article[],
}

type ApiClient = {
  articles: {
    list: (params?: any) => Promise<AxiosResponse<ArticlesResponse>>,
  }
}

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.response.use(response => response, (error: any) => {
  if (error.response.status === HTTP_STATUSES.UNAUTHORIZED) {
    console.warn('Not authorized');
  }
});

const apiClient: ApiClient = {
  articles: {
    list({ limit = 10, offset = 0 }) {
      return axiosInstance.get(`/articles?limit=${limit}&offset=${offset}`);
    }
  }
};

export default apiClient;
