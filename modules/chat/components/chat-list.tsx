// // // // import { getChatsAction } from "../actions/get-chats.action";
// // // // import ChatItem from "./chat-item";

// // // // export default async function ChatList() {
// // // //   const chats = await getChatsAction();

// // // //   return (
// // // //     <>
// // // //       {chats.map((chat) => (
// // // //         <ChatItem key={chat.id} chat={chat} />
// // // //       ))}
// // // //     </>
// // // //   );
// // // // }

// // // "use client";
// // // import { motion } from "framer-motion";
// // // import type { Chat } from "@/types/index";
// // // import { ChatItem } from "./chat-item";

// // // interface ChatListProps {
// // //   chats: Chat[];
// // //   activeId: string | null;
// // //   onSelect: (id: string) => void;
// // //   onRename: (id: string, title: string) => void;
// // //   onDelete: (id: string) => void;
// // //   onTogglePin: (id: string) => void;
// // // }

// // // // const GROUP_ORDER: Chat["group"][] = ["Today", "Yesterday", "Previous 7 Days", "Older"];

// // // const GROUP_ORDER: Chat["group"][] = [
// // //   "Today",
// // //   "Yesterday",
// // //   "Previous 7 Days",
// // //   "Older",
// // // ];
// // // export function ChatList({ chats, activeId, onSelect, onRename, onDelete, onTogglePin }: ChatListProps) {
// // //   const pinned = chats.filter((c) => c.pinned);
// // //   const grouped = GROUP_ORDER.map((group) => ({
// // //     group,
// // //     items: chats.filter((c) => c.group === group && !c.pinned),
// // //   })).filter((g) => g.items.length > 0);

// // //   if (chats.length === 0) {
// // //     return (
// // //       <div className="px-3 py-10 text-center">
// // //         <p className="text-[13px] text-muted-foreground">No chats found</p>
// // //         <p className="mt-1 text-xs text-muted-foreground/70">Try a different search term</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="flex flex-col gap-4 px-2">
// // //       {pinned.length > 0 && (
// // //         <section>
// // //           <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
// // //             Pinned
// // //           </h3>
// // //           <div className="flex flex-col gap-0.5">
// // //             {pinned.map((chat, i) => (
// // //               <motion.div
// // //                 key={chat.id}
// // //                 initial={{ opacity: 0, y: 4 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: i * 0.02 }}
// // //               >
// // //                 <ChatItem
// // //                   chat={chat}
// // //                   active={chat.id === activeId}
// // //                   onSelect={onSelect}
// // //                   onRename={onRename}
// // //                   onDelete={onDelete}
// // //                   onTogglePin={onTogglePin}
// // //                 />
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </section>
// // //       )}

// // //       {grouped.map(({ group, items }) => (
// // //         <section key={group}>
// // //           <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
// // //             {group}
// // //           </h3>
// // //           <div className="flex flex-col gap-0.5">
// // //             {items.map((chat, i) => (
// // //               <motion.div
// // //                 key={chat.id}
// // //                 initial={{ opacity: 0, y: 4 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: i * 0.02 }}
// // //               >
// // //                 <ChatItem
// // //                   chat={chat}
// // //                   active={chat.id === activeId}
// // //                   onSelect={onSelect}
// // //                   onRename={onRename}
// // //                   onDelete={onDelete}
// // //                   onTogglePin={onTogglePin}
// // //                 />
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </section>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { motion } from "framer-motion";
// // import type { Chat } from "@/types";
// // import { ChatItem } from "./chat-item";
// // import { useRouter } from "next/navigation";
// // import { deleteChatAction } from "../actions/delete-chat.action";
// // import { renameChatAction } from "../actions/rename-chat.action";

// // interface ChatListProps {
// //   chats?: Chat[];
// //   activeId?: string | null;
// //   onSelect?: (id: string) => void;
// //   onRename?: (id: string, title: string) => void;
// //   onDelete?: (id: string) => void;
// //   onTogglePin?: (id: string) => void;
// // }

// // export function ChatList({
// //   chats = [],
// //   activeId = null,
// //   onSelect = () => {},
// //   onRename = () => {},
// //   onDelete = () => {},
// //   onTogglePin = () => {},
// // }: ChatListProps) {
// //     const router = useRouter();

// //   async function handleDelete(id: string) {
// //     await deleteChatAction(id);
// //     router.refresh();
// //   }

