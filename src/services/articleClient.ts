import apiClient from "./apiClient";
import { Article } from "../interfaces";

export type ArticleResponse = {
  article: Article;
};

export type ArticlesResponse = {
  articles: Article[];
  articlesCount: number;
};

export type TagsResponse = {
  tags: string[];
};

interface GetArticlesParams {
  limit: number;
  offset: number;
  tag: string | null;
}

interface GetFeedParams {
  limit: number;
  offset: number;
}

export function getArticleBySlug(slug: string): Promise<ArticleResponse> {
  return apiClient.get(`/articles/${slug}`);
}

export function getArticles({
  limit,
  offset,
  tag
}: GetArticlesParams): Promise<ArticlesResponse> {
  const params = getParamsString({ limit, offset, tag });
  return apiClient.get(`/articles?${params}`);
}

export function getFeed({
  limit,
  offset
}: GetFeedParams): Promise<ArticlesResponse> {
  const params = getParamsString({ limit, offset });
  return apiClient.get(`/articles/feed?${params}`);
}

export function getTags(): Promise<TagsResponse> {
  return apiClient.get("/tags");
}

function getParamsString(params: Object): string {
  return Object.entries(params)
    .filter(param => param[1])
    .map(param => param.join("="))
    .join("&");
}
