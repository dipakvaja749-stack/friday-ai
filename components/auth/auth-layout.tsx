"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  sideContent?: ReactNode;
}

export function AuthLayout({ children, sideContent }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full flex overflow-hidden bg-[#0D0D0D]">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#10A37F]/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#10A37F]/3 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#14B8A6]/5 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Left side - Branding */}
      {sideContent && (
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#10A37F]/[0.03] via-transparent to-transparent" />
          {sideContent}
        </motion.div>
      )}

      {/* Right side - Auth form */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`flex-1 flex items-center justify-center p-4 sm:p-8 relative ${!sideContent ? 'w-full' : ''}`}
      >
        <div className="w-full max-w-[420px]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}