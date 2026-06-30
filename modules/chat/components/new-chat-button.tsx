// "use client";

// import { Button } from "@/components/ui/button";
// import { createChatAction } from "../actions/create-chat.action";
// import { useRouter } from "next/navigation";

// export default function NewChatButton() {
//   const router = useRouter();

//   async function handleCreate() {
//     const chat = await createChatAction("New Chat");

//     router.push(`/dashboard/chat/${chat.id}`);
    
//   }

//   return (
//     <Button className="w-full" onClick={handleCreate}>
//       New Chat
//     </Button>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { createChatAction } from "../actions/create-chat.action";

export default function NewChatButton() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (loading) return;

    setLoading(true);

    try {
      const chat = await createChatAction("New Chat");

      router.push(`/dashboard/chat/${chat.id}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      disabled={loading}
      className="w-full"
      onClick={handleCreate}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating...
        </>
      ) : (
        "New Chat"
      )}
    </Button>
  );
}