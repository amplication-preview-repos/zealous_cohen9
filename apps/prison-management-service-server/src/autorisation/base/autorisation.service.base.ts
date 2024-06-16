/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Autorisation as PrismaAutorisation } from "@prisma/client";

export class AutorisationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AutorisationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.autorisation.count(args);
  }

  async autorisations<T extends Prisma.AutorisationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AutorisationFindManyArgs>
  ): Promise<PrismaAutorisation[]> {
    return this.prisma.autorisation.findMany<Prisma.AutorisationFindManyArgs>(
      args
    );
  }
  async autorisation<T extends Prisma.AutorisationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AutorisationFindUniqueArgs>
  ): Promise<PrismaAutorisation | null> {
    return this.prisma.autorisation.findUnique(args);
  }
  async createAutorisation<T extends Prisma.AutorisationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AutorisationCreateArgs>
  ): Promise<PrismaAutorisation> {
    return this.prisma.autorisation.create<T>(args);
  }
  async updateAutorisation<T extends Prisma.AutorisationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AutorisationUpdateArgs>
  ): Promise<PrismaAutorisation> {
    return this.prisma.autorisation.update<T>(args);
  }
  async deleteAutorisation<T extends Prisma.AutorisationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AutorisationDeleteArgs>
  ): Promise<PrismaAutorisation> {
    return this.prisma.autorisation.delete(args);
  }
}