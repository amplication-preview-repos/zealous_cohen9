import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GestionDesDetenusService } from "./gestiondesdetenus.service";

@swagger.ApiTags("gestionDesDetenus")
@common.Controller("gestionDesDetenus")
export class GestionDesDetenusController {
  constructor(protected readonly service: GestionDesDetenusService) {}
}
