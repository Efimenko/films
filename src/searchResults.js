import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import { parseQuery, generateQuery } from "./utilities";
import { API_LINK, API_KEY } from "./constants";

const SearchResults = ({ location, history }) => {
  const [films, setFilms] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    Number(parseQuery(location.search).page) || 1
  );
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const { query, page } = parseQuery(location.search);

    fetch(
      `${API_LINK}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .then(({ results, total_pages }) => {
        setFilms(results);
        setTotalPages(total_pages);
      });
  }, [currentPage, location]);

  useEffect(() => {
    const currentSearch = parseQuery(location.search);
    const updatedSearchString = generateQuery({
      ...currentSearch,
      page: currentPage
    });
    history.push({
      search: updatedSearchString
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
