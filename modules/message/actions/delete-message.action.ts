// "use server";

// import { revalidatePath } from "next/cache";
// import { MessageController } from "../controllers/message.controller";

// const controller = new MessageController();

// export async function deleteMessageAction(
//   id: string,
//   chatId: string
// ) {
//   await controller.deleteMessage(id);

//   revalidatePath(`/dashboard/chat/${chatId}`);
// }

"use server";

import { revalidatePath } from "next/cache";
import { MessageController } from "../controllers/message.controller";

const controller = new MessageController();

export async function deleteMessageAction(
  id: string,
  chatId: string
) {
  await controller.deleteMessageWithResponse(id);

  revalidatePath(`/dashboard/chat/${chatId}`);

  return {
    success: true,
  };
}