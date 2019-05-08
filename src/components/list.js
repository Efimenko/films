import React, { useState, useEffect } from "react";
import FilmItem from "./film-item";

const List = ({ data }) => {
  const initialFavotites = JSON.parse(localStorage.getItem("favorites")) || {};
  const [favorites, setFavorites] = useState(initialFavotites);

  const addToFavorite = filmObject => () => {
    setFavorites({ ...favorites, ...filmObject });
  };

  const removeFromFavorite = id => () => {
    const clonedFavorites = Object.assign({}, favorites);
    delete clonedFavorites[id];
    setFavorites(clonedFavorites);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    data && (
      <ul className="films-list">
        {data.map(({ title, id, poster_path }) => {
          const isFavorite = Object.keys(favorites).includes(String(id))
          return (
            <li key={id} className="films-list__item">
              <FilmItem
                title={title}
                id={id}
                posterPath={poster_path}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
                isFavorite={isFavorite}
              />
            </li>
          );
        })}
      </ul>
    )
  );
};

export default List;
