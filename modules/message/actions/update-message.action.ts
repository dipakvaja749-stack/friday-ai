// // "use server";

// // import { revalidatePath } from "next/cache";
// // import { MessageController } from "../controllers/message.controller";

// // const controller = new MessageController();

// // export async function updateMessageAction(
// //   id: string,
// //   content: string,
// //   chatId: string
// // ) {
// //   await controller.updateMessage(id, content);

// //   revalidatePath(`/dashboard/chat/${chatId}`);
// // }

// "use server";

// import { revalidatePath } from "next/cache";
// import { MessageController } from "../controllers/message.controller";

// const controller = new MessageController();

// export async function updateMessageAction(
//   id: string,
//   chatId: string,
//   content: string
// ) {
//   await controller.updateMessage(id, content);

//   revalidatePath(`/dashboard/chat/${chatId}`);

//   return {
//     success: true,
//   };
// }

"use server";

import { revalidatePath } from "next/cache";
import { MessageController } from "../controllers/message.controller";

const controller = new MessageController();

export async function updateMessageAction(
  id: string,
  chatId: string,
  content: string
) {
  await controller.updateMessageWithResponse(
    id,
    content
  );

  revalidatePath(`/dashboard/chat/${chatId}`);

  return {
    success: true,
  };
}