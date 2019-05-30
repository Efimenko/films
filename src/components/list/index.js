import React from "react";
import FilmItem from "../film-item/index";
import useFavorites from '../../hooks/use-favorites'
import './style.css'

const List = ({ data }) => {
  const {isFavorite, addToFavorite, removeFromFavorite} = useFavorites()

  return data && data.length ? (
    <ul className="films-list">
      {data.map(({ title, id, poster_path, vote_average }) => {
        return (
          <li key={id} className="films-list__item">
            <FilmItem
              title={title}
              id={id}
              posterPath={poster_path}
              rating={vote_average}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
              isFavorite={isFavorite(id)}
            />
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default List;
