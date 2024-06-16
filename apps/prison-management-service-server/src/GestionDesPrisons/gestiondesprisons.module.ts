import { Module } from "@nestjs/common";
import { GestionDesPrisonsService } from "./gestiondesprisons.service";
import { GestionDesPrisonsController } from "./gestiondesprisons.controller";
import { GestionDesPrisonsResolver } from "./gestiondesprisons.resolver";

@Module({
  controllers: [GestionDesPrisonsController],
  providers: [GestionDesPrisonsService, GestionDesPrisonsResolver],
  exports: [GestionDesPrisonsService],
})
export class GestionDesPrisonsModule {}
