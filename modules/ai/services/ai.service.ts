// // import { GeminiProvider } from "../providers/gemini.provider";

// // export class AIService {
// //   private provider = new GeminiProvider();

// //   async generateResponse(prompt: string) {
// //     return this.provider.generate(prompt);
// //   }
// // }
// // import { GeminiProvider } from "../providers/gemini.provider";

// // export class AIService {
// //   private provider = new GeminiProvider();

// //   async generateResponse(
// //     prompt: string,
// //     imageUrl?: string
// //   ) {
// //     return this.provider.generate(
// //       prompt,
// //       imageUrl
// //     );
// //   }
// // }
// import { GeminiProvider } from "../providers/gemini.provider";
// import { GenerateResponseInput } from "../actions/generate-response.action";

// export class AIService {
//   private provider = new GeminiProvider();

//   async generateResponse(input: GenerateResponseInput) {
//     return this.provider.generate(input);
//   }
// }

import { auth } from "@/auth";
import { GeminiProvider } from "../providers/gemini.provider";
import { GenerateResponseInput } from "../actions/generate-response.action";
import { MemoryController } from "@/modules/memory/controllers/memory.controller";

export class AIService {
  private provider = new GeminiProvider();
  private memoryController = new MemoryController();

  async generateResponse(input: GenerateResponseInput) {
    const session = await auth();

    let memoryPrompt = "";

    if (session?.user?.id) {
      memoryPrompt =
        await this.memoryController.buildMemoryPrompt(
          session.user.id
        );
    }

    const finalPrompt = `
${memoryPrompt}

Current User Message:

${input.prompt}
`;

    return this.provider.generate({
      ...input,
      prompt: finalPrompt,
    });
  }
}