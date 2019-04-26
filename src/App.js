import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PopularFilms from "./popularFilms";
import SearchResults from "./searchResults";
import Search from "./search";

const App = () => {
  const [view, setView] = useState("popular");
  const [query, setQuery] = useState(null);

  const getQuery = query => {
    setQuery(query);
    setView("search");
  };

  return (
    <Router>
      <div className="App">
        <Search getQuery={getQuery} />
        <Route exact path="/" component={PopularFilms} />
        <Route path="/search" component={SearchResults} />
        {/* <Route path="/search" component={SearchResults} /> */}
      </div>
    </Router>
  );
};

export default App;
