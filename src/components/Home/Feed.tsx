import React from "react";

import { getFeed, ArticlesResponse } from "../../services/articleClient";
import useFetch from "../../hooks/useFetch";
import ArticleItem from "./ArticleItem";
import Pagination from "./Pagination";

const limit = 10;

const Feed: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [runGetFeed, { isFetching, data }] = useFetch<ArticlesResponse>(
    getFeed
  );

  React.useEffect(() => {
    runGetFeed({ offset: (page - 1) * limit });
  }, [page]);

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderArticles = () => {
    if (!data) {
      return null;
    }

    if (!data.articles.length) {
      return "No articles are here... yet.";
    }

    return data.articles.map(article => (
      <ArticleItem key={article.slug} article={article} />
    ));
  };

  return (
    <>
      {renderArticles()}

      {isFetching && <div>Loading articles...</div>}

      {data && (
        <Pagination
          articlesCount={data.articlesCount}
          currentPage={page}
          onPageClick={handlePageClick}
          limit={limit}
        />
      )}
    </>
  );
};

export default Feed;
