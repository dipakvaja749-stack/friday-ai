"use server";

import { MessageController } from "../controllers/message.controller";

const controller = new MessageController();

export async function getMessagesAction(
  chatId: string
) {
  return controller.getMessages(chatId);
}