// //   async function handleRename(id: string, title: string) {
// //     await renameChatAction(id, title);
// //     router.refresh();
// //   }
// //   const pinned = chats.filter((c) => c.pinned);

// //   const unPinned = chats.filter((c) => !c.pinned);

// //   if (chats.length === 0) {
// //     return (
// //       <div className="px-3 py-10 text-center">
// //         <p className="text-[13px] text-muted-foreground">
// //           No chats found
// //         </p>
// //         <p className="mt-1 text-xs text-muted-foreground/70">
// //           Start a new conversation
// //         </p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col gap-4 px-2">
// //       {/* Pinned */}
// //       {pinned.length > 0 && (
// //         <section>
// //           <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
// //             Pinned
// //           </h3>

// //           <div className="flex flex-col gap-0.5">
// //             {pinned.map((chat, i) => (
// //               <motion.div
// //                 key={chat.id}
// //                 initial={{ opacity: 0, y: 4 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.02 }}
// //               >
// //                 {/* <ChatItem
// //                   chat={chat}
// //                   active={chat.id === activeId}
// //                   onSelect={onSelect}
// //                   onRename={onRename}
// //                   onDelete={onDelete}
// //                   onTogglePin={onTogglePin}
// //                 /> */}
// //                 {/* <ChatItem
// //   chat={chat}
// //   active={chat.id === activeId}
// //   onSelect={() => router.push(`/dashboard/chat/${chat.id}`)}
// //   onRename={handleRename}
// //   onDelete={handleDelete}
// //   onTogglePin={() => {}}
// // /> */}
// // <ChatItem
// //   chat={chat}
// //   active={chat.id === activeId}
// //   onSelect={(id) => router.push(`/dashboard/chat/${id}`)}
// //   onRename={handleRename}
// //   onDelete={handleDelete}
// //   onTogglePin={onTogglePin}
// // />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </section>
// //       )}

// //       {/* All Chats */}
// //       <section>
// //         <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
// //           Chats
// //         </h3>

// //         <div className="flex flex-col gap-0.5">
// //           {unPinned.map((chat, i) => (
// //             <motion.div
// //               key={chat.id}
// //               initial={{ opacity: 0, y: 4 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: i * 0.02 }}
// //             >
// //             <ChatItem
// //   chat={chat}
// //   active={chat.id === activeId}
// //   onSelect={(id) => router.push(`/dashboard/chat/${id}`)}
// //   onRename={handleRename}
// //   onDelete={handleDelete}
// //   onTogglePin={onTogglePin}
// // />
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import type { Chat } from "@/types";
// import { ChatItem } from "./chat-item";
// import { useRouter } from "next/navigation";
// import { deleteChatAction } from "../actions/delete-chat.action";
// import { renameChatAction } from "../actions/rename-chat.action";
// import { toast } from "sonner";

// interface ChatListProps {
//   chats?: Chat[];
//   activeId?: string | null;
//   onSelect?: (id: string) => void;
//   onRename?: (id: string, title: string) => void;
//   onDelete?: (id: string) => void;
//   onTogglePin?: (id: string) => void;
// }

// export function ChatList({
//   chats = [],
//   activeId = null,
//   onSelect = () => {},
//   onRename = () => {},
//   onDelete = () => {},
//   onTogglePin = () => {},
// }: ChatListProps) {
//   const router = useRouter();

//   async function handleDelete(id: string) {

//     const res=await deleteChatAction(id);
//     toast.success("delete chat sucesssfulyyy")
//     router.refresh();
//   }

//   async function handleRename(id: string, title: string) {
//     await renameChatAction(id, title);
//      toast.success("rename chat  sucesssfulyyy")
//     router.refresh();
//   }

//   const pinned = chats.filter((c) => c.pinned);
//   const unPinned = chats.filter((c) => !c.pinned);

//   if (chats.length === 0) {
//     return (
//       <div className="px-3 py-8 text-center sm:py-10">
//         <p className="text-[13px] text-muted-foreground">No chats found</p>
//         <p className="mt-1 text-xs text-muted-foreground/70">
//           Start a new conversation
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-w-0 flex-col gap-3 px-1 sm:gap-4 sm:px-2">
//       {/* Pinned */}
//       {pinned.length > 0 && (
//         <section className="min-w-0">
//           <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
//             Pinned
//           </h3>

