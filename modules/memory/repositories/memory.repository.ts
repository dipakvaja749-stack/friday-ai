import { prisma } from "@/app/lib/prisma";

export class MemoryRepository {
  async getAllByUserId(userId: string) {
    return prisma.userMemory.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async getByKey(userId: string, key: string) {
    return prisma.userMemory.findUnique({
      where: {
        userId_key: {
          userId,
          key,
        },
      },
    });
  }

  async save(userId: string, key: string, value: string) {
    return prisma.userMemory.upsert({
      where: {
        userId_key: {
          userId,
          key,
        },
      },
      update: {
        value,
      },
      create: {
        userId,
        key,
        value,
      },
    });
  }

  async delete(userId: string, key: string) {
    return prisma.userMemory.delete({
      where: {
        userId_key: {
          userId,
          key,
        },
      },
    });
  }

  async deleteAll(userId: string) {
    return prisma.userMemory.deleteMany({
      where: {
        userId,
      },
    });
  }
}