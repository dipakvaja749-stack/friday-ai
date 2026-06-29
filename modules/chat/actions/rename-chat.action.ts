// "use server";

// import { ChatController } from "../controllers/chat.controller";

// const controller = new ChatController();

// export async function renameChatAction(
//   id: string,
//   title: string
// ) {
//   return controller.renameChat(id, title);
// }
"use server";

import { revalidatePath } from "next/cache";
import { ChatController } from "../controllers/chat.controller";

const controller = new ChatController();

export async function renameChatAction(
  id: string,
  title: string
) {
  await controller.renameChat(id, title);

  revalidatePath("/dashboard");
}