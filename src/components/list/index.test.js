import React from "react";
import { render, cleanup } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import List from "./index";

afterEach(cleanup);

const mockData = [{ title: "Mock title", id: 1 }];

describe("<List /> component", () => {
  it("should render list items", () => {
    const { container } = render(
      <Router>
        <List data={mockData} />
      </Router>
    );
    expect(container.querySelector("li")).not.toBeNull();
  });

  it("shouldn't render ul when there is no data", () => {
    const { container } = render(
      <Router>
        <List />
      </Router>
    );
    expect(container.querySelector("ul")).toBeNull();
  });
});
