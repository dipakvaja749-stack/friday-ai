"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Sparkles,
  Pencil,
  Mic,
  AudioLines,
  Rocket,
  FileCode2,
  Megaphone,
  GraduationCap,
  ArrowUp,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMessageAction } from "@/modules/message/actions/send-message.action";

/* -------------------------------------------------------------------------- */
/*  Types                                                                    */
/* -------------------------------------------------------------------------- */

interface Message {
  role: "USER" | "ASSISTANT";
  content: string;
}

interface Suggestion {
  icon: React.ReactNode;
  label: string;
}

/* -------------------------------------------------------------------------- */
/*  Static data                                                              */
/* -------------------------------------------------------------------------- */

const suggestions: Suggestion[] = [
  {
    icon: <Rocket className="h-4 w-4 text-orange-400" />,
    label: "Build a SaaS application",
  },
  {
    icon: <FileCode2 className="h-4 w-4 text-sky-400" />,
    label: "Generate API documentation",
  },
  {
    icon: <Megaphone className="h-4 w-4 text-pink-400" />,
    label: "Create a marketing strategy",
  },
  {
    icon: <GraduationCap className="h-4 w-4 text-emerald-400" />,
    label: "Learn Spring Boot",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

// In a real app this would come from route params / a created chat record.

/* -------------------------------------------------------------------------- */
/*  Page                                                                     */
/* -------------------------------------------------------------------------- */

// export default function DashboardComponent() {
interface DashboardComponentProps {
  chatId: string;
}

export default function DashboardComponent({
  chatId,
}: DashboardComponentProps) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [prompt, setPrompt] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const scrollAnchorRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const hasMessages = messages.length > 0;

  // Auto scroll to newest message.
  React.useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading]);

  async function handleSend() {
    const content = prompt.trim();
    if (!content || isLoading) return;

    // 1. Add user message immediately + clear input.
    setMessages((prev) => [...prev, { role: "USER", content }]);
    setPrompt("");
    setIsLoading(true);

    try {
      // 2. Call backend action.

      // // 3. Append assistant response.
      // setMessages((prev) => [...prev, { role: "ASSISTANT", content: response.content }]);
      const response = await sendMessageAction({
        content,
        chatId: chatId,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "ASSISTANT",
          content:
            response ?? "Something went wrong while generating a response.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ASSISTANT",
          content:
            "Something went wrong while generating a response. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleSuggestionClick(label: string) {
    setPrompt(label);
    inputRef.current?.focus();
  }

  /* ------------------------------ Input bar (shared) ------------------------------ */

  const inputBar = (
    <motion.div
      layout
      className="flex w-full max-w-4xl items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 shadow-xl backdrop-blur-md focus-within:border-zinc-700"
    >
      {/* Left: Plus icon */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Add attachment"
        className="h-10 w-10 flex-shrink-0 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-0"
      >
        <Plus className="h-5 w-5" />
      </Button>

      {/* Center: Input */}
      <Input
        ref={inputRef}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything"
        aria-label="Ask anything"
        disabled={isLoading}
        className="h-10 flex-1 border-none bg-transparent px-1 text-base text-white shadow-none outline-none ring-0 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-60"
      />

      {/* Right: actions */}
      <div className="flex flex-shrink-0 items-center gap-1.5">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Edit prompt"
          disabled={isLoading}
          className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-0 disabled:opacity-50"
        >
          <Pencil className="h-5 w-5" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Use microphone"
          disabled={isLoading}
          className="h-10 w-10 rounded-full text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-white focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-0 disabled:opacity-50"
        >
          <Mic className="h-5 w-5" />
        </Button>

        <Button
          type="button"
          size="icon"
          aria-label={
            isLoading
              ? "Waiting for response"
              : prompt.trim()
                ? "Send message"
                : "Start voice mode"
          }
          onClick={prompt.trim() ? handleSend : undefined}
          disabled={isLoading}
          className="h-11 w-11 flex-shrink-0 rounded-full bg-white text-black transition-transform duration-200 hover:scale-110 hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : prompt.trim() ? (
            <ArrowUp className="h-5 w-5" />
          ) : (
            <AudioLines className="h-5 w-5" />
          )}
        </Button>
      </div>
    </motion.div>
  );

  /* ------------------------------ Homepage (initial state) ------------------------------ */

  if (!hasMessages) {
    return (
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#09090B] px-4 py-12">
        <div className="flex w-full max-w-4xl flex-col items-center">
          {/* Optimize Prompt Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-6"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-fit rounded-full border-zinc-800 bg-transparent px-4 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-[1.03] hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
            >
              <Sparkles
                className="mr-1.5 h-4 w-4 text-amber-300"
                aria-hidden="true"
              />
              Optimize Prompt
            </Button>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="mb-8 text-center text-4xl font-semibold tracking-tight text-white md:text-5xl"
          >
            What&apos;s on the agenda today?
          </motion.h1>

          {/* AI Input Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="w-full"
          >
            {inputBar}
          </motion.div>

          {/* Suggestion Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {suggestions.map((s, i) => (
              <motion.button
                key={s.label}
                type="button"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.35 + i * 0.05}
                onClick={() => handleSuggestionClick(s.label)}
                className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3.5 text-left text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:text-white hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 transition-colors duration-200 group-hover:bg-zinc-700">
                  {s.icon}
                </span>
                <span className="text-zinc-200 group-hover:text-white">
                  {s.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </main>
    );
  }

  /* ------------------------------ Conversation mode ------------------------------ */

  return (
    <main className="flex h-screen w-full flex-col bg-[#09090B]">
      {/* Scrollable message list */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex w-full max-w-[800px] flex-col gap-4 px-4 pb-44 pt-8">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`flex w-full ${
                  message.role === "USER" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base ${
                    message.role === "USER"
                      ? "bg-zinc-100 text-zinc-900"
                      : "border border-zinc-800 bg-zinc-900 text-zinc-100"
                  }`}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex w-full justify-start"
            >
              <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking…
              </div>
            </motion.div>
          )}

          {/* Scroll anchor */}
          <div ref={scrollAnchorRef} />
        </div>
      </div>

      {/* Fixed bottom input */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-[#09090B] via-[#09090B]/90 to-transparent px-4 pb-6 pt-10">
        <div className="pointer-events-auto w-full max-w-4xl">{inputBar}</div>
      </div>
    </main>
  );
}
