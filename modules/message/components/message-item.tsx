// // // // // // interface Props {
// // // // // //   message: {
// // // // // //     content: string;
// // // // // //     role: string;
// // // // // //   };
// // // // // // }

// // // // // // export default function MessageItem({
// // // // // //   message,
// // // // // // }: Props) {
// // // // // //   return (
// // // // // //     <div
// // // // // //       className={`mb-4 flex ${
// // // // // //         message.role === "USER"
// // // // // //           ? "justify-end"
// // // // // //           : "justify-start"
// // // // // //       }`}
// // // // // //     >
// // // // // //       <div className="rounded-xl bg-muted p-3 max-w-lg">
// // // // // //         {message.content}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { Message } from "@prisma/client";
// // // // // import { Sparkles } from "lucide-react";


// // // // // interface Props {
// // // // //   message: Message;
// // // // // }

// // // // // export default function MessageItem({ message }: Props) {
// // // // //   const isUser = message.role === "USER";

// // // // //   return (
// // // // //     <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
// // // // //       <div className={`flex max-w-[85%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
// // // // //         {!isUser && (
// // // // //           <div className="flex items-center gap-1.5 px-1 text-xs font-medium text-zinc-500">
// // // // //             <Sparkles className="h-3.5 w-3.5 text-amber-300" />
// // // // //             Friday
// // // // //           </div>
// // // // //         )}

// // // // //         <div
// // // // //           className={`rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base ${
// // // // //             isUser
// // // // //               ? "bg-zinc-100 text-zinc-900"
// // // // //               : "border border-zinc-800 bg-zinc-900 text-zinc-100"
// // // // //           }`}
// // // // //         >
// // // // //           {message.content}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { Message } from "@prisma/client";
// // // // import { Sparkles } from "lucide-react";
// // // // import ReactMarkdown from "react-markdown";
// // // // import remarkGfm from "remark-gfm";
// // // // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // // // import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// // // // interface Props {
// // // //   message: Message;
// // // // }

// // // // export default function MessageItem({ message }: Props) {
// // // //   const isUser = message.role === "USER";

// // // //   return (
// // // //     <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
// // // //       <div className={`flex max-w-[85%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
// // // //         {!isUser && (
// // // //           <div className="flex items-center gap-1.5 px-1 text-xs font-medium text-zinc-500">
// // // //             <Sparkles className="h-3.5 w-3.5 text-amber-300" />
// // // //             Friday
// // // //           </div>
// // // //         )}

// // // //         <div
// // // //           className={`rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base ${
// // // //             isUser
// // // //               ? "bg-zinc-100 text-zinc-900"
// // // //               : "border border-zinc-800 bg-zinc-900 text-zinc-100"
// // // //           }`}
// // // //         >
// // // //           {isUser ? (
// // // //             <p className="whitespace-pre-wrap">{message.content}</p>
// // // //           ) : (
// // // //             <div className="markdown-body">
// // // //               <ReactMarkdown
// // // //                 remarkPlugins={[remarkGfm]}
// // // //                 components={{
// // // //                   h1: ({ children }) => (
// // // //                     <h1 className="mb-3 mt-4 text-xl font-bold text-white first:mt-0">{children}</h1>
// // // //                   ),
// // // //                   h2: ({ children }) => (
// // // //                     <h2 className="mb-2 mt-4 text-lg font-bold text-white first:mt-0">{children}</h2>
// // // //                   ),
// // // //                   h3: ({ children }) => (
// // // //                     <h3 className="mb-2 mt-3 text-base font-semibold text-white first:mt-0">{children}</h3>
// // // //                   ),
// // // //                   p: ({ children }) => (
// // // //                     <p className="mb-3 leading-relaxed last:mb-0">{children}</p>
// // // //                   ),
// // // //                   ul: ({ children }) => (
// // // //                     <ul className="mb-3 ml-5 list-disc space-y-1.5 last:mb-0">{children}</ul>
// // // //                   ),
// // // //                   ol: ({ children }) => (
// // // //                     <ol className="mb-3 ml-5 list-decimal space-y-1.5 last:mb-0">{children}</ol>
// // // //                   ),
// // // //                   li: ({ children }) => (
// // // //                     <li className="leading-relaxed">{children}</li>
// // // //                   ),
// // // //                   strong: ({ children }) => (
// // // //                     <strong className="font-semibold text-white">{children}</strong>
// // // //                   ),
// // // //                   em: ({ children }) => (
// // // //                     <em className="italic text-zinc-200">{children}</em>
// // // //                   ),
// // // //                   hr: () => <hr className="my-4 border-zinc-800" />,
// // // //                   blockquote: ({ children }) => (
// // // //                     <blockquote className="my-3 border-l-2 border-emerald-500/40 pl-4 text-zinc-400 italic">
// // // //                       {children}
// // // //                     </blockquote>
// // // //                   ),
// // // //                   a: ({ children, href }) => (
// // // //                     <a
// // // //                       href={href}
// // // //                       target="_blank"
// // // //                       rel="noopener noreferrer"
// // // //                       className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
// // // //                     >
// // // //                       {children}
// // // //                     </a>
// // // //                   ),
// // // //                   table: ({ children }) => (
// // // //                     <div className="mb-3 overflow-x-auto last:mb-0">
// // // //                       <table className="w-full border-collapse text-sm">{children}</table>
// // // //                     </div>
// // // //                   ),
// // // //                   thead: ({ children }) => (
// // // //                     <thead className="border-b border-zinc-700">{children}</thead>
// // // //                   ),
// // // //                   th: ({ children }) => (
// // // //                     <th className="px-3 py-2 text-left font-semibold text-zinc-200">{children}</th>
// // // //                   ),
// // // //                   td: ({ children }) => (
// // // //                     <td className="border-t border-zinc-800 px-3 py-2 text-zinc-300">{children}</td>
// // // //                   ),
// // // //                   code: ({ className, children, ...props }) => {
// // // //                     const match = /language-(\w+)/.exec(className || "");
// // // //                     const isInline = !match;

