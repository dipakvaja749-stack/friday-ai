// // import ChatInput from "@/modules/message/components/chat-input";
// // import MessageList from "@/modules/message/components/message-list";

import { ChatProvider } from "@/components/chat-context";
import DashboardComponent from "@/components/DashboardComponent";

// // export default async function ChatPage({
// //   params,
// // }: {
// //   params: Promise<{ chatId: string }>;
// // }) {
// //   const { chatId } = await params;

// //   return (
// //     <div className="flex h-screen flex-col">
// //       <div className="flex-1 overflow-y-auto p-6">
// //         <MessageList chatId={chatId} />
// //       </div>

// //       <div className="border-t p-4">
// //         <ChatInput chatId={chatId} />
// //       </div>
// //     </div>
// //   );
// // }

// import ChatInput from "@/modules/message/components/chat-input";
// import MessageList from "@/modules/message/components/message-list";

// interface Props {
//   params: {
//     chatId: string;
//   };
// }

// export default function ChatPage({ params }: Props) {
//   const { chatId } = params;

//   console.log("chatId =", chatId);

//   return (
//     <div className="flex h-screen flex-col">
//       <div className="flex-1 overflow-y-auto p-6">
//         <MessageList chatId={chatId} />
//       </div>

//       <div className="border-t p-4">
//         <ChatInput chatId={chatId} />
//       </div>
//     </div>
//   );
// }

// import ChatInput from "@/modules/message/components/chat-input";
// import MessageList from "@/modules/message/components/message-list";

// export default async function ChatPage({
//   params,
// }: {
//   params: Promise<{ chatId: string }>;
// }) {
//   const { chatId } = await params;

//   console.log("PAGE chatId =", chatId);

//   return (
//      <ChatProvider>
//     <div className="flex h-screen flex-col">
//       <div className="flex-1 overflow-y-auto p-6">
//         <MessageList chatId={chatId} />
//       </div>

//       <div className="border-t p-4">
//         <ChatInput chatId={chatId} />
//       </div>
//     </div>
//     </ChatProvider>
//   );
// }
// import ChatInput from "@/modules/message/components/chat-input";
// import MessageList from "@/modules/message/components/message-list";


// export default async function ChatPage({
//   params,
// }: {
//   params: Promise<{ chatId: string }>;
// }) {
//   const { chatId } = await params;

//   return (
//     <ChatProvider>
//       <div className="flex h-screen flex-col overflow-hidden">
//         {/* Scrollable message area */}
//         <div className="flex-1 overflow-y-auto p-6 pb-32">
//           <MessageList chatId={chatId} />
//         </div>

//         {/* Fixed input bar - always stays at bottom, doesn't scroll */}
//         <div className="absolute bottom-0 left-0 right-0 border-t bg-white/80 backdrop-blur-md p-4 dark:bg-zinc-950/80">
//           <ChatInput chatId={chatId} />
//         </div>
//       </div>
//     </ChatProvider>
//   );
// }
import ChatInput from "@/modules/message/components/chat-input";
import MessageList from "@/modules/message/components/message-list";
// 👈 ADD THIS - missing hatu
import { prisma } from "@/app/lib/prisma";
import ExportChat from "@/modules/message/components/export-chat";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const { chatId } = await params;

  // Chat title fetch karo header mate
  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    select: { title: true },
  });

  const chatTitle = chat?.title || "New Chat";

  return (
    <ChatProvider>
      <div className="relative flex h-screen flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-3">
          <h1 className="text-sm font-medium text-zinc-300">{chatTitle}</h1>
          <ExportChat chatId={chatId} />
        </div>

        {/* Scrollable message area */}
        <div className="flex-1 overflow-y-auto p-6 pb-32">
          <MessageList chatId={chatId} />
        </div>

        {/* Fixed input bar - always stays at bottom, doesn't scroll */}
        <div className="absolute bottom-0 left-0 right-0 border-t bg-white/80 backdrop-blur-md p-4 dark:bg-zinc-950/80">
          <ChatInput chatId={chatId} />
        </div>
      </div>
    </ChatProvider>
  );
}
// export default async function ChatPage({
//   params,
// }: {
//   params: Promise<{ chatId: string }>;
// }) {
//   const { chatId } = await params;

//   return <DashboardComponent chatId={chatId} />;
// }