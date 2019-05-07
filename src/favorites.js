import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(favoritesFromStorage);
  }, []);

  return (
    <React.Fragment>
      <h2>Favorites</h2>
      {Object.keys(favorites).length !== 0 && (
        <ul>
          {Object.keys(favorites).map(filmId => {
            return (
              <li>
                <Link to={`/film/${filmId}`}>{favorites[filmId].title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};

export default Favorites;
