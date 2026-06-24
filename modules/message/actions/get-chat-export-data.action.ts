"use server";

import { prisma } from "@/app/lib/prisma";

export interface ExportMessage {
  role: "USER" | "AI";
  content: string;
  createdAt: Date;
}

export interface ExportChatData {
  title: string;
  messages: ExportMessage[];
}

export async function getChatExportDataAction(chatId: string): Promise<ExportChatData> {
  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    select: { title: true },
  });

  if (!chat) {
    throw new Error("Chat not found");
  }

  const messages = await prisma.message.findMany({
    where: { chatId },
    orderBy: { createdAt: "asc" },
    select: {
      role: true,
      content: true,
      createdAt: true,
    },
  });

  return {
    title: chat.title || "Untitled Chat",
    messages,
  };
}