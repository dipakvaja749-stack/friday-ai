// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // import { sendMessageAction } from "../actions/send-message.action";

// // // // // // // interface Props {
// // // // // // //   chatId: string;
// // // // // // // }

// // // // // // // export default function ChatInput({
// // // // // // //   chatId,
// // // // // // // }: Props) {
// // // // // // //    console.log("ChatInput chatId =", chatId);

// // // // // // //   const [message, setMessage] = useState("");

// // // // // // //   // async function handleSubmit() {
// // // // // // //   //   if (!message.trim()) return;

// // // // // // //   //   await sendMessageAction({
// // // // // // //   //     content: message,
// // // // // // //   //     chatId,
// // // // // // //   //   });

// // // // // // //   //   setMessage("");
// // // // // // //   // }
// // // // // // //   async function handleSubmit() {
// // // // // // //   if (!message.trim()) return;

// // // // // // //   console.log({
// // // // // // //     content: message,
// // // // // // //     chatId,
// // // // // // //   });

// // // // // // //   await sendMessageAction({
// // // // // // //     content: message,
// // // // // // //     chatId,
// // // // // // //   });

// // // // // // //   setMessage("");
// // // // // // // }

// // // // // // //   return (
// // // // // // //     <div className="flex gap-2">
// // // // // // //       <Input
// // // // // // //         value={message}
// // // // // // //         onChange={(e) =>
// // // // // // //           setMessage(e.target.value)
// // // // // // //         }
// // // // // // //         placeholder="Send a message..."
// // // // // // //       />

// // // // // // //       <Button onClick={handleSubmit}>
// // // // // // //         Send
// // // // // // //       </Button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { sendMessageAction } from "../actions/send-message.action";

// // // // // // interface Props {
// // // // // //   chatId: string;
// // // // // // }

// // // // // // export default function ChatInput({
// // // // // //   chatId,
// // // // // // }: Props) {
// // // // // //    console.log("ChatInput chatId =", chatId);

// // // // // //   const [message, setMessage] = useState("");

// // // // // //   // async function handleSubmit() {
// // // // // //   //   if (!message.trim()) return;

// // // // // //   //   await sendMessageAction({
// // // // // //   //     content: message,
// // // // // //   //     chatId,
// // // // // //   //   });

// // // // // //   //   setMessage("");
// // // // // //   // }
// // // // // //   async function handleSubmit() {
// // // // // //   if (!message.trim()) return;

// // // // // //   console.log({
// // // // // //     content: message,
// // // // // //     chatId,
// // // // // //   });

// // // // // //   await sendMessageAction({
// // // // // //     content: message,
// // // // // //     chatId,
// // // // // //   });

// // // // // //   setMessage("");
// // // // // // }

// // // // // //   return (
// // // // // //     <div className="flex gap-2">
// // // // // //       <Input
// // // // // //         value={message}
// // // // // //         onChange={(e) =>
// // // // // //           setMessage(e.target.value)
// // // // // //         }
// // // // // //         placeholder="Send a message..."
// // // // // //       />

// // // // // //       <Button onClick={handleSubmit}>
// // // // // //         Send
// // // // // //       </Button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { useState, useTransition } from "react";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { sendMessageAction } from "../actions/send-message.action";

// // // // // interface Props {
// // // // //   chatId: string;
// // // // // }

// // // // // export default function ChatInput({ chatId }: Props) {
// // // // //   const [message, setMessage] = useState("");
// // // // //   const [isPending, startTransition] = useTransition();
// // // // //   const router = useRouter();

// // // // //   async function handleSubmit() {
// // // // //     if (!message.trim()) return;

// // // // //     const content = message;

// // // // //     console.log("SENDING TO CHAT =", chatId);

// // // // //     setMessage("");

// // // // //     startTransition(async () => {
// // // // //       await sendMessageAction({
// // // // //         content,
// // // // //         chatId,
// // // // //       });

// // // // //       router.refresh();
// // // // //     });
// // // // //   }

// // // // //   return (
// // // // //     <div className="flex gap-2">
// // // // //       <Input
// // // // //         value={message}
// // // // //         onChange={(e) => setMessage(e.target.value)}
// // // // //         placeholder="Send a message..."
// // // // //         onKeyDown={(e) => {
// // // // //           if (e.key === "Enter") {
// // // // //             e.preventDefault();
// // // // //             handleSubmit();
// // // // //           }
// // // // //         }}
// // // // //       />

