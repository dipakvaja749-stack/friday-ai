// import { prisma } from "@/app/lib/prisma";
// import { CreateChatDto } from "../dto/create-chat.dto";

// export class ChatRepository {
//   async create(data: CreateChatDto) {
//     return prisma.chat.create({
//       data,
//     });
//   }

//   async findByUserId(userId: string) {
//     return prisma.chat.findMany({
//       where: {
//         userId,
//       },
//       orderBy: {
//         updatedAt: "desc",
//       },
//     });
//   }
// }

import { prisma } from "@/app/lib/prisma";
import { CreateChatDto } from "../dto/create-chat.dto";

export class ChatRepository {
  async create(data: CreateChatDto) {
    return prisma.chat.create({
      data,
    });
  }

  async findByUserId(userId: string) {
    return prisma.chat.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  // async delete(id: string) {
  //   return prisma.chat.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
  async delete(id: string) {
    await prisma.message.deleteMany({
      where: {
        chatId: id,
      },
    });

    return prisma.chat.delete({
      where: {
        id,
      },
    });
  }

  async rename(id: string, title: string) {
    return prisma.chat.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
  }
  async search(userId: string, query: string) {
    return prisma.chat.findMany({
      where: {
        userId,
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
  async togglePin(id: string) {
    const chat = await prisma.chat.findUnique({
      where: {
        id,
      },
    });

    if (!chat) {
      throw new Error("Chat not found");
    }

    return prisma.chat.update({
      where: {
        id,
      },
      data: {
        pinned: !chat.pinned,
      },
    });
  }
}
