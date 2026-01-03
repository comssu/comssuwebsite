import type { SigninFormData } from "./types";

export interface SignInValidationErrors {
  id: string | null;
  password: string | null;
}

const isEmpty = (value: string) => !value || value.trim().length === 0;

const validateEmailDetailed = (id: string) => {
  if (isEmpty(id)) return "ID is required.";
  const trimmed = id.trim();
  if (trimmed.length < 3) return "ID is too short.";
  if (trimmed.length > 6) return "ID is too long.";
  return null;
}

const validatePasswordDetailed = (password: string) => {
    const commonPasswords = ["password", "123456", "12345678", "qwerty", "letmein"];
    const minLength: number = 8;
    const requireUpper: boolean = true;
    const requireLower: boolean = true;
    const requireDigit: boolean = true;
    const requireSpecial: boolean = true;
    const disallowCommon: boolean = true;
    if (isEmpty(password)) return "Password is required.";
    if (password.length < minLength) return `Password must be at least ${minLength} characters.`;
    if (requireUpper && !/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter (A–Z).";
    if (requireLower && !/[a-z]/.test(password)) return "Password must contain at least one lowercase letter (a–z).";
    if (requireDigit && !/[0-9]/.test(password)) return "Password must contain at least one digit (0–9).";
    if (requireSpecial && !/[!@#$%^&*()\-_=+[\]{};:'",.<>/?\\|`~]/.test(password)) return "Password must contain at least one special character (e.g. !@#$%).";
    if (/\s/.test(password)) return "Password cannot contain spaces.";
    if (disallowCommon && commonPasswords.includes(password.toLowerCase())) return "That password is too common — choose a stronger password.";
    if (/([a-zA-Z0-9])\1\1/.test(password)) return "Avoid using the same character three times in a row.";
    return null; }


    
export const signInValidationRules = (formdata: SigninFormData) => {
    const errors: SignInValidationErrors = { id: null, password: null };
    errors.id = validateEmailDetailed(formdata.id);
    errors.password = validatePasswordDetailed(formdata.password);
    return errors; }
