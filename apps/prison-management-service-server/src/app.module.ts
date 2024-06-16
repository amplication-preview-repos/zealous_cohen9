import { Module } from "@nestjs/common";
import { PrisonModule } from "./prison/prison.module";
import { DetenuModule } from "./detenu/detenu.module";
import { ContraventionModule } from "./contravention/contravention.module";
import { AutorisationModule } from "./autorisation/autorisation.module";
import { GestionDeLaContraventionModule } from "./GestionDeLaContravention/gestiondelacontravention.module";
import { GestionDeLAutorisationModule } from "./GestionDeLAutorisation/gestiondelautorisation.module";
import { GestionDesDetenusModule } from "./GestionDesDetenus/gestiondesdetenus.module";
import { GestionDesPrisonsModule } from "./GestionDesPrisons/gestiondesprisons.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    PrisonModule,
    DetenuModule,
    ContraventionModule,
    AutorisationModule,
    GestionDeLaContraventionModule,
    GestionDeLAutorisationModule,
    GestionDesDetenusModule,
    GestionDesPrisonsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
