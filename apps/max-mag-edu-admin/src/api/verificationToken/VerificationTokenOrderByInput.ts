import { SortOrder } from "../../util/SortOrder";

export type VerificationTokenOrderByInput = {
  createdAt?: SortOrder;
  expiration?: SortOrder;
  id?: SortOrder;
  isUsed?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
