import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserModuleService } from "./usermodule.service";
import { VerifyEmailInput } from "../userModule/VerifyEmailInput";
import { LoginUserResponse } from "../userModule/LoginUserResponse";
import { RegisterUserResponse } from "../userModule/RegisterUserResponse";

@swagger.ApiTags("userModules")
@common.Controller("userModules")
export class UserModuleController {
  constructor(protected readonly service: UserModuleService) {}

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: LoginUserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginUser(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<LoginUserResponse> {
        return this.service.LoginUser(body);
      }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: RegisterUserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<RegisterUserResponse> {
        return this.service.RegisterUser(body);
      }

  @common.Post("/verify-email")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyEmail(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<string> {
        return this.service.VerifyEmail(body);
      }
}