// // // //                     if (isInline) {
// // // //                       return (
// // // //                         <code
// // // //                           className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300"
// // // //                           {...props}
// // // //                         >
// // // //                           {children}
// // // //                         </code>
// // // //                       );
// // // //                     }

// // // //                     return (
// // // //                       <div className="my-3 overflow-hidden rounded-xl border border-zinc-800">
// // // //                         <div className="flex items-center justify-between bg-zinc-950 px-4 py-2 text-xs text-zinc-400">
// // // //                           <span>{match![1]}</span>
// // // //                         </div>
// // // //                         <SyntaxHighlighter
// // // //                           language={match![1]}
// // // //                           style={oneDark}
// // // //                           customStyle={{
// // // //                             margin: 0,
// // // //                             padding: "1rem",
// // // //                             background: "#0D0D0D",
// // // //                             fontSize: "0.85em",
// // // //                           }}
// // // //                         >
// // // //                           {String(children).replace(/\n$/, "")}
// // // //                         </SyntaxHighlighter>
// // // //                       </div>
// // // //                     );
// // // //                   },
// // // //                 }}
// // // //               >
// // // //                 {message.content}
// // // //               </ReactMarkdown>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState } from "react";
// // // import { Message } from "@prisma/client";
// // // import { Sparkles, Pencil, Trash, Check, X } from "lucide-react";
// // // import ReactMarkdown from "react-markdown";
// // // import remarkGfm from "remark-gfm";
// // // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // // import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// // // import { updateMessageAction } from "../actions/update-message.action";
// // // import { deleteMessageAction } from "../actions/delete-message.action";


// // // interface Props {
// // //   message: Message;
// // //   chatId: string;
// // // }

// // // export default function MessageItem({ message, chatId }: Props) {
// // //   const isUser = message.role === "USER";
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [editContent, setEditContent] = useState(message.content);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);


// // // const handleUpdate = async () => {
// // //   if (!editContent.trim() || editContent === message.content) {
// // //     setIsEditing(false);
// // //     return;
// // //   }

// // //   try {
// // //     setIsSubmitting(true);

// // //     await updateMessageAction(
// // //       message.id,
// // //       chatId,
// // //       editContent
// // //     );

