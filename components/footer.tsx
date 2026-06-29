"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

const HIDDEN_ROUTES = ["/login", "/register", "/dashboard"];

export default function Footer() {
  const router = useRouter();
    const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname)) {
    return null;
  }

  return (
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
              <li>
                <button onClick={() => router.push("/features")} className="hover:text-zinc-300 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/features")} className="hover:text-zinc-300 transition-colors">
                  Integrations
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/pricing")} className="hover:text-zinc-300 transition-colors">
                  Pricing Hub
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a>
              </li>
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
  );
}