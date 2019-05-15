import { useEffect, useState } from "react";

const useFetch = (link) => {
  const [data, setData] = useState({})
  const [stateLink, setStateLink] = useState(link)
  useEffect(() => {
    let canceled

    if (stateLink) {
      fetch(stateLink)
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
  }, [stateLink]);

  const doFetch = (link) => {
    setStateLink(link)
  }

  return {data, doFetch};
};

export default useFetch;
