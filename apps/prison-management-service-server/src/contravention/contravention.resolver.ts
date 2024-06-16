import * as graphql from "@nestjs/graphql";
import { ContraventionResolverBase } from "./base/contravention.resolver.base";
import { Contravention } from "./base/Contravention";
import { ContraventionService } from "./contravention.service";

@graphql.Resolver(() => Contravention)
export class ContraventionResolver extends ContraventionResolverBase {
  constructor(protected readonly service: ContraventionService) {
    super(service);
  }
}
