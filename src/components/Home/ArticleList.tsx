import React from 'react';
import { AxiosResponse } from 'axios';
import classNames from 'classnames';

import apiClient, { ArticlesResponse } from '../../services/apiClient';
import useFetch from '../../hooks/useFetch';
import Article from './Article';

type PaginationProps = {
  articlesCount: number,
  currentPage: number,
  onPageClick: (page: number) => void,
}

type ArticleListProps = {
  tag: string | null,
}

const limit = 10;

const Pagination: React.FC<PaginationProps> = ({
  articlesCount,
  currentPage,
  onPageClick,
}) => {
  const pagesCount = articlesCount / limit;
  const pages = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(
      <li
        key={i}
        className={classNames('page-item', { 
          active: i === currentPage,
        })}
      >
        <a
          href=""
          className="page-link"
          onClick={(event) => {
            event.preventDefault();
            onPageClick(i)
          }}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ul className="pagination">
        {pages}
      </ul>
    </nav>
  );
};

const ArticleList: React.FC<ArticleListProps> = ({ tag }) => {
  const [page, setPage] = React.useState(1);
  const { isFetching, data } = useFetch<ArticlesResponse>(
    apiClient.articles.list, 
    { tag, offset: (page - 1) * limit }, 
    [tag, page],
  );

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  }

  return (
    <>
      {data && data.articles.map(article => (
        <Article key={article.slug} article={article} />
      ))}

      {isFetching && <div>Loading articles...</div>}

      {data && (
        <Pagination
          articlesCount={data.articlesCount}
          currentPage={page}
          onPageClick={handlePageClick}
        />
      )}
    </>
  );
};

export default ArticleList;