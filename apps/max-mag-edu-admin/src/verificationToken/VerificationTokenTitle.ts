import { VerificationToken as TVerificationToken } from "../api/verificationToken/VerificationToken";

export const VERIFICATIONTOKEN_TITLE_FIELD = "token";

export const VerificationTokenTitle = (record: TVerificationToken): string => {
  return record.token?.toString() || String(record.id);
};
