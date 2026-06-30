import { MemoryService } from "../services/memory.service";

export class MemoryController {
  private service = new MemoryService();

  async saveMemory(
    userId: string,
    key: string,
    value: string
  ) {
    return this.service.saveMemory(userId, key, value);
  }

  async getMemory(userId: string) {
    return this.service.getMemory(userId);
  }

  async getMemoryByKey(
    userId: string,
    key: string
  ) {
    return this.service.getMemoryByKey(userId, key);
  }

  async deleteMemory(
    userId: string,
    key: string
  ) {
    return this.service.deleteMemory(userId, key);
  }

  async clearMemory(userId: string) {
    return this.service.clearMemory(userId);
  }

  async buildMemoryPrompt(userId: string) {
    return this.service.buildMemoryPrompt(userId);
  }
}