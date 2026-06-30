// // // // // // // // // "use server";

// // // // // // // // // import { MessageController } from "../controllers/message.controller";
// // // // // // // // // import { CreateMessageSchema } from "../validations/create-message.schema";

// // // // // // // // // const controller = new MessageController();

// // // // // // // // // export async function sendMessageAction(
// // // // // // // // //   values: unknown
// // // // // // // // // ) {
// // // // // // // // //   const validatedFields =
// // // // // // // // //     CreateMessageSchema.safeParse(values);

// // // // // // // // //   if (!validatedFields.success) {
// // // // // // // // //     throw new Error("Invalid input");
// // // // // // // // //   }

// // // // // // // // //   return controller.createMessage({
// // // // // // // // //     ...validatedFields.data,
// // // // // // // // //     role: "USER",
// // // // // // // // //   });
// // // // // // // // // }
// // // // // // // // "use server";

// // // // // // // // import { MessageController } from "../controllers/message.controller";
// // // // // // // // import { CreateMessageSchema } from "../validations/create-message.schema";
// // // // // // // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

// // // // // // // // const controller = new MessageController();

// // // // // // // // export async function sendMessageAction(values: unknown) {
// // // // // // // //   // const validatedFields = CreateMessageSchema.safeParse(values);

// // // // // // // //   // if (!validatedFields.success) {
// // // // // // // //   //   throw new Error("Invalid input");
// // // // // // // //   // }
// // // // // // // //   console.log("VALUES =>", values);

// // // // // // // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // // // // // // //   if (!validatedFields.success) {
// // // // // // // //     console.log(validatedFields.error.flatten());
// // // // // // // //     throw new Error("Invalid input");
// // // // // // // //   }

// // // // // // // //   const { content, chatId } = validatedFields.data;

// // // // // // // //   // USER Message
// // // // // // // //   await controller.createMessage({
// // // // // // // //     content,
// // // // // // // //     role: "USER",
// // // // // // // //     chatId,
// // // // // // // //   });

// // // // // // // //   // AI Response
// // // // // // // //   const response = await generateResponseAction(content);

// // // // // // // //   // ASSISTANT Message
// // // // // // // //   await controller.createMessage({
// // // // // // // //     content: response ?? "",
// // // // // // // //     role: "ASSISTANT",
// // // // // // // //     chatId,
// // // // // // // //   });

// // // // // // // //   return response;
// // // // // // // // }

// // // // // // // "use server";

// // // // // // // import { MessageController } from "../controllers/message.controller";
// // // // // // // import { CreateMessageSchema } from "../validations/create-message.schema";
// // // // // // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

// // // // // // // const controller = new MessageController();

// // // // // // // export async function sendMessageAction(values: unknown) {
// // // // // // //   console.log("Received values:", values);

// // // // // // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // // // // // //   if (!validatedFields.success) {
// // // // // // //     console.log(validatedFields.error.flatten());

// // // // // // //     throw new Error(
// // // // // // //       JSON.stringify(validatedFields.error.flatten())
// // // // // // //     );
// // // // // // //   }

// // // // // // //   const { content, chatId } = validatedFields.data;

// // // // // // //   await controller.createMessage({
// // // // // // //     content,
// // // // // // //     role: "USER",
// // // // // // //     chatId,
// // // // // // //   });

// // // // // // //   const response = await generateResponseAction(content);

// // // // // // //   await controller.createMessage({
// // // // // // //     content: response ?? "",
// // // // // // //     role: "ASSISTANT",
// // // // // // //     chatId,
// // // // // // //   });

// // // // // // //   return response;
// // // // // // // }

// // // // // // "use server";

// // // // // // import { MessageController } from "../controllers/message.controller";
// // // // // // import { CreateMessageSchema } from "../validations/create-message.schema";
// // // // // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

// // // // // // const controller = new MessageController();

// // // // // // export async function sendMessageAction(values: unknown) {
// // // // // //   console.log("Received values:", values);

// // // // // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // // // // //   if (!validatedFields.success) {
// // // // // //     console.log(validatedFields.error.flatten());

