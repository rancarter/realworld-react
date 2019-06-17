import React from 'react';
import { AxiosResponse } from 'axios';

import apiClient, { ArticlesResponse } from '../../services/apiClient';
import useFetch from '../../hooks/useFetch';
import Article from './Article';

type Props = {
  tag: string | null,
}

const limit = 10;

const ArticleList: React.FC<Props> = ({ tag }) => {
  const [page, setPage] = React.useState(1);
  const { isFetching, data, error } = useFetch<ArticlesResponse>(
    apiClient.articles.list, {
      tag,
      offset: (page - 1) * limit,
    }, 
    [tag, page],
  );

  if (isFetching) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {data && data.articles.map(article => (
        <Article key={article.slug} article={article} />
      ))}
    </>
  );
};

export default ArticleList;