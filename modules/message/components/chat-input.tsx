// // // "use client";

// // // import { useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { sendMessageAction } from "../actions/send-message.action";

// // // interface Props {
// // //   chatId: string;
// // // }

// // // export default function ChatInput({
// // //   chatId,
// // // }: Props) {
// // //    console.log("ChatInput chatId =", chatId);

// // //   const [message, setMessage] = useState("");

// // //   // async function handleSubmit() {
// // //   //   if (!message.trim()) return;

// // //   //   await sendMessageAction({
// // //   //     content: message,
// // //   //     chatId,
// // //   //   });

// // //   //   setMessage("");
// // //   // }
// // //   async function handleSubmit() {
// // //   if (!message.trim()) return;

// // //   console.log({
// // //     content: message,
// // //     chatId,
// // //   });

// // //   await sendMessageAction({
// // //     content: message,
// // //     chatId,
// // //   });

// // //   setMessage("");
// // // }

// // //   return (
// // //     <div className="flex gap-2">
// // //       <Input
// // //         value={message}
// // //         onChange={(e) =>
// // //           setMessage(e.target.value)
// // //         }
// // //         placeholder="Send a message..."
// // //       />

// // //       <Button onClick={handleSubmit}>
// // //         Send
// // //       </Button>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { sendMessageAction } from "../actions/send-message.action";

// // interface Props {
// //   chatId: string;
// // }

// // export default function ChatInput({
// //   chatId,
// // }: Props) {
// //    console.log("ChatInput chatId =", chatId);

// //   const [message, setMessage] = useState("");

// //   // async function handleSubmit() {
// //   //   if (!message.trim()) return;

// //   //   await sendMessageAction({
// //   //     content: message,
// //   //     chatId,
// //   //   });

// //   //   setMessage("");
// //   // }
// //   async function handleSubmit() {
// //   if (!message.trim()) return;

// //   console.log({
// //     content: message,
// //     chatId,
// //   });

// //   await sendMessageAction({
// //     content: message,
// //     chatId,
// //   });

// //   setMessage("");
// // }

// //   return (
// //     <div className="flex gap-2">
// //       <Input
// //         value={message}
// //         onChange={(e) =>
// //           setMessage(e.target.value)
// //         }
// //         placeholder="Send a message..."
// //       />

// //       <Button onClick={handleSubmit}>
// //         Send
// //       </Button>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useTransition } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { sendMessageAction } from "../actions/send-message.action";

// interface Props {
//   chatId: string;
// }

// export default function ChatInput({ chatId }: Props) {
//   const [message, setMessage] = useState("");
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();

//   async function handleSubmit() {
//     if (!message.trim()) return;

//     const content = message;

//     console.log("SENDING TO CHAT =", chatId);

//     setMessage("");

//     startTransition(async () => {
//       await sendMessageAction({
//         content,
//         chatId,
//       });

//       router.refresh();
//     });
//   }

//   return (
//     <div className="flex gap-2">
//       <Input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Send a message..."
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             e.preventDefault();
//             handleSubmit();
//           }
//         }}
//       />

//       <Button
//         type="button"
//         onClick={handleSubmit}
//         disabled={isPending}
//       >
//         Send
//       </Button>
//     </div>
//   );
// }

"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowUp, Loader2, Mic, Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMessageAction } from "../actions/send-message.action";

interface Props {
  chatId: string;
}

export default function ChatInput({ chatId }: Props) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit() {
    const content = message.trim();
    if (!content || isPending) return;

    setMessage("");

    startTransition(async () => {
      try {
        await sendMessageAction({ content, chatId });
        router.refresh();
      } finally {
        inputRef.current?.focus();
      }
    });
  }

  // return (
  //   <div className="flex  justify-center w-full max-w-4xl items-center gap-2  rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 shadow-xl backdrop-blur-md focus-within:border-zinc-700">
  //     <Button
  //       type="button"
  //       variant="ghost"
  //       size="icon"
  //       aria-label="Add attachment"
  //       disabled={isPending}
  //       className="h-10 w-10 flex-shrink-0 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
  //     >
  //       <Plus className="h-5 w-5" />
  //     </Button>

  //     <Input
  //       ref={inputRef}
  //       value={message}
  //       onChange={(e) => setMessage(e.target.value)}
  //       onKeyDown={(e) => {
  //         if (e.key === "Enter" && !e.shiftKey) {
  //           e.preventDefault();
  //           handleSubmit();
  //         }
  //       }}
  //       placeholder="Message Friday..."
  //       aria-label="Message Friday"
  //       disabled={isPending}
  //       className="h-10 flex-1 border-none bg-transparent px-1 text-base text-white shadow-none outline-none ring-0 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-60"
  //     />

  //     <div className="flex flex-shrink-0 items-center gap-1.5">
  //       <Button
  //         type="button"
  //         variant="ghost"
  //         size="icon"
  //         aria-label="Edit prompt"
  //         disabled={isPending}
  //         className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
  //       >
  //         <Pencil className="h-5 w-5" />
  //       </Button>

  //       <Button
  //         type="button"
  //         variant="ghost"
  //         size="icon"
  //         aria-label="Use microphone"
  //         disabled={isPending}
  //         className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
  //       >
  //         <Mic className="h-5 w-5" />
  //       </Button>

  //       <Button
  //         type="button"
  //         aria-label={isPending ? "Sending message" : "Send message"}
  //         onClick={handleSubmit}
  //         disabled={isPending || !message.trim()}
  //         size="icon"
  //         className="h-11 w-11 flex-shrink-0 rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
  //       >
  //         {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
  //       </Button>
  //     </div>
  //   </div>
  // );
  // ... baki ka code same rahega

return (
  /* Yahan mx-auto add kiya hai */
  <div className="mx-auto flex justify-center w-full max-w-4xl items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 shadow-xl backdrop-blur-md focus-within:border-zinc-700">
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Add attachment"
      disabled={isPending}
      className="h-10 w-10 flex-shrink-0 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
    >
      <Plus className="h-5 w-5" />
    </Button>

    <Input
      ref={inputRef}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit();
        }
      }}
      placeholder="Message Friday..."
      aria-label="Message Friday"
      disabled={isPending}
      className="h-10 flex-1 border-none bg-transparent px-1 text-base text-white shadow-none outline-none ring-0 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-60"
    />

    <div className="flex flex-shrink-0 items-center gap-1.5">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Edit prompt"
        disabled={isPending}
        className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
      >
        <Pencil className="h-5 w-5" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Use microphone"
        disabled={isPending}
        className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
      >
        <Mic className="h-5 w-5" />
      </Button>

      <Button
        type="button"
        aria-label={isPending ? "Sending message" : "Send message"}
        onClick={handleSubmit}
        disabled={isPending || !message.trim()}
        size="icon"
        className="h-11 w-11 flex-shrink-0 rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
      </Button>
    </div>
  </div>
);
}