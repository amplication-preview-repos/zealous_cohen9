import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrisonServiceBase } from "./base/prison.service.base";

@Injectable()
export class PrisonService extends PrisonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
