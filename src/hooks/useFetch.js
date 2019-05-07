import { useEffect, useState } from "react";

const useFetch = (link) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let canceled
    fetch(link)
      .then(response => response.json())
      .then(data => {
        if (!canceled) {
          setData(data)
        }
      });
    return () => {
      canceled = true
    }
  }, [link]);
  return data;
};

export default useFetch;