// // // // // //     throw new Error(
// // // // // //       JSON.stringify(validatedFields.error.flatten())
// // // // // //     );
// // // // // //   }

// // // // // //   const { content, chatId } = validatedFields.data;

// // // // // //   // USER message
// // // // // //   await controller.createMessage({
// // // // // //     content,
// // // // // //     role: "USER",
// // // // // //     chatId,
// // // // // //   });

// // // // // //   console.log("User message saved");

// // // // // //   // AI response
// // // // // //   const response = await generateResponseAction(content);

// // // // // //   console.log("AI RESPONSE =", response);

// // // // // //   // ASSISTANT message
// // // // // //   await controller.createMessage({
// // // // // //     content: response || "No response from AI",
// // // // // //     role: "ASSISTANT",
// // // // // //     chatId,
// // // // // //   });

// // // // // //   console.log("Assistant message saved");

// // // // // //   return response;
// // // // // // }
// // // // // "use server";

// // // // // import { MessageController } from "../controllers/message.controller";
// // // // // import { CreateMessageSchema } from "../validations/create-message.schema";
// // // // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
// // // // // import { revalidatePath } from "next/cache";

// // // // // const controller = new MessageController();

// // // // // export async function sendMessageAction(values: unknown) {
// // // // //   console.log("Received values:", values);

// // // // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // // // //   if (!validatedFields.success) {
// // // // //     throw new Error(
// // // // //       JSON.stringify(validatedFields.error.flatten())
// // // // //     );
// // // // //   }

// // // // //   const { content, chatId } = validatedFields.data;

// // // // //   // USER MESSAGE
// // // // //   await controller.createMessage({
// // // // //     content,
// // // // //     role: "USER",
// // // // //     chatId,
// // // // //   });

// // // // //   console.log("User message saved");

// // // // //   // AI RESPONSE
// // // // //   const response = await generateResponseAction(content);

// // // // //   console.log("AI RESPONSE =", response);

// // // // //   // ASSISTANT MESSAGE
// // // // //   await controller.createMessage({
// // // // //     content: response || "No response from AI",
// // // // //     role: "ASSISTANT",
// // // // //     chatId,
// // // // //   });

// // // // //   console.log("Assistant message saved");

// // // // //   // ⭐ IMPORTANT
// // // // //   revalidatePath(`/dashboard/chat/${chatId}`);

// // // // //   return response;
// // // // // }

// // // // // "use server";

// // // // // import { revalidatePath } from "next/cache";

// // // // // import { prisma } from "@/app/lib/prisma";
// // // // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
// // // // // import { ChatController } from "@/modules/chat/controllers/chat.controller";

// // // // // import { MessageController } from "../controllers/message.controller";
// // // // // import { CreateMessageSchema } from "../validations/create-message.schema";

// // // // // const controller = new MessageController();
// // // // // const chatController = new ChatController();

// // // // // export async function sendMessageAction(values: unknown) {
// // // // //   console.log("Received values:", values);

// // // // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // // // //   if (!validatedFields.success) {
// // // // //     throw new Error(
// // // // //       JSON.stringify(validatedFields.error.flatten())
// // // // //     );
// // // // //   }

// // // // //   const { content, chatId } = validatedFields.data;

// // // // //   // USER MESSAGE
// // // // //   // await controller.createMessage({
// // // // //   //   content,
// // // // //   //   role: "USER",
// // // // //   //   chatId,
// // // // //   // });
// // // // //   const userMessage = await controller.createMessage({
// // // // //   content,
// // // // //   role: "USER",
// // // // //   chatId,
// // // // // });
// // // // // await controller.createMessage({
// // // // //   content: response || "No response from AI",
// // // // //   role: "ASSISTANT",
// // // // //   chatId,
// // // // //   parentId: userMessage.id,
// // // // // });

// // // // //   console.log("User message saved");

// // // // //   // AUTO RENAME CHAT
// // // // //   const chat = await prisma.chat.findUnique({
// // // // //     where: {
// // // // //       id: chatId,
// // // // //     },
// // // // //   });

