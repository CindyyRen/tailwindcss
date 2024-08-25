import { PrismaClient } from '@prisma/client';
import { DateTimeResolver } from 'graphql-scalars';

const prisma = new PrismaClient();
export const resolvers = {
  DateTime: DateTimeResolver,
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
    company: (_, { id }) => prisma.company.findUnique({ where: { id } }),
  },
  Mutation: {
    createJob: async (_root, { input }) => {
      const newJob = await prisma.job.create({
        data: {
          title: input.title,
          description: input.description,
          location: input.location,
          salary: input.salary,
          companyId: input.companyId,
          // postedAt 会自动设置为当前时间（如果在 Prisma schema 中设置了 @default(now())）
        },
      });
      return newJob;
    },
    updateJob: async (_root, { input }) => {
      const updatedJob = await prisma.job.update({
        where: { id: parseInt(input.id) },
        data: {
          title: input.title,
          description: input.description,
          location: input.location,
          salary: input.salary,
          companyId: input.companyId,
        },
      });
      return updatedJob;
    },
    deleteJob: async (_root, { id }) => {
      const deletedJob = await prisma.job.delete({
        where: { id: parseInt(id) },
      });
      return deletedJob;
    },
  },
};
