import { IndexedStringSource } from "../src/indexedStringSource";


describe("IndexedStringSource", () => {
  describe("wholeString", () => {
    it("should be the whole string", () => {
      const sut = new IndexedStringSource("abcde");
      expect(sut.wholeString).toBe("abcde");
    });

    it("should be a suffix if index is not 0", () => {
      const sut = new IndexedStringSource("abcde", 3);
      expect(sut.wholeString).toBe("de");
    });

    it("should be empty if index is strictly greater than the length of the string", () => {
      const sut = new IndexedStringSource("abcde", 10);
      expect(sut.wholeString).toBe("");
    });
  });

  describe.skip("location", () => {
    it("should be the location of index", () => {
      const sut = new IndexedStringSource("abc\ndef\nghijk\nlmn", 10);
      expect(sut.location).toBe({ row: 2, col: 3 });
    });
  });

  describe.skip("head", () => { });

  describe.skip("tail", () => { });

  describe.skip("isEOF", () => { })
});
