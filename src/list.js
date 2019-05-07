import React, { useState, useEffect } from "react";
import { IMAGE_PATH } from "./constants";
import { Link } from "react-router-dom";

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
          return (
            <li key={id} className="films-list__item">
              <img
                src={`${IMAGE_PATH}/${poster_path}`}
                alt={`Poster for ${title}`}
              />
              <h3>
                <Link to={`/film/${id}`}>{title}</Link>
              </h3>
              {!Object.keys(favorites).includes(String(id)) ? (
                <button
                  type="button"
                  onClick={addToFavorite({ [id]: { title } })}
                >
                  Add to favorites
                </button>
              ) : (
                <button type="button" onClick={removeFromFavorite(id)}>
                  Remove from favorites
                </button>
              )}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default List;
