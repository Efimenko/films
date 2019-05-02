import React from "react";
import Pagination from "./pagination";
import { API_LINK, API_KEY } from "./constants";
import useFetch from "./hooks/useFetch";
import usePagination from "./hooks/useSearch";

const PopularFilms = ({ location, history }) => {
  const [currentPage, setCurrentPage] = usePagination({ location, history });

  const urlForPopular = `${API_LINK}/movie/popular?api_key=${API_KEY}&page=${currentPage}`;
  const [films, totalPages] = useFetch(urlForPopular, currentPage);

  const changePage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      {films && (
        <ul className="films-list">
          {films.map(({ title }) => {
            return <li className="films-list__item">{title}</li>;
          })}
        </ul>
      )}
      {totalPages && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={changePage}
        />
      )}
    </React.Fragment>
  );
};

export default PopularFilms;
