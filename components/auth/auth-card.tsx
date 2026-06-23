"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 
      }}
      className={`
        relative w-full rounded-2xl 
        bg-[#171717] 
        border border-[#2A2A2A]
        shadow-2xl shadow-black/50
        overflow-hidden
        ${className}
      `}
    >
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10A37F]/30 to-transparent" />
      
      {/* Glass reflection effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative p-8 sm:p-10">
        {children}
      </div>
    </motion.div>
  );
}