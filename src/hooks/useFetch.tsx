import React from "react";
import { AxiosError } from "axios";

type UseFetchFunc<T> = (...params: any) => Promise<T>;

type UseFetchResult<T> = [
  (params?: any) => any,
  {
    isFetching: boolean;
    data: T | null;
    error: AxiosError | null;
  }
];

function useFetch<T>(func: UseFetchFunc<T>): UseFetchResult<T> {
  const [isFetching, setIsFetching] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);

  async function fetchFunction(...params: any) {
    setIsFetching(true);

    try {
      const response = await func(...params);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  }

  return [fetchFunction, { isFetching, data, error }];
}

export default useFetch;
