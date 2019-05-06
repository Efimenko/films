import React from "react";
import Pagination from "./pagination";
import { API_LINK, API_KEY } from "./constants";
import useFetch from "./hooks/useFetch";
import { parseQuery, generateQuery } from "./utilities";

const PopularFilms = ({ location, history }) => {
  const currentSearch = parseQuery(location.search);
  const page = Number(currentSearch.page) || 1;

  const updatePage = pageNumber => {
    const updatedSearchString = generateQuery({
      ...currentSearch,
      page: pageNumber
    });

    history.push({
      search: updatedSearchString
    });
  };

  const urlForPopular = `${API_LINK}/movie/popular?api_key=${API_KEY}&page=${page}`;
  const [films, totalPages] = useFetch(urlForPopular, page);

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
          currentPage={page}
          totalPages={totalPages}
          onChangePage={updatePage}
        />
      )}
    </React.Fragment>
  );
};

export default PopularFilms;
