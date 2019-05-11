import React, { useState } from "react";
import { IMAGE_PATH } from "../../constants";
import FavoriteButton from "../favorite-button/index";
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
  const [imageError, setImageError] = useState(false);

  return (
    <article className="film-item">
      <div className="film-item__image-wrapper">
        {!imageError && (
          <img
            src={`${IMAGE_PATH}/${posterPath}`}
            className="film-item__image"
            alt={`Poster for ${title}`}
            onError={() => setImageError(true)}
          />
        )}
        {imageError && (
          <div className="image-placeholder">
            <svg className="image-placeholder__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
              <path d="M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 44H2V8h54v42z" />
              <path d="M16 28.14a5.57 5.57 0 1 0-.01-11.15A5.57 5.57 0 0 0 16 28.14zM16 19a3.57 3.57 0 1 1 0 7.15A3.57 3.57 0 0 1 16 19zM7 46a1 1 0 0 0 .66-.25L23.97 31.4l10.3 10.3a1 1 0 1 0 1.42-1.41l-4.8-4.81 9.17-10.06 11.26 10.33a1 1 0 0 0 1.35-1.48l-12-11a1 1 0 0 0-1.41.06l-9.8 10.73-4.74-4.74a1 1 0 0 0-1.36-.04L6.34 44.25A1 1 0 0 0 7 46z" />
            </svg>
          </div>
        )}
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
