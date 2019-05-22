import { useEffect, useState } from "react";

const useFetch = (link) => {
  const [data, setData] = useState({})

  useEffect(() => {
    let canceled

    if (link) {
      fetch(link)
      .then(response => {
        if (response.status !== 200) {
          throw new Error({code: response.status, text: response.statusText})
        } else {
          return response.json()
        }
      })
      .then(data => {
        if (!canceled) {
          setData(data)
        }
      })
      .catch(err => {
        setData({error: true, ...err})
      })
    }

    return () => {
      canceled = true
    }
  });

  return data;
};

export default useFetch;
