import { User } from "../user/User";

export type VerificationToken = {
  createdAt: Date;
  expiration: Date | null;
  id: string;
  isUsed: boolean | null;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
