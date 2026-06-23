import { prisma } from "@/app/lib/prisma";
import { CreateMessageDto } from "../dto/create-message.dto";

export class MessageRepository {
  async create(data: CreateMessageDto) {
    return prisma.message.create({
      data,
    });
  }

  async findByChatId(chatId: string) {
    return prisma.message.findMany({
      where: {
        chatId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }
}