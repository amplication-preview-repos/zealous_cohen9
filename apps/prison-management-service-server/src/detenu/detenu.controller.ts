import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetenuService } from "./detenu.service";
import { DetenuControllerBase } from "./base/detenu.controller.base";

@swagger.ApiTags("detenus")
@common.Controller("detenus")
export class DetenuController extends DetenuControllerBase {
  constructor(protected readonly service: DetenuService) {
    super(service);
  }
}
