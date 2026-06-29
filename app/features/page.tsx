// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import {
//   Sparkles,
//   MessageSquare,
//   Zap,
//   ShieldCheck,
//   TrendingUp,
//   Code2,
//   Brain,
//   FileText,
//   Globe,
//   Workflow,
//   Lock,
//   Layers,
// } from "lucide-react";

// const features = [
//   {
//     icon: MessageSquare,
//     color: "teal",
//     title: "Smart AI Chat",
//     desc: "Engage with context-aware chat structures that instantly adapt to your pipeline or tone.",
//   },
//   {
//     icon: Zap,
//     color: "emerald",
//     title: "Fast Responses",
//     desc: "Powered by ultra-low latency inference engine delivering deep answers sub-second.",
//   },
//   {
//     icon: ShieldCheck,
//     color: "cyan",
//     title: "Secure & Private",
//     desc: "Your sensitive parameters remain entirely zero-knowledge encrypted and private.",
//   },
//   {
//     icon: TrendingUp,
//     color: "lime",
//     title: "Productivity Boost",
//     desc: "Automate routine responses and documentation workflows smoothly to multiply results.",
//   },
//   {
//     icon: Code2,
//     color: "teal",
//     title: "Code Generation",
//     desc: "Generate, debug, and refactor code across languages with full project context.",
//   },
//   {
//     icon: Brain,
//     color: "emerald",
//     title: "Deep Reasoning",
//     desc: "Break down complex problems step by step before giving you the final answer.",
//   },
//   {
//     icon: FileText,
//     color: "cyan",
//     title: "Document Intelligence",
//     desc: "Upload files and get summaries, extraction, and analysis in seconds.",
//   },
//   {
//     icon: Globe,
//     color: "lime",
//     title: "Real-Time Knowledge",
//     desc: "Stay current with live web access for facts, news, and research.",
//   },
//   {
//     icon: Workflow,
//     color: "teal",
//     title: "Custom Workflows",
//     desc: "Chain tasks together and let Friday handle multi-step automations end to end.",
//   },
// ];

// const colorMap: Record<string, string> = {
//   teal: "bg-teal-500/10 text-teal-400 group-hover:text-teal-400 hover:border-teal-500/40",
//   emerald: "bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-400 hover:border-emerald-500/40",
//   cyan: "bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-400 hover:border-cyan-500/40",
//   lime: "bg-lime-500/10 text-lime-400 group-hover:text-lime-400 hover:border-lime-500/40",
// };

// export default function FeaturesPage() {
//   const router = useRouter();
//   return (
//     <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />

//       {/* HERO */}
//       <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 z-10 text-center">
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
//           <Layers className="h-3.5 w-3.5" />
//           <span>Everything Friday Can Do</span>
//         </div>
//         <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
//           Built to Handle Your <span className="text-emerald-400">Entire Workflow</span>
//         </h1>
//         <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
//           From quick chats to deep research, Friday brings every capability you need into one fast, secure assistant.
//         </p>
//       </section>

//       {/* FEATURES GRID */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((f, i) => {
//             const Icon = f.icon;
//             return (
//               <div
//                 key={i}
//                 className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 transition-all duration-300 shadow-lg ${colorMap[f.color]}`}
//               >
//                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${colorMap[f.color].split(" ").slice(0, 2).join(" ")}`}>
//                   <Icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-white transition-colors">{f.title}</h3>
//                 <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* SECONDARY HIGHLIGHT STRIP */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10 border-t border-zinc-900 pt-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div>
//             <div className="w-12 h-12 mx-auto rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
//               <Lock className="h-6 w-6" />
//             </div>
//             <h4 className="text-white font-semibold mb-2">Privacy First</h4>
//             <p className="text-zinc-400 text-sm">Conversations stay encrypted end-to-end, always under your control.</p>
//           </div>
//           <div>
//             <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
//               <Sparkles className="h-6 w-6" />
//             </div>
//             <h4 className="text-white font-semibold mb-2">Always Improving</h4>
//             <p className="text-zinc-400 text-sm">Friday gets sharper every week with new skills and integrations.</p>
//           </div>
//           <div>
//             <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
//               <Workflow className="h-6 w-6" />
//             </div>
//             <h4 className="text-white font-semibold mb-2">Fits Your Stack</h4>
//             <p className="text-zinc-400 text-sm">Connects with the tools you already use without breaking your flow.</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 z-10 text-center">
//         <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Ready to try it yourself?</h2>
//         <p className="text-zinc-400 mb-8">Start chatting with Friday in seconds, no setup required.</p>
//         <button onClick={() => router.push("/register")} className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] transition-all duration-300 mx-auto">
//           <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400" />
//           <div className="px-8 py-3 rounded-full bg-[#09090b] text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
//             Get Started Free
//           </div>
//         </button>
//       </section>

