import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  test("should return uppercase string", () => {
    const result = toUpperCase("hello");
    expect(result).toBe("HELLO");
  });
});
