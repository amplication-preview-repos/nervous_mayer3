import * as graphql from "@nestjs/graphql";
import { LoginUserInput } from "../userModule/LoginUserInput";
import { LoginUserResponse } from "../userModule/LoginUserResponse";
import { RegisterUserInput } from "../userModule/RegisterUserInput";
import { RegisterUserResponse } from "../userModule/RegisterUserResponse";
import { VerifyEmailInput } from "../userModule/VerifyEmailInput";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}

  @graphql.Mutation(() => LoginUserResponse)
  async LoginUser(
    @graphql.Args()
    args: LoginUserInput
  ): Promise<LoginUserResponse> {
    return this.service.LoginUser(args);
  }

  @graphql.Mutation(() => RegisterUserResponse)
  async RegisterUser(
    @graphql.Args()
    args: RegisterUserInput
  ): Promise<RegisterUserResponse> {
    return this.service.RegisterUser(args);
  }

  @graphql.Mutation(() => String)
  async VerifyEmail(
    @graphql.Args()
    args: VerifyEmailInput
  ): Promise<string> {
    return this.service.VerifyEmail(args);
  }
}
