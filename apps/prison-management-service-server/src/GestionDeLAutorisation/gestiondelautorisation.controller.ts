import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GestionDeLAutorisationService } from "./gestiondelautorisation.service";

@swagger.ApiTags("gestionDeLAutorisations")
@common.Controller("gestionDeLAutorisations")
export class GestionDeLAutorisationController {
  constructor(protected readonly service: GestionDeLAutorisationService) {}
}
