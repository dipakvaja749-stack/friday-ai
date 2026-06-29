// // "use client";

// // import { useEffect, useRef } from "react";
// // import { Message } from "@prisma/client";
// // import MessageItem from "./message-item";

// // interface Props {
// //   chatId: string;
// //   messages: Message[];
// // }

// // export default function MessageListClient({ chatId, messages }: Props) {
// //   const bottomRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     bottomRef.current?.scrollIntoView({
// //       behavior: "smooth",
// //     });
// //   }, [messages]);

// //   return (
// //     <div className="mx-auto flex w-full max-w-[800px] flex-col gap-4">
// //       {messages.map((message) => (
// //         <MessageItem key={message.id} message={message} chatId={chatId} />
// //       ))}
// //       <div ref={bottomRef} />
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useRef } from "react";
// import { Message } from "@prisma/client";
// import { AnimatePresence, motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import MessageItem from "./message-item";
// import { useChatContext } from "@/components/chat-context";


// interface Props {
//   chatId: string;
//   messages: Message[];
// }

// export default function MessageListClient({ chatId, messages }: Props) {
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const { isPending } = useChatContext();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, isPending]); // 👈 isPending change thaye pan scroll thase

//   return (
//     <div className="mx-auto flex w-full max-w-[800px] flex-col gap-4">
//       {messages.map((message) => (
//         <MessageItem key={message.id} message={message} chatId={chatId} />
//       ))}

//       {/* 👇 Friday is typing... indicator - last message pachi, AI response avva pehla */}
//       <AnimatePresence>
//         {isPending && (
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 8 }}
//             className="flex w-full justify-start"
//           >
//             <div className="flex max-w-[85%] flex-col gap-1 items-start">
//               <div className="flex items-center gap-1.5 px-1 text-xs font-medium text-zinc-500">
//                 <Sparkles className="h-3.5 w-3.5 text-amber-300" />
//                 Friday
//               </div>
//               <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100">
//                 <div className="flex items-center gap-1">
//                   <span className="text-sm text-zinc-400 mr-1">Friday is typing</span>
//                   <motion.span
//                     className="h-1.5 w-1.5 rounded-full bg-zinc-400"
//                     animate={{ opacity: [0.3, 1, 0.3] }}
//                     transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
//                   />
//                   <motion.span
//                     className="h-1.5 w-1.5 rounded-full bg-zinc-400"
//                     animate={{ opacity: [0.3, 1, 0.3] }}
//                     transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
//                   />
//                   <motion.span
//                     className="h-1.5 w-1.5 rounded-full bg-zinc-400"
//                     animate={{ opacity: [0.3, 1, 0.3] }}
//                     transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div ref={bottomRef} />
//     </div>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import { Message } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import MessageItem from "./message-item";
import { useChatContext } from "@/components/chat-context";


interface Props {
  chatId: string;
  messages: Message[];
}

export default function MessageListClient({ chatId, messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const { isPending } = useChatContext();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isPending]); // 👈 isPending change thaye pan scroll thase

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col gap-3 px-1 sm:gap-4 sm:px-0">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} chatId={chatId} />
      ))}

      {/* 👇 Friday is typing... indicator - last message pachi, AI response avva pehla */}
      <AnimatePresence>
        {isPending && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex w-full justify-start"
          >
            <div className="flex max-w-[90%] flex-col gap-1 items-start sm:max-w-[85%]">
              <div className="flex items-center gap-1.5 px-1 text-xs font-medium text-zinc-500">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                Friday
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-zinc-100 sm:px-4 sm:py-3">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-zinc-400 mr-1">Friday is typing</span>
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={bottomRef} />
    </div>
  );
}