//     </div>
//   );
// }
"use client";

import React, { useRef, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
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

/* ───────────────────────────────────────────────
   Reusable Motion Variants
   ─────────────────────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: custom, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ───────────────────────────────────────────────
   Magnetic Button Wrapper
   ─────────────────────────────────────────────── */
function MagneticButton({ children, className, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  }, [x, y, prefersReduced]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/* ───────────────────────────────────────────────
   Tilt Card
   ─────────────────────────────────────────────── */
function TiltCard({ children, className, glowColor = "emerald" }: { children: React.ReactNode; className?: string; glowColor?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ rotateX: (y - 0.5) * -8, rotateY: (x - 0.5) * 8 });
    setShine({ x: x * 100, y: y * 100, opacity: 0.15 });
  }, [prefersReduced]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setShine({ x: 50, y: 50, opacity: 0 });
  }, []);

  const glowColors: Record<string, string> = {
    teal: "rgba(20,184,166,0.4)",
    emerald: "rgba(16,185,129,0.4)",
    cyan: "rgba(6,182,212,0.4)",
    lime: "rgba(132,204,22,0.4)",
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeInUp}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        animate={prefersReduced ? {} : { rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
      >
        {children}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, ${glowColors[glowColor] ?? glowColors.emerald}, transparent 60%)`,
            opacity: shine.opacity,
          }}
          animate={{ opacity: shine.opacity }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 1px ${glowColors[glowColor] ?? glowColors.emerald}` }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────
   Animated Background
   ─────────────────────────────────────────────── */
function AnimatedBackground() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] opacity-20 blur-[140px]"
        style={{ background: "linear-gradient(90deg, #0d9488, #10b981, #06b6d4)" }}
        animate={prefersReduced ? {} : { scale: [1, 1.1, 1], opacity: [0.2, 0.25, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[500px] left-[5%] w-80 h-80 rounded-full opacity-8 blur-[110px] bg-teal-500"
        animate={prefersReduced ? {} : { x: [0, 50, -30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[1400px] right-[5%] w-72 h-72 rounded-full opacity-8 blur-[100px] bg-emerald-500"
        animate={prefersReduced ? {} : { x: [0, -40, 30, 0], y: [0, 50, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Features Data
   ─────────────────────────────────────────────── */
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

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "hover:border-teal-500/40", glow: "teal" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-500/40", glow: "emerald" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-500/40", glow: "cyan" },
  lime: { bg: "bg-lime-500/10", text: "text-lime-400", border: "hover:border-lime-500/40", glow: "lime" },
};

/* ───────────────────────────────────────────────
   Main Page
   ─────────────────────────────────────────────── */
export default function FeaturesPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden relative">
      <AnimatedBackground />

      {/* HERO */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 z-10 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Layers className="h-3.5 w-3.5" />
          <span>Everything Friday Can Do</span>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Built to Handle Your <span className="text-emerald-400">Entire Workflow</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          From quick chats to deep research, Friday brings every capability you need into one fast, secure assistant.
        </motion.p>
      </section>

      {/* FEATURES GRID */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            const c = colorMap[f.color];
            return (
              <TiltCard key={i} glowColor={c.glow}>
                <div className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 transition-all duration-300 shadow-lg h-full ${c.border}`}>
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.bg} ${c.text}`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className={`text-lg font-semibold mb-2 text-white group-hover:${c.text} transition-colors`}>{f.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* SECONDARY HIGHLIGHT STRIP */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10 border-t border-zinc-900 pt-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {[
            { icon: Lock, color: "teal", title: "Privacy First", desc: "Conversations stay encrypted end-to-end, always under your control." },
            { icon: Sparkles, color: "emerald", title: "Always Improving", desc: "Friday gets sharper every week with new skills and integrations." },
            { icon: Workflow, color: "cyan", title: "Fits Your Stack", desc: "Connects with the tools you already use without breaking your flow." },
          ].map((item, i) => {
            const Icon = item.icon;
            const colorClasses: Record<string, string> = {
              teal: "bg-teal-500/10 text-teal-400",
              emerald: "bg-emerald-500/10 text-emerald-400",
              cyan: "bg-cyan-500/10 text-cyan-400",
            };
            return (
              <motion.div key={i} variants={fadeInUp} custom={i * 0.1}>
                <motion.div
                  className={`w-12 h-12 mx-auto rounded-xl ${colorClasses[item.color]} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4" variants={fadeInUp}>
            Ready to try it yourself?
          </motion.h2>
          <motion.p className="text-zinc-400 mb-8" variants={fadeInUp}>
            Start chatting with Friday in seconds, no setup required.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <MagneticButton
              onClick={() => router.push("/register")}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] transition-all duration-300 mx-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400" />
              <div className="px-8 py-3 rounded-full bg-[#09090b] text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
                Get Started Free
              </div>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}