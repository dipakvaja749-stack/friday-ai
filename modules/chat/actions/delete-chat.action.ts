// "use server";

// import { ChatController } from "../controllers/chat.controller";

// const controller = new ChatController();

// export async function deleteChatAction(id: string) {
//   return controller.deleteChat(id);
// }

"use server";

import { revalidatePath } from "next/cache";
import { ChatController } from "../controllers/chat.controller";

const controller = new ChatController();

export async function deleteChatAction(id: string) {
  await controller.deleteChat(id);

  revalidatePath("/dashboard");
}