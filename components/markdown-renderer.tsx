"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import CodeBlock from "./code-block";

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-3 mt-5 text-xl font-bold text-white first:mt-0 border-b border-zinc-800 pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-2 mt-4 text-lg font-bold text-white first:mt-0">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-2 mt-3 text-base font-semibold text-white first:mt-0">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-2 mt-3 text-sm font-semibold text-zinc-100 first:mt-0">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="mb-1.5 mt-2 text-sm font-semibold text-zinc-200 first:mt-0">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="mb-1.5 mt-2 text-xs font-semibold uppercase tracking-wide text-zinc-400 first:mt-0">
              {children}
            </h6>
          ),

          p: ({ children }) => <p className="mb-3 leading-relaxed last:mb-0">{children}</p>,

          ul: ({ children, className }) => {
            const isTaskList = className?.includes("contains-task-list");
            return (
              <ul
                className={`mb-3 space-y-1.5 last:mb-0 ${
                  isTaskList ? "ml-0 list-none" : "ml-5 list-disc"
                }`}
              >
                {children}
              </ul>
            );
          },
          ol: ({ children }) => (
            <ol className="mb-3 ml-5 list-decimal space-y-1.5 last:mb-0">{children}</ol>
          ),
          li: ({ children, className }) => {
            const isTaskItem = className?.includes("task-list-item");
            if (isTaskItem) {
              return (
                <li className="flex items-start gap-2 leading-relaxed [&>input]:mt-1">{children}</li>
              );
            }
            return <li className="leading-relaxed">{children}</li>;
          },
          input: ({ checked, disabled }) => (
            <input
              type="checkbox"
              checked={checked}
              disabled={disabled}
              readOnly
              className="mt-1 h-4 w-4 cursor-default rounded border-zinc-600 bg-zinc-800 accent-emerald-500"
            />
          ),

          strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
          em: ({ children }) => <em className="italic text-zinc-200">{children}</em>,
          del: ({ children }) => <del className="text-zinc-500 line-through">{children}</del>,

          hr: () => <hr className="my-5 border-zinc-800" />,

          blockquote: ({ children }) => (
            <blockquote className="my-3 rounded-r-md border-l-2 border-emerald-500/50 bg-emerald-500/5 py-2 pl-4 pr-3 text-zinc-300 italic">
              {children}
            </blockquote>
          ),

          a: ({ children, href }) => (
            
             <a href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-emerald-400 transition-colors duration-200 hover:text-emerald-300 underline decoration-emerald-500/40 decoration-1 underline-offset-2 hover:decoration-emerald-300"
            >
              {children}
            </a>
          ),

          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;
            return (
              <span className="my-3 block">
                <img
                  src={src}
                  alt={alt || ""}
                  loading="lazy"
                  className="max-w-full rounded-xl border border-zinc-800 object-contain"
                  style={{ maxHeight: "480px" }}
                />
              </span>
            );
          },

          table: ({ children }) => (
            <div className="my-3 overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-zinc-800/60 border-b border-zinc-700">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="[&>tr:nth-child(even)]:bg-zinc-900/40 [&>tr:nth-child(odd)]:bg-zinc-900/10">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-zinc-800/60 last:border-0 transition-colors hover:bg-zinc-800/30">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-zinc-200">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2.5 text-zinc-300">{children}</td>
          ),

          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match;

            if (isInline) {
              return (
                <code
                  className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            const language = match![1];
            const code = String(children).replace(/\n$/, "");

            return <CodeBlock language={language} code={code} />;
          },

          pre: ({ children }) => <>{children}</>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}