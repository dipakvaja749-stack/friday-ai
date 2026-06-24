"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  MessageSquare,
  Zap,
  ShieldCheck,
  TrendingUp,
  Code2,
  Brain,
  FileText,
  Globe,
  Workflow,
  Lock,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    color: "teal",
    title: "Smart AI Chat",
    desc: "Engage with context-aware chat structures that instantly adapt to your pipeline or tone.",
  },
  {
    icon: Zap,
    color: "emerald",
    title: "Fast Responses",
    desc: "Powered by ultra-low latency inference engine delivering deep answers sub-second.",
  },
  {
    icon: ShieldCheck,
    color: "cyan",
    title: "Secure & Private",
    desc: "Your sensitive parameters remain entirely zero-knowledge encrypted and private.",
  },
  {
    icon: TrendingUp,
    color: "lime",
    title: "Productivity Boost",
    desc: "Automate routine responses and documentation workflows smoothly to multiply results.",
  },
  {
    icon: Code2,
    color: "teal",
    title: "Code Generation",
    desc: "Generate, debug, and refactor code across languages with full project context.",
  },
  {
    icon: Brain,
    color: "emerald",
    title: "Deep Reasoning",
    desc: "Break down complex problems step by step before giving you the final answer.",
  },
  {
    icon: FileText,
    color: "cyan",
    title: "Document Intelligence",
    desc: "Upload files and get summaries, extraction, and analysis in seconds.",
  },
  {
    icon: Globe,
    color: "lime",
    title: "Real-Time Knowledge",
    desc: "Stay current with live web access for facts, news, and research.",
  },
  {
    icon: Workflow,
    color: "teal",
    title: "Custom Workflows",
    desc: "Chain tasks together and let Friday handle multi-step automations end to end.",
  },
];

const colorMap: Record<string, string> = {
  teal: "bg-teal-500/10 text-teal-400 group-hover:text-teal-400 hover:border-teal-500/40",
  emerald: "bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-400 hover:border-emerald-500/40",
  cyan: "bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-400 hover:border-cyan-500/40",
  lime: "bg-lime-500/10 text-lime-400 group-hover:text-lime-400 hover:border-lime-500/40",
};

export default function FeaturesPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />

      {/* HERO */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
          <Layers className="h-3.5 w-3.5" />
          <span>Everything Friday Can Do</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Built to Handle Your <span className="text-emerald-400">Entire Workflow</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          From quick chats to deep research, Friday brings every capability you need into one fast, secure assistant.
        </p>
      </section>

      {/* FEATURES GRID */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 transition-all duration-300 shadow-lg ${colorMap[f.color]}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${colorMap[f.color].split(" ").slice(0, 2).join(" ")}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white transition-colors">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECONDARY HIGHLIGHT STRIP */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10 border-t border-zinc-900 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h4 className="text-white font-semibold mb-2">Privacy First</h4>
            <p className="text-zinc-400 text-sm">Conversations stay encrypted end-to-end, always under your control.</p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h4 className="text-white font-semibold mb-2">Always Improving</h4>
            <p className="text-zinc-400 text-sm">Friday gets sharper every week with new skills and integrations.</p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <Workflow className="h-6 w-6" />
            </div>
            <h4 className="text-white font-semibold mb-2">Fits Your Stack</h4>
            <p className="text-zinc-400 text-sm">Connects with the tools you already use without breaking your flow.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 z-10 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Ready to try it yourself?</h2>
        <p className="text-zinc-400 mb-8">Start chatting with Friday in seconds, no setup required.</p>
        <button onClick={() => router.push("/register")} className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] transition-all duration-300 mx-auto">
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400" />
          <div className="px-8 py-3 rounded-full bg-[#09090b] text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
            Get Started Free
          </div>
        </button>
      </section>

    </div>
  );
}