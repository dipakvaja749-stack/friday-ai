"use client";

import { useState, useTransition } from "react";
import {
  Download,
  FileText,
  FileCode,
  File,
  Loader2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { getChatExportDataAction } from "../actions/get-chat-export-data.action";
import { buildMarkdownExport } from "@/lib/export/build-markdown";
import { buildTxtExport } from "@/lib/export/build-txt";
import { buildPdfExport } from "@/lib/export/build-pdf";
import { downloadTextFile } from "@/lib/export/download-file";
import { sanitizeFilename } from "@/lib/export/sanitize-filename";

interface Props {
  chatId: string;
}

type ExportFormat = "pdf" | "markdown" | "txt";

export default function ExportChat({ chatId }: Props) {
  const [isPending, startTransition] = useTransition();
  const [activeFormat, setActiveFormat] = useState<ExportFormat | null>(null);

  function handleExport(format: ExportFormat) {
    setActiveFormat(format);

    startTransition(async () => {
      try {
        const data = await getChatExportDataAction(chatId);
        const filename = sanitizeFilename(data.title);

        if (format === "markdown") {
          const content = buildMarkdownExport(data);
          downloadTextFile(`${filename}.md`, content, "text/markdown");
        } else if (format === "txt") {
          const content = buildTxtExport(data);
          downloadTextFile(`${filename}.txt`, content, "text/plain");
        } else if (format === "pdf") {
          const doc = buildPdfExport(data);
          doc.save(`${filename}.pdf`);
        }

        toast.success(`Exported as ${format.toUpperCase()}`);
      } catch (error) {
        console.error(error);
        toast.error("Failed to export chat");
      } finally {
        setActiveFormat(null);
      }
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          disabled={isPending}
          className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          Export
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44 border-zinc-800 bg-zinc-900 text-zinc-200">
        <DropdownMenuItem
          onClick={() => handleExport("pdf")}
          disabled={isPending}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
        >
          <File className="h-4 w-4 text-red-400" />
          Export PDF
          {activeFormat === "pdf" && isPending && (
            <Loader2 className="ml-auto h-3.5 w-3.5 animate-spin" />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleExport("markdown")}
          disabled={isPending}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
        >
          <FileCode className="h-4 w-4 text-emerald-400" />
          Export Markdown
          {activeFormat === "markdown" && isPending && (
            <Loader2 className="ml-auto h-3.5 w-3.5 animate-spin" />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleExport("txt")}
          disabled={isPending}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
        >
          <FileText className="h-4 w-4 text-zinc-400" />
          Export TXT
          {activeFormat === "txt" && isPending && (
            <Loader2 className="ml-auto h-3.5 w-3.5 animate-spin" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}