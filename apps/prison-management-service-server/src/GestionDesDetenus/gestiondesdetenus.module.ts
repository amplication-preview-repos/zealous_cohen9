import { Module } from "@nestjs/common";
import { GestionDesDetenusService } from "./gestiondesdetenus.service";
import { GestionDesDetenusController } from "./gestiondesdetenus.controller";
import { GestionDesDetenusResolver } from "./gestiondesdetenus.resolver";

@Module({
  controllers: [GestionDesDetenusController],
  providers: [GestionDesDetenusService, GestionDesDetenusResolver],
  exports: [GestionDesDetenusService],
})
export class GestionDesDetenusModule {}
