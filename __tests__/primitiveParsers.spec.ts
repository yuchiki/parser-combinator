import { ResultParser, ZeroParser, ItemParser } from "../src/primitiveParsers";
import { NewSource } from "../src/source";

describe("ResultParser", () => {
  it("should return the given value without consuming input", () => {
    const res = ResultParser("input")(NewSource("abcde"));
    expect(res).toEqual([["input", NewSource("abcde")]]);
  });
});

describe("ZeroParser", () => {
  it("should not return any results", () => {
    const res = ZeroParser()(NewSource("abcde"));
    expect(res).toEqual([]);
  });
});

describe("ItemParser", () => {
  it("should return the pair of the first letter and the rest.", () => {
    const res = ItemParser(NewSource("abcde"));
    expect(res).toEqual([["a", NewSource("abcde").tail]]);
  });

  it("should not return any results if the source is empty.", () => {
    const res = ItemParser(NewSource(""));
    expect(res).toEqual([]);
  });
});
