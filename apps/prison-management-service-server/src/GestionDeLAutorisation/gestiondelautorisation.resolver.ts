import * as graphql from "@nestjs/graphql";
import { GestionDeLAutorisationService } from "./gestiondelautorisation.service";

export class GestionDeLAutorisationResolver {
  constructor(protected readonly service: GestionDeLAutorisationService) {}
}
