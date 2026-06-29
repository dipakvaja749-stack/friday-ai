// // // import { prisma } from "@/app/lib/prisma";
// // // import { CreateMessageDto } from "../dto/create-message.dto";

// // // export class MessageRepository {
// // //   async create(data: CreateMessageDto) {
// // //     return prisma.message.create({
// // //       data,
// // //     });
// // //   }

// // //   async findByChatId(chatId: string) {
// // //     return prisma.message.findMany({
// // //       where: {
// // //         chatId,
// // //       },
// // //       orderBy: {
// // //         createdAt: "asc",
// // //       },
// // //     });
// // //   }
// // // }
// // import { prisma } from "@/app/lib/prisma";
// // import { CreateMessageDto } from "../dto/create-message.dto";

// // export class MessageRepository {
// //   async create(data: CreateMessageDto) {
// //     return prisma.message.create({
// //       data,
// //     });
// //   }

// //   async findByChatId(chatId: string) {
// //     return prisma.message.findMany({
// //       where: {
// //         chatId,
// //       },
// //       orderBy: {
// //         createdAt: "asc",
// //       },
// //     });
// //   }

// //   // async update(id: string, content: string) {
// //   //   return prisma.message.update({
// //   //     where: {
// //   //       id,
// //   //     },
// //   //     data: {
// //   //       content,
// //   //     },
// //   //   });
// //   // }
// // async update(id: string, content: string) {
// //   return prisma.message.update({
// //     where: { id },
// //     data: { content },
// //   });
// // }

// // async findNextAssistantMessage(chatId: string, createdAt: Date) {
// //   return prisma.message.findFirst({
// //     where: {
// //       chatId,
// //       role: "ASSISTANT",
// //       createdAt: {
// //         gt: createdAt,
// //       },
// //     },
// //     orderBy: {
// //       createdAt: "asc",
// //     },
// //   });
// // }
// //   // async delete(id: string) {
// //   //   return prisma.message.delete({
// //   //     where: {
// //   //       id,
// //   //     },
// //   //   });
// //   // }
// //   async deletePair(id: string) {
// //   const message = await prisma.message.findUnique({
// //     where: { id },
// //   });

// //   if (!message) return;

// //   const nextMessage = await prisma.message.findFirst({
// //     where: {
// //       chatId: message.chatId,
// //       createdAt: {
// //         gt: message.createdAt,
// //       },
// //       role: "ASSISTANT",
// //     },
// //     orderBy: {
// //       createdAt: "asc",
// //     },
// //   });

// //   await prisma.message.delete({
// //     where: { id },
// //   });

// //   if (nextMessage) {
// //     await prisma.message.delete({
// //       where: { id: nextMessage.id },
// //     });
// //   }
// // }
// // }

// import { prisma } from "@/app/lib/prisma";
// import { CreateMessageDto } from "../dto/create-message.dto";
// import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

// export class MessageRepository {
//   async create(data: CreateMessageDto) {
//     return prisma.message.create({
//       data,
//     });
//   }

//   async findByChatId(chatId: string) {
//     return prisma.message.findMany({
//       where: {
//         chatId,
//       },
//       orderBy: {
//         createdAt: "asc",
//       },
//     });
//   }

//   async findAssistantByParentId(parentId: string) {
//     return prisma.message.findFirst({
//       where: {
//         parentId,
//         role: "ASSISTANT",
//       },
//     });
//   }

//   // async update(id: string, content: string) {
//   //   return prisma.message.update({
//   //     where: { id },
//   //     data: { content },
//   //   });
//   // }

//   // async delete(id: string) {
//   //   return prisma.message.delete({
//   //     where: { id },
//   //   });
//   // }

//   // async deleteByParentId(parentId: string) {
//   //   return prisma.message.deleteMany({
//   //     where: {
//   //       parentId,
//   //     },
//   //   });
//   // }
// //   async updateMessageWithResponse(
// //   id: string,
// //   content: string
// // ) {
// //   // user message update
// //   await prisma.message.update({
// //     where: { id },
// //     data: { content },
// //   });

// //   // assistant message find
// //   const assistantMessage =
// //     await prisma.message.findFirst({
// //       where: {
// //         parentId: id,
// //       },
// //     });

