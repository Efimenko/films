import React from "react";
import Pagination from "./pagination";
import { parseQuery, generateQuery } from "./utilities";
import { API_LINK, API_KEY } from "./constants";
import List from './list'
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
  const data = useFetch(urlForSearch, page, location);

  return (
    data && (
      <React.Fragment>
        <List data={data.results} />
        {data.total_pages && (
          <Pagination
            currentPage={page}
            totalPages={data.total_pages}
            onChangePage={updatePage}
          />
        )}
      </React.Fragment>
    )
  );
};

export default SearchResults;
