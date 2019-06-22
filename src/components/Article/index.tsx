import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import apiClient, { ArticleResponse } from '../../services/apiClient';
import useFetch from '../../hooks/useFetch';
import ArticleBanner from './ArticleBanner';

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {
 
}

const Article: React.FC<Props> = ({ match }) => {
  const { isFetching, data } = useFetch<ArticleResponse>(
    apiClient.articles.get,
    match.params.slug,
    [match.params.slug],
  );

  if (!data || isFetching) {
    return <div>Article is loading...</div>;
  }

  const { article } = data;
  const paragraphs = article.body.split(/\s{2,}/g);
  console.log(article);
  return (
    <div className="article-page">
      <ArticleBanner article={article} />

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href="" className="author">{article.author.username}</a>
              <span className="date">
                {new Date(article.createdAt).toDateString()}
              </span>
            </div>

            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp;
              {article.author.username}
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp;
              Favorite Post <span className="counter">{article.favoritesCount}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Article;