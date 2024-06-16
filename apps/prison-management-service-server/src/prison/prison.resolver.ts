import * as graphql from "@nestjs/graphql";
import { PrisonResolverBase } from "./base/prison.resolver.base";
import { Prison } from "./base/Prison";
import { PrisonService } from "./prison.service";

@graphql.Resolver(() => Prison)
export class PrisonResolver extends PrisonResolverBase {
  constructor(protected readonly service: PrisonService) {
    super(service);
  }
}
