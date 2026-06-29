// "use server";

// import { AIController } from "../controllers/ai.controller";

// const controller = new AIController();

// export async function generateResponseAction(
//   prompt: string
// ) {
//   return controller.generateResponse(prompt);
// }
// "use server";

// import { AIController } from "../controllers/ai.controller";

// const controller = new AIController();

// interface GenerateResponseInput {
//   prompt: string;
//   imageUrl?: string;
// }

// export async function generateResponseAction({
//   prompt,
//   imageUrl,
// }: GenerateResponseInput) {
//   return controller.generateResponse(
//     prompt,
//     imageUrl
//   );
// }
"use server";

import { AIController } from "../controllers/ai.controller";

const controller = new AIController();

export interface GenerateResponseInput {
  prompt: string;
  fileUrl?: string;
  fileType?: "image" | "pdf";
}

export async function generateResponseAction(
  input: GenerateResponseInput
) {
    console.log("GENERATE ACTION =>", input);

  return controller.generateResponse(input);
}