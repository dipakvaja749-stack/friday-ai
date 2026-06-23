"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Zap, Brain, Code2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";

const features = [
  { icon: Brain, label: "Intelligent Conversations" },
  { icon: Code2, label: "Code Generation" },
  { icon: Zap, label: "Lightning Fast" },
  { icon: Sparkles, label: "Creative Writing" },
];

export default function LoginPage() {
  return (
    <AuthLayout
      sideContent={
        <div className="relative z-10 max-w-md">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10A37F] to-[#14B8A6] flex items-center justify-center shadow-lg shadow-[#10A37F]/20">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white">
                Friday
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Your Intelligent{" "}
              <span className="text-gradient">AI Companion</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              Research, write, code and think with Friday.
            </p>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2.5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
              >
                <feature.icon size={14} className="text-[#10A37F]" />
                <span className="text-xs font-medium text-white/60">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex items-center gap-8"
          >
            <div>
              <div className="text-2xl font-bold text-white">10M+</div>
              <div className="text-xs text-white/40">Users Worldwide</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-xs text-white/40">Uptime</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-xs text-white/40">User Rating</div>
            </div>
          </motion.div>
        </div>
      }
    >
      <AuthCard>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-white mb-1.5">Welcome Back</h1>
          <p className="text-sm text-white/40">
            Sign in to continue using Friday.
          </p>
        </motion.div>

        <LoginForm />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-white/40">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#10A37F] hover:text-[#14B8A6] font-medium transition-colors duration-200"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>
      </AuthCard>
    </AuthLayout>
  );
}