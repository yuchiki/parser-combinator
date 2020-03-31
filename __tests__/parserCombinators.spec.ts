import { Seq, Sat } from "../src/parserCombinators";
import { Source, NewSource } from "../src/source";

describe("Seq", () => {
  it("should apply one parser after another", () => {
    const oneTwoThreeParser = (input: Source): [number, Source][] =>
      input.currentString == "123ab"
        ? [
            [1, NewSource("23ab")],
            [12, NewSource("3ab")],
            [123, NewSource("ab")],
          ]
        : [];
    const abParser = (input: Source): [string, Source][] =>
      input.currentString == "ab"
        ? [
            ["", NewSource("ab")],
            ["a", NewSource("b")],
            ["ab", NewSource("")],
          ]
        : [];

    expect(Seq(oneTwoThreeParser, abParser)(NewSource("123ab"))).toEqual([
      [[123, ""], NewSource("ab")],
      [[123, "a"], NewSource("b")],
      [[123, "ab"], NewSource("")],
    ]);
  });
});

describe.skip("Bind", () => {
  //適切なテストが思い浮かばず...
  // TODO: 補助関数を定義し、意味の有るテストが作れるようになったらテストケースを作成する。
});

describe("Sat", () => {
  it("should read a character if p(c) is true", () => {
    const res = Sat(_ => true)(NewSource("abc"));
    expect(res.length).toBe(1);
    expect(res[0][0]).toBe("a");
    expect(res[0][1].currentString).toBe("bc");
  });

  it("should return the empty result if p(c) is false", () => {
    const res = Sat(_ => false)(NewSource("abc"));
    expect(res.length).toBe(0);
  });
});
