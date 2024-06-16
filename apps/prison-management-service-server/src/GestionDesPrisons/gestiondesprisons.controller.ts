import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GestionDesPrisonsService } from "./gestiondesprisons.service";

@swagger.ApiTags("gestionDesPrisons")
@common.Controller("gestionDesPrisons")
export class GestionDesPrisonsController {
  constructor(protected readonly service: GestionDesPrisonsService) {}
}
