import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PopularFilms from "./popularFilms";
import SearchResults from "./searchResults";
import Header from "./header";
import SinglePage from "./single-page";
import Favorites from './favorites'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={PopularFilms} />
        <Route path="/search" component={SearchResults} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/film/:id" component={SinglePage} />
      </div>
    </Router>
  );
};

export default App;
