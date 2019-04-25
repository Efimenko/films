import React, { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./pagination";

const API = "https://api.themoviedb.org/3";
const API_KEY = "0941767c7620287c671c840b1c091fd2";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const App = () => {
  const [films, setFilms] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetch(`${API}/movie/popular?api_key=${API_KEY}&page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        return data;
      })
      .then(({ results, total_pages }) => {
        setFilms(results);
        setTotalPages(total_pages);
      });
  }, [currentPage]);

  const changePage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      {films &&
        films.map(({ title }) => {
          return <li>{title}</li>;
        })}

      <Pagination
        currentPage={currentPage}
        // totalPages={totalPages}
        totalPages={30}
        onChangePage={changePage}
        maxPages={7}
      />
    </div>
  );
};

export default App;