// // // // //       <Button
// // // // //         type="button"
// // // // //         onClick={handleSubmit}
// // // // //         disabled={isPending}
// // // // //       >
// // // // //         Send
// // // // //       </Button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useRef, useState, useTransition } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { ArrowUp, Loader2, Mic, Pencil, Plus } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { sendMessageAction } from "../actions/send-message.action";

// // // // interface Props {
// // // //   chatId: string;
// // // // }

// // // // export default function ChatInput({ chatId }: Props) {
// // // //   const [message, setMessage] = useState("");
// // // //   const [isPending, startTransition] = useTransition();
// // // //   const router = useRouter();
// // // //   const inputRef = useRef<HTMLInputElement | null>(null);

// // // //   function handleSubmit() {
// // // //     const content = message.trim();
// // // //     if (!content || isPending) return;

// // // //     setMessage("");

// // // //     startTransition(async () => {
// // // //       try {
// // // //         await sendMessageAction({ content, chatId });
// // // //         router.refresh();
// // // //       } finally {
// // // //         inputRef.current?.focus();
// // // //       }
// // // //     });
// // // //   }

// // // //   // return (
// // // //   //   <div className="flex  justify-center w-full max-w-4xl items-center gap-2  rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 shadow-xl backdrop-blur-md focus-within:border-zinc-700">
// // // //   //     <Button
// // // //   //       type="button"
// // // //   //       variant="ghost"
// // // //   //       size="icon"
// // // //   //       aria-label="Add attachment"
// // // //   //       disabled={isPending}
// // // //   //       className="h-10 w-10 flex-shrink-0 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // // //   //     >
// // // //   //       <Plus className="h-5 w-5" />
// // // //   //     </Button>

// // // //   //     <Input
// // // //   //       ref={inputRef}
// // // //   //       value={message}
// // // //   //       onChange={(e) => setMessage(e.target.value)}
// // // //   //       onKeyDown={(e) => {
// // // //   //         if (e.key === "Enter" && !e.shiftKey) {
// // // //   //           e.preventDefault();
// // // //   //           handleSubmit();
// // // //   //         }
// // // //   //       }}
// // // //   //       placeholder="Message Friday..."
// // // //   //       aria-label="Message Friday"
// // // //   //       disabled={isPending}
// // // //   //       className="h-10 flex-1 border-none bg-transparent px-1 text-base text-white shadow-none outline-none ring-0 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-60"
// // // //   //     />

// // // //   //     <div className="flex flex-shrink-0 items-center gap-1.5">
// // // //   //       <Button
// // // //   //         type="button"
// // // //   //         variant="ghost"
// // // //   //         size="icon"
// // // //   //         aria-label="Edit prompt"
// // // //   //         disabled={isPending}
// // // //   //         className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // // //   //       >
// // // //   //         <Pencil className="h-5 w-5" />
// // // //   //       </Button>

// // // //   //       <Button
// // // //   //         type="button"
// // // //   //         variant="ghost"
// // // //   //         size="icon"
// // // //   //         aria-label="Use microphone"
// // // //   //         disabled={isPending}
// // // //   //         className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // // //   //       >
// // // //   //         <Mic className="h-5 w-5" />
// // // //   //       </Button>

// // // //   //       <Button
// // // //   //         type="button"
// // // //   //         aria-label={isPending ? "Sending message" : "Send message"}
// // // //   //         onClick={handleSubmit}
// // // //   //         disabled={isPending || !message.trim()}
// // // //   //         size="icon"
// // // //   //         className="h-11 w-11 flex-shrink-0 rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
// // // //   //       >
// // // //   //         {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
// // // //   //       </Button>
// // // //   //     </div>
// // // //   //   </div>
// // // //   // );
// // // //   // ... baki ka code same rahega

// // // // return (
// // // //   /* Yahan mx-auto add kiya hai */
// // // //   <div className="mx-auto flex justify-center w-full max-w-4xl items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 shadow-xl backdrop-blur-md focus-within:border-zinc-700">
// // // //     <Button
// // // //       type="button"
// // // //       variant="ghost"
// // // //       size="icon"
// // // //       aria-label="Add attachment"
// // // //       disabled={isPending}
// // // //       className="h-10 w-10 flex-shrink-0 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // // //     >
// // // //       <Plus className="h-5 w-5" />
// // // //     </Button>

