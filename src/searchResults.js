import React from "react";
import Pagination from "./pagination";
import { parseQuery } from "./utilities";
import { API_LINK, API_KEY } from "./constants";
import useFetch from "./hooks/useFetch";
import usePagination from "./hooks/useSearch";

const SearchResults = ({ location, history }) => {
  const [currentPage, setCurrentPage] = usePagination({ location, history });

  const { query } = parseQuery(location.search);
  const urlForSearch = `${API_LINK}/search/movie?api_key=${API_KEY}&page=${currentPage}&query=${query}`;

  const [films, totalPages] = useFetch(urlForSearch, currentPage, location);

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

export default SearchResults;
