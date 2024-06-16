import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GestionDeLaContraventionService } from "./gestiondelacontravention.service";

@swagger.ApiTags("gestionDeLaContraventions")
@common.Controller("gestionDeLaContraventions")
export class GestionDeLaContraventionController {
  constructor(protected readonly service: GestionDeLaContraventionService) {}
}
