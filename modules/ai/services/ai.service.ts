// import { GeminiProvider } from "../providers/gemini.provider";

// export class AIService {
//   private provider = new GeminiProvider();

//   async generateResponse(prompt: string) {
//     return this.provider.generate(prompt);
//   }
// }
// import { GeminiProvider } from "../providers/gemini.provider";

// export class AIService {
//   private provider = new GeminiProvider();

//   async generateResponse(
//     prompt: string,
//     imageUrl?: string
//   ) {
//     return this.provider.generate(
//       prompt,
//       imageUrl
//     );
//   }
// }
import { GeminiProvider } from "../providers/gemini.provider";
import { GenerateResponseInput } from "../actions/generate-response.action";

export class AIService {
  private provider = new GeminiProvider();

  async generateResponse(input: GenerateResponseInput) {
    return this.provider.generate(input);
  }
}