// //   if (assistantMessage) {
// //     const newResponse =
// //       await generateResponseAction(content);

// //     await prisma.message.update({
// //       where: {
// //         id: assistantMessage.id,
// //       },
// //       data: {
// //         content: newResponse,
// //       },
// //     });
// //   }
// // }
// // async updateMessageWithResponse(
// //   id: string,
// //   content: string
// // ) {
// //   // update user message
// //   await prisma.message.update({
// //     where: { id },
// //     data: { content },
// //   });

// //   // find assistant reply
// //   const assistantMessage =
// //     await prisma.message.findFirst({
// //       where: {
// //         parentId: id,
// //         role: "ASSISTANT",
// //       },
// //     });

// //   if (assistantMessage) {
// //     const newResponse =
// //       await generateResponseAction(content);

// //     await prisma.message.update({
// //       where: {
// //         id: assistantMessage.id,
// //       },
// //       data: {
// //         content: newResponse ?? "No response from AI",
// //       },
// //     });
// //   }
// // }
// async updateMessageWithResponse(
//   id: string,
//   content: string
// ) {
//   // update user message
//   await prisma.message.update({
//     where: { id },
//     data: { content },
//   });

//   const userMessage = await prisma.message.findUnique({
//     where: {
//       id,
//     },
//   });

//   // find assistant reply
//   const assistantMessage =
//     await prisma.message.findFirst({
//       where: {
//         parentId: id,
//         role: "ASSISTANT",
//       },
//     });

//   if (assistantMessage) {
//     const newResponse =
//       await generateResponseAction({
//         prompt: content,
//         fileUrl: userMessage?.fileUrl,
//         fileType:
//           userMessage?.fileType as
//             | "image"
//             | "pdf"
//             | undefined,
//       });

//     await prisma.message.update({
//       where: {
//         id: assistantMessage.id,
//       },
//       data: {
//         content: newResponse ?? "No response from AI",
//       },
//     });
//   }
// }

// // async deleteMessageWithResponse(id: string) {
// //   // delete assistant response first
// //   await prisma.message.deleteMany({
// //     where: {
// //       parentId: id,
// //     },
// //   });

// //   // delete user message
// //   await prisma.message.delete({
// //     where: {
// //       id,
// //     },
// //   });
// // }
// async deleteMessageWithResponse(id: string) {

//   const replies = await prisma.message.findMany({
//     where: {
//       parentId: id,
//     },
//   });

//   console.log("REPLIES =", replies);

//   await prisma.message.deleteMany({
//     where: {
//       parentId: id,
//     },
//   });

//   await prisma.message.delete({
//     where: {
//       id,
//     },
//   });
// }
// }

import { prisma } from "@/app/lib/prisma";
import { CreateMessageDto } from "../dto/create-message.dto";
import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

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

  async findAssistantByParentId(parentId: string) {
    return prisma.message.findFirst({
      where: {
        parentId,
        role: "ASSISTANT",
      },
    });
  }

  async updateMessageWithResponse(
    id: string,
    content: string
  ) {
    // Update user message
    await prisma.message.update({
      where: { id },
      data: { content },
    });

    // Get updated user message (includes uploaded file)
    const userMessage = await prisma.message.findUnique({
      where: {
        id,
      },
    });

    // Find assistant reply
    const assistantMessage = await prisma.message.findFirst({
      where: {
        parentId: id,
        role: "ASSISTANT",
      },
    });

    if (assistantMessage) {
      const newResponse =
        await generateResponseAction({
          prompt: content,
          fileUrl: userMessage?.fileUrl ?? undefined,
          fileType:
            userMessage?.fileType === "image" ||
            userMessage?.fileType === "pdf"
              ? userMessage.fileType
              : undefined,
        });

      await prisma.message.update({
        where: {
          id: assistantMessage.id,
        },
        data: {
          content: newResponse ?? "No response from AI",
        },
      });
    }
  }

  async deleteMessageWithResponse(id: string) {
    const replies = await prisma.message.findMany({
      where: {
        parentId: id,
      },
    });

    console.log("REPLIES =", replies);

    await prisma.message.deleteMany({
      where: {
        parentId: id,
      },
    });

    await prisma.message.delete({
      where: {
        id,
      },
    });
  }
}