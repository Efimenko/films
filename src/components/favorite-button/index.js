import React from "react";
import classNames from 'classnames'
import "./style.css";
import {ReactComponent as StarIcon} from '../icons/star-icon.svg'

const FavoriteButton = ({
  addToFavorite,
  removeFromFavorite,
  isFavorite,
  id,
  film
}) => (
    <button
      type="button"
      className="favorite-button film-item__favorite"
      onClick={isFavorite ? removeFromFavorite(id) : addToFavorite({ [id]: film })}
      title={isFavorite ? "Remove from favorite" : "Add to favorite"}
    >
      <StarIcon className={classNames("favorite-icon", {'favorite-icon--active': isFavorite})} />
    </button>
  )

export default FavoriteButton;
