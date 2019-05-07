import { useEffect, useState } from "react";

const useFetch = (link, ...deps) => {
  console.log({deps})
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(link)
      .then(response => response.json())
      .then(data => {
        console.log({data});
        setData(data)
      });
  }, [...deps]);

  return data;
};

export default useFetch;
