import React, { useState, useEffect } from "react";
import List from "../components/list/index";

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(favoritesFromStorage);
  }, []);

  useEffect(() => {
    const storageHandler = e => {
      setFavorites(JSON.parse(localStorage.getItem("favorites")))
    }
    window.addEventListener('storage', storageHandler)

    return () => window.removeEventListener('storage', storageHandler)
  })

  const formatedFavorites = favorites ? Object.keys(favorites).reduce((acc, id) => {
    const { poster_path, title, vote_average } = favorites[id];
    return [...acc, { id, poster_path, title, vote_average }];
  }, []) : []

  if(!favorites) return null

  return (
    <React.Fragment>
      <section className="page-content">
        <div className="container">
          <h2 className="page-title">Favorite films</h2>
        </div>
        {Object.keys(favorites).length === 0 ? (
          "List of favorites films is empty"
        ) : (
          <List data={formatedFavorites} />
        )}
      </section>
    </React.Fragment>
  );
};

export default Favorites;
