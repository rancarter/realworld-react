import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import apiClient, { ArticleResponse } from '../../services/apiClient';
import useFetch from '../../hooks/useFetch';
import ArticleMeta from './ArticleMeta';

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const Article: React.FC<Props> = ({ match }) => {
  const { isFetching, data } = useFetch<ArticleResponse>(
    apiClient.articles.get,
    match.params.slug,
    [match.params.slug],
  );

  if (!data || isFetching) {
    return null;
  }

  const { article } = data;
  const paragraphs = article.body.split(/\s{2,}/g);
  
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article} />
        </div>
      </div>
      

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta article={article} />
        </div>
      </div>
    </div>
  );
};

export default Article;