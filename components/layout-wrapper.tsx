"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
const hideLayout =
  pathname.startsWith("/dashboard") ||
  pathname.startsWith("/login") ||
  pathname.startsWith("/signup");

  return (
    <TooltipProvider>
      {!hideLayout && <Header />}

      <main className="min-h-screen">
        {children}
      </main>

      <Toaster />

      {!hideLayout && <Footer />}
    </TooltipProvider>
  );
}