import React from "react";

import { getFeed, ArticlesResponse } from "../../services/articleClient";
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
    getFeed
  );

  React.useEffect(() => {
    runGetArticles({ tag, offset: (page - 1) * limit });
  }, [tag, page]);

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <>
      {data &&
        data.articles.map(article => (
          <ArticleItem key={article.slug} article={article} />
        ))}

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

export default ArticleList;
