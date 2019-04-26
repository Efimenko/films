import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import { API_LINK, API_KEY } from "./constants";

const SearchResults = ({ query }) => {
  const [films, setFilms] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetch(
      `${API_LINK}/search/movie?api_key=${API_KEY}&page=${currentPage}&query=${query}`
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .then(({ results, total_pages }) => {
        setFilms(results);
        setTotalPages(total_pages);
      });
  }, [currentPage]);

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
