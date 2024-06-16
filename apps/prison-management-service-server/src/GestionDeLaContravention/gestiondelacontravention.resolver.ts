import * as graphql from "@nestjs/graphql";
import { GestionDeLaContraventionService } from "./gestiondelacontravention.service";

export class GestionDeLaContraventionResolver {
  constructor(protected readonly service: GestionDeLaContraventionService) {}
}
