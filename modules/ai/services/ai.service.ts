import { GroqProvider } from "../providers/gemini.provider";

export class AIService {
  private provider = new GroqProvider();

  async generateResponse(prompt: string) {
    return this.provider.generate(prompt);
  }
}