"use client";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchChatProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchChat({ value, onChange }: SearchChatProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search chats..."
        className="h-9 pl-9 pr-8 text-[13px] bg-white/[0.03] focus-visible:bg-white/[0.05]"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}