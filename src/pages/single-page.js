import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import List from "../components/list/index";
import Poster from "../components/poster/index";
import FavoriteButton from "../components/favorite-button/index";
import {ReactComponent as ClockIcon} from '../components/icons/clock-icon.svg'
import {ReactComponent as SignIcon} from '../components/icons/sign-icon.svg'
import {ReactComponent as CalendarIcon} from '../components/icons/calendar-icon.svg'
import {
  API_KEY,
  API_LINK,
  IMAGE_PATH,
  IMAGE_PATH_ORIGINAL
} from "../constants";
import useFavorites from "../hooks/use-favorites";

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
    vote_average: rating,
    backdrop_path: cover,
    runtime,
    release_date: release,
  } = data;

  return (
    Boolean(Object.keys(data).length) && (
      <article className="film-page">
        <div
          className="film-page__cover"
          style={{ backgroundImage: `url(${IMAGE_PATH_ORIGINAL}/${cover})` }}
        >
          <div className="container container--fluid">
            <div className="film-page__header">
              <div className="film-page__header-left">
                <div className="film-page__poster">
                  <Poster posterPath={posterPath} title={title} />
                </div>
              </div>

              <div className="film-page__header-right">
                <div className="film-page__title-wrapper">
                  <h2 className="film-page__title">{title}</h2>
                  <span className="rating">{rating}</span>
                </div>
                <div className="film-page__meta">
                  {Boolean(genres.length) && (  
                    <div className="list-item-icon film-page__meta-row">
                      <SignIcon className="icon" />
                      <ul className="meta-list">
                        {genres.map(({ id, name }, index) => {
                          return (
                            <li key={id} className="meta-list__item">
                              <Link to={`/genre/${id}`}>{name}</Link>
                              {index !== genres.length - 1 && ","}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  <ul className="film-page__meta-list meta-list">
                    <li className="meta-list__item list-item-icon">
                      <ClockIcon className="icon" /> {runtime} min
                    </li>
                    <li className="meta-list__item list-item-icon">
                      <CalendarIcon className="icon" /> {release}
                    </li>
                  </ul>
                </div>
                {/* <FavoriteButton
                  addToFavorite={addToFavorite}
                  removeFromFavorite={removeFromFavorite}
                  isFavorite={isFavorite(filmId)}
                  id={filmId}
                  film={{ title, vote_average: rating, poster_path: posterPath }}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="film-page__body">
          <div className="container container--fluid">
            <div className="film-page__description">
              <h3>Description</h3>
              <p>{overview}</p>
              {/* {Boolean(Object.keys(similarFilmsData).length) && (
                <section>
                  <h3>Similar</h3>
                  <List data={similarFilmsData.results} />
                </section>
              )} */}
            </div>
          </div>
        </div>
      </article>
    )
  );
};

export default SinglePage;
