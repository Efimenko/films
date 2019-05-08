import { useEffect, useState } from "react";

const useFetch = (link) => {
  const [data, setData] = useState({})
  useEffect(() => {
    let canceled
    fetch(link)
      .then(response => response.json())
      .then(data => {
        if (!canceled) {
          setData(data)
        }
      })
      .catch(err => console.error(err));

    return () => {
      canceled = true
    }
  }, [link]);
  return data;
};

export default useFetch;
