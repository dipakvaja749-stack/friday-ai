// // // import Image from "next/image";

// // // export default function Home() {
// // //   return (
// // //     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// // //       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// // //         <Image
// // //           className="dark:invert"
// // //           src="/next.svg"
// // //           alt="Next.js logo"
// // //           width={100}
// // //           height={20}
// // //           priority
// // //         />
// // //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// // //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// // //             To get started, edit the page.tsx file.
// // //           </h1>
// // //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// // //             Looking for a starting point or more instructions? Head over to{" "}
// // //             <a
// // //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // //             >
// // //               Templates
// // //             </a>{" "}
// // //             or the{" "}
// // //             <a
// // //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // //             >
// // //               Learning
// // //             </a>{" "}
// // //             center.
// // //           </p>
// // //         </div>
// // //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// // //           <a
// // //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// // //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //           >
// // //             <Image
// // //               className="dark:invert"
// // //               src="/vercel.svg"
// // //               alt="Vercel logomark"
// // //               width={16}
// // //               height={16}
// // //             />
// // //             Deploy Now
// // //           </a>
// // //           <a
// // //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// // //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //           >
// // //             Documentation
// // //           </a>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import React, { useState } from "react";
// // // import { 
// // //   Sparkles, 
// // //   MessageSquare, 
// // //   Zap, 
// // //   ShieldCheck, 
// // //   TrendingUp, 
// // //   ArrowRight, 
// // //   Menu, 
// // //   X,
// // //   Github,
// // //   Twitter,
// // //   Linkedin
// // // } from "lucide-react";
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

// //   return (
// //     <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
// //       {/* BACKGROUND GLOW ACCENTS */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-30 blur-[140px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-0" />
// //       <div className="absolute top-[800px] left-0 w-72 h-72 pointer-events-none opacity-10 blur-[100px] bg-blue-500 rounded-full" />
// //       <div className="absolute top-[1200px] right-0 w-80 h-80 pointer-events-none opacity-10 blur-[120px] bg-purple-500 rounded-full" />

// //       {/* 1. STICKY HEADER */}
// //       <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/70 backdrop-blur-md transition-all">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
// //           {/* Logo */}
// //           <div className="flex items-center gap-2 cursor-pointer group">
// //             <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover:rotate-6 transition-transform">
// //               <Sparkles className="h-4 w-4 text-white" />
// //             </div>
// //             <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
// //               Friday <span className="text-purple-500 font-medium">AI</span>
// //             </span>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center gap-8">
// //             <a href="#home" className="text-sm text-zinc-400 hover:text-white transition-colors">Home</a>
// //             <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
// //             <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
// //             <a href="#login" className="text-sm text-zinc-400 hover:text-white transition-colors">Login</a>
// //           </nav>

// //           {/* Glowing CTA Button */}
// //           <div className="hidden md:block">
// //             <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-300">
// //               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
// //               <div className="px-6 py-2 rounded-full bg-[#09090b] text-sm font-medium text-white transition-colors duration-200 group-hover:bg-zinc-900/60">
// //                 Get Started
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
// //             <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Home</a>
// //             <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Features</a>
// //             <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Pricing</a>
// //             <a href="#login" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-zinc-400 hover:text-white">Login</a>
// //             <button className="w-full mt-2 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium text-white shadow-lg">
// //               Get Started
// //             </button>
// //           </div>
// //         )}
// //       </header>

// //       {/* 2. HERO SECTION */}
// //       <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center">
        
// //         {/* Top Mini Badge */}
// //         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs text-purple-400 mb-6 backdrop-blur-md animate-bounce">
// //           <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
// //           <span>Next-Gen AI Workspace is Live</span>
// //         </div>

// //         {/* Main Headings */}
// //         <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
// //           Your Personal <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">AI Assistant</span> For Infinite Growth.
// //         </h1>
        
// //         <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
// //           Meet Friday. Automate tasks, brainstorm creative strategies, write clean code, and accelerate your productivity in real-time.
// //         </p>

// //         {/* ChatGPT Style Input Simulation */}
// //         <div className="max-w-2xl mx-auto p-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group focus-within:border-purple-500/50 transition-colors duration-300">
// //           <input 
// //             type="text" 
// //             placeholder="Ask Friday anything..." 
// //             className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
// //           />
// //           <button className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 shadow-md">
// //             <span>Start Chatting</span>
// //             <ArrowRight className="h-4 w-4" />
// //           </button>
// //         </div>

// //         {/* Floating tech highlights */}
// //         <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs text-zinc-500">
// //           <span className="flex items-center gap-1.5">⚡ Instant Processing</span>
// //           <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
// //           <span className="flex items-center gap-1.5">🔒 Advanced Encryption</span>
// //           <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
// //           <span className="flex items-center gap-1.5">🌐 Context Aware</span>
// //         </div>
// //       </section>

