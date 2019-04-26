import React, { useState } from "react";
import { API_LINK, API_KEY } from "./constants";

const Search = ({ getQuery }) => {
  const [value, setValue] = useState("");

  const submitForm = event => {
    event.preventDefault();
    getQuery(value);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        placeholder="Type something..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
