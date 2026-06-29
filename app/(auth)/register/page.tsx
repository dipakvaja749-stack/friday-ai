"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthCard } from "@/components/auth/auth-card";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#10A37F] to-[#14B8A6] mb-4 shadow-lg shadow-[#10A37F]/20">
            <Sparkles size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1.5">
            Create your account
          </h1>
          <p className="text-sm text-white/40">
            Start your journey with Friday AI.
          </p>
        </motion.div>

        <RegisterForm />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-white/40">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#10A37F] hover:text-[#14B8A6] font-medium transition-colors duration-200"
            >
              Sign In
            </Link>
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 pt-6 border-t border-white/[0.06]"
        >
          <p className="text-[11px] text-white/25 text-center mb-3">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center gap-6 opacity-30">
            {["Vercel", "Linear", "Notion", "Figma"].map((company) => (
              <span key={company} className="text-xs font-semibold text-white/60 tracking-wide">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </AuthCard>
    </AuthLayout>
  );
}