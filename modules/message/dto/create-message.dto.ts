// import { Role } from "@prisma/client";

// export interface CreateMessageDto {
//   content: string;
//   role: Role;
//   chatId: string;
//   parentId?: string;
// }

import { Role } from "@prisma/client";

export interface CreateMessageDto {
  content: string;
  role: Role;
  chatId: string;
  parentId?: string;
}