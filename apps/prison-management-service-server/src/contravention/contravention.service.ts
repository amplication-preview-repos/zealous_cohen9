import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContraventionServiceBase } from "./base/contravention.service.base";

@Injectable()
export class ContraventionService extends ContraventionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
