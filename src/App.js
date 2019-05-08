import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PopularFilms from "./components/popularFilms";
import SearchResults from "./components/searchResults";
import Header from "./components/header";
import SinglePage from "./components/single-page";
import Favorites from './components/favorites'
import FilmsByGenre from './components/films-by-genre'
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={PopularFilms} />
        <Route path="/search" component={SearchResults} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/film/:filmId" component={SinglePage} />
        <Route path="/genre/:genreId" component={FilmsByGenre} />
      </div>
    </Router>
  );
};

export default App;
