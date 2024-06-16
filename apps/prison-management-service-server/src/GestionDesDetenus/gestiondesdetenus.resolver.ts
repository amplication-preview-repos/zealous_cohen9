import * as graphql from "@nestjs/graphql";
import { GestionDesDetenusService } from "./gestiondesdetenus.service";

export class GestionDesDetenusResolver {
  constructor(protected readonly service: GestionDesDetenusService) {}
}
