/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Contravention } from "./Contravention";
import { ContraventionCountArgs } from "./ContraventionCountArgs";
import { ContraventionFindManyArgs } from "./ContraventionFindManyArgs";
import { ContraventionFindUniqueArgs } from "./ContraventionFindUniqueArgs";
import { DeleteContraventionArgs } from "./DeleteContraventionArgs";
import { ContraventionService } from "../contravention.service";
@graphql.Resolver(() => Contravention)
export class ContraventionResolverBase {
  constructor(protected readonly service: ContraventionService) {}

  async _contraventionsMeta(
    @graphql.Args() args: ContraventionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Contravention])
  async contraventions(
    @graphql.Args() args: ContraventionFindManyArgs
  ): Promise<Contravention[]> {
    return this.service.contraventions(args);
  }

  @graphql.Query(() => Contravention, { nullable: true })
  async contravention(
    @graphql.Args() args: ContraventionFindUniqueArgs
  ): Promise<Contravention | null> {
    const result = await this.service.contravention(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Contravention)
  async deleteContravention(
    @graphql.Args() args: DeleteContraventionArgs
  ): Promise<Contravention | null> {
    try {
      return await this.service.deleteContravention(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}