import apiClient from "./apiClient";
import { Article } from "../interfaces";

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

export function getArticleBySlug(slug: string): Promise<Article> {
  return apiClient.get(`/articles/${slug}`).then((response: any) => response.article);
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

export function getTags(): Promise<string[]> {
  return apiClient.get("/tags").then((response: any) => response.tags);
}

function getParamsString(params: Object): string {
  return Object.entries(params)
    .filter(param => param[1])
    .map(param => param.join("="))
    .join("&");
}
