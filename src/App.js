import React, { useState } from "react";
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
    <div className="App">
      <Search getQuery={getQuery} />
      {view === "popular" && <PopularFilms />}
      {view === "search" && <SearchResults query={query} />}
    </div>
  );
};

export default App;
