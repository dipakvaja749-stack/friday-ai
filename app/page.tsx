// // // // // import Image from "next/image";

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// // // // //       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// // // // //         <Image
// // // // //           className="dark:invert"
// // // // //           src="/next.svg"
// // // // //           alt="Next.js logo"
// // // // //           width={100}
// // // // //           height={20}
// // // // //           priority
// // // // //         />
// // // // //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// // // // //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// // // // //             To get started, edit the page.tsx file.
// // // // //           </h1>
// // // // //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// // // // //             Looking for a starting point or more instructions? Head over to{" "}
// // // // //             <a
// // // // //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // // // //             >
// // // // //               Templates
// // // // //             </a>{" "}
// // // // //             or the{" "}
// // // // //             <a
// // // // //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // // // //             >
// // // // //               Learning
// // // // //             </a>{" "}
// // // // //             center.
// // // // //           </p>
// // // // //         </div>
// // // // //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// // // // //           <a
// // // // //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// // // // //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //           >
// // // // //             <Image
// // // // //               className="dark:invert"
// // // // //               src="/vercel.svg"
// // // // //               alt="Vercel logomark"
// // // // //               width={16}
// // // // //               height={16}
// // // // //             />
// // // // //             Deploy Now
// // // // //           </a>
// // // // //           <a
// // // // //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// // // // //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //           >
// // // // //             Documentation
// // // // //           </a>
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import React, { useState } from "react";
// // // // // import { 
// // // // //   Sparkles, 
// // // // //   MessageSquare, 
// // // // //   Zap, 
// // // // //   ShieldCheck, 
// // // // //   TrendingUp, 
// // // // //   ArrowRight, 
// // // // //   Menu, 
// // // // //   X,
// // // // //   Github,
// // // // //   Twitter,
// // // // //   Linkedin
// // // // // } from "lucide-react";
// // // // import {
// // // //   Sparkles,
// // // //   MessageSquare,
// // // //   Zap,
// // // //   ShieldCheck,
// // // //   TrendingUp,
// // // //   ArrowRight,
// // // //   Menu,
// // // //   X,

// // // // } from "lucide-react";

// // // // export default function FridayHomepage() {
// // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // // //   return (
// // // //     <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
// // // //       {/* BACKGROUND GLOW ACCENTS */}
// // // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-30 blur-[140px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-0" />
// // // //       <div className="absolute top-[800px] left-0 w-72 h-72 pointer-events-none opacity-10 blur-[100px] bg-blue-500 rounded-full" />
// // // //       <div className="absolute top-[1200px] right-0 w-80 h-80 pointer-events-none opacity-10 blur-[120px] bg-purple-500 rounded-full" />

// // // //       {/* 1. STICKY HEADER */}
// // // //       <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/70 backdrop-blur-md transition-all">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
// // // //           {/* Logo */}
// // // //           <div className="flex items-center gap-2 cursor-pointer group">
// // // //             <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover:rotate-6 transition-transform">
// // // //               <Sparkles className="h-4 w-4 text-white" />
// // // //             </div>
// // // //             <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
// // // //               Friday <span className="text-purple-500 font-medium">AI</span>
// // // //             </span>
// // // //           </div>

// // // //           {/* Desktop Navigation */}
// // // //           <nav className="hidden md:flex items-center gap-8">
// // // //             <a href="#home" className="text-sm text-zinc-400 hover:text-white transition-colors">Home</a>
// // // //             <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
// // // //             <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
// // // //             <a href="#login" className="text-sm text-zinc-400 hover:text-white transition-colors">Login</a>
// // // //           </nav>

// // // //           {/* Glowing CTA Button */}
// // // //           <div className="hidden md:block">
// // // //             <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-300">
// // // //               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
// // // //               <div className="px-6 py-2 rounded-full bg-[#09090b] text-sm font-medium text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
// // // //                 Get Started
// // // //               </div>
// // // //             </button>
// // // //           </div>

// // // //           {/* Mobile Menu Button */}
// // // //           <button 
// // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // //             className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
// // // //           >
// // // //             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // //           </button>
// // // //         </div>

// // // //         {/* Mobile Navigation Dropdown */}
// // // //         {mobileMenuOpen && (
// // // //           <div className="md:hidden border-b border-zinc-900 bg-[#030303] px-4 pt-2 pb-4 space-y-3 shadow-2xl animate-fade-in">
// // // //             <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Home</a>
// // // //             <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Features</a>
// // // //             <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Pricing</a>
// // // //             <a href="#login" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Login</a>
// // // //             <button className="w-full mt-2 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium text-white shadow-lg">
// // // //               Get Started
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </header>

// // // //       {/* 2. HERO SECTION */}
// // // //       <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center">
        
