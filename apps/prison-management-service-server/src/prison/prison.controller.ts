import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrisonService } from "./prison.service";
import { PrisonControllerBase } from "./base/prison.controller.base";

@swagger.ApiTags("prisons")
@common.Controller("prisons")
export class PrisonController extends PrisonControllerBase {
  constructor(protected readonly service: PrisonService) {
    super(service);
  }
}
