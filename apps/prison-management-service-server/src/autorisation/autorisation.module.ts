import { Module } from "@nestjs/common";
import { AutorisationModuleBase } from "./base/autorisation.module.base";
import { AutorisationService } from "./autorisation.service";
import { AutorisationController } from "./autorisation.controller";
import { AutorisationResolver } from "./autorisation.resolver";

@Module({
  imports: [AutorisationModuleBase],
  controllers: [AutorisationController],
  providers: [AutorisationService, AutorisationResolver],
  exports: [AutorisationService],
})
export class AutorisationModule {}
