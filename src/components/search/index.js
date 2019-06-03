import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useFocusWithin from "../../hooks/use-focus-within";
import { API_KEY, API_LINK } from "../../constants";
import Poster from "../poster/index";
import "./style.css";

const Search = ({ history }) => {
  const [value, setValue] = useState("");
  const {focused, ...handlers} = useFocusWithin();

  const urlForSearch = value
    ? `${API_LINK}/search/movie?api_key=${API_KEY}&page=1&query=${value}`
    : "";
  const { results } = useFetch(urlForSearch);

  const submitForm = event => {
    event.preventDefault();
    history.push(`/search/?query=${value}&page=1`);
    setValue("");
  };

  const haveResults = value && results && Boolean(results.length);

  return (
    <div
      className="search-wrapper"
      {...handlers}
    >
      <form
        className="search-form"
        onSubmit={submitForm}
        data-testid="search-form"
      >
        <input
          data-testid="search-input"
          className="search-form__input"
          placeholder="Type something..."
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          required
        />
        <button
          className="search-form__button"
          type="submit"
          data-testid="submit-button"
        >
          Search
        </button>
      </form>
      {haveResults && focused && (
        <ul className="live-results" data-testid="live-results">
          {results
            .slice(0, 5)
            .map(({ id, title, poster_path, release_date, vote_average }) => {
              return (
                <li className="live-results__item" key={id}>
                  <div className="live-results__image">
                    <Poster title={title} posterPath={poster_path} small />
                  </div>
                  <div className="live-results__meta">
                    <Link
                      to={`/film/${id}`}
                      className="live-results__link"
                      onClick={() => setValue("")}
                    >
                      {title}
                    </Link>
                    &nbsp;
                    {release_date && (
                      <span className="live-results__year">
                        ({release_date.slice(0, 4)})
                      </span>
                    )}
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
      {focused && results && !results.length && (
        <div className="live-results live-results--empty">
          Nothing was found
        </div>
      )}
    </div>
  );
};

export default Search;
