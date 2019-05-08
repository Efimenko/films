import React from "react";
import { IMAGE_PATH } from "../constants";
import { Link } from "react-router-dom";

const FilmItem = ({
  title,
  id,
  posterPath,
  addToFavorite,
  removeFromFavorite,
  isFavorite
}) => (
  <article class="film-item">
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
      {!isFavorite ? (
        <button
          type="button"
          className="film-item__favorite"
          onClick={addToFavorite({ [id]: { title } })}
          title="Add to favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 53.9 53.9"
            class="favorite-icon"
          >
            <path d="M27 1.3l8.3 16.9 18.6 2.7L40.4 34l3.2 18.5-16.7-8.7-16.6 8.7L13.5 34 0 21l18.6-2.7z" />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="film-item__favorite"
          onClick={removeFromFavorite(id)}
          title="Remove from favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 53.9 53.9"
            class="favorite-icon favorite-icon--active"
          >
            <path d="M27 1.3l8.3 16.9 18.6 2.7L40.4 34l3.2 18.5-16.7-8.7-16.6 8.7L13.5 34 0 21l18.6-2.7z" />
          </svg>
        </button>
      )}
    </div>
  </article>
);

export default FilmItem;
