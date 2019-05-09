import React from "react";
import Pagination from "../components/pagination/index";
import { API_LINK, API_KEY } from "../constants";
import useFetch from "../hooks/useFetch";
import List from "../components/list/index";
import { parseQuery, generateQuery } from "../utilities";

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
  const data = useFetch(urlForPopular, page);

  return (
    Boolean(Object.keys(data).length) && (
      <React.Fragment>
        <section className="page-content">
          <div className="container">
            <h2 className="page-title">Popular films</h2>
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

export default PopularFilms;