// // // //         {/* Top Mini Badge */}
// // // //         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs text-purple-400 mb-6 backdrop-blur-md animate-bounce">
// // // //           <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
// // // //           <span>Next-Gen AI Workspace is Live</span>
// // // //         </div>

// // // //         {/* Main Headings */}
// // // //         <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
// // // //           Your Personal <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">AI Assistant</span> For Infinite Growth.
// // // //         </h1>
        
// // // //         <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
// // // //           Meet Friday. Automate tasks, brainstorm creative strategies, write clean code, and accelerate your productivity in real-time.
// // // //         </p>

// // // //         {/* ChatGPT Style Input Simulation */}
// // // //         <div className="max-w-2xl mx-auto p-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group focus-within:border-purple-500/50 transition-colors duration-300">
// // // //           <input 
// // // //             type="text" 
// // // //             placeholder="Ask Friday anything..." 
// // // //             className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
// // // //           />
// // // //           <button className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 shadow-md">
// // // //             <span>Start Chatting</span>
// // // //             <ArrowRight className="h-4 w-4" />
// // // //           </button>
// // // //         </div>

// // // //         {/* Floating tech highlights */}
// // // //         <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs text-zinc-500">
// // // //           <span className="flex items-center gap-1.5">⚡ Instant Processing</span>
// // // //           <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
// // // //           <span className="flex items-center gap-1.5">🔒 Advanced Encryption</span>
// // // //           <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
// // // //           <span className="flex items-center gap-1.5">🌐 Context Aware</span>
// // // //         </div>
// // // //       </section>

// // // //       {/* 3. FEATURES SECTION (Glassmorphism) */}
// // // //       <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 border-t border-zinc-900">
        
// // // //         <div className="text-center max-w-3xl mx-auto mb-16">
// // // //           <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
// // // //             Engineered for Modern Teams
// // // //           </h2>
// // // //           <p className="text-zinc-400 text-sm sm:text-base">
// // // //             Powering smart flows without breaking your stack setup. Lightning fast responses tailored exactly to your context.
// // // //           </p>
// // // //         </div>

// // // //         {/* Features Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// // // //           {/* Card 1: Smart AI Chat */}
// // // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-blue-500/40 transition-all duration-300 shadow-lg">
// // // //             <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // // //               <MessageSquare className="h-6 w-6" />
// // // //             </div>
// // // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Smart AI Chat</h3>
// // // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // // //               Engage with context-aware chat structures that instantly adapt to your pipeline or tone.
// // // //             </p>
// // // //           </div>

// // // //           {/* Card 2: Fast Responses */}
// // // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-purple-500/40 transition-all duration-300 shadow-lg">
// // // //             <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // // //               <Zap className="h-6 w-6" />
// // // //             </div>
// // // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Fast Responses</h3>
// // // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // // //               Powered by ultra-low latency inference engine delivering deep answers sub-second.
// // // //             </p>
// // // //           </div>

// // // //           {/* Card 3: Secure & Private */}
// // // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-pink-500/40 transition-all duration-300 shadow-lg">
// // // //             <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // // //               <ShieldCheck className="h-6 w-6" />
// // // //             </div>
// // // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition-colors">Secure & Private</h3>
// // // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // // //               Your sensitive parameters remain entirely zero-knowledge encrypted and private.
// // // //             </p>
// // // //           </div>

// // // //           {/* Card 4: Productivity Boost */}
// // // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
// // // //             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // // //               <TrendingUp className="h-6 w-6" />
// // // //             </div>
// // // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Productivity Boost</h3>
// // // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // // //               Automate routine responses and documentation workflows smoothly to multiply results.
// // // //             </p>
// // // //           </div>

// // // //         </div>
// // // //       </section>

// // // //       {/* 4. FOOTER */}
// // // //       <footer className="w-full bg-[#020202] border-t border-zinc-900 mt-20 z-10 relative">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
// // // //             {/* Branding Column */}
// // // //             <div className="col-span-2 space-y-4">
// // // //               <div className="flex items-center gap-2">
// // // //                 <div className="h-6 w-6 rounded bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
// // // //                   <Sparkles className="h-3 w-3 text-white" />
// // // //                 </div>
// // // //                 <span className="text-md font-bold text-white tracking-wider">Friday AI</span>
// // // //               </div>
// // // //               <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
// // // //                 Building next-generation intelligent conversational layers for creators and builders everywhere.
// // // //               </p>
// // // //               {/* Social Icons */}
// // // //               <div className="flex items-center gap-4 pt-2 text-zinc-500">
// // // //                 {/* <a href="#" className="hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
// // // //                 <a href="#" className="hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
// // // //                 <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a> */}
// // // //               </div>
// // // //             </div>

