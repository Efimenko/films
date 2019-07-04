import React from "react";
import { render, cleanup } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";

afterEach(cleanup);

describe("<Header /> component", () => {
  it("should render list items of nav", () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(container.querySelector('li')).not.toBeNull()
  });
});
