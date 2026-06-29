"use server";

import { auth } from "@/auth";
import { ChatController } from "../controllers/chat.controller";

const controller = new ChatController();

export async function getChatsAction() {
  const session = await auth();

  if (!session?.user?.id) {
    return [];
  }

  return controller.getChats(session.user.id);
}