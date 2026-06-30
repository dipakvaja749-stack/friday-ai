import { MemoryRepository } from "../repositories/memory.repository";

export class MemoryService {
  private repository = new MemoryRepository();

  async saveMemory(
    userId: string,
    key: string,
    value: string
  ) {
    return this.repository.save(userId, key, value);
  }

  async getMemory(userId: string) {
    return this.repository.getAllByUserId(userId);
  }

  async getMemoryByKey(
    userId: string,
    key: string
  ) {
    return this.repository.getByKey(userId, key);
  }

  async deleteMemory(
    userId: string,
    key: string
  ) {
    return this.repository.delete(userId, key);
  }

  async clearMemory(userId: string) {
    return this.repository.deleteAll(userId);
  }

  /**
   * Convert memory into AI prompt
   */
  async buildMemoryPrompt(userId: string) {
    const memories = await this.repository.getAllByUserId(userId);

    if (memories.length === 0) {
      return "";
    }

    const prompt = memories
      .map((m) => `${m.key}: ${m.value}`)
      .join("\n");

    return `
User Memory:
${prompt}

Always use this information while answering the user.
`;
  }
}