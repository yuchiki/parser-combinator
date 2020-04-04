import { CharParser } from "../src/elementaryParsers";
import { NewSource } from "../src/source";

describe("CharParser", () => {
  it("should succeed when the given string starts with the given letter", () => {
    const parser = CharParser("a");
    const res = parser(NewSource("abc"));
    expect(res.length).toBe(1);
    const [letter, rest] = res[0];
    expect(letter).toBe("a");
    expect(rest.currentString).toBe("bc");
  });

  it("should fail when the given string does not start with the given letter", () => {
    const parser = CharParser("a");
    const res = parser(NewSource("bcd"));
    expect(res.length).toBe(0);
  });
});
