import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";

const Header = () => {
  return (
    <React.Fragment>
      <Search />
      <nav>
        <ul>
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
