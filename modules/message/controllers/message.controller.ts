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
}