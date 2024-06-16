import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetenuServiceBase } from "./base/detenu.service.base";

@Injectable()
export class DetenuService extends DetenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