// //       {/* 3. FEATURES SECTION (Glassmorphism) */}
// //       <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 border-t border-zinc-900">
        
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
// //             Engineered for Modern Teams
// //           </h2>
// //           <p className="text-zinc-400 text-sm sm:text-base">
// //             Powering smart flows without breaking your stack setup. Lightning fast responses tailored exactly to your context.
// //           </p>
// //         </div>

// //         {/* Features Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// //           {/* Card 1: Smart AI Chat */}
// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-blue-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <MessageSquare className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Smart AI Chat</h3>
// //             <p className="text-zinc-400 text-sm leading-relaxed">
// //               Engage with context-aware chat structures that instantly adapt to your pipeline or tone.
// //             </p>
// //           </div>

// //           {/* Card 2: Fast Responses */}
// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-purple-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <Zap className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Fast Responses</h3>
// //             <p className="text-zinc-400 text-sm leading-relaxed">
// //               Powered by ultra-low latency inference engine delivering deep answers sub-second.
// //             </p>
// //           </div>

// //           {/* Card 3: Secure & Private */}
// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-pink-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <ShieldCheck className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition-colors">Secure & Private</h3>
// //             <p className="text-zinc-400 text-sm leading-relaxed">
// //               Your sensitive parameters remain entirely zero-knowledge encrypted and private.
// //             </p>
// //           </div>

// //           {/* Card 4: Productivity Boost */}
// //           <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
// //             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// //               <TrendingUp className="h-6 w-6" />
// //             </div>
// //             <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Productivity Boost</h3>
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
            
// //             {/* Branding Column */}
// //             <div className="col-span-2 space-y-4">
// //               <div className="flex items-center gap-2">
// //                 <div className="h-6 w-6 rounded bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
// //                   <Sparkles className="h-3 w-3 text-white" />
// //                 </div>
// //                 <span className="text-md font-bold text-white tracking-wider">Friday AI</span>
// //               </div>
// //               <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
// //                 Building next-generation intelligent conversational layers for creators and builders everywhere.
// //               </p>
// //               {/* Social Icons */}
// //               <div className="flex items-center gap-4 pt-2 text-zinc-500">
// //                 {/* <a href="#" className="hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
// //                 <a href="#" className="hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
// //                 <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a> */}
// //               </div>
// //             </div>

// //             {/* Column 2: Product */}
// //             <div>
// //               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Product</h4>
// //               <ul className="space-y-2.5 text-sm text-zinc-500">
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Features</a></li>
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Integrations</a></li>
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Pricing Hub</a></li>
// //                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a></li>
// //               </ul>
// //             </div>

// //             {/* Column 3: Support */}
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

// //           {/* Bottom Divider & Copyright */}
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

// import React, { useState } from "react";
// import {
//   Sparkles,
//   MessageSquare,
//   Zap,
//   ShieldCheck,
//   TrendingUp,
//   ArrowRight,
//   Menu,
//   X,
// } from "lucide-react";

// export default function FridayHomepage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
//       {/* BACKGROUND GLOW ACCENTS */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />
//       <div className="absolute top-[800px] left-0 w-72 h-72 pointer-events-none opacity-10 blur-[100px] bg-teal-500 rounded-full" />
//       <div className="absolute top-[1200px] right-0 w-80 h-80 pointer-events-none opacity-10 blur-[120px] bg-emerald-500 rounded-full" />

//       {/* 1. STICKY HEADER */}
    

//       {/* 2. HERO SECTION */}
//       <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center">

//         {/* Top Mini Badge */}
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
//           <Sparkles className="h-3.5 w-3.5" />
//           <span>Next-Gen AI Workspace is Live</span>
//         </div>

//         {/* Main Headings */}
//         <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
//           Your Intelligent <span className="text-emerald-400">AI</span> Companion
//         </h1>

//         <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
//           Research, write, code and think with Friday.
//         </p>

//         {/* ChatGPT Style Input Simulation */}
//         <div className="max-w-2xl mx-auto p-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group focus-within:border-emerald-500/50 transition-colors duration-300">
//           <input
//             type="text"
//             placeholder="Ask Friday anything..."
//             className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
//           />
//           <button className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 shadow-md">
//             <span>Start Chatting</span>
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>

//         {/* Floating tech highlights */}
//         <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 text-xs text-zinc-400 mb-12">
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">🌐 Intelligent Conversations</span>
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">{'</>'} Code Generation</span>
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">⚡ Lightning Fast</span>
//           <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">✦ Creative Writing</span>
//         </div>

//         {/* Stats */}
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

//       {/* 4. FOOTER */}
//       <footer className="w-full bg-[#020202] border-t border-zinc-900 mt-20 z-10 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

