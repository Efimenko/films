import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PopularFilms from "./components/popularFilms";
import SearchResults from "./components/searchResults";
import Header from "./components/header";
import SinglePage from "./components/single-page";
import Favorites from './components/favorites'
import "./App.css";

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
