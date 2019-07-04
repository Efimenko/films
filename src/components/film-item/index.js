import React from "react";
import FavoriteButton from "../favorite-button/index";
import Poster from "../poster/index";
import { Link } from "react-router-dom";
import "./style.css";

const FilmItem = ({
  title,
  id,
  posterPath,
  rating,
  addToFavorite,
  removeFromFavorite,
  isFavorite
}) => {
  return (
    <article className="film-item">
      <div className="film-item__image-wrapper">
        <Poster title={title} posterPath={posterPath} />
      </div>
      <div className="film-item__inner">
        <h3 className="film-item__title">
          <Link to={`/film/${id}`} className="film-item__link">
            {title}
          </Link>
        </h3>
        <div className="film-item__top">
          <FavoriteButton
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
            isFavorite={isFavorite}
            id={id}
            film={{ title, vote_average: rating, poster_path: posterPath }}
          />
          {Boolean(rating) && <span className="rating">{rating}</span>}
        </div>
      </div>
    </article>
  );
};

export default FilmItem;
