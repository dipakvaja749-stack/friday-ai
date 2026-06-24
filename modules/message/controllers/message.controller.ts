// import { CreateMessageDto } from "../dto/create-message.dto";
// import { MessageService } from "../services/message.service";

// export class MessageController {
//   private service = new MessageService();

//   async createMessage(data: CreateMessageDto) {
//     return this.service.createMessage(data);
//   }

//   async getMessages(chatId: string) {
//     return this.service.getMessages(chatId);
//   }
// }

import { CreateMessageDto } from "../dto/create-message.dto";
import { MessageService } from "../services/message.service";

export class MessageController {
  private service = new MessageService();

  async createMessage(data: CreateMessageDto) {
    return this.service.createMessage(data);
  }

  async getMessages(chatId: string) {
    return this.service.getMessages(chatId);
  }

  // async updateMessage(id: string, content: string) {
  //   return this.service.updateMessage(id, content);
  // }

  // async deleteMessage(id: string) {
  //   return this.service.deleteMessage(id);
  // }
  async updateMessageWithResponse(
  id: string,
  content: string
) {
  return this.service.updateMessageWithResponse(
    id,
    content
  );
}

async deleteMessageWithResponse(id: string) {
  return this.service.deleteMessageWithResponse(
    id
  );
}
}