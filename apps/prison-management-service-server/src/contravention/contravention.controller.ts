import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContraventionService } from "./contravention.service";
import { ContraventionControllerBase } from "./base/contravention.controller.base";

@swagger.ApiTags("contraventions")
@common.Controller("contraventions")
export class ContraventionController extends ContraventionControllerBase {
  constructor(protected readonly service: ContraventionService) {
    super(service);
  }
}
