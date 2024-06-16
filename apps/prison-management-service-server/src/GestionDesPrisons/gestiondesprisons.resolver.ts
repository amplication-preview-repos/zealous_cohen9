import * as graphql from "@nestjs/graphql";
import { GestionDesPrisonsService } from "./gestiondesprisons.service";

export class GestionDesPrisonsResolver {
  constructor(protected readonly service: GestionDesPrisonsService) {}
}
