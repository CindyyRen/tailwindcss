import { PrismaClient } from '@prisma/client';
import { DateTimeResolver } from 'graphql-scalars';

const prisma = new PrismaClient();
export const resolvers = {
  DateTime: DateTimeResolver,
  // Job: {
  //   company: (parent) => prisma.company.findUnique({ where: { id: parent.companyId } }),
  // },
  Job: {
    company: async (parent) => {
      return await prisma.company.findUnique({
        where: { id: parent.companyId },
      });
    },
  },
  Query: {
    jobs: async () => {
      const items = await prisma.job.findMany();
      return {
        items,
        totalCount: await prisma.job.count(),
      };
    },
    job: (_, { id }) => prisma.job.findUnique({ where: { id } }),
  },
};
