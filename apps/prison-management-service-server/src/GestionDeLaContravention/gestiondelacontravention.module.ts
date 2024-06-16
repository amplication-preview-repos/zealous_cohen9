import { Module } from "@nestjs/common";
import { GestionDeLaContraventionService } from "./gestiondelacontravention.service";
import { GestionDeLaContraventionController } from "./gestiondelacontravention.controller";
import { GestionDeLaContraventionResolver } from "./gestiondelacontravention.resolver";

@Module({
  controllers: [GestionDeLaContraventionController],
  providers: [GestionDeLaContraventionService, GestionDeLaContraventionResolver],
  exports: [GestionDeLaContraventionService],
})
export class GestionDeLaContraventionModule {}
