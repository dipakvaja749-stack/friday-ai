"use server";

import { revalidatePath } from "next/cache";
import { ChatController } from "../controllers/chat.controller";

const controller = new ChatController();

export async function togglePinAction(id: string) {
  await controller.togglePin(id);

  revalidatePath("/dashboard");
}