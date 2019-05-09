import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/index";
import {Favorites, FilmsByGenre, PopularFilms, SearchResults,SinglePage} from './pages/index'
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
