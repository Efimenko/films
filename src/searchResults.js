import React from "react";
import Pagination from "./pagination";
import { parseQuery, generateQuery } from "./utilities";
import { API_LINK, API_KEY } from "./constants";
import useFetch from "./hooks/useFetch";

const SearchResults = ({ location, history }) => {
  const currentSearch = parseQuery(location.search);
  const page = Number(currentSearch.page);
  const { query } = currentSearch;

  const updatePage = pageNumber => {
    const updatedSearchString = generateQuery({
      ...currentSearch,
      page: pageNumber
    });

    history.push({
      search: updatedSearchString
    });
  };

  const urlForSearch = `${API_LINK}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`;
  const [films, totalPages] = useFetch(urlForSearch, page, location);

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

export default SearchResults;
