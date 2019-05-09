import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import List from "../components/list/index";
import FavoriteButton from "../components/favorite-button/index";
import { API_KEY, API_LINK, IMAGE_PATH } from "../constants";
import useFavorites from "../hooks/useFavorites";

const SinglePage = ({ match }) => {
  const {
    params: { filmId }
  } = match;

  const urlForFilm = `${API_LINK}/movie/${filmId}?api_key=${API_KEY}`;
  const urlForSimilar = `${API_LINK}/movie/${filmId}/similar?api_key=${API_KEY}`;

  const data = useFetch(urlForFilm);
  const similarFilmsData = useFetch(urlForSimilar, filmId);
  const { isFavorite, addToFavorite, removeFromFavorite } = useFavorites();

  const {
    title,
    poster_path: posterPath,
    overview,
    genres,
    vote_average: rating
  } = data;

  return (
    Boolean(Object.keys(data).length) && (
      <article>
        <h2>{title}</h2>
        <img src={`${IMAGE_PATH}/${posterPath}`} alt={`Poster for ${title}`} />
        {Boolean(genres.length) && (
          <ul>
            {genres.map(({ id, name }) => {
              return (
                <li key={id}>
                  <Link to={`/genre/${id}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        )}
        Rating: {rating}
        <FavoriteButton
          addToFavorite={addToFavorite}
          removeFromFavorite={removeFromFavorite}
          isFavorite={isFavorite(filmId)}
          id={filmId}
          film={{ title, vote_average: rating, poster_path: posterPath }}
        />
        <p>{overview}</p>
        {Boolean(Object.keys(similarFilmsData).length) && (
          <section>
            <h3>Similar</h3>
            <List data={similarFilmsData.results} />
          </section>
        )}
      </article>
    )
  );
};

export default SinglePage;
