
import { ExportChatData } from "@/modules/message/actions/get-chat-export-data.action";
import { formatTimestamp } from "./format-timestamp";

export function buildTxtExport({ title, messages }: ExportChatData): string {
  const lines: string[] = [title, "=".repeat(title.length), ""];

  messages.forEach((message, index) => {
    const speaker = message.role === "USER" ? "User" : "Friday";
    const timestamp = formatTimestamp(message.createdAt);

    lines.push(`${speaker}: (${timestamp})`);
    lines.push(message.content);
    lines.push("");

    if (index < messages.length - 1) {
      lines.push("-".repeat(36));
      lines.push("");
    }
  });

  return lines.join("\n");
}