// // // //             {/* Column 2: Product */}
// // // //             <div>
// // // //               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Product</h4>
// // // //               <ul className="space-y-2.5 text-sm text-zinc-500">
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Features</a></li>
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Integrations</a></li>
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Pricing Hub</a></li>
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a></li>
// // // //               </ul>
// // // //             </div>

// // // //             {/* Column 3: Support */}
// // // //             <div>
// // // //               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Support</h4>
// // // //               <ul className="space-y-2.5 text-sm text-zinc-500">
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Documentation</a></li>
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">API Status</a></li>
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Discord Server</a></li>
// // // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact Support</a></li>
// // // //               </ul>
// // // //             </div>

// // // //           </div>

// // // //           {/* Bottom Divider & Copyright */}
// // // //           <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
// // // //             <div>&copy; 2026 Friday AI. All rights reserved.</div>
// // // //             <div className="flex gap-6">
// // // //               <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
// // // //               <a href="#" className="hover:text-zinc-400">Terms of Service</a>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </footer>

// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import React, { useState } from "react";
// // // import {
// // //   Sparkles,
// // //   MessageSquare,
// // //   Zap,
// // //   ShieldCheck,
// // //   TrendingUp,
// // //   ArrowRight,
// // //   Menu,
// // //   X,
// // // } from "lucide-react";

// // // export default function FridayHomepage() {
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // //   return (
// // //     <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
// // //       {/* BACKGROUND GLOW ACCENTS */}
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />
// // //       <div className="absolute top-[800px] left-0 w-72 h-72 pointer-events-none opacity-10 blur-[100px] bg-teal-500 rounded-full" />
// // //       <div className="absolute top-[1200px] right-0 w-80 h-80 pointer-events-none opacity-10 blur-[120px] bg-emerald-500 rounded-full" />

// // //       {/* 1. STICKY HEADER */}
    

// // //       {/* 2. HERO SECTION */}
// // //       <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center">

// // //         {/* Top Mini Badge */}
// // //         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
// // //           <Sparkles className="h-3.5 w-3.5" />
// // //           <span>Next-Gen AI Workspace is Live</span>
// // //         </div>

// // //         {/* Main Headings */}
// // //         <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
// // //           Your Intelligent <span className="text-emerald-400">AI</span> Companion
// // //         </h1>

// // //         <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
// // //           Research, write, code and think with Friday.
// // //         </p>

// // //         {/* ChatGPT Style Input Simulation */}
// // //         <div className="max-w-2xl mx-auto p-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group focus-within:border-emerald-500/50 transition-colors duration-300">
// // //           <input
// // //             type="text"
// // //             placeholder="Ask Friday anything..."
// // //             className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
// // //           />
// // //           <button className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 shadow-md">
// // //             <span>Start Chatting</span>
// // //             <ArrowRight className="h-4 w-4" />
// // //           </button>
// // //         </div>

// // //         {/* Floating tech highlights */}
// // //         <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 text-xs text-zinc-400 mb-12">
// // //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">🌐 Intelligent Conversations</span>
// // //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">{'</>'} Code Generation</span>
// // //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">⚡ Lightning Fast</span>
// // //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">✦ Creative Writing</span>
// // //         </div>

// // //         {/* Stats */}
// // //         <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
// // //           <div>
// // //             <div className="text-2xl sm:text-3xl font-bold text-white">10M+</div>
// // //             <div className="text-xs text-zinc-500 mt-1">Users Worldwide</div>
// // //           </div>
// // //           <div>
// // //             <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
// // //             <div className="text-xs text-zinc-500 mt-1">Uptime</div>
// // //           </div>
// // //           <div>
// // //             <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
// // //             <div className="text-xs text-zinc-500 mt-1">User Rating</div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* 3. FEATURES SECTION */}
// // //       <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 border-t border-zinc-900">

// // //         <div className="text-center max-w-3xl mx-auto mb-16">
// // //           <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
// // //             Engineered for Modern Teams
// // //           </h2>
// // //           <p className="text-zinc-400 text-sm sm:text-base">
// // //             Powering smart flows without breaking your stack setup. Lightning fast responses tailored exactly to your context.
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-teal-500/40 transition-all duration-300 shadow-lg">
// // //             <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // //               <MessageSquare className="h-6 w-6" />
// // //             </div>
// // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">Smart AI Chat</h3>
// // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // //               Engage with context-aware chat structures that instantly adapt to your pipeline or tone.
// // //             </p>
// // //           </div>

// // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
// // //             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // //               <Zap className="h-6 w-6" />
// // //             </div>
// // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Fast Responses</h3>
// // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // //               Powered by ultra-low latency inference engine delivering deep answers sub-second.
// // //             </p>
// // //           </div>

// // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
// // //             <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // //               <ShieldCheck className="h-6 w-6" />
// // //             </div>
// // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Secure & Private</h3>
// // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // //               Your sensitive parameters remain entirely zero-knowledge encrypted and private.
// // //             </p>
// // //           </div>