// // // //     <Input
// // // //       ref={inputRef}
// // // //       value={message}
// // // //       onChange={(e) => setMessage(e.target.value)}
// // // //       onKeyDown={(e) => {
// // // //         if (e.key === "Enter" && !e.shiftKey) {
// // // //           e.preventDefault();
// // // //           handleSubmit();
// // // //         }
// // // //       }}
// // // //       placeholder="Message Friday..."
// // // //       aria-label="Message Friday"
// // // //       disabled={isPending}
// // // //       className="h-10 flex-1 border-none bg-transparent px-1 text-base text-white shadow-none outline-none ring-0 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-60"
// // // //     />

// // // //     <div className="flex flex-shrink-0 items-center gap-1.5">
// // // //       <Button
// // // //         type="button"
// // // //         variant="ghost"
// // // //         size="icon"
// // // //         aria-label="Edit prompt"
// // // //         disabled={isPending}
// // // //         className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // // //       >
// // // //         <Pencil className="h-5 w-5" />
// // // //       </Button>

// // // //       <Button
// // // //         type="button"
// // // //         variant="ghost"
// // // //         size="icon"
// // // //         aria-label="Use microphone"
// // // //         disabled={isPending}
// // // //         className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // // //       >
// // // //         <Mic className="h-5 w-5" />
// // // //       </Button>

// // // //       <Button
// // // //         type="button"
// // // //         aria-label={isPending ? "Sending message" : "Send message"}
// // // //         onClick={handleSubmit}
// // // //         disabled={isPending || !message.trim()}
// // // //         size="icon"
// // // //         className="h-11 w-11 flex-shrink-0 rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
// // // //       >
// // // //         {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
// // // //       </Button>
// // // //     </div>
// // // //   </div>
// // // // );
// // // // }

// // // "use client";

// // // import { useRef, useState, useTransition } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { ArrowUp, Loader2, Mic, Pencil, Plus, Sparkles } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { sendMessageAction } from "../actions/send-message.action";

// // // interface Props {
// // //   chatId: string;
// // // }

// // // export default function ChatInput({ chatId }: Props) {
// // //   const [message, setMessage] = useState("");
// // //   const [isPending, startTransition] = useTransition();
// // //   const router = useRouter();
// // //   const inputRef = useRef<HTMLInputElement | null>(null);

// // //   function handleSubmit() {
// // //     const content = message.trim();
// // //     if (!content || isPending) return;

// // //     setMessage("");

// // //     startTransition(async () => {
// // //       try {
// // //         await sendMessageAction({ content, chatId });
// // //         router.refresh();
// // //       } finally {
// // //         inputRef.current?.focus();
// // //       }
// // //     });
// // //   }

// // //   return (
// // //     <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-2">
// // //       {/* Typing / loading indicator */}
// // //       <AnimatePresence>
// // //         {isPending && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 8 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: 8 }}
// // //             className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md"
// // //           >
// // //             <Sparkles className="h-3.5 w-3.5 text-amber-300" />
// // //             <span>Friday is thinking</span>
// // //             <span className="flex items-center gap-1">
// // //               <motion.span
// // //                 className="h-1.5 w-1.5 rounded-full bg-zinc-400"
// // //                 animate={{ opacity: [0.3, 1, 0.3] }}
// // //                 transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
// // //               />
// // //               <motion.span
// // //                 className="h-1.5 w-1.5 rounded-full bg-zinc-400"
// // //                 animate={{ opacity: [0.3, 1, 0.3] }}
// // //                 transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
// // //               />
// // //               <motion.span
// // //                 className="h-1.5 w-1.5 rounded-full bg-zinc-400"
// // //                 animate={{ opacity: [0.3, 1, 0.3] }}
// // //                 transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
// // //               />
// // //             </span>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Input bar */}
// // //       <div className="flex w-full items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 shadow-xl backdrop-blur-md focus-within:border-zinc-700">
// // //         <Button
// // //           type="button"
// // //           variant="ghost"
// // //           size="icon"
// // //           aria-label="Add attachment"
// // //           disabled={isPending}
// // //           className="h-10 w-10 flex-shrink-0 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // //         >
// // //           <Plus className="h-5 w-5" />
// // //         </Button>

