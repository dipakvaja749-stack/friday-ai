// import { ChatService } from "../services/chat.service";

// export class ChatController {
//   private service = new ChatService();

//   async createChat(data: any) {
//     return this.service.createChat(data);
//   }

//   async getChats(userId: string) {
//     return this.service.getChats(userId);
//   }
// }

import { CreateChatDto } from "../dto/create-chat.dto";
import { ChatService } from "../services/chat.service";

export class ChatController {
  private service = new ChatService();

  async createChat(data: CreateChatDto) {
    return this.service.createChat(data);
  }

  async getChats(userId: string) {
    return this.service.getChats(userId);
  }

  async deleteChat(id: string) {
    return this.service.deleteChat(id);
  }

  async renameChat(id: string, title: string) {
    return this.service.renameChat(id, title);
  }
  async searchChats(
  userId: string,
  query: string
) {
  return this.service.searchChats(
    userId,
    query
  );
}
async togglePin(id: string) {
  return this.service.togglePin(id);
}
}