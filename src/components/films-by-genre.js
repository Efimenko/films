import React from "react";
import Pagination from "./pagination";
import { API_LINK, API_KEY } from "../constants";
import List from "./list";
import useFetch from "../hooks/useFetch";

const FilmsByGenre = ({ match }) => {
  const {
    params: { genreId }
  } = match;
  const urlForFilms = `${API_LINK}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;

  const { results } = useFetch(urlForFilms);

  if (!results) return null;

  return (
    <React.Fragment>
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