// // //         <Input
// // //           ref={inputRef}
// // //           value={message}
// // //           onChange={(e) => setMessage(e.target.value)}
// // //           onKeyDown={(e) => {
// // //             if (e.key === "Enter" && !e.shiftKey) {
// // //               e.preventDefault();
// // //               handleSubmit();
// // //             }
// // //           }}
// // //           placeholder="Message Friday..."
// // //           aria-label="Message Friday"
// // //           disabled={isPending}
// // //           className="h-10 flex-1 border-none bg-transparent px-1 text-base text-white shadow-none outline-none ring-0 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-60"
// // //         />

// // //         <div className="flex flex-shrink-0 items-center gap-1.5">
// // //           <Button
// // //             type="button"
// // //             variant="ghost"
// // //             size="icon"
// // //             aria-label="Edit prompt"
// // //             disabled={isPending}
// // //             className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // //           >
// // //             <Pencil className="h-5 w-5" />
// // //           </Button>

// // //           <Button
// // //             type="button"
// // //             variant="ghost"
// // //             size="icon"
// // //             aria-label="Use microphone"
// // //             disabled={isPending}
// // //             className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// // //           >
// // //             <Mic className="h-5 w-5" />
// // //           </Button>

// // //           <Button
// // //             type="button"
// // //             aria-label={isPending ? "Sending message" : "Send message"}
// // //             onClick={handleSubmit}
// // //             disabled={isPending || !message.trim()}
// // //             size="icon"
// // //             className="h-11 w-11 flex-shrink-0 rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
// // //           >
// // //             {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useRef, useState, useTransition } from "react";
// // import { useRouter } from "next/navigation";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { ArrowUp, Loader2, Mic, Pencil, Plus, Sparkles } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { sendMessageAction } from "../actions/send-message.action";
// // import { useChatContext } from "@/components/chat-context";


// // interface Props {
// //   chatId: string;
// // }

// // export default function ChatInput({ chatId }: Props) {
// //   const [message, setMessage] = useState("");
// //   const [isPending, startTransition] = useTransition();
// //   const router = useRouter();
// //   const inputRef = useRef<HTMLInputElement | null>(null);
// //   const { setIsPending } = useChatContext();

// //   function handleSubmit() {
// //     const content = message.trim();
// //     if (!content || isPending) return;

// //     setMessage("");
// //     setIsPending(true); // 👈 tell MessageList that Friday is typing

// //     startTransition(async () => {
// //       try {
// //         await sendMessageAction({ content, chatId });
// //         router.refresh();
// //       } finally {
// //         setIsPending(false); // 👈 response aavi gayu, typing indicator hide
// //         inputRef.current?.focus();
// //       }
// //     });
// //   }

// //   return (
// //     <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-2">
// //       {/* Input bar — same as before, "Friday is thinking" wala AnimatePresence block kadhi nakho ahi thi (optional, niche samjavyu chhe) */}
// //       <div className="flex w-full items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 shadow-xl backdrop-blur-md focus-within:border-zinc-700">
// //         <Button
// //           type="button"
// //           variant="ghost"
// //           size="icon"
// //           aria-label="Add attachment"
// //           disabled={isPending}
// //           className="h-10 w-10 flex-shrink-0 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// //         >
// //           <Plus className="h-5 w-5" />
// //         </Button>

// //         <Input
// //           ref={inputRef}
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //           onKeyDown={(e) => {
// //             if (e.key === "Enter" && !e.shiftKey) {
// //               e.preventDefault();
// //               handleSubmit();
// //             }
// //           }}
// //           placeholder="Message Friday..."
// //           aria-label="Message Friday"
// //           disabled={isPending}
// //           className="h-10 flex-1 border-none bg-transparent px-1 text-base text-white shadow-none outline-none ring-0 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-60"
// //         />

// //         <div className="flex flex-shrink-0 items-center gap-1.5">
// //           <Button
// //             type="button"
// //             variant="ghost"
// //             size="icon"
// //             aria-label="Edit prompt"
// //             disabled={isPending}
// //             className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// //           >
// //             <Pencil className="h-5 w-5" />
// //           </Button>