// // //     setIsEditing(false);
// // //   } catch (error) {
// // //     console.error(error);
// // //   } finally {
// // //     setIsSubmitting(false);
// // //   }
// // // };
// // //   const handleDelete = async () => {
// // //     if (confirm("Are you sure you want to delete this message?")) {
// // //       setIsSubmitting(true);
// // //       await deleteMessageAction(message.id, chatId);
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className={`group flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
// // //       <div className={`flex max-w-[85%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
// // //         {!isUser && (
// // //           <div className="flex items-center gap-1.5 px-1 text-xs font-medium text-zinc-500">
// // //             <Sparkles className="h-3.5 w-3.5 text-amber-300" />
// // //             Friday
// // //           </div>
// // //         )}

// // //         <div className="flex items-center gap-2 max-w-full group">
// // //           {/* Action buttons for user messages (Visible on hover if not editing) */}
// // //           {isUser && !isEditing && (
// // //             <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-zinc-800 border border-zinc-700 rounded-lg p-1 mr-1 shadow-sm">
// // //               <button
// // //                 onClick={() => setIsEditing(true)}
// // //                 disabled={isSubmitting}
// // //                 className="p-1 hover:bg-zinc-700 rounded text-zinc-400 hover:text-zinc-200 transition-colors"
// // //                 title="Edit message"
// // //               >
// // //                 <Pencil className="h-3.5 w-3.5" />
// // //               </button>
// // //               <button
// // //                 onClick={handleDelete}
// // //                 disabled={isSubmitting}
// // //                 className="p-1 hover:bg-zinc-700 rounded text-red-400 hover:text-red-300 transition-colors"
// // //                 title="Delete message"
// // //               >
// // //                 <Trash className="h-3.5 w-3.5" />
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* Main Bubble Area */}
// // //           <div
// // //             className={`rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base w-full ${
// // //               isUser
// // //                 ? "bg-zinc-100 text-zinc-900"
// // //                 : "border border-zinc-800 bg-zinc-900 text-zinc-100"
// // //             }`}
// // //           >
// // //             {isUser ? (
// // //               isEditing ? (
// // //                 <div className="flex flex-col gap-2 min-w-[240px] sm:min-w-[320px]">
// // //                   <textarea
// // //                     value={editContent}
// // //                     onChange={(e) => setEditContent(e.target.value)}
// // //                     className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none text-sm"
// // //                     rows={3}
// // //                     disabled={isSubmitting}
// // //                   />
// // //                   <div className="flex justify-end gap-1.5">
// // //                     <button
// // //                       onClick={() => {
// // //                         setIsEditing(false);
// // //                         setEditContent(message.content);
// // //                       }}
// // //                       disabled={isSubmitting}
// // //                       className="p-1.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded-md transition-colors"
// // //                     >
// // //                       <X className="h-4 w-4" />
// // //                     </button>
// // //                     <button
// // //                       onClick={handleUpdate}
// // //                       disabled={isSubmitting || !editContent.trim()}
// // //                       className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md transition-colors flex items-center justify-center"
// // //                     >
// // //                       <Check className="h-4 w-4" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ) : (
// // //                 <p className="whitespace-pre-wrap">{message.content}</p>
// // //               )
// // //             ) : (
// // //               <div className="markdown-body">
// // //                 <ReactMarkdown
// // //                   remarkPlugins={[remarkGfm]}
// // //                   components={{
// // //                     h1: ({ children }) => (
// // //                       <h1 className="mb-3 mt-4 text-xl font-bold text-white first:mt-0">{children}</h1>
// // //                     ),
// // //                     h2: ({ children }) => (
// // //                       <h2 className="mb-2 mt-4 text-lg font-bold text-white first:mt-0">{children}</h2>
// // //                     ),
// // //                     h3: ({ children }) => (
// // //                       <h3 className="mb-2 mt-3 text-base font-semibold text-white first:mt-0">{children}</h3>
// // //                     ),
// // //                     p: ({ children }) => (
// // //                       <p className="mb-3 leading-relaxed last:mb-0">{children}</p>
// // //                     ),
// // //                     ul: ({ children }) => (
// // //                       <ul className="mb-3 ml-5 list-disc space-y-1.5 last:mb-0">{children}</ul>
// // //                     ),
// // //                     ol: ({ children }) => (
// // //                       <ol className="mb-3 ml-5 list-decimal space-y-1.5 last:mb-0">{children}</ol>
// // //                     ),
// // //                     li: ({ children }) => (
// // //                       <li className="leading-relaxed">{children}</li>
// // //                     ),
// // //                     strong: ({ children }) => (
// // //                       <strong className="font-semibold text-white">{children}</strong>
// // //                     ),
// // //                     em: ({ children }) => (
// // //                       <em className="italic text-zinc-200">{children}</em>
// // //                     ),
// // //                     hr: () => <hr className="my-4 border-zinc-800" />,
// // //                     blockquote: ({ children }) => (
// // //                       <blockquote className="my-3 border-l-2 border-emerald-500/40 pl-4 text-zinc-400 italic">
// // //                         {children}
// // //                       </blockquote>
// // //                     ),
// // //                     a: ({ children, href }) => (
// // //                       <a
// // //                         href={href}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                         className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
// // //                       >
// // //                         {children}
// // //                       </a>
// // //                     ),
// // //                     table: ({ children }) => (
// // //                       <div className="mb-3 overflow-x-auto last:mb-0">
// // //                         <table className="w-full border-collapse text-sm">{children}</table>
// // //                       </div>
// // //                     ),
// // //                     thead: ({ children }) => (
// // //                       <thead className="border-b border-zinc-700">{children}</thead>
// // //                     ),
// // //                     th: ({ children }) => (
// // //                       <th className="px-3 py-2 text-left font-semibold text-zinc-200">{children}</th>
// // //                     ),
// // //                     td: ({ children }) => (
// // //                       <td className="border-t border-zinc-800 px-3 py-2 text-zinc-300">{children}</td>
// // //                     ),
// // //                     code: ({ className, children, ...props }) => {
// // //                       const match = /language-(\w+)/.exec(className || "");
// // //                       const isInline = !match;

// // //                       if (isInline) {
// // //                         return (
// // //                           <code
// // //                             className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300"
// // //                             {...props}
// // //                           >
// // //                             {children}
// // //                           </code>
// // //                         );
// // //                       }

// // //                       return (
// // //                         <div className="my-3 overflow-hidden rounded-xl border border-zinc-800">
// // //                           <div className="flex items-center justify-between bg-zinc-950 px-4 py-2 text-xs text-zinc-400">
// // //                             <span>{match![1]}</span>
// // //                           </div>
// // //                           <SyntaxHighlighter
// // //                             language={match![1]}
// // //                             style={oneDark}
// // //                             customStyle={{
// // //                               margin: 0,
// // //                               padding: "1rem",
// // //                               background: "#0D0D0D",
// // //                               fontSize: "0.85em",
// // //                             }}
// // //                           >
// // //                             {String(children).replace(/\n$/, "")}
// // //                           </SyntaxHighlighter>
// // //                         </div>
// // //                       );
// // //                     },
// // //                   }}
// // //                 >
// // //                   {message.content}
// // //                 </ReactMarkdown>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useState } from "react";
// // import { Message } from "@prisma/client";
// // import { Sparkles, Pencil, Trash, Check, X, Copy } from "lucide-react";
// // import { toast } from "sonner";
// // import ReactMarkdown from "react-markdown";
// // import remarkGfm from "remark-gfm";
// // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// // import { updateMessageAction } from "../actions/update-message.action";
// // import { deleteMessageAction } from "../actions/delete-message.action";


// // interface Props {
// //   message: Message;
// //   chatId: string;
// // }

// // export default function MessageItem({ message, chatId }: Props) {
// //   const isUser = message.role === "USER";
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editContent, setEditContent] = useState(message.content);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [copied, setCopied] = useState(false);


