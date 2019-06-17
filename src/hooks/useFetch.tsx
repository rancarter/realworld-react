import React from 'react';
import { AxiosError, AxiosResponse } from 'axios';

function useFetch<T>(
  func: (params: any) => Promise<AxiosResponse<any>>,
  params: Object = {},
  dependencies: any[] = [],
) {
  const [isFetching, setIsFetching] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<AxiosError | null>(null);

  React.useEffect(() => {
    setIsFetching(true);

    func(params)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, dependencies);

  return { isFetching, data, error };
}

export default useFetch;
