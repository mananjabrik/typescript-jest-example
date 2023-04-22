import { isPalindrome } from "../src/calc";

describe("test palindrome", () => {
  it("should return true if string palindrom", () => {
    const isPalin = isPalindrome("malam");
    expect(isPalin).toBe(true);
  });
  it("should return false if string not palindrom", () => {
    const isNotPalin = isPalindrome("siang");
    expect(isNotPalin).toBe(false);
  });
  it("should return true if string palindrom", () => {
    const isNotPalin = isPalindrome("kaSur rusak");
    expect(isNotPalin).toBe(true);
  });
});
