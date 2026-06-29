"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ChatContextType {
  isPending: boolean;
  setIsPending: (value: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isPending, setIsPending] = useState(false);

  return (
    <ChatContext.Provider value={{ isPending, setIsPending }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}