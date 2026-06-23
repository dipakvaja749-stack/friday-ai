import { AIService } from "../services/ai.service";

export class AIController {
  private service = new AIService();

  async generateResponse(prompt: string) {
    return this.service.generateResponse(prompt);
  }
}