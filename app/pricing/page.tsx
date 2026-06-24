"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    color: "teal",
    monthly: 0,
    yearly: 0,
    tagline: "For trying Friday out",
    features: [
      "50 messages / day",
      "Standard response speed",
      "Basic chat memory",
      "Community support",
    ],
  cta: "Start Free",
    highlight: false,
    route: "/register",
  },
  {
    name: "Pro",
    icon: Zap,
    color: "emerald",
    monthly: 19,
    yearly: 15,
    tagline: "For everyday power users",
    features: [
      "Unlimited messages",
      "Priority response speed",
      "Extended chat memory",
      "Code generation & debugging",
      "File & document analysis",
      "Email support",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
    route: "/register",
  },
  {
    name: "Team",
    icon: Crown,
    color: "cyan",
    monthly: 49,
    yearly: 39,
    tagline: "For teams that ship together",
    features: [
      "Everything in Pro",
      "Shared team workspace",
      "Admin & usage controls",
      "Custom integrations",
      "Dedicated onboarding",
      "Priority 24/7 support",
    ],
    cta: "Contact Sales",
    highlight: false,
    route: "/contact",
  },
];

const colorMap: Record<string, { ring: string; icon: string; chip: string }> = {
  teal: { ring: "hover:border-teal-500/40", icon: "bg-teal-500/10 text-teal-400", chip: "text-teal-400" },
  emerald: { ring: "border-emerald-500/50", icon: "bg-emerald-500/10 text-emerald-400", chip: "text-emerald-400" },
  cyan: { ring: "hover:border-cyan-500/40", icon: "bg-cyan-500/10 text-cyan-400", chip: "text-cyan-400" },
};

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />

      {/* HERO */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Simple, Transparent Pricing</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Plans That <span className="text-emerald-400">Grow With You</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Start free, upgrade when you need more power. Cancel anytime.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-3 p-1.5 rounded-full border border-zinc-800 bg-zinc-900/60">
          <button
            onClick={() => setYearly(false)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${yearly ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
          >
            Yearly
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">Save 20%</span>
          </button>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const c = colorMap[plan.color];
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <div
                key={i}
                className={`relative rounded-3xl border bg-zinc-900/20 backdrop-blur-sm p-8 transition-all duration-300 shadow-lg ${
                  plan.highlight
                    ? `border-emerald-500/50 bg-zinc-900/40 shadow-[0_0_40px_rgba(16,185,129,0.15)] md:-translate-y-3`
                    : `border-zinc-800 ${c.ring}`
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400 text-xs font-semibold text-black">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.icon}`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.tagline}</p>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">${price}</span>
                  <span className="text-zinc-500 text-sm mb-1">/ month</span>
                </div>

                <button
                  onClick={() => router.push(plan.route)}
                  className={`w-full py-3 rounded-full text-sm font-semibold mb-8 transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400 text-black hover:opacity-90"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${c.chip}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ STRIP */}
      <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 z-10 text-center border-t border-zinc-900 pt-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">Still have questions?</h2>
        <p className="text-zinc-400 mb-8">We re happy to help you pick the right plan for your team.</p>
        <button onClick={() => router.push("/contact")} className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] transition-all duration-300 mx-auto">
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400" />
          <div className="px-8 py-3 rounded-full bg-[#09090b] text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
            Contact Support
          </div>
        </button>
      </section>

    </div>
  );
}