// // // // //   if (chat?.title === "New Chat") {
// // // // //     await chatController.renameChat(
// // // // //       chatId,
// // // // //       content.slice(0, 30) // first 30 chars
// // // // //     );
// // // // //   }

// // // // //   // AI RESPONSE
// // // // //   const response = await generateResponseAction(content);

// // // // //   console.log("AI RESPONSE =", response);

// // // // //   // ASSISTANT MESSAGE
// // // // //   await controller.createMessage({
// // // // //     content: response || "No response from AI",
// // // // //     role: "ASSISTANT",
// // // // //     chatId,
// // // // //   });

// // // // //   console.log("Assistant message saved");

// // // // //   // Refresh current chat page
// // // // //   revalidatePath(`/dashboard/chat/${chatId}`);

// // // // //   // Refresh sidebar chat list
// // // // //   revalidatePath("/dashboard");

// // // // //   return response;
// // // // // }

// // // // "use server";

// // // // import { revalidatePath } from "next/cache";
// // // // import { prisma } from "@/app/lib/prisma";
// // // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
// // // // import { ChatController } from "@/modules/chat/controllers/chat.controller";
// // // // import { MessageController } from "../controllers/message.controller";
// // // // import { CreateMessageSchema } from "../validations/create-message.schema";

// // // // const controller = new MessageController();
// // // // const chatController = new ChatController();

// // // // export async function sendMessageAction(values: unknown) {
// // // //   console.log("Received values:", values);

// // // //   const validatedFields = CreateMessageSchema.safeParse(values);
// // // //   console.log(validatedFields.data);

// // // //   if (!validatedFields.success) {
// // // //     throw new Error(
// // // //       JSON.stringify(validatedFields.error.flatten())
// // // //     );
// // // //   }

// // // //   // const { content, chatId } = validatedFields.data;
// // // //  const {
// // // //   content,
// // // //   chatId,
// // // //   imageUrl,
// // // // } = validatedFields.data;

// // // //   // USER MESSAGE
// // // //   // const userMessage = await controller.createMessage({
// // // //   //   content,
// // // //   //   role: "USER",
// // // //   //   chatId,
// // // //   // });
// // // // const userMessage = await controller.createMessage({
// // // //   content,
// // // //   imageUrl,
// // // //   role: "USER",
// // // //   chatId,
// // // // });
// // // //   console.log("User message saved");

// // // //   // AUTO RENAME CHAT
// // // //   const chat = await prisma.chat.findUnique({
// // // //     where: {
// // // //       id: chatId,
// // // //     },
// // // //   });

// // // //   if (chat?.title === "New Chat") {
// // // //     await chatController.renameChat(
// // // //       chatId,
// // // //       content.slice(0, 30)
// // // //     );
// // // //   }

// // // //   // AI RESPONSE
// // // //   const response = await generateResponseAction(content);

// // // //   console.log("AI RESPONSE =", response);

// // // //   // ASSISTANT MESSAGE
// // // //   await controller.createMessage({
// // // //     content: response || "No response from AI",
// // // //     role: "ASSISTANT",
// // // //     chatId,
// // // //     parentId: userMessage.id,
// // // //   });

// // // //   console.log("Assistant message saved");

// // // //   // Refresh page
// // // //   revalidatePath(`/dashboard/chat/${chatId}`);
// // // //   revalidatePath("/dashboard");

// // // //   return {
// // // //     success: true,
// // // //     response,
// // // //   };
// // // // }

// // // "use server";

// // // import { revalidatePath } from "next/cache";
// // // import { prisma } from "@/app/lib/prisma";
// // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
// // // import { ChatController } from "@/modules/chat/controllers/chat.controller";
// // // import { MessageController } from "../controllers/message.controller";
// // // import { CreateMessageSchema } from "../validations/create-message.schema";

// // // const controller = new MessageController();
// // // const chatController = new ChatController();

// // // export async function sendMessageAction(values: unknown) {
// // //   console.log("Received values:", values);

// // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // //   if (!validatedFields.success) {
// // //     throw new Error(
// // //       JSON.stringify(validatedFields.error.flatten())
// // //     );
// // //   }

