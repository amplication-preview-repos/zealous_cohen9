import { Module } from "@nestjs/common";
import { ContraventionModuleBase } from "./base/contravention.module.base";
import { ContraventionService } from "./contravention.service";
import { ContraventionController } from "./contravention.controller";
import { ContraventionResolver } from "./contravention.resolver";

@Module({
  imports: [ContraventionModuleBase],
  controllers: [ContraventionController],
  providers: [ContraventionService, ContraventionResolver],
  exports: [ContraventionService],
})
export class ContraventionModule {}
