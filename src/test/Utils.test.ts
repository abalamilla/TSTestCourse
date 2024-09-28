import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    // arrange
    const sut = toUpperCase;
    const expected = "HELLO";

    // act
    const actual = sut("hello");

    // assert
    expect(actual).toBe(expected);
  });

  describe("ToUpperCase examples", () => {
    it.each([
      { input: "hello", expected: "HELLO" },
      { input: "world", expected: "WORLD" },
      { input: "foo", expected: "FOO" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);

      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg 'Hello'", () => {
    test("return right length", () => {
      const actual = getStringInfo("Hello");
      expect(actual.characters).toHaveLength(5);
    });

    test("return right lowerCase", () => {
      const actual = getStringInfo("Hello");
      expect(actual.lowerCase).toBe("hello");
    });

    test("return right upperCase", () => {
      const actual = getStringInfo("Hello");
      expect(actual.upperCase).toBe("HELLO");
    });

    test("return right characters", () => {
      const actual = getStringInfo("Hello");
      expect(actual.characters).toEqual(["H", "e", "l", "l", "o"]);
      expect(actual.characters).toContain<string>("H");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["e", "H", "o", "l"]),
      );
    });

    test("return defined extraInfo", () => {
      const actual = getStringInfo("Hello");
      expect(actual.extraInfo).toBeDefined();
    });

    test("return right extraInfo", () => {
      const actual = getStringInfo("Hello");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
