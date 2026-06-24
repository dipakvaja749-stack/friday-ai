
import { ExportChatData } from "@/modules/message/actions/get-chat-export-data.action";
import { formatTimestamp } from "./format-timestamp";

export function buildMarkdownExport({ title, messages }: ExportChatData): string {
  const lines: string[] = [`# ${title}`, ""];

  messages.forEach((message, index) => {
    const speaker = message.role === "USER" ? "User" : "Friday";
    const timestamp = formatTimestamp(message.createdAt);

    lines.push(`## ${speaker}`);
    lines.push(`*${timestamp}*`);
    lines.push("");
    lines.push(message.content);
    lines.push("");

    if (index < messages.length - 1) {
      lines.push("---");
      lines.push("");
    }
  });

  return lines.join("\n");
}