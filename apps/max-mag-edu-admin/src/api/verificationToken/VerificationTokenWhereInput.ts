import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationTokenWhereInput = {
  expiration?: DateTimeNullableFilter;
  id?: StringFilter;
  isUsed?: BooleanNullableFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