// // //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-lime-500/40 transition-all duration-300 shadow-lg">
// // //             <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // //               <TrendingUp className="h-6 w-6" />
// // //             </div>
// // //             <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-400 transition-colors">Productivity Boost</h3>
// // //             <p className="text-zinc-400 text-sm leading-relaxed">
// // //               Automate routine responses and documentation workflows smoothly to multiply results.
// // //             </p>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* 4. FOOTER */}
// // //       <footer className="w-full bg-[#020202] border-t border-zinc-900 mt-20 z-10 relative">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

// // //             <div className="col-span-2 space-y-4">
// // //               <div className="flex items-center gap-2">
// // //                 <div className="h-6 w-6 rounded bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center">
// // //                   <Sparkles className="h-3 w-3 text-white" />
// // //                 </div>
// // //                 <span className="text-md font-bold text-white tracking-wider">Friday AI</span>
// // //               </div>
// // //               <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
// // //                 Building next-generation intelligent conversational layers for creators and builders everywhere.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Product</h4>
// // //               <ul className="space-y-2.5 text-sm text-zinc-500">
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Features</a></li>
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Integrations</a></li>
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Pricing Hub</a></li>
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a></li>
// // //               </ul>
// // //             </div>

// // //             <div>
// // //               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Support</h4>
// // //               <ul className="space-y-2.5 text-sm text-zinc-500">
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Documentation</a></li>
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">API Status</a></li>
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Discord Server</a></li>
// // //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact Support</a></li>
// // //               </ul>
// // //             </div>

// // //           </div>

// // //           <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
// // //             <div>&copy; 2026 Friday AI. All rights reserved.</div>
// // //             <div className="flex gap-6">
// // //               <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
// // //               <a href="#" className="hover:text-zinc-400">Terms of Service</a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </footer>

// // //     </div>
// // //   );
// // // }

// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import {
// //   Sparkles,
// //   MessageSquare,
// //   Zap,
// //   ShieldCheck,
// //   TrendingUp,
// //   ArrowRight,
// //   Menu,
// //   X,
// // } from "lucide-react";

// // export default function FridayHomepage() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const router = useRouter();

// //   return (
// //     <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">

// //       {/* BACKGROUND GLOW ACCENTS */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />
// //       <div className="absolute top-[800px] left-0 w-72 h-72 pointer-events-none opacity-10 blur-[100px] bg-teal-500 rounded-full" />
// //       <div className="absolute top-[1200px] right-0 w-80 h-80 pointer-events-none opacity-10 blur-[120px] bg-emerald-500 rounded-full" />

// //       {/* 1. STICKY HEADER */}
// //       <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/70 backdrop-blur-md transition-all">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

// //           {/* Logo */}
// //           <div
// //             onClick={() => router.push("/")}
// //             className="flex items-center gap-2 cursor-pointer group"
// //           >
// //             <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.5)] group-hover:rotate-6 transition-transform">
// //               <Sparkles className="h-4 w-4 text-white" />
// //             </div>
// //             <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
// //               Friday <span className="text-emerald-400 font-medium">AI</span>
// //             </span>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center gap-8">
// //             <button onClick={() => router.push("/")} className="text-sm text-zinc-400 hover:text-white transition-colors">Home</button>
// //             <button onClick={() => router.push("/features")} className="text-sm text-zinc-400 hover:text-white transition-colors">Features</button>
// //             <button onClick={() => router.push("/pricing")} className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</button>
// //           </nav>

// //           {/* Login + Register Buttons */}
// //           <div className="hidden md:flex items-center gap-3">
// //             <button
// //               onClick={() => router.push("/login")}
// //               className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-full border border-transparent hover:border-zinc-800 transition-all"
// //             >
// //               Login
// //             </button>
// //             <button
// //               onClick={() => router.push("/register")}
// //               className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] transition-all duration-300"
// //             >
// //               <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400" />
// //               <div className="px-6 py-2 rounded-full bg-[#09090b] text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
// //                 Register
// //               </div>
// //             </button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
// //           >
// //             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation Dropdown */}
// //         {mobileMenuOpen && (
// //           <div className="md:hidden border-b border-zinc-900 bg-[#030303] px-4 pt-2 pb-4 space-y-3 shadow-2xl animate-fade-in">
// //             <button onClick={() => { setMobileMenuOpen(false); router.push("/"); }} className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white">Home</button>
// //             <button onClick={() => { setMobileMenuOpen(false); router.push("/features"); }} className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white">Features</button>
// //             <button onClick={() => { setMobileMenuOpen(false); router.push("/pricing"); }} className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white">Pricing</button>
// //             <div className="flex gap-3 pt-3">
// //               <button
// //                 onClick={() => { setMobileMenuOpen(false); router.push("/login"); }}
// //                 className="flex-1 py-2.5 rounded-full border border-zinc-700 text-sm font-medium text-zinc-200"
// //               >
// //                 Login
// //               </button>
// //               <button
// //                 onClick={() => { setMobileMenuOpen(false); router.push("/register"); }}
// //                 className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-sm font-semibold text-white shadow-lg"
// //               >
// //                 Register
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </header>

