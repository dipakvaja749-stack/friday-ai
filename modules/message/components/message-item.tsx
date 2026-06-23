// interface Props {
//   message: {
//     content: string;
//     role: string;
//   };
// }

// export default function MessageItem({
//   message,
// }: Props) {
//   return (
//     <div
//       className={`mb-4 flex ${
//         message.role === "USER"
//           ? "justify-end"
//           : "justify-start"
//       }`}
//     >
//       <div className="rounded-xl bg-muted p-3 max-w-lg">
//         {message.content}
//       </div>
//     </div>
//   );
// }
import { Message } from "@prisma/client";
import { Sparkles } from "lucide-react";


interface Props {
  message: Message;
}

export default function MessageItem({ message }: Props) {
  const isUser = message.role === "USER";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex max-w-[85%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
        {!isUser && (
          <div className="flex items-center gap-1.5 px-1 text-xs font-medium text-zinc-500">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            Friday
          </div>
        )}

        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base ${
            isUser
              ? "bg-zinc-100 text-zinc-900"
              : "border border-zinc-800 bg-zinc-900 text-zinc-100"
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}