import React from "react";
import classNames from "classnames";
import { range } from "../../utilities";
import getPages from './get-pages'
import './style.css'

const Pagination = ({ currentPage, totalPages, maxPages, onChangePage }) => {
  const { startPage, endPage } = getPages({ currentPage, totalPages, maxPages });

  const pages = range(startPage, endPage);

  return (
    pages.length && (
      <ul className="pagination">
        {pages.map(page => {
          return (
            <li
              key={page}
              className={classNames("pagination__item", {
                "pagination__item--current": page === currentPage
              })}
            >
              <a
                href={`#page${page}`}
                className="pagination__link"
                onClick={e => {
                  e.preventDefault();
                  onChangePage(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Pagination;