// //       {/* 2. HERO SECTION */}
// //       <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center">

// //         {/* Top Mini Badge */}
// //         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
// //           <Sparkles className="h-3.5 w-3.5" />
// //           <span>Next-Gen AI Workspace is Live</span>
// //         </div>

// //         {/* Main Headings */}
// //         <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
// //           Your Intelligent <span className="text-emerald-400">AI</span> Companion
// //         </h1>

// //         <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
// //           Research, write, code and think with Friday.
// //         </p>

// //         {/* ChatGPT Style Input Simulation */}
// //         <div className="max-w-2xl mx-auto p-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group focus-within:border-emerald-500/50 transition-colors duration-300">
// //           <input
// //             type="text"
// //             placeholder="Ask Friday anything..."
// //             className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
// //           />
// //           <button
// //             onClick={() => router.push("/register")}
// //             className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 shadow-md"
// //           >
// //             <span>Start Chatting</span>
// //             <ArrowRight className="h-4 w-4" />
// //           </button>
// //         </div>

// //         {/* Floating tech highlights */}
// //         <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 text-xs text-zinc-400 mb-12">
// //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">🌐 Intelligent Conversations</span>
// //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">{'</>'} Code Generation</span>
// //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">⚡ Lightning Fast</span>
// //           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">✦ Creative Writing</span>
// //         </div>

// //         {/* Stats */}
// //         <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
// //           <div>
// //             <div className="text-2xl sm:text-3xl font-bold text-white">10M+</div>
// //             <div className="text-xs text-zinc-500 mt-1">Users Worldwide</div>
// //           </div>
// //           <div>
// //             <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
// //             <div className="text-xs text-zinc-500 mt-1">Uptime</div>
// //           </div>
// //           <div>
// //             <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
// //             <div className="text-xs text-zinc-500 mt-1">User Rating</div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 3. FEATURES SECTION */}
// //       <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 border-t border-zinc-900">

// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
// //             Engineered for Modern Teams
// //           </h2>
// //           <p className="text-zinc-400 text-sm sm:text-base">
// //             Powering smart flows without breaking your stack setup. Lightning fast responses tailored exactly to your context.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-teal-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <MessageSquare className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">Smart AI Chat</h3>
// //             <p className="text-zinc-400 text-sm leading-relaxed">
// //               Engage with context-aware chat structures that instantly adapt to your pipeline or tone.
// //             </p>
// //           </div>

// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <Zap className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Fast Responses</h3>
// //             <p className="text-zinc-400 text-sm leading-relaxed">
// //               Powered by ultra-low latency inference engine delivering deep answers sub-second.
// //             </p>
// //           </div>

// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <ShieldCheck className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Secure & Private</h3>
// //             <p className="text-zinc-400 text-sm leading-relaxed">
// //               Your sensitive parameters remain entirely zero-knowledge encrypted and private.
// //             </p>
// //           </div>

// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-lime-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <TrendingUp className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-400 transition-colors">Productivity Boost</h3>
// //             <p className="text-zinc-400 text-sm leading-relaxed">
// //               Automate routine responses and documentation workflows smoothly to multiply results.
// //             </p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* 4. FOOTER */}
// //       <footer className="w-full bg-[#020202] border-t border-zinc-900 mt-20 z-10 relative">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

// //             <div className="col-span-2 space-y-4">
// //               <div className="flex items-center gap-2">
// //                 <div className="h-6 w-6 rounded bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center">
// //                   <Sparkles className="h-3 w-3 text-white" />
// //                 </div>
// //                 <span className="text-md font-bold text-white tracking-wider">Friday AI</span>
// //               </div>
// //               <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
// //                 Building next-generation intelligent conversational layers for creators and builders everywhere.
// //               </p>
// //             </div>

// //             <div>
// //               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Product</h4>
// //               <ul className="space-y-2.5 text-sm text-zinc-500">
// //                 <li><button onClick={() => router.push("/features")} className="hover:text-zinc-300 transition-colors">Features</button></li>
// //                 <li><button onClick={() => router.push("/features")} className="hover:text-zinc-300 transition-colors">Integrations</button></li>
// //                 <li><button onClick={() => router.push("/pricing")} className="hover:text-zinc-300 transition-colors">Pricing Hub</button></li>
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a></li>
// //               </ul>
// //             </div>

