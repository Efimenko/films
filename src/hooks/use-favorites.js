import {useState, useEffect} from 'react'

const useFavorites = () => {
  const initialFavotites = JSON.parse(localStorage.getItem("favorites")) || {};
  const [favorites, setFavorites] = useState(initialFavotites);

  const isFavorite = id => Object.keys(favorites).includes(String(id))

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
    window.dispatchEvent( new Event('storage') )
  }, [favorites]);

  return {isFavorite, addToFavorite, removeFromFavorite}
}

export default useFavorites