import { IndexedStringSource } from "../src/indexedStringSource";

describe("IndexedStringSource", () => {
  describe("wholeString", () => {
    it("should be the whole string", () => {
      const sut = new IndexedStringSource("abcde", 3);
      expect(sut.wholeString).toBe("abcde");
    });
  });

  describe("currentString", () => {
    it("should be the whole string", () => {
      const sut = new IndexedStringSource("abcde");
      expect(sut.currentString).toBe("abcde");
    });

    it("should be a suffix if index is not 0", () => {
      const sut = new IndexedStringSource("abcde", 3);
      expect(sut.currentString).toBe("de");
    });

    it("should be empty if index is strictly greater than the length of the string", () => {
      const sut = new IndexedStringSource("abcde", 10);
      expect(sut.currentString).toBe("");
    });
  });

  describe.skip("location", () => {
    it("should be the location of index", () => {
      const sut = new IndexedStringSource("abc\ndef\nghijk\nlmn", 10);
      expect(sut.location).toEqual({ row: 2, col: 3 });
    });
  });

  describe("head", () => {
    it("should take the first letter of the string", () => {
      const sut = new IndexedStringSource("abcde");
      expect(sut.head).toBe("a");
    });

    it("should be empty if the string is empty", () => {
      const sut = new IndexedStringSource("");
      expect(sut.head).toBe("");
    });
  });

  describe("tail", () => {
    it("should return a new IndexStringSource where the wholeString is the same and the index is incremented", () => {
      const sut = new IndexedStringSource("abcde");
      expect(sut.tail).toEqual(new IndexedStringSource("abcde", 1));
    });
  });

  describe("isEOF", () => {
    it("should return false if index < |string|", () => {
      const sut = new IndexedStringSource("abcde", 4);
      expect(sut.isEOF).toBe(false);
    });

    it("should return false if index >= |string|", () => {
      const sut = new IndexedStringSource("abcde", 5);
      expect(sut.isEOF).toBe(true);
    });
  });
});
