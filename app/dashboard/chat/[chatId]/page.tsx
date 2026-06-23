// // import ChatInput from "@/modules/message/components/chat-input";
// // import MessageList from "@/modules/message/components/message-list";

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

import ChatInput from "@/modules/message/components/chat-input";
import MessageList from "@/modules/message/components/message-list";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const { chatId } = await params;

  console.log("PAGE chatId =", chatId);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <MessageList chatId={chatId} />
      </div>

      <div className="border-t p-4">
        <ChatInput chatId={chatId} />
      </div>
    </div>
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