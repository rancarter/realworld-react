import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { getArticleBySlug } from "../../services/articleClient";
import * as Interfaces from "../../interfaces";
import ArticleMeta from "./ArticleMeta";

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

function Article({ match }: Props) {
  const [article, setArticle] = React.useState<Interfaces.Article>();

  React.useEffect(() => {
    getArticleBySlug(match.params.slug).then(setArticle);
  }, [match.params.slug]);

  if (!article) {
    return null;
  }

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
}

export default Article;
