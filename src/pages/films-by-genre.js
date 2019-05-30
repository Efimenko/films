import React from "react";
import Pagination from "../components/pagination/index";
import { API_LINK, API_KEY } from "../constants";
import List from "../components/list/index";
import useFetch from "../hooks/use-fetch";

const FilmsByGenre = ({ match }) => {
  const {
    params: { genreId }
  } = match;
  const urlForFilms = `${API_LINK}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;

  const { results } = useFetch(urlForFilms);

  if (!results) return null;

  return (
    <React.Fragment>
      <div className="container">
        <h2 className="page-title">Films by genre</h2>
      </div>
      <List data={results} />
      {/* {data.total_pages && (
          <Pagination
            currentPage={page}
            totalPages={data.total_pages}
            onChangePage={updatePage}
          />
        )} */}
    </React.Fragment>
  );
};

export default FilmsByGenre;