// //           <Button
// //             type="button"
// //             variant="ghost"
// //             size="icon"
// //             aria-label="Use microphone"
// //             disabled={isPending}
// //             className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
// //           >
// //             <Mic className="h-5 w-5" />
// //           </Button>

// //           <Button
// //             type="button"
// //             aria-label={isPending ? "Sending message" : "Send message"}
// //             onClick={handleSubmit}
// //             disabled={isPending || !message.trim()}
// //             size="icon"
// //             className="h-11 w-11 flex-shrink-0 rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
// //           >
// //             {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";

// // import { useRef, useState, useTransition } from "react";
// // import { useRouter } from "next/navigation";
// // import {
// //   ArrowUp,
// //   Loader2,
// //   Mic,
// //   Pencil,
// //   Plus,
// //   X,
// // } from "lucide-react";

// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";

// // import { sendMessageAction } from "../actions/send-message.action";
// // import { useChatContext } from "@/components/chat-context";
// // import { uploadImageAction } from "../actions/upload-file.action";

// // interface Props {
// //   chatId: string;
// // }

// // export default function ChatInput({ chatId }: Props) {
// //   const [message, setMessage] = useState("");
// //   const [isPending, startTransition] = useTransition();

// //   const [image, setImage] = useState<File | null>(null);
// //   const [preview, setPreview] = useState("");

// //   const router = useRouter();

// //   const inputRef = useRef<HTMLInputElement>(null);
// //   const fileInputRef = useRef<HTMLInputElement>(null);

// //   const { setIsPending } = useChatContext();

// //   function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
// //     const file = e.target.files?.[0];

// //     if (!file) return;

// //     setImage(file);
// //     setPreview(URL.createObjectURL(file));
// //   }

// //   function removeImage() {
// //     setImage(null);
// //     setPreview("");

// //     if (fileInputRef.current) {
// //       fileInputRef.current.value = "";
// //     }
// //   }

// //   function handleSubmit() {
// //     if ((!message.trim() && !image) || isPending) return;

// //     const currentMessage = message;

// //     setMessage("");
// //     setIsPending(true);

// //     // startTransition(async () => {
// //     //   try {
// //     //     await sendMessageAction({
// //     //       content: currentMessage,
// //     //       chatId,
// //     //       image,
// //     //     });

// //     //     removeImage();

// //     //     router.refresh();
// //     //   } finally {
// //     //     setIsPending(false);
// //     //     inputRef.current?.focus();
// //     //   }
// //     // });
// //     startTransition(async () => {
// //   try {
// //     let imageUrl = "";

// //     if (image) {
// //       imageUrl = await uploadImageAction(image);
// //     }

// //     await sendMessageAction({
// //       content: currentMessage,
// //       chatId,
// //       imageUrl,
// //     });

// //     removeImage();

// //     router.refresh();
// //   } finally {
// //     setIsPending(false);
// //     inputRef.current?.focus();
// //   }
// // });
// //   }

// //   return (
// //     <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">

// //       {/* Image Preview */}

// //       {preview && (
// //         <div className="relative w-fit">
// //           <img
// //             src={preview}
// //             alt="preview"
// //             className="max-h-48 rounded-xl border border-zinc-700"
// //           />

// //           <button
// //             onClick={removeImage}
// //             className="absolute right-2 top-2 rounded-full bg-black/70 p-1 text-white"
// //           >
// //             <X className="h-4 w-4" />
// //           </button>
// //         </div>
// //       )}

// //       {/* Hidden File Input */}

// //       <input
// //         ref={fileInputRef}
// //         type="file"
// //         accept="image/*"
// //         hidden
// //         onChange={handleImage}
// //       />

// //       {/* Input */}

// //       <div className="flex w-full items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2">

// //         {/* Image Upload */}

// //         <Button
// //           type="button"
// //           variant="ghost"
// //           size="icon"
// //           onClick={() => fileInputRef.current?.click()}
// //           disabled={isPending}
// //         >
// //           <Plus className="h-5 w-5" />
// //         </Button>

// //         <Input
// //           ref={inputRef}
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //           placeholder="Message Friday..."
// //           disabled={isPending}
// //           onKeyDown={(e) => {
// //             if (e.key === "Enter") {
// //               e.preventDefault();
// //               handleSubmit();
// //             }
// //           }}
// //           className="border-none bg-transparent shadow-none"
// //         />

