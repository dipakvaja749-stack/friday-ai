"use server";

import { AIController } from "../controllers/ai.controller";

const controller = new AIController();

export async function generateResponseAction(
  prompt: string
) {
  return controller.generateResponse(prompt);
}