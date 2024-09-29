export enum PasswordErrors {
  SHORT = "Password is too short",
  NO_UPPER = "Password has no upper case",
  NO_LOWER = "Password has no lower case",
  NO_NUMBER = "Password has no number",
}

export interface CheckResult {
  valid: boolean;
  reason: string[];
}

export class PasswordChecker {
  public checkPassword(password: string) {
    const reasons: PasswordErrors[] = [];

    this.checkForLength(password, reasons);
    this.checkForLowerCase(password, reasons);
    this.checkForUpperCase(password, reasons);

    return {
      valid: reasons.length === 0 ? true : false,
      reason: reasons,
    };
  }

  public checkAdminPassword(password: string): CheckResult {
    const basicCheck = this.checkPassword(password);
    this.checkForNumber(password, basicCheck.reason);

    return {
      valid: basicCheck.reason.length === 0 ? true : false,
      reason: basicCheck.reason,
    };
  }

  private checkForNumber(password: string, reasons: PasswordErrors[]) {
    if (!/\d/.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }

  private checkForLength(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
    if (password === password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER);
    }
  }

  private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
    if (password === password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER);
    }
  }
}
