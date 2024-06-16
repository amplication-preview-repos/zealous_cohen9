import * as graphql from "@nestjs/graphql";
import { AutorisationResolverBase } from "./base/autorisation.resolver.base";
import { Autorisation } from "./base/Autorisation";
import { AutorisationService } from "./autorisation.service";

@graphql.Resolver(() => Autorisation)
export class AutorisationResolver extends AutorisationResolverBase {
  constructor(protected readonly service: AutorisationService) {
    super(service);
  }
}
