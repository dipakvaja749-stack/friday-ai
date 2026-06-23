// // // // // "use server";

// // // // // import { MessageController } from "../controllers/message.controller";
// // // // // import { CreateMessageSchema } from "../validations/create-message.schema";

// // // // // const controller = new MessageController();

// // // // // export async function sendMessageAction(
// // // // //   values: unknown
// // // // // ) {
// // // // //   const validatedFields =
// // // // //     CreateMessageSchema.safeParse(values);

// // // // //   if (!validatedFields.success) {
// // // // //     throw new Error("Invalid input");
// // // // //   }

// // // // //   return controller.createMessage({
// // // // //     ...validatedFields.data,
// // // // //     role: "USER",
// // // // //   });
// // // // // }
// // // // "use server";

// // // // import { MessageController } from "../controllers/message.controller";
// // // // import { CreateMessageSchema } from "../validations/create-message.schema";
// // // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

// // // // const controller = new MessageController();

// // // // export async function sendMessageAction(values: unknown) {
// // // //   // const validatedFields = CreateMessageSchema.safeParse(values);

// // // //   // if (!validatedFields.success) {
// // // //   //   throw new Error("Invalid input");
// // // //   // }
// // // //   console.log("VALUES =>", values);

// // // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // // //   if (!validatedFields.success) {
// // // //     console.log(validatedFields.error.flatten());
// // // //     throw new Error("Invalid input");
// // // //   }

// // // //   const { content, chatId } = validatedFields.data;

// // // //   // USER Message
// // // //   await controller.createMessage({
// // // //     content,
// // // //     role: "USER",
// // // //     chatId,
// // // //   });

// // // //   // AI Response
// // // //   const response = await generateResponseAction(content);

// // // //   // ASSISTANT Message
// // // //   await controller.createMessage({
// // // //     content: response ?? "",
// // // //     role: "ASSISTANT",
// // // //     chatId,
// // // //   });

// // // //   return response;
// // // // }

// // // "use server";

// // // import { MessageController } from "../controllers/message.controller";
// // // import { CreateMessageSchema } from "../validations/create-message.schema";
// // // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

// // // const controller = new MessageController();

// // // export async function sendMessageAction(values: unknown) {
// // //   console.log("Received values:", values);

// // //   const validatedFields = CreateMessageSchema.safeParse(values);

// // //   if (!validatedFields.success) {
// // //     console.log(validatedFields.error.flatten());

// // //     throw new Error(
// // //       JSON.stringify(validatedFields.error.flatten())
// // //     );
// // //   }

// // //   const { content, chatId } = validatedFields.data;

// // //   await controller.createMessage({
// // //     content,
// // //     role: "USER",
// // //     chatId,
// // //   });

// // //   const response = await generateResponseAction(content);

// // //   await controller.createMessage({
// // //     content: response ?? "",
// // //     role: "ASSISTANT",
// // //     chatId,
// // //   });

// // //   return response;
// // // }

// // "use server";

// // import { MessageController } from "../controllers/message.controller";
// // import { CreateMessageSchema } from "../validations/create-message.schema";
// // import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";

// // const controller = new MessageController();

// // export async function sendMessageAction(values: unknown) {
// //   console.log("Received values:", values);

// //   const validatedFields = CreateMessageSchema.safeParse(values);

// //   if (!validatedFields.success) {
// //     console.log(validatedFields.error.flatten());

// //     throw new Error(
// //       JSON.stringify(validatedFields.error.flatten())
// //     );
// //   }

// //   const { content, chatId } = validatedFields.data;

// //   // USER message
// //   await controller.createMessage({
// //     content,
// //     role: "USER",
// //     chatId,
// //   });

// //   console.log("User message saved");

// //   // AI response
// //   const response = await generateResponseAction(content);

// //   console.log("AI RESPONSE =", response);

// //   // ASSISTANT message
// //   await controller.createMessage({
// //     content: response || "No response from AI",
// //     role: "ASSISTANT",
// //     chatId,
// //   });

// //   console.log("Assistant message saved");

// //   return response;
// // }
// "use server";

// import { MessageController } from "../controllers/message.controller";
// import { CreateMessageSchema } from "../validations/create-message.schema";
// import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
// import { revalidatePath } from "next/cache";

// const controller = new MessageController();

// export async function sendMessageAction(values: unknown) {
//   console.log("Received values:", values);

//   const validatedFields = CreateMessageSchema.safeParse(values);

//   if (!validatedFields.success) {
//     throw new Error(
//       JSON.stringify(validatedFields.error.flatten())
//     );
//   }

//   const { content, chatId } = validatedFields.data;

//   // USER MESSAGE
//   await controller.createMessage({
//     content,
//     role: "USER",
//     chatId,
//   });

//   console.log("User message saved");

//   // AI RESPONSE
//   const response = await generateResponseAction(content);

//   console.log("AI RESPONSE =", response);

//   // ASSISTANT MESSAGE
//   await controller.createMessage({
//     content: response || "No response from AI",
//     role: "ASSISTANT",
//     chatId,
//   });

//   console.log("Assistant message saved");

//   // ⭐ IMPORTANT
//   revalidatePath(`/dashboard/chat/${chatId}`);

//   return response;
// }

"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/app/lib/prisma";
import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
import { ChatController } from "@/modules/chat/controllers/chat.controller";

import { MessageController } from "../controllers/message.controller";
import { CreateMessageSchema } from "../validations/create-message.schema";

const controller = new MessageController();
const chatController = new ChatController();

export async function sendMessageAction(values: unknown) {
  console.log("Received values:", values);

  const validatedFields = CreateMessageSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error(
      JSON.stringify(validatedFields.error.flatten())
    );
  }

  const { content, chatId } = validatedFields.data;

  // USER MESSAGE
  await controller.createMessage({
    content,
    role: "USER",
    chatId,
  });

  console.log("User message saved");

  // AUTO RENAME CHAT
  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId,
    },
  });

  if (chat?.title === "New Chat") {
    await chatController.renameChat(
      chatId,
      content.slice(0, 30) // first 30 chars
    );
  }

  // AI RESPONSE
  const response = await generateResponseAction(content);

  console.log("AI RESPONSE =", response);

  // ASSISTANT MESSAGE
  await controller.createMessage({
    content: response || "No response from AI",
    role: "ASSISTANT",
    chatId,
  });

  console.log("Assistant message saved");

  // Refresh current chat page
  revalidatePath(`/dashboard/chat/${chatId}`);

  // Refresh sidebar chat list
  revalidatePath("/dashboard");

  return response;
}