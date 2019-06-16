import React from 'react';
import { AxiosResponse } from 'axios';

import apiClient, { ArticlesResponse } from '../../services/apiClient';
import useFetch from '../../hooks/useFetch';
import Article from './Article';

type Props = {
  tab: string | null,
}

const Feed: React.FC<Props> = ({ tab }) => {
  const [page, setPage] = React.useState(1);
  const { isFetching, data, error }= useFetch<ArticlesResponse>(
    apiClient.articles.list, {}, [tab, page]
  );

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {data && data.articles.map(article => (
        <Article />
      ))}
    </>
  );
};

export default Feed;