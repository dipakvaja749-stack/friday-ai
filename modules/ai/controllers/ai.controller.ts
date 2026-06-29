// // import { AIService } from "../services/ai.service";

// // export class AIController {
// //   private service = new AIService();

// //   async generateResponse(prompt: string) {
// //     return this.service.generateResponse(prompt);
// //   }
// // }
// import { AIService } from "../services/ai.service";

// export class AIController {
//   private service = new AIService();

//   async generateResponse(
//     prompt: string,
//     imageUrl?: string
//   ) {
//     return this.service.generateResponse(
//       prompt,
//       imageUrl
//     );
//   }
// }
import { AIService } from "../services/ai.service";
import { GenerateResponseInput } from "../actions/generate-response.action";

export class AIController {
  private service = new AIService();

  async generateResponse(input: GenerateResponseInput) {
    return this.service.generateResponse(input);
  }
}