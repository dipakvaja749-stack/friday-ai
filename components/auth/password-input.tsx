"use client";

import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  showStrength?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, error, showStrength, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="relative">
        <motion.div
          animate={{
            boxShadow: isFocused 
              ? "0 0 0 2px rgba(16, 163, 127, 0.15), 0 0 20px -5px rgba(16, 163, 127, 0.1)" 
              : "0 0 0 0px rgba(16, 163, 127, 0)",
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "relative flex items-center rounded-xl border bg-[#0D0D0D] transition-colors duration-200",
            isFocused ? "border-[#10A37F]/50" : "border-[#2A2A2A]",
            error && "border-red-500/50",
            className
          )}
        >
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={cn(
              "flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none",
              "selection:bg-[#10A37F]/30"
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mr-3 p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-200"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showPassword ? "eye" : "eye-off"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </motion.div>
        
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -5, height: 0 }}
              className="mt-1.5 text-xs text-red-400 pl-1"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";