// // const handleUpdate = async () => {
// //   if (!editContent.trim() || editContent === message.content) {
// //     setIsEditing(false);
// //     return;
// //   }

// //   try {
// //     setIsSubmitting(true);

// //     await updateMessageAction(
// //       message.id,
// //       chatId,
// //       editContent
// //     );

// //     setIsEditing(false);
// //   } catch (error) {
// //     console.error(error);
// //   } finally {
// //     setIsSubmitting(false);
// //   }
// // };
// //   const handleDelete = async () => {
// //     if (confirm("Are you sure you want to delete this message?")) {
// //       setIsSubmitting(true);
// //       await deleteMessageAction(message.id, chatId);
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleCopy = async () => {
// //     await navigator.clipboard.writeText(message.content);

// //     setCopied(true);
// //     toast.success("Copied!");

// //     setTimeout(() => {
// //       setCopied(false);
// //     }, 1500);
// //   };

// //   return (
// //     <div className={`group flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
// //       <div className={`flex max-w-[85%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
// //         {!isUser && (
// //           <div className="flex items-center justify-between w-full px-1">
// //             <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
// //               <Sparkles className="h-3.5 w-3.5 text-amber-300" />
// //               Friday
// //             </div>

// //             <button
// //               onClick={handleCopy}
// //               className="rounded-md p-1 text-zinc-500 hover:bg-zinc-800 hover:text-white transition"
// //               title="Copy response"
// //             >
// //               {copied ? (
// //                 <Check className="h-4 w-4 text-green-400" />
// //               ) : (
// //                 <Copy className="h-4 w-4" />
// //               )}
// //             </button>
// //           </div>
// //         )}

// //         <div className="flex items-center gap-2 max-w-full group">
// //           {/* Action buttons for user messages (Visible on hover if not editing) */}
// //           {isUser && !isEditing && (
// //             <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-zinc-800 border border-zinc-700 rounded-lg p-1 mr-1 shadow-sm">
// //               <button
// //                 onClick={() => setIsEditing(true)}
// //                 disabled={isSubmitting}
// //                 className="p-1 hover:bg-zinc-700 rounded text-zinc-400 hover:text-zinc-200 transition-colors"
// //                 title="Edit message"
// //               >
// //                 <Pencil className="h-3.5 w-3.5" />
// //               </button>
// //               <button
// //                 onClick={handleDelete}
// //                 disabled={isSubmitting}
// //                 className="p-1 hover:bg-zinc-700 rounded text-red-400 hover:text-red-300 transition-colors"
// //                 title="Delete message"
// //               >
// //                 <Trash className="h-3.5 w-3.5" />
// //               </button>
// //             </div>
// //           )}

// //           {/* Main Bubble Area */}
// //           <div
// //             className={`rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base w-full ${
// //               isUser
// //                 ? "bg-zinc-100 text-zinc-900"
// //                 : "border border-zinc-800 bg-zinc-900 text-zinc-100"
// //             }`}
// //           >
// //             {isUser ? (
// //               isEditing ? (
// //                 <div className="flex flex-col gap-2 min-w-[240px] sm:min-w-[320px]">
// //                   <textarea
// //                     value={editContent}
// //                     onChange={(e) => setEditContent(e.target.value)}
// //                     className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none text-sm"
// //                     rows={3}
// //                     disabled={isSubmitting}
// //                   />
// //                   <div className="flex justify-end gap-1.5">
// //                     <button
// //                       onClick={() => {
// //                         setIsEditing(false);
// //                         setEditContent(message.content);
// //                       }}
// //                       disabled={isSubmitting}
// //                       className="p-1.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded-md transition-colors"
// //                     >
// //                       <X className="h-4 w-4" />
// //                     </button>
// //                     <button
// //                       onClick={handleUpdate}
// //                       disabled={isSubmitting || !editContent.trim()}
// //                       className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md transition-colors flex items-center justify-center"
// //                     >
// //                       <Check className="h-4 w-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <p className="whitespace-pre-wrap">{message.content}</p>
// //               )
// //             ) : (
// //               <div className="markdown-body">
// //                 <ReactMarkdown
// //                   remarkPlugins={[remarkGfm]}
// //                   components={{
// //                     h1: ({ children }) => (
// //                       <h1 className="mb-3 mt-4 text-xl font-bold text-white first:mt-0">{children}</h1>
// //                     ),
// //                     h2: ({ children }) => (
// //                       <h2 className="mb-2 mt-4 text-lg font-bold text-white first:mt-0">{children}</h2>
// //                     ),
// //                     h3: ({ children }) => (
// //                       <h3 className="mb-2 mt-3 text-base font-semibold text-white first:mt-0">{children}</h3>
// //                     ),
// //                     p: ({ children }) => (
// //                       <p className="mb-3 leading-relaxed last:mb-0">{children}</p>
// //                     ),
// //                     ul: ({ children }) => (
// //                       <ul className="mb-3 ml-5 list-disc space-y-1.5 last:mb-0">{children}</ul>
// //                     ),
// //                     ol: ({ children }) => (
// //                       <ol className="mb-3 ml-5 list-decimal space-y-1.5 last:mb-0">{children}</ol>
// //                     ),
// //                     li: ({ children }) => (
// //                       <li className="leading-relaxed">{children}</li>
// //                     ),
// //                     strong: ({ children }) => (
// //                       <strong className="font-semibold text-white">{children}</strong>
// //                     ),
// //                     em: ({ children }) => (
// //                       <em className="italic text-zinc-200">{children}</em>
// //                     ),
// //                     hr: () => <hr className="my-4 border-zinc-800" />,
// //                     blockquote: ({ children }) => (
// //                       <blockquote className="my-3 border-l-2 border-emerald-500/40 pl-4 text-zinc-400 italic">
// //                         {children}
// //                       </blockquote>
// //                     ),
// //                     a: ({ children, href }) => (
                      
// //                        <a href={href}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
// //                       >
// //                         {children}
// //                       </a>
// //                     ),
// //                     table: ({ children }) => (
// //                       <div className="mb-3 overflow-x-auto last:mb-0">
// //                         <table className="w-full border-collapse text-sm">{children}</table>
// //                       </div>
// //                     ),
// //                     thead: ({ children }) => (
// //                       <thead className="border-b border-zinc-700">{children}</thead>
// //                     ),
// //                     th: ({ children }) => (
// //                       <th className="px-3 py-2 text-left font-semibold text-zinc-200">{children}</th>
// //                     ),
// //                     td: ({ children }) => (
// //                       <td className="border-t border-zinc-800 px-3 py-2 text-zinc-300">{children}</td>
// //                     ),
// //                     code: ({ className, children, ...props }) => {
// //                       const match = /language-(\w+)/.exec(className || "");
// //                       const isInline = !match;

// //                       if (isInline) {
// //                         return (
// //                           <code
// //                             className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300"
// //                             {...props}
// //                           >
// //                             {children}
// //                           </code>
// //                         );
// //                       }

// //                       return (
// //                         <div className="my-3 overflow-hidden rounded-xl border border-zinc-800">
// //                           <div className="flex items-center justify-between bg-zinc-950 px-4 py-2 text-xs text-zinc-400">
// //                             <span>{match![1]}</span>
// //                           </div>
// //                           <SyntaxHighlighter
// //                             language={match![1]}
// //                             style={oneDark}
// //                             customStyle={{
// //                               margin: 0,
// //                               padding: "1rem",
// //                               background: "#0D0D0D",
// //                               fontSize: "0.85em",
// //                             }}
// //                           >
// //                             {String(children).replace(/\n$/, "")}
// //                           </SyntaxHighlighter>
// //                         </div>
// //                       );
// //                     },
// //                   }}
// //                 >
// //                   {message.content}
// //                 </ReactMarkdown>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useState } from "react";
// // import { Message } from "@prisma/client";
// // import { Sparkles, Pencil, Trash, Check, X, Copy } from "lucide-react";
// // import { toast } from "sonner";
// // import { updateMessageAction } from "../actions/update-message.action";
// // import { deleteMessageAction } from "../actions/delete-message.action";
// // import MarkdownRenderer from "@/components/markdown-renderer";

// // interface Props {
// //   message: Message;
// //   chatId: string;
// // }

// // export default function MessageItem({ message, chatId }: Props) {
// //   const isUser = message.role === "USER";
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editContent, setEditContent] = useState(message.content);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [copied, setCopied] = useState(false);

