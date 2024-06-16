import { Module } from "@nestjs/common";
import { GestionDeLAutorisationService } from "./gestiondelautorisation.service";
import { GestionDeLAutorisationController } from "./gestiondelautorisation.controller";
import { GestionDeLAutorisationResolver } from "./gestiondelautorisation.resolver";

@Module({
  controllers: [GestionDeLAutorisationController],
  providers: [GestionDeLAutorisationService, GestionDeLAutorisationResolver],
  exports: [GestionDeLAutorisationService],
})
export class GestionDeLAutorisationModule {}
