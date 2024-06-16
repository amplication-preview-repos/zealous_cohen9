import { Module } from "@nestjs/common";
import { PrisonModuleBase } from "./base/prison.module.base";
import { PrisonService } from "./prison.service";
import { PrisonController } from "./prison.controller";
import { PrisonResolver } from "./prison.resolver";

@Module({
  imports: [PrisonModuleBase],
  controllers: [PrisonController],
  providers: [PrisonService, PrisonResolver],
  exports: [PrisonService],
})
export class PrisonModule {}
