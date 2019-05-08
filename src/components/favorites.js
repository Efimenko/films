import React, { useState, useEffect } from "react";
import List from "./list";

const Favorites = () => {
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(favoritesFromStorage);
  }, []);

  const formatedFavorites = Object.keys(favorites).reduce((acc, id) => {
    const {poster_path, title} = favorites[id]
    return [...acc, {id, poster_path, title}]
  }, [])

  return (
    <React.Fragment>
      <h2>Favorites</h2>
      {Object.keys(favorites).length === 0 ? (
        "List of favorites films is empty"
      ) : (
        <List data={formatedFavorites} />
      )}
    </React.Fragment>
  );
};

export default Favorites;
