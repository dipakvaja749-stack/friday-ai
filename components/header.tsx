"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";
const HIDDEN_ROUTES = ["/login", "/register", "/dashboard"];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const router = useRouter();
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.5)] group-hover:rotate-6 transition-transform">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Friday <span className="text-emerald-400 font-medium">AI</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => router.push("/")} className="text-sm text-zinc-400 hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => router.push("/features")} className="text-sm text-zinc-400 hover:text-white transition-colors">
            Features
          </button>
          <button onClick={() => router.push("/pricing")} className="text-sm text-zinc-400 hover:text-white transition-colors">
            Pricing
          </button>
        </nav>

        {/* Login + Register Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => router.push("/login")}
            className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-full border border-transparent hover:border-zinc-800 transition-all"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/register")}
            className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400 px-6 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] hover:brightness-110 active:scale-95"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-900 bg-[#030303] px-4 pt-2 pb-4 space-y-3 shadow-2xl">
          <button
            onClick={() => { setMobileMenuOpen(false); router.push("/"); }}
            className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); router.push("/features"); }}
            className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white"
          >
            Features
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); router.push("/pricing"); }}
            className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white"
          >
            Pricing
          </button>
          <div className="flex gap-3 pt-3">
            <button
              onClick={() => { setMobileMenuOpen(false); router.push("/login"); }}
              className="flex-1 py-2.5 rounded-full border border-zinc-700 text-sm font-medium text-zinc-200"
            >
              Login
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); router.push("/register"); }}
              className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-sm font-semibold text-black shadow-lg"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}