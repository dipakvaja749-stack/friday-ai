'use client'
import { Menu, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

function Header() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div> 
         <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/70 backdrop-blur-md transition-all  fixed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.5)] group-hover:rotate-6 transition-transform">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Friday <span className="text-emerald-400 font-medium">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-zinc-400 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
          </nav>

          {/* Login + Register Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-full border border-transparent hover:border-zinc-800 transition-all">
              Login
            </button>
            <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400" />
              <div className="px-6 py-2 rounded-full bg-[#09090b] text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
                Register
              </div>
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
          <div className="md:hidden border-b border-zinc-900 bg-[#030303] px-4 pt-2 pb-4 space-y-3 shadow-2xl animate-fade-in">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Home</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Pricing</a>
            <div className="flex gap-3 pt-3">
              <button onClick={() => setMobileMenuOpen(false)} className="flex-1 py-2.5 rounded-full border border-zinc-700 text-sm font-medium text-zinc-200">
                Login
              </button>
              <button onClick={() => setMobileMenuOpen(false)} className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-sm font-semibold text-white shadow-lg">
                Register
              </button>
            </div>
          </div>
        )}
      </header>
      </div>
  )
}

export default Header