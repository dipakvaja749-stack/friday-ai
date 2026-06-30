// import Link from "next/link";

// interface Props {
//   chat: {
//     id: string;
//     title: string;
//   };
// }

// export default function ChatItem({ chat }: Props) {
//   return (
//     <Link
//       href={`/chat/${chat.id}`}
//       className="block rounded-md px-3 py-2 hover:bg-muted"
//     >
//       {chat.title}
//     </Link>
//   );
// }
"use client";
import { useState } from "react";
import {
  MoreHorizontal,
  Pencil,
  Pin,
  PinOff,
  Trash2,
  Check,
  X as XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Chat } from "@/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
interface ChatItemProps {
  chat: Chat;
  active?: boolean;
  onSelect: (id: string) => void;
  onRename: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onTogglePin: (id: string) => void;
}

export function ChatItem({
  chat,
  active,
  onSelect,
  onRename,
  onDelete,
  onTogglePin,
}: ChatItemProps) {
  const [isRenaming, setIsRenaming] = useState(false);
  const [draftTitle, setDraftTitle] = useState(chat.title);
  const [menuOpen, setMenuOpen] = useState(false);

  function commitRename() {
    const trimmed = draftTitle.trim();
    if (trimmed) onRename(chat.id, trimmed);
    setIsRenaming(false);
  }

  if (isRenaming) {
    return (
      <div className="flex items-center gap-1.5 rounded-xl border border-primary/40 bg-white/[0.04] px-2.5 py-1.5">
        <input
          autoFocus
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") commitRename();
            if (e.key === "Escape") setIsRenaming(false);
          }}
          className="flex-1 bg-transparent text-[13px] text-foreground outline-none"
        />
        <button
          onClick={commitRename}
          className="text-primary hover:text-primary-hover"
        >
          <Check className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => setIsRenaming(false)}
          className="text-muted-foreground hover:text-foreground"
        >
          <XIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    );
  }

  return (
    // <div
    //   onClick={() => onSelect(chat.id)}
    //   className={cn(
    //     "group relative flex items-center gap-2 rounded-xl px-2.5 py-2 cursor-pointer transition-colors duration-150",
    //     active ? "bg-primary/10 text-foreground" : "text-foreground/80 hover:bg-white/[0.05]"
    //   )}
    // >
    <Link
      href={`/dashboard/chat/${chat.id}`}
      className={cn(
        "group relative flex items-center gap-2 rounded-xl px-2.5 py-2 cursor-pointer transition-colors duration-150",
        active
          ? "bg-primary/10 text-foreground"
          : "text-foreground/80 hover:bg-white/[0.05]",
      )}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-primary" />
      )}
      <span className="flex-1 truncate text-[13px] leading-none">
        {chat.title}
      </span>
      {chat.pinned && <Pin className="h-3 w-3 shrink-0 text-primary/70" />}

      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild>
          <button
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "shrink-0 rounded-lg p-1 text-muted-foreground transition-opacity hover:bg-white/10 hover:text-foreground",
              menuOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
            aria-label="Chat options"
          >
            <MoreHorizontal className="h-3.5 w-3.5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
          <DropdownMenuItem onClick={() => setIsRenaming(true)}>
            <Pencil className="h-3.5 w-3.5" /> Rename
          </DropdownMenuItem>
          {/* <DropdownMenuItem onClick={() => onTogglePin(chat.id)}>
            {chat.pinned ? (
              <PinOff className="h-3.5 w-3.5" />
            ) : (
              <Pin className="h-3.5 w-3.5" />
            )}
            {chat.pinned ? "Unpin" : "Pin"}
          </DropdownMenuItem> */}
          <DropdownMenuItem
  onClick={() => onTogglePin(chat.id)}
>
  {chat.pinned ? "Unpin Chat" : "Pin Chat"}
</DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem destructive onClick={() => onDelete(chat.id)}>
            <Trash2 className="h-3.5 w-3.5" /> Delete
          </DropdownMenuItem> */}
          <DropdownMenuItem
            className="text-red-500 focus:text-red-500"
            onClick={() => onDelete(chat.id)}
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Link>
  );
}
