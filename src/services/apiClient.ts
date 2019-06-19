import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../constants';
import { Article } from '../types';

enum HTTP_STATUSES {
  UNAUTHORIZED = 401,
}

export type ArticleResponse = {
  article: Article,
}

export type ArticlesResponse = {
  articles: Article[],
  articlesCount: number,
}

export type TagsResponse = {
  tags: string[],
}

type ApiClient = {
  articles: {
    get: (slug: string) => Promise<AxiosResponse<ArticleResponse>>,
    list: (params: {
      limit: number,
      offset: number,
      tag?: string,
    }) => Promise<AxiosResponse<ArticlesResponse>>,
  }
  tags: {
    list: () => Promise<AxiosResponse<TagsResponse>>,
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
    get(slug) {
      return axiosInstance.get(`/articles/${slug}`);
    },
    list({ limit = 10, offset = 0, tag }) {
      const params = getParamsString({ limit, offset, tag });
      return axiosInstance.get(`/articles?${params}`);
    },
  },
  tags: {
    list() {
      return axiosInstance.get('/tags');
    },
  },
};

export default apiClient;

function getParamsString(params: Object): string {
  return Object
    .entries(params)
    .filter(param => param[1])
    .map(param => param.join('='))
    .join('&');
}
