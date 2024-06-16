/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AutorisationService } from "../autorisation.service";
import { AutorisationCreateInput } from "./AutorisationCreateInput";
import { Autorisation } from "./Autorisation";
import { AutorisationFindManyArgs } from "./AutorisationFindManyArgs";
import { AutorisationWhereUniqueInput } from "./AutorisationWhereUniqueInput";
import { AutorisationUpdateInput } from "./AutorisationUpdateInput";

export class AutorisationControllerBase {
  constructor(protected readonly service: AutorisationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Autorisation })
  async createAutorisation(
    @common.Body() data: AutorisationCreateInput
  ): Promise<Autorisation> {
    return await this.service.createAutorisation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Autorisation] })
  @ApiNestedQuery(AutorisationFindManyArgs)
  async autorisations(@common.Req() request: Request): Promise<Autorisation[]> {
    const args = plainToClass(AutorisationFindManyArgs, request.query);
    return this.service.autorisations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Autorisation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async autorisation(
    @common.Param() params: AutorisationWhereUniqueInput
  ): Promise<Autorisation | null> {
    const result = await this.service.autorisation({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Autorisation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAutorisation(
    @common.Param() params: AutorisationWhereUniqueInput,
    @common.Body() data: AutorisationUpdateInput
  ): Promise<Autorisation | null> {
    try {
      return await this.service.updateAutorisation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Autorisation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAutorisation(
    @common.Param() params: AutorisationWhereUniqueInput
  ): Promise<Autorisation | null> {
    try {
      return await this.service.deleteAutorisation({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
