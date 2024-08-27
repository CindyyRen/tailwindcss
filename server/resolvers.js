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
    // jobs: async (_, { limit, offset }) => {
    //   const items = await prisma.job.findMany({
    //     skip: offset,
    //     take: limit,
    //   });
    //   // Count the total number of jobs
    //   const totalCount = await prisma.job.count();
    //   return {
    //     items,
    //     totalCount,
    //   };
    // },
    // jobs0: async (_, { limit, offset }) => {
    //   const items = await prisma.job.findMany({});
    //   // Count the total number of jobs
    //   const totalCount = await prisma.job.count();
    //   return {
    //     items,
    //     totalCount,
    //   };
    // },
    jobs: async (_, { limit, offset }) => {
      try {
        const items = await prisma.job.findMany({
          // skip: offset || 0,
          skip: 0,
          // take: limit || 10,
          take: 10,
          include: {
            company: true,
          },
        });
        const totalCount = await prisma.job.count();
        return { items, totalCount };
      } catch (error) {
        console.error('Error fetching jobs:', error);
        throw new Error('Failed to fetch jobs');
      }
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
