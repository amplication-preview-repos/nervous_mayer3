import { InputJsonValue } from "../../types";
import { VerificationTokenCreateNestedManyWithoutUsersInput } from "./VerificationTokenCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  verificationTokens?: VerificationTokenCreateNestedManyWithoutUsersInput;
};
