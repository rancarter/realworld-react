import React from "react";
import { AxiosError } from "axios";

type FetchFn<T> = (...params: any[]) => Promise<T>;

type UseFetchResult<T> = [
  (params?: any) => any,
  {
    isFetching: boolean;
    data: T | null;
    error: AxiosError | null;
  }
];

function useFetch<T>(fetchFn: FetchFn<T>): UseFetchResult<T> {
  const [isFetching, setIsFetching] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);

  async function runFetchFn(...params: any) {
    setIsFetching(true);

    try {
      const response = await fetchFn(...params);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  }

  return [runFetchFn, { isFetching, data, error }];
}

export default useFetch;
