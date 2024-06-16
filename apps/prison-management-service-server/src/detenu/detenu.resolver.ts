import * as graphql from "@nestjs/graphql";
import { DetenuResolverBase } from "./base/detenu.resolver.base";
import { Detenu } from "./base/Detenu";
import { DetenuService } from "./detenu.service";

@graphql.Resolver(() => Detenu)
export class DetenuResolver extends DetenuResolverBase {
  constructor(protected readonly service: DetenuService) {
    super(service);
  }
}
