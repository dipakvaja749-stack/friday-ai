import { GeminiProvider } from "../providers/gemini.provider";

export class AIService {
  private provider = new GeminiProvider();

  async generateResponse(prompt: string) {
    return this.provider.generate(prompt);
  }
}