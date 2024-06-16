import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AutorisationService } from "./autorisation.service";
import { AutorisationControllerBase } from "./base/autorisation.controller.base";

@swagger.ApiTags("autorisations")
@common.Controller("autorisations")
export class AutorisationController extends AutorisationControllerBase {
  constructor(protected readonly service: AutorisationService) {
    super(service);
  }
}
