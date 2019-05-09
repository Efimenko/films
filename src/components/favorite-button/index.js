import React from "react";
import "./style.css";

const FavoriteButton = ({
  addToFavorite,
  removeFromFavorite,
  isFavorite,
  id,
  film
}) =>
  !isFavorite ? (
    <button
      type="button"
      className="favorite-button film-item__favorite"
      onClick={addToFavorite({ [id]: film })}
      title="Add to favorite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 53.9 53.9"
        className="favorite-icon"
      >
        <path d="M27 1.3l8.3 16.9 18.6 2.7L40.4 34l3.2 18.5-16.7-8.7-16.6 8.7L13.5 34 0 21l18.6-2.7z" />
      </svg>
    </button>
  ) : (
    <button
      type="button"
      className="favorite-button film-item__favorite"
      onClick={removeFromFavorite(id)}
      title="Remove from favorite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 53.9 53.9"
        className="favorite-icon favorite-icon--active"
      >
        <path d="M27 1.3l8.3 16.9 18.6 2.7L40.4 34l3.2 18.5-16.7-8.7-16.6 8.7L13.5 34 0 21l18.6-2.7z" />
      </svg>
    </button>
  );

export default FavoriteButton;
