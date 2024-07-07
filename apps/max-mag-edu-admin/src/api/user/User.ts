import { JsonValue } from "type-fest";
import { VerificationToken } from "../verificationToken/VerificationToken";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  verificationTokens?: Array<VerificationToken>;
};
