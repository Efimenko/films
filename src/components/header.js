import React from "react";
import { Link, withRouter } from "react-router-dom";
import classNames from 'classnames'
import Search from "./search";

const PAGES = {
  popular: {
    path: "/",
    title: "Popular"
  },
  favorites: {
    path: "/favorites",
    title: "Favorites"
  }
};

const Header = ({ history }) => {
  const {location: {pathname}} = history;
  return (
    <header className="header">
      <Search history={history} />
      <nav className="nav">
        <ul className="nav-list">
          {Object.keys(PAGES).map(page => {
            return (
              <li
                key={page}
                className={classNames("nav-list__item", {
                  "nav-list__item--current": pathname === PAGES[page].path
                })}
              >
                <Link to={PAGES[page].path} className="nav-list__link">
                  {PAGES[page].title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
