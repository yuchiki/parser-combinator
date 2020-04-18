import {
  ResultParser,
  ZeroParser,
  ItemParser,
  Plus,
} from "../src/primitiveParsers";
import { NewSource } from "../src/source";
import { executionAsyncId } from "async_hooks";

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

describe("Plus", () => {
  it("should take or of two parsers", () => {
    const p1 = ResultParser("res1");
    const p2 = ResultParser("res2");
    const res = Plus(p1, p2)(NewSource("foo"));
    expect(res.length).toBe(2);
    expect(res[0][0]).toBe("res1");
    expect(res[1][0]).toBe("res2");
    expect(res[0][1].currentString).toBe("foo");
    expect(res[1][1].currentString).toBe("foo");
  });
});
