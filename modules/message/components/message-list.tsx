// import { getMessagesAction } from "../actions/get-messages.action";
// import MessageItem from "./message-item";

// interface Props {
//   chatId: string;
// }

// export default async function MessageList({
//   chatId,
// }: Props) {
//   const messages =
//     await getMessagesAction(chatId);
//       console.log("MESSAGES =", messages);

//   return (
//     <div className="space-y-3">
//       {messages.map((message) => (
//         <MessageItem
//           key={message.id}
//           message={message}
//         />
//       ))}
//     </div>
//   );
// }

import { Sparkles } from "lucide-react";
import { getMessagesAction } from "../actions/get-messages.action";
import MessageItem from "./message-item";

interface Props {
  chatId: string;
}

export default async function MessageList({ chatId }: Props) {
  const messages = await getMessagesAction(chatId);

  if (messages.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-zinc-500">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
          <Sparkles className="h-5 w-5 text-amber-300" />
        </div>
        <p className="text-sm">
          Say hi to <span className="font-medium text-zinc-300">Friday</span> to start the
          conversation.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col gap-4">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}