import { expect } from "chai";
import { range, parseQuery, generateQuery } from "./index.js";

describe("range", () => {
  it("should return array", () => {
    expect(range(2, 3)).to.be.an("array");
  });

  it("should return array when args not passed", () => {
    expect(range()).to.deep.equal([]);
  });

  it("should return right range", () => {
    expect(range(3, 6)).to.deep.equal([3, 4, 5, 6]);
  });

  it("should return one digit in range when start and end are identity digits", () => {
    expect(range(3, 3)).to.deep.equal([3]);
  });
});

describe("parse query", () => {
  it("should return object", () => {
    expect(parseQuery("?query=ddd")).to.be.an("object");
  });

  it("should return array when args not passed", () => {
    expect(parseQuery()).to.deep.equal({});
  });

  it("should return right object with one parameter", () => {
    expect(parseQuery("?foo=baz")).to.deep.equal({ foo: "baz" });
  });

  it("should return right object with several parameters", () => {
    expect(parseQuery("?foo=baz&page=1&query=some")).to.deep.equal({
      foo: "baz",
      page: "1",
      query: "some"
    });
  });
});

describe("generate query", () => {
  it("should return string", () => {
    expect(generateQuery({ query: "foo" })).to.be.an("string");
  });

  it("should return string when args not passed", () => {
    expect(generateQuery()).to.deep.equal("");
  });

  it("should return right string with one item in object", () => {
    expect(generateQuery({ query: "foo" })).to.deep.equal("?query=foo");
  });

  it("should return right string with several items in object", () => {
    expect(generateQuery({ query: "foo", page: "baz" })).to.deep.equal(
      "?query=foo&page=baz"
    );
  });
});