//             <div className="col-span-2 space-y-4">
//               <div className="flex items-center gap-2">
//                 <div className="h-6 w-6 rounded bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center">
//                   <Sparkles className="h-3 w-3 text-white" />
//                 </div>
//                 <span className="text-md font-bold text-white tracking-wider">Friday AI</span>
//               </div>
//               <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
//                 Building next-generation intelligent conversational layers for creators and builders everywhere.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Product</h4>
//               <ul className="space-y-2.5 text-sm text-zinc-500">
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Pricing Hub</a></li>
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Support</h4>
//               <ul className="space-y-2.5 text-sm text-zinc-500">
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">API Status</a></li>
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Discord Server</a></li>
//                 <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact Support</a></li>
//               </ul>
//             </div>

//           </div>

//           <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
//             <div>&copy; 2026 Friday AI. All rights reserved.</div>
//             <div className="flex gap-6">
//               <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
//               <a href="#" className="hover:text-zinc-400">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  MessageSquare,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function FridayHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* BACKGROUND GLOW ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25 blur-[140px] bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 z-0" />
      <div className="absolute top-[800px] left-0 w-72 h-72 pointer-events-none opacity-10 blur-[100px] bg-teal-500 rounded-full" />
      <div className="absolute top-[1200px] right-0 w-80 h-80 pointer-events-none opacity-10 blur-[120px] bg-emerald-500 rounded-full" />

      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/70 backdrop-blur-md transition-all">
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
            <button onClick={() => router.push("/")} className="text-sm text-zinc-400 hover:text-white transition-colors">Home</button>
            <button onClick={() => router.push("/features")} className="text-sm text-zinc-400 hover:text-white transition-colors">Features</button>
            <button onClick={() => router.push("/pricing")} className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</button>
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
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(20,184,166,0.55)] transition-all duration-300"
            >
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
            <button onClick={() => { setMobileMenuOpen(false); router.push("/"); }} className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white">Home</button>
            <button onClick={() => { setMobileMenuOpen(false); router.push("/features"); }} className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white">Features</button>
            <button onClick={() => { setMobileMenuOpen(false); router.push("/pricing"); }} className="block w-full text-left py-2 text-base font-medium text-zinc-400 hover:text-white">Pricing</button>
            <div className="flex gap-3 pt-3">
              <button
                onClick={() => { setMobileMenuOpen(false); router.push("/login"); }}
                className="flex-1 py-2.5 rounded-full border border-zinc-700 text-sm font-medium text-zinc-200"
              >
                Login
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); router.push("/register"); }}
                className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-sm font-semibold text-white shadow-lg"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 z-10 text-center">

        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Next-Gen AI Workspace is Live</span>
        </div>

        {/* Main Headings */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
          Your Intelligent <span className="text-emerald-400">AI</span> Companion
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Research, write, code and think with Friday.
        </p>

        {/* ChatGPT Style Input Simulation */}
        <div className="max-w-2xl mx-auto p-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-center gap-2 mb-8 group focus-within:border-emerald-500/50 transition-colors duration-300">
          <input
            type="text"
            placeholder="Ask Friday anything..."
            className="flex-1 bg-transparent border-none px-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none ring-0 focus:ring-0"
          />
          <button
            onClick={() => router.push("/register")}
            className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 shadow-md"
          >
            <span>Start Chatting</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Floating tech highlights */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 text-xs text-zinc-400 mb-12">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">🌐 Intelligent Conversations</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">{'</>'} Code Generation</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">⚡ Lightning Fast</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40">✦ Creative Writing</span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">10M+</div>
            <div className="text-xs text-zinc-500 mt-1">Users Worldwide</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
            <div className="text-xs text-zinc-500 mt-1">Uptime</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
            <div className="text-xs text-zinc-500 mt-1">User Rating</div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 border-t border-zinc-900">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Engineered for Modern Teams
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Powering smart flows without breaking your stack setup. Lightning fast responses tailored exactly to your context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-teal-500/40 transition-all duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">Smart AI Chat</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Engage with context-aware chat structures that instantly adapt to your pipeline or tone.
            </p>
          </div>

          <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Fast Responses</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Powered by ultra-low latency inference engine delivering deep answers sub-second.
            </p>
          </div>

          <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Secure & Private</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your sensitive parameters remain entirely zero-knowledge encrypted and private.
            </p>
          </div>

          <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-lime-500/40 transition-all duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-400 transition-colors">Productivity Boost</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Automate routine responses and documentation workflows smoothly to multiply results.
            </p>
          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="w-full bg-[#020202] border-t border-zinc-900 mt-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <span className="text-md font-bold text-white tracking-wider">Friday AI</span>
              </div>
              <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
                Building next-generation intelligent conversational layers for creators and builders everywhere.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Product</h4>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                <li><button onClick={() => router.push("/features")} className="hover:text-zinc-300 transition-colors">Features</button></li>
                <li><button onClick={() => router.push("/features")} className="hover:text-zinc-300 transition-colors">Integrations</button></li>
                <li><button onClick={() => router.push("/pricing")} className="hover:text-zinc-300 transition-colors">Pricing Hub</button></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-200 tracking-wider mb-4">Support</h4>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">API Status</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Discord Server</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact Support</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <div>&copy; 2026 Friday AI. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}