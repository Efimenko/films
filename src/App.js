import React from "react";
import "./App.css";
import PopularFilms from "./popularFilms";
import Search from "./search";

const App = () => {
  return (
    <div className="App">
      <Search />
      <PopularFilms />
    </div>
  );
};

export default App;
