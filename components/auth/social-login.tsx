// "use client";

// import { motion } from "framer-motion";
// import { signIn } from "next-auth/react";
// import { Chrome, Github } from "lucide-react";
// import { useState } from "react";

// interface SocialLoginProps {
//   mode?: "login" | "register";
// }

// export function SocialLogin({ mode = "login" }: SocialLoginProps) {
//   const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

//   const handleSocialSignIn = async (provider: string) => {
//     setLoadingProvider(provider);
//     await signIn(provider, { callbackUrl: "/" });
//     setLoadingProvider(null);
//   };

//   const buttonVariants = {
//     initial: { opacity: 0, y: 10 },
//     animate: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.3 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
//     }),
//   };

//   return (
//     <div className="space-y-3">
//       <div className="relative flex items-center gap-3 py-2">
//         <div className="flex-1 h-px bg-white/10" />
//         <span className="text-xs text-white/30 font-medium uppercase tracking-wider">
//           Or continue with
//         </span>
//         <div className="flex-1 h-px bg-white/10" />
//       </div>

//       <div className="grid grid-cols-2 gap-3">
//         <motion.button
//           custom={0}
//           variants={buttonVariants}
//           initial="initial"
//           animate="animate"
//           whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() => handleSocialSignIn("google")}
//           disabled={!!loadingProvider}
//           className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-[#2A2A2A] bg-white/[0.02] text-white/80 text-sm font-medium transition-all duration-200 hover:border-white/20 disabled:opacity-50"
//         >
//           {loadingProvider === "google" ? (
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//               className="w-4 h-4 border-2 border-white/20 border-t-white/80 rounded-full"
//             />
//           ) : (
//             <Chrome size={16} className="text-white/70" />
//           )}
//           Google
//         </motion.button>

//         <motion.button
//           custom={1}
//           variants={buttonVariants}
//           initial="initial"
//           animate="animate"
//           whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() => handleSocialSignIn("github")}
//           disabled={!!loadingProvider}
//           className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-[#2A2A2A] bg-white/[0.02] text-white/80 text-sm font-medium transition-all duration-200 hover:border-white/20 disabled:opacity-50"
//         >
//           {loadingProvider === "github" ? (
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//               className="w-4 h-4 border-2 border-white/20 border-t-white/80 rounded-full"
//             />
//           ) : (
//             <Github size={16} className="text-white/70" />
//           )}
//           GitHub
//         </motion.button>
//       </div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface SocialLoginProps {
  mode?: "login" | "register";
}

// Inline SVGs avoid lucide-react version/casing issues
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-white/70">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-white/70">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const providers = [
  { id: "google", label: "Google", Icon: GoogleIcon },
  { id: "github", label: "GitHub", Icon: GitHubIcon },
];

export function SocialLogin({ mode = "login" }: SocialLoginProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSocialSignIn = async (provider: string) => {
    setLoadingProvider(provider);
    await signIn(provider, { callbackUrl: "/" });
    setLoadingProvider(null);
  };

  return (
    <div className="space-y-3">
      <div className="relative flex items-center gap-3 py-2">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-white/30 font-medium uppercase tracking-wider">
          Or continue with
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {providers.map((provider, i) => (
          <motion.button
            key={provider.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + i * 0.1,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSocialSignIn(provider.id)}
            disabled={!!loadingProvider}
            className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-[#2A2A2A] bg-white/[0.02] text-white/80 text-sm font-medium transition-all duration-200 hover:border-white/20 disabled:opacity-50"
          >
            {loadingProvider === provider.id ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/20 border-t-white/80 rounded-full"
              />
            ) : (
              <provider.Icon />
            )}
            {provider.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}