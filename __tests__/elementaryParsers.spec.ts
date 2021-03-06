import {
  CharParser,
  DigitParser,
  LowerParser,
  UpperParser,
  LetterParser,
  AlphanumParser,
} from "../src/elementaryParsers";
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

describe("DigitParser", () => {
  it("should parse digits", () => {
    for (let i = 0; i < 10; i++) {
      const suffix = "abc";
      const source = NewSource(i.toString() + suffix);
      const res = DigitParser(source);
      expect(res.length).toBe(1);
      const [digit, rest] = res[0];
      expect(digit).toBe(i.toString());
      expect(rest.currentString).toBe(suffix);
    }
  });

  it("should fail if the prefix of the source is not a digit", () => {
    const res = DigitParser(NewSource("abc"));
    expect(res.length).toBe(0);
  });
});

describe("LowerParser", () => {
  it("should parse a lower letter", () => {
    for (const c of [..."abcdefghijklmnopqrstuvwxyz"]) {
      const res = LowerParser(NewSource(c));
      expect(res.length).toBe(1);
      const [cRes, rest] = res[0];
      expect(cRes).toBe(c);
      expect(rest.currentString).toBe("");
    }
  });

  it("should fail otherwise", () => {
    for (const c of [..."A1- ,.?_"]) {
      const res = LowerParser(NewSource(c));
      expect(res.length).toBe(0);
    }
  });
});

describe("UpperParser", () => {
  it("should parse an upper letter", () => {
    for (const c of [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]) {
      const res = UpperParser(NewSource(c));
      expect(res.length).toBe(1);
      const [cRes, rest] = res[0];
      expect(cRes).toBe(c);
      expect(rest.currentString).toBe("");
    }
  });

  it("should fail otherwise", () => {
    for (const c of [..."a1- ,.?_"]) {
      const res = UpperParser(NewSource(c));
      expect(res.length).toBe(0);
    }
  });
});

describe("LetterParser", () => {
  it("should parser letters", () => {
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = lowerLetters + upperLetters;
    for (const c of [...letters]) {
      const res = LetterParser(NewSource(c));
      expect(res.length).toBe(1);
      const [cRes, rest] = res[0];
      expect(cRes).toBe(c);
      expect(rest.currentString).toBe("");
    }
  });

  it("should fail otherwise", () => {
    for (const c of [..."1- ,.?_"]) {
      const res = LetterParser(NewSource(c));
      expect(res.length).toBe(0);
    }
  });
});

describe("AlphanumParser", () => {
  it("should parser letters and digits", () => {
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const alphanums = lowerLetters + upperLetters + digits;
    for (const c of [...alphanums]) {
      const res = AlphanumParser(NewSource(c));
      expect(res.length).toBe(1);
      const [cRes, rest] = res[0];
      expect(cRes).toBe(c);
      expect(rest.currentString).toBe("");
    }
  });

  it("should fail otherwise", () => {
    for (const c of [..."+@:[:]_"]) {
      const res = AlphanumParser(NewSource(c));
      expect(res.length).toBe(0);
    }
  });
});
