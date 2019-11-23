import React from "react";

import { getArticles, ArticlesResponse } from "../../services/articleClient";
import useFetch from "../../hooks/useFetch";
import ArticleItem from "./ArticleItem";
import Pagination from "./Pagination";

interface Props {
  tag: string | null;
}

const limit = 10;

const ArticleList: React.FC<Props> = ({ tag }) => {
  const [page, setPage] = React.useState(1);
  const [runGetArticles, { isFetching, data }] = useFetch<ArticlesResponse>(
    getArticles,
  );
  const { articles = [], articlesCount = 0 } = data || {};

  React.useEffect(() => {
    runGetArticles({ tag, offset: (page - 1) * limit });
  }, [tag, page]);

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderArticles = () => {
    if (!articles.length) {
      return "No articles are here... yet.";
    }

    return articles.map(article => (
      <ArticleItem key={article.slug} article={article} />
    ));
  };

  return (
    <>
      {renderArticles()}

      {isFetching && <div>Loading articles...</div>}

      {data && (
        <Pagination
          articlesCount={articlesCount}
          currentPage={page}
          onPageClick={handlePageClick}
          limit={limit}
        />
      )}
    </>
  );
};

export default ArticleList;
