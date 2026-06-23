"use client";

import { Button } from "@/components/ui/button";
import { createChatAction } from "../actions/create-chat.action";
import { useRouter } from "next/navigation";

export default function NewChatButton() {
  const router = useRouter();

  async function handleCreate() {
    const chat = await createChatAction("New Chat");

    router.push(`/dashboard/chat/${chat.id}`);
    router.refresh();
  }

  return (
    <Button className="w-full" onClick={handleCreate}>
      New Chat
    </Button>
  );
}