// //             <div>
// //               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Support</h4>
// //               <ul className="space-y-2.5 text-sm text-zinc-500">
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Documentation</a></li>
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">API Status</a></li>
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Discord Server</a></li>
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact Support</a></li>
// //               </ul>
// //             </div>

// //           </div>

// //           <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
// //             <div>&copy; 2026 Friday AI. All rights reserved.</div>
// //             <div className="flex gap-6">
// //               <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
// //               <a href="#" className="hover:text-zinc-400">Terms of Service</a>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>

// //     </div>
// //   );
// // }


// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import {
//   MessageSquare,
//   Zap,
//   ShieldCheck,
//   TrendingUp,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";
// import Header from "@/components/header";
// import Footer from "@/components/footer";

// export default function FridayHomepage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
//       <Header />

//       {/* BACKGROUND GLOW ACCENTS */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />
//       <div className="absolute top-[800px] left-0 w-72 h-72 pointer-events-none opacity-10 blur-[100px] bg-teal-500 rounded-full" />
//       <div className="absolute top-[1200px] right-0 w-80 h-80 pointer-events-none opacity-10 blur-[120px] bg-emerald-500 rounded-full" />

//       {/* Spacer so content doesn't hide behind fixed header */}
//       <div className="h-16" />

//       {/* 2. HERO SECTION */}
//       <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center">
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
//           <Sparkles className="h-3.5 w-3.5" />
//           <span>Next-Gen AI Workspace is Live</span>
//         </div>

//         <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
//           Your Intelligent <span className="text-emerald-400">AI</span> Companion
//         </h1>

//         <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
//           Research, write, code and think with Friday.
//         </p>

//         <div className="max-w-2xl mx-auto p-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group focus-within:border-emerald-500/50 transition-colors duration-300">
//           <input
//             type="text"
//             placeholder="Ask Friday anything..."
//             className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
//           />
//           <button
//             onClick={() => router.push("/register")}
//             className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 shadow-md"
//           >
//             <span>Start Chatting</span>
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 text-xs text-zinc-400 mb-12">
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">🌐 Intelligent Conversations</span>
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">{'</>'} Code Generation</span>
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">⚡ Lightning Fast</span>
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">✦ Creative Writing</span>
//         </div>

//         <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
//           <div>
//             <div className="text-2xl sm:text-3xl font-bold text-white">10M+</div>
//             <div className="text-xs text-zinc-500 mt-1">Users Worldwide</div>
//           </div>
//           <div>
//             <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
//             <div className="text-xs text-zinc-500 mt-1">Uptime</div>
//           </div>
//           <div>
//             <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
//             <div className="text-xs text-zinc-500 mt-1">User Rating</div>
//           </div>
//         </div>
//       </section>

//       {/* 3. FEATURES SECTION */}
//       <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 border-t border-zinc-900">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
//             Engineered for Modern Teams
//           </h2>
//           <p className="text-zinc-400 text-sm sm:text-base">
//             Powering smart flows without breaking your stack setup. Lightning fast responses tailored exactly to your context.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-teal-500/40 transition-all duration-300 shadow-lg">
//             <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
//               <MessageSquare className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">Smart AI Chat</h3>
//             <p className="text-zinc-400 text-sm leading-relaxed">
//               Engage with context-aware chat structures that instantly adapt to your pipeline or tone.
//             </p>
//           </div>

//           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
//             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
//               <Zap className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Fast Responses</h3>
//             <p className="text-zinc-400 text-sm leading-relaxed">
//               Powered by ultra-low latency inference engine delivering deep answers sub-second.
//             </p>
//           </div>

//           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
//             <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
//               <ShieldCheck className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Secure & Private</h3>
//             <p className="text-zinc-400 text-sm leading-relaxed">
//               Your sensitive parameters remain entirely zero-knowledge encrypted and private.
//             </p>
//           </div>

//           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-lime-500/40 transition-all duration-300 shadow-lg">
//             <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
//               <TrendingUp className="h-6 w-6" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-400 transition-colors">Productivity Boost</h3>
//             <p className="text-zinc-400 text-sm leading-relaxed">
//               Automate routine responses and documentation workflows smoothly to multiply results.
//             </p>
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// }

// import styled from 'styled-components';

// export const Button = () => {
//   return (
//     <StyledWrapper>
//       <div className="button-container">
//         <button className="brutalist-button friday">
//           <div className="friday-logo">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="friday-icon">
//               {/* Friday Sparkle & Dot Logo Icon */}
//               <path d="M12 3c.4 3.3 2.7 5.6 6 6-3.3.4-5.6 2.7-6 6-.4-3.3-2.7-5.6-6-6 3.3-.4 5.6-2.7 6-6z" fill="#ffffff" />
//               <circle cx="7.5" cy="16.5" r="1.5" fill="#ffffff" />
//             </svg>
//           </div>
//           <div className="button-text">
//             <span>Powered By</span>
//             <span>Friday</span>
//           </div>
//         </button>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .button-container {
//     display: flex;
//     justify-content: center;
//     gap: 20px;
//     padding: 20px;
//   }

