import React from "react";
import classNames from "classnames";

interface Props {
  limit: number;
  articlesCount: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}

function Pagination({ limit, articlesCount, currentPage, onPageClick }: Props) {
  const pagesCount = articlesCount / limit;
  const pages = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(
      <li
        key={i}
        className={classNames("page-item", {
          active: i === currentPage
        })}
      >
        <a
          href=""
          className="page-link"
          onClick={event => {
            event.preventDefault();
            onPageClick(i);
          }}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ul className="pagination">{pages}</ul>
    </nav>
  );
}

export default Pagination;
