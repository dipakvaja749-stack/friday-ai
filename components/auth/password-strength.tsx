"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password: string;
}

interface Requirement {
  label: string;
  test: (pwd: string) => boolean;
}

const requirements: Requirement[] = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "Contains uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "Contains lowercase letter", test: (p) => /[a-z]/.test(p) },
  { label: "Contains a number", test: (p) => /[0-9]/.test(p) },
  { label: "Contains special character", test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
];

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = requirements.filter((req) => req.test(password)).length;
  const percentage = (strength / requirements.length) * 100;

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength <= 2) return "bg-orange-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength <= 4) return "bg-[#10A37F]/70";
    return "bg-[#10A37F]";
  };

  const getStrengthLabel = () => {
    if (strength <= 1) return "Weak";
    if (strength <= 2) return "Fair";
    if (strength <= 3) return "Good";
    if (strength <= 4) return "Strong";
    return "Very Strong";
  };

  return (
    <div className="space-y-3">
      {/* Strength bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${getStrengthColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <motion.span 
          key={getStrengthLabel()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-medium text-white/50 min-w-[70px] text-right"
        >
          {password.length > 0 ? getStrengthLabel() : ""}
        </motion.span>
      </div>

      {/* Requirements checklist */}
      <div className="space-y-1.5">
        {requirements.map((req, index) => {
          const met = req.test(password);
          return (
            <motion.div
              key={req.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{
                  scale: met ? 1 : 0.8,
                  backgroundColor: met ? "rgba(16, 163, 127, 0.2)" : "rgba(255, 255, 255, 0.05)",
                }}
                className="w-4 h-4 rounded-full flex items-center justify-center"
              >
                {met ? (
                  <Check size={10} className="text-[#10A37F]" />
                ) : (
                  <X size={10} className="text-white/20" />
                )}
              </motion.div>
              <span className={`text-xs ${met ? "text-white/60" : "text-white/30"}`}>
                {req.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}