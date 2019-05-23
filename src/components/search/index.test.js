import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Search from "./index";

afterEach(cleanup)

describe("<Search /> component", () => {

  describe("change functional", () => {
    it("should change value", () => {
      const { queryByTestId } = render(<Search />);
      const searchInput = queryByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "some value" } });
      expect(searchInput.value).toBe("some value");
    });
  });

  describe("submit functional", () => {
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

    // it('should submit form on enter', () => {
    //   const history = {
    //     push: jest.fn()
    //   }
    //   const {queryByTestId} = render(<Search history={history}/>)
    //   const searchInput = queryByTestId('search-input')

    //   fireEvent.change(searchInput, {target: {value: 'some value'}})
    //   fireEvent.keyDown(searchInput, {key: 'Enter', code: 13, charCode: 13})

    //   expect(searchInput.value).toBe('')
    // })

    // it('should reset input value on submit', () => {})
  });
  
  describe('live results functional', () => {
    it ('should not render live results when empty input', () => {
      const { queryByTestId } = render(<Search />);
      const liveResults = queryByTestId('live-results')

      expect(liveResults).toBe(null)
    })
  })
});
