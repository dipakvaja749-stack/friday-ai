// // "use server";

// // import { auth } from "@/auth";
// // import { ChatController } from "../controllers/chat.controller";

// // const controller = new ChatController();

// // export async function createChatAction(title: string) {
// //   const session = await auth();
// //  console.log(session);

// //   if (!session?.user?.id) {
// //     throw new Error("Unauthorized");
// //   }

// //   return controller.createChat({
// //     title,
// //     userId: session.user.id,
// //   });
// // }

// "use server";

// import { auth } from "@/auth";
// import { ChatController } from "../controllers/chat.controller";

// const controller = new ChatController();

// export async function createChatAction(title: string) {
//   const session = await auth();

//   if (!session?.user?.id) {
//     throw new Error("Unauthorized");
//   }

//   return controller.createChat({
//     title,
//     userId: session.user.id,
//   });
// }

"use server";

import { auth } from "@/auth";
import { ChatController } from "../controllers/chat.controller";

const controller = new ChatController();

export async function createChatAction(title: string) {
  const session = await auth();

  console.log("SESSION =>", session);

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return await controller.createChat({
    title,
    userId: session.user.id,
  });
}