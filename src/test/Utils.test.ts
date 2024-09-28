import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    // arrange
    const sut = toUpperCase;
    const expected = "HELLO";

    // act
    const actual = sut("hello");
    //
    // assert
    expect(actual).toBe(expected);
  });

  it("should return info for valid string", () => {
    const actual = getStringInfo("Hello");

    expect(actual.lowerCase).toBe("hello");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(5);
    expect(actual.characters).toHaveLength(5);

    expect(actual.characters).toEqual(["H", "e", "l", "l", "o"]);
    expect(actual.characters).toContain<string>("H");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["e", "H", "o", "l"])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
