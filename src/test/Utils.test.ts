import { toUpperCase } from "../app/Utils";

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
});
