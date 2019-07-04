import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, cleanup, wait } from "react-testing-library";
import Search from "./index";

jest.mock("../../hooks/use-fetch.js", () =>
  jest.fn().mockImplementation(request => {
    if (request.indexOf("success request") !== -1) {
      return { results: [{ id: 1, title: 'Film 1' }, { id: 2, title: 'Film 2', release_date: '2007-10-11' }] };
    } else {
      return { results: [] };
    }
  })
);

afterEach(cleanup);

describe("<Search /> component", () => {
  describe("change functionality", () => {
    it("should change value", () => {
      const { queryByTestId } = render(<Search />);
      const searchInput = queryByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "some value" } });
      expect(searchInput.value).toBe("some value");
    });
  });

  describe("submit functionality", () => {
    it("should submit form on click submit button", () => {
      const history = {
        push: jest.fn()
      };

      const { queryByTestId } = render(<Search history={history} />);
      const searchInput = queryByTestId("search-input");
      const submitButton = queryByTestId("submit-button");
      fireEvent.change(searchInput, { target: { value: "some value" } });
      fireEvent.click(submitButton);

      expect(searchInput.value).toBe("");
    });

    it("should push to history on submit form", () => {
      const history = {
        push: jest.fn()
      };

      const { queryByTestId } = render(<Search history={history} />);
      const searchInput = queryByTestId("search-input");
      const submitButton = queryByTestId("submit-button");
      fireEvent.change(searchInput, { target: { value: "some value" } });
      fireEvent.click(submitButton);

      expect(history.push).toHaveBeenCalledTimes(1);
    });
  });

  describe("live results functional", () => {
    it("should not render live results when empty input", () => {
      const { queryByTestId } = render(<Search />);
      const liveResults = queryByTestId("live-results");

      expect(liveResults).toBe(null);
    });

    it("should render live results when something typed", () => {
      const { queryByTestId } = render(
        <Router>
          <Search />
        </Router>
      );
      const searchInput = queryByTestId("search-input");


      fireEvent.focusIn(searchInput)
      fireEvent.change(searchInput, { target: { value: "success request" } });
      
      
      const liveResults = () => queryByTestId("live-results");

      expect(liveResults).not.toBe(null);
    });

    it("should render live results with not found text on empty results", async () => {
      const { queryByTestId, queryByText } = render(
        <Router>
          <Search />
        </Router>
      );
      const searchInput = queryByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "bad request" } });
      fireEvent.focus(searchInput);
      await wait(() => expect(queryByText("Nothing was found")).not.toBeNull());
    });

    it("should hide live results when unfocus input", async () => {
      const { queryByTestId } = render(
        <Router>
          <Search />
        </Router>
      );
      const searchInput = queryByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "success request" } });
      fireEvent.focus(searchInput);
      await wait(() => expect(queryByTestId("live-results")).not.toBeNull())
      fireEvent.blur(searchInput);
      await wait(() => expect(queryByTestId("live-results")).toBeNull())
    })

    it("should clear search field when click on some link in result", async () => {
      const { queryByTestId, getByText } = render(
        <Router>
          <Search />
        </Router>
      );
      const searchInput = queryByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "success request" } });
      fireEvent.focus(searchInput);
      let liveResultsLink
      await wait (() => liveResultsLink = getByText('Film 1'))

      fireEvent.click(liveResultsLink)
      expect(searchInput.value).toBe("")
    })

    it("should show release date when it present and hide when absent", async () => {
      const { container, queryByTestId, debug} = render(
        <Router>
          <Search />
        </Router>
      );
      const searchInput = queryByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "success request" } });
      fireEvent.focus(searchInput);
      let liveResultsItems
      await wait(() => liveResultsItems = container.querySelectorAll('.live-results__item'))
      const itemWithoutDate = liveResultsItems[0].querySelector('.live-results__year')
      const itemWithDate = liveResultsItems[1].querySelector('.live-results__year')

      expect(itemWithoutDate).toBe(null)
      expect(itemWithDate).not.toBe(null)
    })
  });
});
