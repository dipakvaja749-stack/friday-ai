import { CreateMessageDto } from "../dto/create-message.dto";
import { MessageRepository } from "../repositories/message.repository";

export class MessageService {
  private repository = new MessageRepository();

  async createMessage(data: CreateMessageDto) {
    return this.repository.create(data);
  }

  async getMessages(chatId: string) {
    return this.repository.findByChatId(chatId);
  }
}