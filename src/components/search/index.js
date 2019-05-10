import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { API_KEY, API_LINK, IMAGE_PATH_SMALL } from "../../constants";
import "./style.css";

const Search = ({ history }) => {
  const [value, setValue] = useState("");
  const [visibilityLiveResults, setVisibilityLiveResults] = useState(false);
  const searchElement = useRef(null);

  const urlForSearch = value
    ? `${API_LINK}/search/movie?api_key=${API_KEY}&page=1&query=${value}`
    : "";
  const { results } = useFetch(urlForSearch);

  useEffect(() => {
    const outsideActionHandler = e => {
      if (searchElement && !searchElement.current.contains(e.target)) {
        setVisibilityLiveResults(false);
      }
    };

    document.addEventListener("mousedown", outsideActionHandler);
    document.addEventListener("focusin", outsideActionHandler);

    return () => {
      document.removeEventListener("mousedown", outsideActionHandler);
      document.removeEventListener("focusin", outsideActionHandler);
    };
  });

  const submitForm = event => {
    event.preventDefault();
    history.push(`/search/?query=${value}&page=1`);
    setValue("")
  };

  const haveResults = value && results;

  return (
    <div className="search-wrapper" ref={searchElement}>
      <form className="search-form" onSubmit={submitForm}>
        <input
          className="search-form__input"
          placeholder="Type something..."
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          onFocus={() => setVisibilityLiveResults(true)}
          required
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
      {haveResults && visibilityLiveResults && Boolean(results.length) && (
        <ul className="live-results">
          {results
            .slice(0, 5)
            .map(({ id, title, poster_path, release_date, vote_average }) => {
              return (
                <li className="live-results__item">
                  <img
                    className="live-results__image"
                    src={`${IMAGE_PATH_SMALL}/${poster_path}`}
                    alt={`Poster for ${title}`}
                  />
                  <div className="live-results__meta">
                    <Link to={`/film/${id}`} className="live-results__link" onClick={() => setValue("")}>
                      {title}
                    </Link>
                    &nbsp;
                    <span class="live-results__year">
                      ({release_date.slice(0, 4)})
                    </span>
                    <br />
                    <div className="rating live-results__rating">
                      {vote_average}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
      {haveResults && visibilityLiveResults && !results.length && (
        <div className="live-results live-results--empty">Nothing to found</div>
      )}
    </div>
  );
};

export default Search;
