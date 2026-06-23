import { Message } from "@prisma/client";

export type ChatGroup =
  | "Today"
  | "Yesterday"
  | "Previous 7 Days"
  | "Older";

export interface Chat {
  id: string;
  title: string;
  pinned: boolean;
  updatedAt: string;
  group: ChatGroup;
    // optional fields

  messages?: Message[];
}