//           <div className="flex min-w-0 flex-col gap-0.5">
//             {pinned.map((chat, i) => (
//               <motion.div
//                 key={chat.id}
//                 initial={{ opacity: 0, y: 4 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.02 }}
//                 className="min-w-0"
//               >
//                 <ChatItem
//                   chat={chat}
//                   active={chat.id === activeId}
//                   onSelect={(id) => router.push(`/dashboard/chat/${id}`)}
//                   onRename={handleRename}
//                   onDelete={handleDelete}
//                   onTogglePin={onTogglePin}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* All Chats */}
//       <section className="min-w-0">
//         <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
//           Chats
//         </h3>

//         <div className="flex min-w-0 flex-col gap-0.5">
//           {unPinned.map((chat, i) => (
//             <motion.div
//               key={chat.id}
//               initial={{ opacity: 0, y: 4 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.02 }}
//               className="min-w-0"
//             >
//               <ChatItem
//                 chat={chat}
//                 active={chat.id === activeId}
//                 onSelect={(id) => router.push(`/dashboard/chat/${id}`)}
//                 onRename={handleRename}
//                 onDelete={handleDelete}
//                 onTogglePin={onTogglePin}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import type { Chat } from "@/types";
import { ChatItem } from "./chat-item";
import { deleteChatAction } from "../actions/delete-chat.action";
import { renameChatAction } from "../actions/rename-chat.action";
import { togglePinAction } from "../actions/toggle-pin.action";

interface ChatListProps {
  chats?: Chat[];
  activeId?: string | null;
  onSelect?: (id: string) => void;
  onRename?: (id: string, title: string) => void;
  onDelete?: (id: string) => void;
  onTogglePin?: (id: string) => void;
}

export function ChatList({
  chats = [],
  activeId = null,
  onSelect = () => {},
  onRename = () => {},
  onDelete = () => {},
  onTogglePin = () => {},
}: ChatListProps) {
  const router = useRouter();

  const [search, setSearch] = useState("");

  // Filter chats
  const filteredChats = useMemo(() => {
    return chats.filter((chat) =>
      chat.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [chats, search]);

  const pinned = filteredChats.filter((c) => c.pinned);
  const unPinned = filteredChats.filter((c) => !c.pinned);

  async function handleDelete(id: string) {
    await deleteChatAction(id);
    toast.success("Chat deleted successfully");
    router.refresh();
  }

  async function handleRename(id: string, title: string) {
    await renameChatAction(id, title);
    toast.success("Chat renamed successfully");
    router.refresh();
  }

  // Empty chat list
  if (chats.length === 0) {
    return (
      <div className="px-3 py-8 text-center sm:py-10">
        <p className="text-[13px] text-muted-foreground">No chats found</p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          Start a new conversation
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-3 px-1 sm:gap-4 sm:px-2">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-10 pr-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-emerald-500 focus:outline-none"
        />
      </div>

      {/* No search results */}
      {filteredChats.length === 0 && search && (
        <div className="py-10 text-center">
          <p className="text-sm text-zinc-500">No chats found for</p>
          <p className="mt-1 font-medium text-white">{search}</p>
        </div>
      )}

      {/* Pinned Chats */}
      {pinned.length > 0 && (
        <section className="min-w-0">
          <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
            Pinned
          </h3>

          <div className="flex min-w-0 flex-col gap-0.5">
            {pinned.map((chat, i) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="min-w-0"
              >
                <ChatItem
                  chat={chat}
                  active={chat.id === activeId}
                  onSelect={(id) => router.push(`/dashboard/chat/${id}`)}
                  onRename={handleRename}
                  onDelete={handleDelete}
                  onTogglePin={async (id) => {
                    await togglePinAction(id);
                    toast.success("Chat updated");
                    router.refresh();
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Normal Chats */}
      {unPinned.length > 0 && (
        <section className="min-w-0">
          <h3 className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
            Chats
          </h3>

          <div className="flex min-w-0 flex-col gap-0.5">
            {unPinned.map((chat, i) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="min-w-0"
              >
                <ChatItem
                  chat={chat}
                  active={chat.id === activeId}
                  onSelect={(id) => router.push(`/dashboard/chat/${id}`)}
                  onRename={handleRename}
                  onDelete={handleDelete}
                  onTogglePin={onTogglePin}
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
