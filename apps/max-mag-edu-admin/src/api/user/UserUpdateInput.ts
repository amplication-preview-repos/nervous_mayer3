import { InputJsonValue } from "../../types";
import { VerificationTokenUpdateManyWithoutUsersInput } from "./VerificationTokenUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  verificationTokens?: VerificationTokenUpdateManyWithoutUsersInput;
};
