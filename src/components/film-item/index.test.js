import React from "react";
import { render, cleanup } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import FilmItem from "./index";

afterEach(cleanup);

describe("<FilmItem /> component", () => {
  it("should render article", () => {
    const { container } = render(
      <Router>
        <FilmItem removeFromFavorite={() => {}} addToFavorite={() => {}} />
      </Router>
    );
    expect(container.querySelector("article")).not.toBeNull();
  });

  it("should render rating if it exists and vice versa", () => {
    const { container, rerender } = render(
      <Router>
        <FilmItem
          removeFromFavorite={() => {}}
          addToFavorite={() => {}}
          rating={8}
        />
      </Router>
    );

    expect(container.querySelector(".rating")).not.toBeNull();

    rerender(
      <Router>
        <FilmItem removeFromFavorite={() => {}} addToFavorite={() => {}} />
      </Router>
    );

    expect(container.querySelector(".rating")).toBeNull();
  });
});