//   .brutalist-button {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     border: 3px solid #000000;
//     border-radius: 12px;
//     padding: 0;
//     text-decoration: none;
//     color: #000000;
//     font-weight: bold;
//     position: relative;
//     box-shadow: 4px 4px 0px #000000;
//     overflow: hidden;
//     transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//     height: 130px;
//     width: 130px;
//     cursor: pointer;
//   }

//   /* Friday Teal Theme Colors */
//   .brutalist-button.friday {
//     background-color: #007a5e; 
//   }

//   .brutalist-button::before {
//     content: "";
//     position: absolute;
//     left: 50%;
//     bottom: -150%;
//     width: 300%;
//     height: 300%;
//     border-radius: 50%;
//     transform: translateX(-50%) scale(0);
//     transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
//     z-index: 1;
//   }

//   .brutalist-button.friday::before {
//     background-color: #009673;
//   }

//   .brutalist-button:hover::before {
//     transform: translateX(-50%) scale(1);
//   }

//   .brutalist-button:hover {
//     transform: translate(-4px, -4px);
//     box-shadow: 8px 8px 0px #000000;
//   }

//   .brutalist-button:active {
//     transform: translate(2px, 2px);
//     box-shadow: 2px 2px 0px #000000;
//   }

//   .friday-logo {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 2;
//     width: 90px;
//     height: 90px;
//     border-radius: 28%; /* Rounded square style from the image */
//     transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
//     background-color: #00a884; /* Matches the vibrant Friday brand icon color */
//   }

//   .friday-icon {
//     width: 50px;
//     height: 50px;
//     transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//   }

//   @keyframes spin {
//     0% {
//       transform: translate(-50%, -50%) rotate(0deg);
//     }
//     100% {
//       transform: translate(-50%, -50%) rotate(360deg);
//     }
//   }

//   .brutalist-button:hover .friday-logo {
//     animation: spin 5s linear infinite;
//     width: 50px;
//     height: 50px;
//     top: 28%;
//   }

//   .brutalist-button:hover .friday-icon {
//     transform: scale(0.65);
//   }

//   .button-text {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     line-height: 1.3;
//     transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//     text-align: center;
//     opacity: 0;
//     transform: translateY(20px);
//     z-index: 2;
//     position: absolute;
//     bottom: 18px;
//     left: 0;
//     right: 0;
//   }

//   .button-text span:first-child {
//     font-size: 13px;
//     font-weight: 500;
//     margin-bottom: 2px;
//     color: #e0e0e0;
//   }

//   .button-text span:last-child {
//     font-size: 16px;
//     font-weight: 800;
//     text-transform: uppercase;
//     letter-spacing: 0.8px;
//     color: #ffffff;
//   }

//   .brutalist-button:hover .button-text {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .brutalist-button.friday:hover .button-text {
//     color: #ffffff;
//   }

//   .brutalist-button.friday:hover .button-text span:last-child {
//     color: #ffffff;
//   }

//   @media (hover: hover) and (pointer: fine) {
//     .brutalist-button:hover {
//       transform: translate(-4px, -4px);
//       box-shadow: 8px 8px 0px #000000;
//     }
//   }
// `;

"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import {
  MessageSquare,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ───────────────────────────────────────────────
   Animated Counter
   ─────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = "", prefix = "", decimals = 0, delay = 0 }: {
  target: number; suffix?: string; prefix?: string; decimals?: number; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setValue(target);
      return;
    }
    const duration = 2000;
    const start = performance.now();
    const timer = setTimeout(() => {
      const tick = () => {
        const elapsed = performance.now() - start - delay;
        if (elapsed < 0) { requestAnimationFrame(tick); return; }
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setValue(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, target, delay, prefersReduced]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
  return <div ref={ref}>{prefix}{display}{suffix}</div>;
}

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
   Floating Particles
   ─────────────────────────────────────────────── */
function FloatingParticles() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-emerald-400"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: 0,
            filter: `blur(${p.size > 2 ? 1 : 0}px)`,
          }}
          animate={{
            y: [0, -40, 20, -30, 0],
            x: [0, 15, -10, 20, 0],
            opacity: [0, p.opacity, p.opacity * 0.5, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────
   Cursor Glow
   ─────────────────────────────────────────────── */
function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, prefersReduced]);

  if (prefersReduced) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[2] w-[500px] h-[500px] rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
      }}
    />
  );
}

/* ───────────────────────────────────────────────
   Animated Background
   ─────────────────────────────────────────────── */
