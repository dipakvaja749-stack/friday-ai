export type Role = "user" | "assistant";

export interface Message {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
  liked?: boolean;
  disliked?: boolean;
}

export interface Chat {
  id: string;
  title: string;
  pinned?: boolean;
  updatedAt: number;
  messages: Message[];
}

export interface ModelOption {
  id: string;
  name: string;
  vendor: string;
  description: string;
}

export const MODELS: ModelOption[] = [
  { id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6", vendor: "Anthropic", description: "Balanced reasoning and speed" },
  { id: "gpt-5", name: "GPT-5", vendor: "OpenAI", description: "Strong general purpose model" },
  { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", vendor: "Google", description: "Long context, multimodal" },
];

export function groupChatsByDate(chats: Chat[]) {
  const now = Date.now();
  const day = 86_400_000;

  const today: Chat[] = [];
  const yesterday: Chat[] = [];
  const previous7: Chat[] = [];
  const older: Chat[] = [];
  const pinned: Chat[] = [];

  for (const chat of chats) {
    if (chat.pinned) {
      pinned.push(chat);
      continue;
    }
    const diff = now - chat.updatedAt;
    if (diff < day) today.push(chat);
    else if (diff < day * 2) yesterday.push(chat);
    else if (diff < day * 7) previous7.push(chat);
    else older.push(chat);
  }

  return { pinned, today, yesterday, previous7, older };
}

export const MOCK_CHATS: Chat[] = [
  {
    id: "c1",
    title: "Roadmap for Q3 launch",
    pinned: true,
    updatedAt: Date.now() - 1000 * 60 * 30,
    messages: [],
  },
  {
    id: "c2",
    title: "Refactor auth middleware",
    updatedAt: Date.now() - 1000 * 60 * 60 * 3,
    messages: [],
  },
  {
    id: "c3",
    title: "Brand voice guidelines",
    updatedAt: Date.now() - 1000 * 60 * 60 * 26,
    messages: [],
  },
  {
    id: "c4",
    title: "SQL query optimization",
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 4,
    messages: [],
  },
  {
    id: "c5",
    title: "Onboarding email sequence",
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 12,
    messages: [],
  },
];

