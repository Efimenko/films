import React, { useState } from "react";

const Search = ({ history }) => {
  const [value, setValue] = useState("");

  const submitForm = event => {
    event.preventDefault();
    console.log("submit form");
    history.push(`/search/?query=${value}&page=1`);
  };

  return (
    <form className="search-form" onSubmit={submitForm}>
      <input
        className="search-form__input"
        placeholder="Type something..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
