import type { SigninFormData } from "./types";

export interface SignInValidationErrors {
  email: string | null;
  password: string | null;
}

const isEmpty = (value: string) => !value || value.trim().length === 0;


const validateEmailDetailed = (email: string) => {
    if (isEmpty(email)) return "Email is required.";
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        if (!/@/.test(trimmed)) return 'Email must contain the "@" symbol.';
        const [local, domain] = trimmed.split("@");
        if (!local) return "Email is missing the local part before '@'.";
        if (!domain) return "Email is missing the domain after '@'.";
        if (!/\./.test(domain)) return "Email domain must contain a dot (e.g. example.com).";
        if (/\s/.test(trimmed)) return "Email cannot contain spaces.";
        return "Email format is invalid."; }
    const domain = trimmed.split("@")[1];
    if (domain.length < 3) return "Email domain is too short.";
    const tld = domain.split(".").pop();
    if (!/^[A-Za-z]{2,}$/.test(tld!)) return "Email top-level domain (TLD) looks invalid.";
    return null;}

const validatePasswordDetailed = (password: string) => {
    if (isEmpty(password)) return "Password is required.";
    return null; }


    
export const signInValidationRules = (formdata: SigninFormData) => {
    const errors: SignInValidationErrors = { email: null, password: null };
    errors.email = validateEmailDetailed(formdata.email);
    errors.password = validatePasswordDetailed(formdata.password);
    return errors; }
