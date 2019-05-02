import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Search = ({ history }) => {
  const [value, setValue] = useState("");

  const submitForm = event => {
    event.preventDefault();
    console.log("submit form");
    history.push(`/search/?query=${value}&page=1`);
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

export default withRouter(Search);
