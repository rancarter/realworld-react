import React from 'react';

import { Article } from '../../types';

type Props = {
  article: Article,
}

const ArticleBanner: React.FC<Props> = ({ article }) => (
  <div className="banner">
    <div className="container">

      <h1>{article.title}</h1>

      <div className="article-meta">
        <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
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
        &nbsp;&nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i>
          &nbsp;
          Favorite Post <span className="counter">{article.favoritesCount}</span>
        </button>
      </div>

    </div>
  </div>
);

export default ArticleBanner;
