import { Injectable } from "@nestjs/common";
import { LoginUserInput } from "../userModule/LoginUserInput";
import { LoginUserResponse } from "../userModule/LoginUserResponse";
import { RegisterUserInput } from "../userModule/RegisterUserInput";
import { RegisterUserResponse } from "../userModule/RegisterUserResponse";
import { VerifyEmailInput } from "../userModule/VerifyEmailInput";

@Injectable()
export class UserModuleService {
  constructor() {}
  async LoginUser(args: LoginUserInput): Promise<LoginUserResponse> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: RegisterUserInput): Promise<RegisterUserResponse> {
    throw new Error("Not implemented");
  }
  async VerifyEmail(args: VerifyEmailInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