// //   const handleUpdate = async () => {
// //     if (!editContent.trim() || editContent === message.content) {
// //       setIsEditing(false);
// //       return;
// //     }

// //     try {
// //       setIsSubmitting(true);
// //       await updateMessageAction(message.id, chatId, editContent);
// //       setIsEditing(false);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (confirm("Are you sure you want to delete this message?")) {
// //       setIsSubmitting(true);
// //       await deleteMessageAction(message.id, chatId);
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleCopy = async () => {
// //     await navigator.clipboard.writeText(message.content);
// //     setCopied(true);
// //     toast.success("Copied!");
// //     setTimeout(() => setCopied(false), 1500);
// //   };

// //   return (
// //     <div className={`group flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
// //       <div className={`flex max-w-[85%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
// //         {!isUser && (
// //           <div className="flex items-center justify-between w-full px-1">
// //             <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
// //               <Sparkles className="h-3.5 w-3.5 text-amber-300" />
// //               Friday
// //             </div>

// //             <button
// //               onClick={handleCopy}
// //               className="rounded-md p-1 text-zinc-500 hover:bg-zinc-800 hover:text-white transition"
// //               title="Copy response"
// //             >
// //               {copied ? (
// //                 <Check className="h-4 w-4 text-green-400" />
// //               ) : (
// //                 <Copy className="h-4 w-4" />
// //               )}
// //             </button>
// //           </div>
// //         )}

// //         <div className="flex items-center gap-2 max-w-full group">
// //           {isUser && !isEditing && (
// //             <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-zinc-800 border border-zinc-700 rounded-lg p-1 mr-1 shadow-sm">
// //               <button
// //                 onClick={() => setIsEditing(true)}
// //                 disabled={isSubmitting}
// //                 className="p-1 hover:bg-zinc-700 rounded text-zinc-400 hover:text-zinc-200 transition-colors"
// //                 title="Edit message"
// //               >
// //                 <Pencil className="h-3.5 w-3.5" />
// //               </button>
// //               <button
// //                 onClick={handleDelete}
// //                 disabled={isSubmitting}
// //                 className="p-1 hover:bg-zinc-700 rounded text-red-400 hover:text-red-300 transition-colors"
// //                 title="Delete message"
// //               >
// //                 <Trash className="h-3.5 w-3.5" />
// //               </button>
// //             </div>
// //           )}

// //           <div
// //             className={`rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base w-full ${
// //               isUser ? "bg-zinc-100 text-zinc-900" : "border border-zinc-800 bg-zinc-900 text-zinc-100"
// //             }`}
// //           >
// //             {isUser ? (
// //               isEditing ? (
// //                 <div className="flex flex-col gap-2 min-w-[240px] sm:min-w-[320px]">
// //                   <textarea
// //                     value={editContent}
// //                     onChange={(e) => setEditContent(e.target.value)}
// //                     className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none text-sm"
// //                     rows={3}
// //                     disabled={isSubmitting}
// //                   />
// //                   <div className="flex justify-end gap-1.5">
// //                     <button
// //                       onClick={() => {
// //                         setIsEditing(false);
// //                         setEditContent(message.content);
// //                       }}
// //                       disabled={isSubmitting}
// //                       className="p-1.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded-md transition-colors"
// //                     >
// //                       <X className="h-4 w-4" />
// //                     </button>
// //                     <button
// //                       onClick={handleUpdate}
// //                       disabled={isSubmitting || !editContent.trim()}
// //                       className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md transition-colors flex items-center justify-center"
// //                     >
// //                       <Check className="h-4 w-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <p className="whitespace-pre-wrap">{message.content}</p>
// //               )
// //             ) : (
// //               <MarkdownRenderer content={message.content} />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { Message } from "@prisma/client";
// import {
//   Sparkles,
//   Pencil,
//   Trash,
//   Check,
//   X,
//   Copy,
// } from "lucide-react";
// import { toast } from "sonner";

// import { updateMessageAction } from "../actions/update-message.action";
// import { deleteMessageAction } from "../actions/delete-message.action";

// import MarkdownRenderer from "@/components/markdown-renderer";

// interface Props {
//   message: Message;
//   chatId: string;
// }

// export default function MessageItem({
//   message,
//   chatId,
// }: Props) {
//   const isUser = message.role === "USER";

//   const [isEditing, setIsEditing] = useState(false);
//   const [editContent, setEditContent] = useState(message.content);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const handleUpdate = async () => {
//     if (
//       !editContent.trim() ||
//       editContent === message.content
//     ) {
//       setIsEditing(false);
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       await updateMessageAction(
//         message.id,
//         chatId,
//         editContent
//       );

//       setIsEditing(false);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (
//       confirm(
//         "Are you sure you want to delete this message?"
//       )
//     ) {
//       setIsSubmitting(true);

//       await deleteMessageAction(
//         message.id,
//         chatId
//       );

//       setIsSubmitting(false);
//     }
//   };

//   const handleCopy = async () => {
//     await navigator.clipboard.writeText(
//       message.content
//     );

//     setCopied(true);

//     toast.success("Copied!");

//     setTimeout(() => {
//       setCopied(false);
//     }, 1500);
//   };

//   return (
//     <div
//       className={`group flex w-full ${
//         isUser ? "justify-end" : "justify-start"
//       }`}
//     >
//       <div
//         className={`flex max-w-[85%] flex-col gap-1 ${
//           isUser ? "items-end" : "items-start"
//         }`}
//       >
//         {!isUser && (
//           <div className="flex w-full items-center justify-between px-1">
//             <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
//               <Sparkles className="h-3.5 w-3.5 text-amber-300" />
//               Friday
//             </div>

//             <button
//               onClick={handleCopy}
//               className="rounded-md p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
//             >
//               {copied ? (
//                 <Check className="h-4 w-4 text-green-400" />
//               ) : (
//                 <Copy className="h-4 w-4" />
//               )}
//             </button>
//           </div>
//         )}

//         <div className="flex max-w-full items-center gap-2">
//           {isUser && !isEditing && (
//             <div className="mr-1 flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-800 p-1 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
//               <button
//                 onClick={() =>
//                   setIsEditing(true)
//                 }
//                 disabled={isSubmitting}
//                 className="rounded p-1 text-zinc-400 transition hover:bg-zinc-700 hover:text-zinc-200"
//               >
//                 <Pencil className="h-3.5 w-3.5" />
//               </button>

//               <button
//                 onClick={handleDelete}
//                 disabled={isSubmitting}
//                 className="rounded p-1 text-red-400 transition hover:bg-zinc-700 hover:text-red-300"
//               >
//                 <Trash className="h-3.5 w-3.5" />
//               </button>
//             </div>
//           )}

//           <div
//             className={`w-full rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base ${
//               isUser
//                 ? "bg-zinc-100 text-zinc-900"
//                 : "border border-zinc-800 bg-zinc-900 text-zinc-100"
//             }`}
//           >
//             {isUser ? (
//               isEditing ? (
//                 <div className="flex min-w-[240px] flex-col gap-2 sm:min-w-[320px]">
//                   <textarea
//                     value={editContent}
//                     onChange={(e) =>
//                       setEditContent(e.target.value)
//                     }
//                     rows={3}
//                     disabled={isSubmitting}
//                     className="w-full resize-none rounded-lg border border-zinc-300 bg-white p-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500"
//                   />

//                   <div className="flex justify-end gap-2">
//                     <button
//                       onClick={() => {
//                         setIsEditing(false);
//                         setEditContent(
//                           message.content
//                         );
//                       }}
//                       className="rounded-md bg-zinc-200 p-1.5 text-zinc-700 hover:bg-zinc-300"
//                     >
//                       <X className="h-4 w-4" />
//                     </button>

//                     <button
//                       onClick={handleUpdate}
//                       disabled={
//                         isSubmitting ||
//                         !editContent.trim()
//                       }
//                       className="rounded-md bg-zinc-900 p-1.5 text-white hover:bg-zinc-800"
//                     >
//                       <Check className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-3">
//                   {message.imageUrl && (
//                     <img
//                       src={message.imageUrl}
//                       alt="Uploaded"
//                       className="max-h-80 w-full rounded-xl border border-zinc-300 object-cover"
//                     />
//                   )}

//                   {message.content && (
//                     <p className="whitespace-pre-wrap">
//                       {message.content}
//                     </p>
//                   )}
//                 </div>
//               )
//             ) : (
//               <div className="space-y-3">
//                 {message.imageUrl && (
//                   <img
//                     src={message.imageUrl}
//                     alt="Uploaded"
//                     className="max-h-80 w-full rounded-xl border border-zinc-700 object-cover"
//                   />
//                 )}

//                 <MarkdownRenderer
//                   content={message.content}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Message } from "@prisma/client";
import {
  Sparkles,
  Pencil,
  Trash,
  Check,
  X,
  Copy,
} from "lucide-react";
import { toast } from "sonner";

import { updateMessageAction } from "../actions/update-message.action";
import { deleteMessageAction } from "../actions/delete-message.action";

import MarkdownRenderer from "@/components/markdown-renderer";

interface Props {
  message: Message;
  chatId: string;
}

export default function MessageItem({
  message,
  chatId,
}: Props) {
  const isUser = message.role === "USER";

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(message.content);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleUpdate = async () => {
    if (
      !editContent.trim() ||
      editContent === message.content
    ) {
      setIsEditing(false);
      return;
    }

    try {
      setIsSubmitting(true);

      await updateMessageAction(
        message.id,
        chatId,
        editContent
      );

      setIsEditing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (
      confirm(
        "Are you sure you want to delete this message?"
      )
    ) {
      setIsSubmitting(true);

      await deleteMessageAction(
        message.id,
        chatId
      );

      setIsSubmitting(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      message.content
    );

    setCopied(true);

    toast.success("Copied!");

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className={`group flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[90%] flex-col gap-1 sm:max-w-[85%] ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        {!isUser && (
          <div className="flex w-full items-center justify-between px-1">
            <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Friday
            </div>

            <button
              onClick={handleCopy}
              className="rounded-md p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        )}

        <div className="flex max-w-full items-center gap-1.5 sm:gap-2">
          {isUser && !isEditing && (
            <div className="mr-1 flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-800 p-1 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
              <button
                onClick={() =>
                  setIsEditing(true)
                }
                disabled={isSubmitting}
                className="rounded p-1 text-zinc-400 transition hover:bg-zinc-700 hover:text-zinc-200"
              >
                <Pencil className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={handleDelete}
                disabled={isSubmitting}
                className="rounded p-1 text-red-400 transition hover:bg-zinc-700 hover:text-red-300"
              >
                <Trash className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          <div
            className={`w-full min-w-0 rounded-2xl px-3 py-2.5 text-sm leading-relaxed sm:px-4 sm:py-3 sm:text-base ${
              isUser
                ? "bg-zinc-100 text-zinc-900"
                : "border border-zinc-800 bg-zinc-900 text-zinc-100"
            }`}
          >
            {isUser ? (
              isEditing ? (
                <div className="flex w-full min-w-[200px] flex-col gap-2 sm:min-w-[320px]">
                  <textarea
                    value={editContent}
                    onChange={(e) =>
                      setEditContent(e.target.value)
                    }
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-lg border border-zinc-300 bg-white p-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  />

                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setEditContent(
                          message.content
                        );
                      }}
                      className="rounded-md bg-zinc-200 p-1.5 text-zinc-700 hover:bg-zinc-300"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <button
                      onClick={handleUpdate}
                      disabled={
                        isSubmitting ||
                        !editContent.trim()
                      }
                      className="rounded-md bg-zinc-900 p-1.5 text-white hover:bg-zinc-800"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {message.imageUrl && (
                    <img
                      src={message.imageUrl}
                      alt="Uploaded"
                      className="max-h-60 w-full rounded-xl border border-zinc-300 object-cover sm:max-h-80"
                    />
                  )}

                  {message.content && (
                    <p className="whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                  )}
                </div>
              )
            ) : (
              <div className="min-w-0 space-y-3 overflow-x-auto">
                {message.imageUrl && (
                  <img
                    src={message.imageUrl}
                    alt="Uploaded"
                    className="max-h-60 w-full rounded-xl border border-zinc-700 object-cover sm:max-h-80"
                  />
                )}

                <MarkdownRenderer
                  content={message.content}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}