// // //   const {
// // //     content,
// // //     chatId,
// // //     imageUrl,
// // //   } = validatedFields.data;

// // //   console.log("Image URL =", imageUrl);

// // //   // ==========================
// // //   // USER MESSAGE
// // //   // ==========================

// // //   const userMessage = await controller.createMessage({
// // //     content,
// // //     imageUrl,
// // //     role: "USER",
// // //     chatId,
// // //   });

// // //   console.log("User message saved");

// // //   // ==========================
// // //   // AUTO RENAME CHAT
// // //   // ==========================

// // //   const chat = await prisma.chat.findUnique({
// // //     where: {
// // //       id: chatId,
// // //     },
// // //   });

// // //   if (chat?.title === "New Chat") {
// // //     await chatController.renameChat(
// // //       chatId,
// // //       content.slice(0, 30)
// // //     );
// // //   }

// // //   // ==========================
// // //   // AI RESPONSE
// // //   // ==========================

// // //   const response = await generateResponseAction({
// // //     prompt: content,
// // //     imageUrl,
// // //   });

// // //   console.log("AI Response =", response);

// // //   // ==========================
// // //   // ASSISTANT MESSAGE
// // //   // ==========================

// // //   await controller.createMessage({
// // //     content: response ?? "No response from AI",
// // //     role: "ASSISTANT",
// // //     chatId,
// // //     parentId: userMessage.id,
// // //   });

// // //   console.log("Assistant message saved");

// // //   revalidatePath(`/dashboard/chat/${chatId}`);
// // //   revalidatePath("/dashboard");

// // //   return {
// // //     success: true,
// // //     response,
// // //   };
// // // }
// // "use server";

// // import { revalidatePath } from "next/cache";
// // import { prisma } from "@/app/lib/prisma";

// // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
// // import { ChatController } from "@/modules/chat/controllers/chat.controller";
// // import { MessageController } from "../controllers/message.controller";
// // import { CreateMessageSchema } from "../validations/create-message.schema";

// // const controller = new MessageController();
// // const chatController = new ChatController();

// // export async function sendMessageAction(values: unknown) {
// //   const validatedFields = CreateMessageSchema.safeParse(values);

// //   if (!validatedFields.success) {
// //     throw new Error(
// //       JSON.stringify(validatedFields.error.flatten())
// //     );
// //   }

// //   const {
// //     content,
// //     chatId,
// //     fileUrl,
// //     fileType,
// //   } = validatedFields.data;

// //   // USER MESSAGE
// //   const userMessage = await controller.createMessage({
// //     content,
// //     chatId,
// //     role: "USER",

// //     fileUrl,
// //     fileType,
// //   });

// //   // Rename chat
// //   const chat = await prisma.chat.findUnique({
// //     where: {
// //       id: chatId,
// //     },
// //   });

// //   if (chat?.title === "New Chat") {
// //     await chatController.renameChat(
// //       chatId,
// //       content.slice(0, 30)
// //     );
// //   }

// //   // AI Response
// //   const response = await generateResponseAction({
// //     prompt: content,
// //     fileUrl,
// //     fileType,
// //   });

// //   // Assistant message
// //   await controller.createMessage({
// //     content: response || "No response",
// //     role: "ASSISTANT",
// //     chatId,
// //     parentId: userMessage.id,
// //   });

// //   revalidatePath(`/dashboard/chat/${chatId}`);
// //   revalidatePath("/dashboard");

// //   return {
// //     success: true,
// //     response,
// //   };
// // }
// "use server";

// import { revalidatePath } from "next/cache";
// import { prisma } from "@/app/lib/prisma";

// import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
// import { ChatController } from "@/modules/chat/controllers/chat.controller";
// import { MessageController } from "../controllers/message.controller";
// import { CreateMessageSchema } from "../validations/create-message.schema";

// const controller = new MessageController();
// const chatController = new ChatController();

// export async function sendMessageAction(values: unknown) {
//   const validatedFields = CreateMessageSchema.safeParse(values);

