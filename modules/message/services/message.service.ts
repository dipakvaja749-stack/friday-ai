// import { CreateMessageDto } from "../dto/create-message.dto";
// import { MessageRepository } from "../repositories/message.repository";

// export class MessageService {
//   private repository = new MessageRepository();

//   async createMessage(data: CreateMessageDto) {
//     return this.repository.create(data);
//   }

//   async getMessages(chatId: string) {
//     return this.repository.findByChatId(chatId);
//   }
// }
import { generateResponseAction } from "@/modules/ai/actions/generate-response.action";
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

  // async updateMessage(id: string, content: string) {
  //   return this.repository.update(id, content);
  // }
  //   async updateMessage(id: string, content: string) {

  //   // 1. User message update
  //   const updatedMessage = await this.repository.update(
  //     id,
  //     content
  //   );

  //   // 2. Find next assistant message
  //   const assistantMessage =
  //     await this.repository.findNextAssistantMessage(
  //       updatedMessage.chatId,
  //       updatedMessage.createdAt
  //     );

  //   if (!assistantMessage) {
  //     return updatedMessage;
  //   }

  //   // 3. Generate new AI response
  //   const aiResponse =
  //     await generateResponseAction(content);

  //   // 4. Update assistant response
  //   await this.repository.update(
  //     assistantMessage.id,
  //     aiResponse ?? ""
  //   );

  //   return updatedMessage;
  // }

  // async deleteMessage(id: string) {
  //   return this.repository.deletePair(id);
  // }
  async updateMessageWithResponse(
  id: string,
  content: string
) {
  return this.repository.updateMessageWithResponse(
    id,
    content
  );
}

async deleteMessageWithResponse(id: string) {
  return this.repository.deleteMessageWithResponse(
    id
  );
}
}