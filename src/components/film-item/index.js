import React from "react";
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
}) => (
  <article className="film-item">
    <div className="film-item__image-wrapper">
      <img
        src={`${IMAGE_PATH}/${posterPath}`}
        className="film-item__image"
        alt={`Poster for ${title}`}
      />
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
          film={{title, vote_average: rating, poster_path: posterPath}}
        />
        {rating && <span className="rating">{rating}</span>}
      </div>
    </div>
  </article>
);

export default FilmItem;