// //         <Button
// //           type="button"
// //           variant="ghost"
// //           size="icon"
// //         >
// //           <Pencil className="h-5 w-5" />
// //         </Button>

// //         <Button
// //           type="button"
// //           variant="ghost"
// //           size="icon"
// //         >
// //           <Mic className="h-5 w-5" />
// //         </Button>

// //         <Button
// //           onClick={handleSubmit}
// //           disabled={isPending || (!message.trim() && !image)}
// //           size="icon"
// //           className="rounded-full"
// //         >
// //           {isPending ? (
// //             <Loader2 className="h-5 w-5 animate-spin" />
// //           ) : (
// //             <ArrowUp className="h-5 w-5" />
// //           )}
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useRef, useState, useTransition } from "react";
// import { useRouter } from "next/navigation";
// import {
//   ArrowUp,
//   Loader2,
//   Mic,
//   Pencil,
//   Plus,
//   X,
//   FileText,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import { sendMessageAction } from "../actions/send-message.action";
// import { uploadFileAction } from "../actions/upload-file.action";
// import { useChatContext } from "@/components/chat-context";

// interface Props {
//   chatId: string;
// }

// export default function ChatInput({ chatId }: Props) {
//   const [message, setMessage] = useState("");
//   const [isPending, startTransition] = useTransition();

//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState("");

//   const router = useRouter();

//   const inputRef = useRef<HTMLInputElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const { setIsPending } = useChatContext();

//   function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
//     const selected = e.target.files?.[0];

//     if (!selected) return;

//     setFile(selected);

//     // Preview only for image
//     if (selected.type.startsWith("image/")) {
//       setPreview(URL.createObjectURL(selected));
//     } else {
//       setPreview("");
//     }
//   }

//   function removeFile() {
//     setFile(null);
//     setPreview("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   }

// function handleSubmit() {
//   if ((!message.trim() && !file) || isPending) return;

//   const currentMessage = message;

//   setMessage("");
//   setIsPending(true);

//   startTransition(async () => {
//     try {
//       let fileUrl = "";
//       let fileType: "image" | "pdf" | undefined = undefined;

//       if (file) {
//         const result = await uploadFileAction(file);

//         fileUrl = result.fileUrl;
//         fileType = result.fileType;
//       }

//       await sendMessageAction({
//         content: currentMessage,
//         chatId,
//         fileUrl,
//         fileType,
//       });

//       removeFile();

//       router.refresh();
//     } finally {
//       setIsPending(false);
//       inputRef.current?.focus();
//     }
//   });
// }

//   return (
//     <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">

//       {/* Preview */}

//       {file && (
//         <div className="relative w-fit">

//           {preview ? (
//             <img
//               src={preview}
//               alt="preview"
//               className="max-h-48 rounded-xl border border-zinc-700"
//             />
//           ) : (
//             <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3">
//               <FileText className="h-8 w-8 text-red-500" />
//               <span className="text-sm text-white">
//                 {file.name}
//               </span>
//             </div>
//           )}

//           <button
//             onClick={removeFile}
//             className="absolute right-2 top-2 rounded-full bg-black/70 p-1 text-white"
//           >
//             <X className="h-4 w-4" />
//           </button>

//         </div>
//       )}

//       {/* Hidden Input */}

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="image/*,.pdf"
//         hidden
//         onChange={handleFile}
//       />

//       {/* Chat Bar */}

//       <div className="flex w-full items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2">

//         <Button
//           type="button"
//           variant="ghost"
//           size="icon"
//           disabled={isPending}
//           onClick={() => fileInputRef.current?.click()}
//         >
//           <Plus className="h-5 w-5" />
//         </Button>

//         <Input
//           ref={inputRef}
//           value={message}
//           disabled={isPending}
//           placeholder="Message Friday..."
//           className="border-none bg-transparent shadow-none"
//           onChange={(e) => setMessage(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               e.preventDefault();
//               handleSubmit();
//             }
//           }}
//         />

//         <Button variant="ghost" size="icon">
//           <Pencil className="h-5 w-5" />
//         </Button>

//         <Button variant="ghost" size="icon">
//           <Mic className="h-5 w-5" />
//         </Button>

