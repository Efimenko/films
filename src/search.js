import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <form>
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