//   if (!validatedFields.success) {
//     throw new Error(
//       JSON.stringify(validatedFields.error.flatten())
//     );
//   }

//   const {
//     content,
//     chatId,
//     fileUrl,
//     fileType,
//   } = validatedFields.data;

//   // USER MESSAGE
//   const userMessage = await controller.createMessage({
//     content,
//     chatId,
//     role: "USER",
//     fileUrl,
//     fileType,
//   });

//   // Rename chat
//   const chat = await prisma.chat.findUnique({
//     where: {
//       id: chatId,
//     },
//   });

//   if (chat?.title === "New Chat") {
//     await chatController.renameChat(
//       chatId,
//       content.slice(0, 30)
//     );
//   }

//   // AI RESPONSE
//   // const response = await generateResponseAction({
//   //   prompt: content,
//   //   imageUrl:
//   //     fileType?.startsWith("image/")
//   //       ? fileUrl
//   //       : undefined,
//   //   pdfUrl:
//   //     fileType === "application/pdf"
//   //       ? fileUrl
//   //       : undefined,
//   // });
// //   const response = await generateResponseAction({
// //   prompt: content,
// //   imageUrl: fileType === "image" ? fileUrl : undefined,
// //   pdfUrl: fileType === "pdf" ? fileUrl : undefined,
// // });
// const response = await generateResponseAction({
//   prompt: content,
//   fileUrl,
//   fileType,
// });

// console.log("SEND MESSAGE =>", {
//   content,
//   fileUrl,
//   fileType,
// });
// console.log("SEND MESSAGE =>", {
//   content,
//   fileUrl,
//   fileType,
// });
//   // ASSISTANT MESSAGE
//   await controller.createMessage({
//     content: response || "No response",
//     role: "ASSISTANT",
//     chatId,
//     parentId: userMessage.id,
//   });

//   revalidatePath(`/dashboard/chat/${chatId}`);
//   revalidatePath("/dashboard");

//   return {
//     success: true,
//     response,
//   };
// }
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";

import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
import { ChatController } from "@/modules/chat/controllers/chat.controller";
import { MessageController } from "../controllers/message.controller";
import { CreateMessageSchema } from "../validations/create-message.schema";

import { extractMemory } from "@/modules/memory/utils/memory-extractor";
import { MemoryController } from "@/modules/memory/controllers/memory.controller";

const controller = new MessageController();
const chatController = new ChatController();
const memoryController = new MemoryController();

export async function sendMessageAction(values: unknown) {
  const validatedFields = CreateMessageSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error(
      JSON.stringify(validatedFields.error.flatten())
    );
  }

  const {
    content,
    chatId,
    fileUrl,
    fileType,
  } = validatedFields.data;

  // ============================
  // Save User Memory (NEW)
  // ============================

  const session = await auth();

  if (session?.user?.id) {
    const memory = extractMemory(content);

    if (memory) {
      await memoryController.saveMemory(
        session.user.id,
        memory.key,
        memory.value
      );

      console.log("Memory Saved:", memory);
    }
  }

  // ============================
  // USER MESSAGE
  // ============================

  const userMessage = await controller.createMessage({
    content,
    chatId,
    role: "USER",
    fileUrl,
    fileType,
  });

  // ============================
  // Rename Chat
  // ============================

  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId,
    },
  });

  if (chat?.title === "New Chat") {
    await chatController.renameChat(
      chatId,
      content.slice(0, 30)
    );
  }

  // ============================
  // AI RESPONSE
  // ============================

  const response = await generateResponseAction({
    prompt: content,
    fileUrl,
    fileType,
  });

  console.log("SEND MESSAGE =>", {
    content,
    fileUrl,
    fileType,
  });

  // ============================
  // ASSISTANT MESSAGE
  // ============================

  await controller.createMessage({
    content: response || "No response",
    role: "ASSISTANT",
    chatId,
    parentId: userMessage.id,
  });

  revalidatePath(`/dashboard/chat/${chatId}`);
  revalidatePath("/dashboard");

  return {
    success: true,
    response,
  };
}