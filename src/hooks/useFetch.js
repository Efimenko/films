import { useEffect, useState } from "react";

const useFetch = (link, currentPage, location) => {
  const [films, setFilms] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetch(link)
      .then(response => response.json())
      .then(({ results, total_pages }) => {
        setFilms(results);
        setTotalPages(total_pages);
      });
  }, [currentPage, location]);

  return [films, totalPages];
};

export default useFetch;
