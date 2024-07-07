import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationTokenUpdateInput = {
  expiration?: Date | null;
  isUsed?: boolean | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
