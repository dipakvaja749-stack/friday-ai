import jsPDF from "jspdf";

import { formatTimestamp } from "./format-timestamp";
import { ExportChatData } from "@/modules/message/actions/get-chat-export-data.action";

const PAGE_WIDTH = 595.28; // A4 width in pt
const PAGE_HEIGHT = 841.89; // A4 height in pt
const MARGIN = 40;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

export function buildPdfExport({ title, messages }: ExportChatData): jsPDF {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  // Dark theme colors
  const bgColor = "#0D0D0D";
  const textColor = "#E4E4E7";
  const userColor = "#FFFFFF";
  const aiColor = "#34D399"; // emerald
  const mutedColor = "#71717A";
  const codeBg = "#18181B";

  let y = MARGIN;

  const paintPageBackground = () => {
    doc.setFillColor(bgColor);
    doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, "F");
  };

  const ensureSpace = (heightNeeded: number) => {
    if (y + heightNeeded > PAGE_HEIGHT - MARGIN) {
      doc.addPage();
      paintPageBackground();
      y = MARGIN;
    }
  };

  paintPageBackground();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(userColor);
  doc.text(title, MARGIN, y);
  y += 28;

  doc.setDrawColor(mutedColor);
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
  y += 24;

  messages.forEach((message) => {
    const isUser = message.role === "USER";
    const speaker = isUser ? "User" : "Friday";
    const speakerColor = isUser ? userColor : aiColor;
    const timestamp = formatTimestamp(message.createdAt);

    ensureSpace(40);

    // Speaker label + timestamp
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(speakerColor);
    doc.text(speaker, MARGIN, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(mutedColor);
    doc.text(timestamp, MARGIN + doc.getTextWidth(speaker) + 8, y);
    y += 16;

    // Content — handle fenced code blocks distinctly
    const blocks = splitContentIntoBlocks(message.content);

    blocks.forEach((block) => {
      if (block.type === "code") {
        const codeLines = doc.setFont("courier", "normal").setFontSize(9).splitTextToSize(
          block.text,
          CONTENT_WIDTH - 16
        ) as string[];

        const blockHeight = codeLines.length * 12 + 12;
        ensureSpace(blockHeight + 8);

        doc.setFillColor(codeBg);
        doc.roundedRect(MARGIN, y - 10, CONTENT_WIDTH, blockHeight, 4, 4, "F");

        doc.setTextColor(textColor);
        doc.setFont("courier", "normal");
        doc.setFontSize(9);
        codeLines.forEach((line: string, i: number) => {
          doc.text(line, MARGIN + 8, y + i * 12);
        });

        y += blockHeight + 8;
      } else {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);
        doc.setTextColor(textColor);

        const textLines = doc.splitTextToSize(block.text, CONTENT_WIDTH) as string[];

        textLines.forEach((line: string) => {
          ensureSpace(16);
          doc.text(line, MARGIN, y);
          y += 15;
        });

        y += 4;
      }
    });

    y += 14;
    ensureSpace(1);
    doc.setDrawColor("#27272A");
    doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
    y += 20;
  });

  return doc;
}

function splitContentIntoBlocks(content: string): { type: "text" | "code"; text: string }[] {
  const blocks: { type: "text" | "code"; text: string }[] = [];
  const regex = /```(?:\w+)?\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      const text = content.slice(lastIndex, match.index).trim();
      if (text) blocks.push({ type: "text", text });
    }
    blocks.push({ type: "code", text: match[1].trim() });
    lastIndex = match.index + match[0].length;
  }

  const remaining = content.slice(lastIndex).trim();
  if (remaining) blocks.push({ type: "text", text: remaining });

  if (blocks.length === 0) blocks.push({ type: "text", text: content });

  return blocks;
}