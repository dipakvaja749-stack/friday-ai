// import { ChatRepository } from "../repositories/chat.repository";
// import { CreateChatDto } from "../dto/create-chat.dto";

// export class ChatService {
//   private repository = new ChatRepository();

//   async createChat(data: CreateChatDto) {
//     return this.repository.create(data);
//   }

//   async getChats(userId: string) {
//     return this.repository.findByUserId(userId);
//   }
// }

import { CreateChatDto } from "../dto/create-chat.dto";
import { ChatRepository } from "../repositories/chat.repository";

export class ChatService {
  private repository = new ChatRepository();

  async createChat(data: CreateChatDto) {
    return this.repository.create(data);
  }

  async getChats(userId: string) {
    return this.repository.findByUserId(userId);
  }

  async deleteChat(id: string) {
    return this.repository.delete(id);
  }

  async renameChat(id: string, title: string) {
    return this.repository.rename(id, title);
  }
  async searchChats(userId: string, query: string) {
  return this.repository.search(userId, query);
}
async togglePin(id: string) {
  return this.repository.togglePin(id);
}
}