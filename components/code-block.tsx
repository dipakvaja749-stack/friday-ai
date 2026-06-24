"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MermaidDiagram from "./mermaid-diagram";

interface Props {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied!");
    setTimeout(() => setCopied(false), 1500);
  };

  if (language === "mermaid") {
    return <MermaidDiagram chart={code} />;
  }

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-zinc-800">
      <div className="flex items-center justify-between bg-zinc-950 px-4 py-2 text-xs text-zinc-400">
        <span className="font-mono">{language || "text"}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language || "text"}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "#0D0D0D",
            fontSize: "0.85em",
            lineHeight: "1.6",
          }}
          showLineNumbers={code.split("\n").length > 5}
          lineNumberStyle={{ color: "#52525b", minWidth: "2.5em" }}
          wrapLongLines={false}
        >
          {code.replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}