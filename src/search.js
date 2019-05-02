import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Search = ({ history }) => {
  const [value, setValue] = useState("");

  const submitForm = event => {
    event.preventDefault();
    history.push(`/search/?query=${value}`);
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
