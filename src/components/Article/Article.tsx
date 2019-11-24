import React from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  getArticleBySlug,
  ArticleResponse
} from "../../services/articleClient";
import ArticleMeta from "./ArticleMeta";

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

function Article({ match }: Props) {
  const [articleResponse, setArticleResponse] = React.useState<ArticleResponse | null>(null);

  React.useEffect(() => {
    getArticleBySlug(match.params.slug).then(response => {
        setArticleResponse(response);
    });
  }, [match.params.slug]);

  if (!articleResponse) {
    return null;
  }

  const { article } = articleResponse;
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
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