//         <Button
//           size="icon"
//           className="rounded-full"
//           onClick={handleSubmit}
//           disabled={isPending || (!message.trim() && !file)}
//         >
//           {isPending ? (
//             <Loader2 className="h-5 w-5 animate-spin" />
//           ) : (
//             <ArrowUp className="h-5 w-5" />
//           )}
//         </Button>

//       </div>

//     </div>
//   );
// }
"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUp,
  Loader2,
  Mic,
  Pencil,
  Plus,
  X,
  FileText,
} from "lucide-react";

import { useStreamContext } from "@/components/stream-context";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { sendMessageAction } from "../actions/send-message.action";
import { uploadFileAction } from "../actions/upload-file.action";
import { useChatContext } from "@/components/chat-context";
import { streamChat } from "@/modules/ai/utils/stream-chat";

interface Props {
  chatId: string;
}

export default function ChatInput({ chatId }: Props) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setStreamingMessage } = useStreamContext();

  const { setIsPending } = useChatContext();

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];

    if (!selected) return;

    setFile(selected);

    // Preview only for image
    if (selected.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview("");
    }
  }

  function removeFile() {
    setFile(null);
    setPreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleSubmit() {
    if ((!message.trim() && !file) || isPending) return;

    const currentMessage = message;

    setMessage("");
    setIsPending(true);

    startTransition(async () => {
      try {
        let fileUrl = "";
        let fileType: "image" | "pdf" | undefined = undefined;

        if (file) {
          const result = await uploadFileAction(file);

          fileUrl = result.fileUrl;
          fileType = result.fileType;
        }

        // await sendMessageAction({
        //   content: currentMessage,
        //   chatId,
        //   fileUrl,
        //   fileType,
        // });
        // Save the user message first
await sendMessageAction({
  content: currentMessage,
  chatId,
  fileUrl,
  fileType,
});

// Start streaming the assistant response
await streamChat(currentMessage, (chunk) => {
  setStreamingMessage((prev) => prev + " " + chunk);
});

// Clear streamed text before refreshing
setStreamingMessage("");

router.refresh();

        removeFile();

        router.refresh();
      } finally {
        setIsPending(false);
        inputRef.current?.focus();
      }
    });
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 sm:gap-3">

      {/* Preview */}

      {file && (
        <div className="relative w-fit max-w-[85%] sm:max-w-xs">

          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="max-h-32 w-full rounded-xl border border-zinc-700 object-cover sm:max-h-48"
            />
          ) : (
            <div className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
              <FileText className="h-6 w-6 flex-shrink-0 text-red-500 sm:h-8 sm:w-8" />
              <span className="truncate text-xs text-white sm:text-sm">
                {file.name}
              </span>
            </div>
          )}

          <button
            onClick={removeFile}
            className="absolute right-1.5 top-1.5 rounded-full bg-black/70 p-1 text-white sm:right-2 sm:top-2"
          >
            <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>

        </div>
      )}

      {/* Hidden Input */}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.pdf"
        hidden
        onChange={handleFile}
      />

      {/* Chat Bar */}

      <div className="flex w-full flex-wrap items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-2 py-1.5 sm:flex-nowrap sm:gap-2 sm:px-3 sm:py-2">

        <Button
          type="button"
          variant="ghost"
          size="icon"
          disabled={isPending}
          onClick={() => fileInputRef.current?.click()}
          className="h-9 w-9 flex-shrink-0 sm:h-10 sm:w-10"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        <Input
          ref={inputRef}
          value={message}
          disabled={isPending}
          placeholder="Message Friday..."
          className="min-w-0 flex-1 border-none bg-transparent text-sm shadow-none sm:text-base"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />

        <Button
          variant="ghost"
          size="icon"
          className="hidden h-9 w-9 flex-shrink-0 sm:flex sm:h-10 sm:w-10"
        >
          <Pencil className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 flex-shrink-0 sm:h-10 sm:w-10"
        >
          <Mic className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        <Button
          size="icon"
          className="h-9 w-9 flex-shrink-0 rounded-full sm:h-10 sm:w-10"
          onClick={handleSubmit}
          disabled={isPending || (!message.trim() && !file)}
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin sm:h-5 sm:w-5" />
          ) : (
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
        </Button>

      </div>

    </div>
  );
}