function AnimatedBackground() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora gradient */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-20 blur-[140px]"
        style={{
          background: "linear-gradient(90deg, #0d9488, #10b981, #06b6d4)",
        }}
        animate={prefersReduced ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[800px] left-[10%] w-72 h-72 rounded-full opacity-10 blur-[100px] bg-teal-500"
        animate={prefersReduced ? {} : {
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[1200px] right-[10%] w-80 h-80 rounded-full opacity-10 blur-[120px] bg-emerald-500"
        animate={prefersReduced ? {} : {
          x: [0, -50, 40, 0],
          y: [0, 40, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[400px] right-[20%] w-64 h-64 rounded-full opacity-8 blur-[90px] bg-cyan-500"
        animate={prefersReduced ? {} : {
          x: [0, 30, -20, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
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
   Gradient Text for "AI"
   ─────────────────────────────────────────────── */
function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-60 animate-gradient-x">
        {children}
      </span>
    </span>
  );
}

/* ───────────────────────────────────────────────
   Main Page
   ─────────────────────────────────────────────── */
export default function FridayHomepage() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden relative">
      <AnimatedBackground />
      <FloatingParticles />
      <CursorGlow />
      <Header />

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-16" />

      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center" ref={heroRef}>
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Next-Gen AI Workspace is Live</span>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Intelligent{" "}
          <motion.span
            className="relative inline-block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <GradientText>AI</GradientText>
          </motion.span>{" "}
          Companion
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Research, write, code and think with Friday.
        </motion.p>

        {/* Search Box */}
        <motion.div
          className="max-w-2xl mx-auto p-2.5 rounded-full border bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group transition-all duration-500"
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderColor: inputFocused ? "rgba(16,185,129,0.4)" : "rgba(39,39,42,1)",
            boxShadow: inputFocused
              ? "0 0 40px rgba(16,185,129,0.12), 0 0 80px rgba(16,185,129,0.06)"
              : "0 25px 50px -12px rgba(0,0,0,0.5)",
          }}
        >
          <input
            type="text"
            placeholder="Ask Friday anything..."
            className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <MagneticButton
            onClick={() => router.push("/register")}
            className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 flex items-center gap-1.5 shadow-md relative overflow-hidden group/btn"
          >
            <span className="relative z-10">Start Chatting</span>
            <ArrowRight className="h-4 w-4 relative z-10 group-hover/btn:translate-x-0.5 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
            />
          </MagneticButton>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 text-xs text-zinc-400 mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {[
            { icon: "🌐", text: "Intelligent Conversations" },
            { icon: "</>", text: "Code Generation" },
            { icon: "⚡", text: "Lightning Fast" },
            { icon: "✦", text: "Creative Writing" },
          ].map((tag, i) => (
            <motion.span
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, borderColor: "rgba(16,185,129,0.3)" }}
            >
              <span>{tag.icon}</span>
              <span>{tag.text}</span>
            </motion.span>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="flex flex-wrap justify-center gap-10 sm:gap-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {[
            { value: 10, suffix: "M+", label: "Users Worldwide" },
            { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
            { value: 4.9, suffix: "", label: "User Rating", decimals: 1 },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} custom={0.6 + i * 0.1}>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} delay={800 + i * 200} />
              </div>
              <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════ */}
      <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 border-t border-zinc-900">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="font-serif text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            variants={fadeInUp}
          >
            Engineered for Modern Teams
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
            variants={fadeInUp}
          >
            Powering smart flows without breaking your stack setup. Lightning fast responses tailored exactly to your context.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MessageSquare,
              color: "teal" as const,
              title: "Smart AI Chat",
              desc: "Engage with context-aware chat structures that instantly adapt to your pipeline or tone.",
            },
            {
              icon: Zap,
              color: "emerald" as const,
              title: "Fast Responses",
              desc: "Powered by ultra-low latency inference engine delivering deep answers sub-second.",
            },
            {
              icon: ShieldCheck,
              color: "cyan" as const,
              title: "Secure & Private",
              desc: "Your sensitive parameters remain entirely zero-knowledge encrypted and private.",
            },
            {
              icon: TrendingUp,
              color: "lime" as const,
              title: "Productivity Boost",
              desc: "Automate routine responses and documentation workflows smoothly to multiply results.",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
              teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "hover:border-teal-500/40", glow: "teal" },
              emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-500/40", glow: "emerald" },
              cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-500/40", glow: "cyan" },
              lime: { bg: "bg-lime-500/10", text: "text-lime-400", border: "hover:border-lime-500/40", glow: "lime" },
            };
            const c = colorClasses[feature.color];

            return (
              <TiltCard key={i} glowColor={c.glow}>
                <div className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 ${c.border} transition-colors duration-300 shadow-lg h-full`}>
                  <motion.div
                    className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-5`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className={`text-lg font-semibold mb-2 group-hover:${c.text} transition-colors`}>{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}