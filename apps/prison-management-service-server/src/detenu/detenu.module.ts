import { Module } from "@nestjs/common";
import { DetenuModuleBase } from "./base/detenu.module.base";
import { DetenuService } from "./detenu.service";
import { DetenuController } from "./detenu.controller";
import { DetenuResolver } from "./detenu.resolver";

@Module({
  imports: [DetenuModuleBase],
  controllers: [DetenuController],
  providers: [DetenuService, DetenuResolver],
  exports: [DetenuService],
})
export class DetenuModule {}
