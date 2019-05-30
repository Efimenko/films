import React from "react";
import Pagination from "../components/pagination/index";
import { parseQuery, generateQuery } from "../utilities";
import { API_LINK, API_KEY } from "../constants";
import List from '../components/list/index'
import useFetch from "../hooks/use-fetch";

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
        <section className="page-content">
          <div className="container">
            <h2 className="page-title">Search results</h2>
          </div>
          <List data={data.results} />
        </section>
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
