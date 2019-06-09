import React from 'react';

import apiClient, { ArticlesResponse } from '../../services/apiClient';
import useFetch from '../../hooks/useFetch';
import { Article } from '../../types';

const Articles: React.FC = () => {
  const { isFetching, data, error } = useFetch<ArticlesResponse>(apiClient.articles.list);

  return (
    <div>
      Articles
      {isFetching && 'isFetching'}
      {data && (
        <ul>
          {data.articles.map(article => <li key={article.title}>{article.title}</li>)}
        </ul>
      )}
    </div>
  );
}

export default Articles;
