import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");

    expect(actual.reason).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 chars is valid", () => {
    const actual = sut.checkPassword("123456789");

    expect(actual.reason).not.toContain(PasswordErrors.SHORT);
  });

  it("Password with no upper case is invalid", () => {
    const actual = sut.checkPassword("12ab");

    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(PasswordErrors.NO_UPPER);
  });

  it("Password with upper case is valid", () => {
    const actual = sut.checkPassword("123ABC");

    expect(actual.reason).not.toContain(PasswordErrors.NO_UPPER);
  });

  it("Password with no lower case is invalid", () => {
    const actual = sut.checkPassword("123AB");

    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(PasswordErrors.NO_LOWER);
  });

  it("Password with lower case is valid", () => {
    const actual = sut.checkPassword("123abc");

    expect(actual.reason).not.toContain(PasswordErrors.NO_LOWER);
  });

  it("Complex password is valid", () => {
    const actual = sut.checkPassword("123ABCdef");

    expect(actual.valid).toBe(true);
    expect(actual.reason).toHaveLength(0);
  });

  it("Admin password with no numbers is invalid", () => {
    const actual = sut.checkAdminPassword("ABCdef");

    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(PasswordErrors.NO_NUMBER);
  });

  it("Admin password with numbers is valid", () => {
    const actual = sut.checkAdminPassword("ABCdef1");

    expect(actual.reason).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
