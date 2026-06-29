// // "use client";

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { signIn } from "next-auth/react";
// // import { useRouter } from "next/navigation";
// // import { Mail, ArrowRight, Loader2 } from "lucide-react";
// // import { PasswordInput } from "./password-input";
// // import { SocialLogin } from "./social-login";

// // interface FormErrors {
// //   email?: string;
// //   password?: string;
// //   general?: string;
// // }

// // export function LoginForm() {
// //   const router = useRouter();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [rememberMe, setRememberMe] = useState(false);
// //   const [errors, setErrors] = useState<FormErrors>({});
// //   const [isLoading, setIsLoading] = useState(false);

// //   const validate = (): boolean => {
// //     const newErrors: FormErrors = {};
    
// //     if (!email) {
// //       newErrors.email = "Email is required";
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
// //       newErrors.email = "Please enter a valid email address";
// //     }
    
// //     if (!password) {
// //       newErrors.password = "Password is required";
// //     } else if (password.length < 6) {
// //       newErrors.password = "Password must be at least 6 characters";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
    
// //     if (!validate()) return;
    
// //     setIsLoading(true);
// //     setErrors({});

// //     try {
// //       const result = await signIn("credentials", {
// //         email,
// //         password,
// //         redirect: false,
// //         callbackUrl: "/",
// //       });

// //       if (result?.error) {
// //         setErrors({ general: "Invalid email or password" });
// //         setIsLoading(false);
// //         return;
// //       }

// //       router.push("/");
// //       router.refresh();
// //     } catch {
// //       setErrors({ general: "Something went wrong. Please try again." });
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-5">
// //       {/* General error */}
// //       <AnimatePresence>
// //         {errors.general && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -10, height: 0 }}
// //             animate={{ opacity: 1, y: 0, height: "auto" }}
// //             exit={{ opacity: 0, y: -10, height: 0 }}
// //             className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
// //           >
// //             {errors.general}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Email field */}
// //       <div className="space-y-1.5">
// //         <label className="block text-sm font-medium text-white/70">
// //           Email
// //         </label>
// //         <motion.div
// //           animate={{
// //             boxShadow: errors.email 
// //               ? "0 0 0 2px rgba(239, 68, 68, 0.15)" 
// //               : "0 0 0 0px rgba(16, 163, 127, 0)",
// //           }}
// //           className={`relative flex items-center rounded-xl border bg-[#0D0D0D] transition-colors duration-200 focus-within:border-[#10A37F]/50 ${errors.email ? "border-red-500/50" : "border-[#2A2A2A]"}`}
// //         >
// //           <Mail size={16} className="ml-4 text-white/30" />
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => {
// //               setEmail(e.target.value);
// //               if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
// //             }}
// //             placeholder="name@company.com"
// //             className="flex-1 bg-transparent px-3 py-3.5 text-sm text-white placeholder:text-white/30 outline-none selection:bg-[#10A37F]/30"
// //           />
// //         </motion.div>
// //         <AnimatePresence>
// //           {errors.email && (
// //             <motion.p
// //               initial={{ opacity: 0, y: -5 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -5 }}
// //               className="text-xs text-red-400 pl-1"
// //             >
// //               {errors.email}
// //             </motion.p>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       {/* Password field */}
// //       <div className="space-y-1.5">
// //         <div className="flex items-center justify-between">
// //           <label className="block text-sm font-medium text-white/70">
// //             Password
// //           </label>
// //           <motion.a
// //             href="/forgot-password"
// //             whileHover={{ color: "rgba(16, 163, 127, 0.8)" }}
// //             className="text-xs text-white/40 hover:text-[#10A37F] transition-colors duration-200"
// //           >
// //             Forgot password?
// //           </motion.a>
// //         </div>
// //         <PasswordInput
// //           value={password}
// //           onChange={(e) => {
// //             setPassword(e.target.value);
// //             if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
// //           }}
// //           placeholder="Enter your password"
// //           error={errors.password}
// //         />
// //       </div>

// //       {/* Remember me */}
// //       <div className="flex items-center gap-2.5">
// //         <motion.button
// //           type="button"
// //           whileTap={{ scale: 0.9 }}
// //           onClick={() => setRememberMe(!rememberMe)}
// //           className={`relative w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center ${rememberMe ? "bg-[#10A37F] border-[#10A37F]" : "border-[#2A2A2A] bg-transparent hover:border-white/30"}`}
// //         >
// //           <AnimatePresence>
// //             {rememberMe && (
// //               <motion.svg
// //                 initial={{ scale: 0 }}
// //                 animate={{ scale: 1 }}
// //                 exit={{ scale: 0 }}
// //                 className="w-2.5 h-2.5 text-white"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //                 strokeWidth={3}
// //               >
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
// //               </motion.svg>
// //             )}
// //           </AnimatePresence>
// //         </motion.button>
// //         <span className="text-sm text-white/50">Remember me</span>
// //       </div>

// //       {/* Submit button */}
// //       <motion.button
// //         type="submit"
// //         disabled={isLoading}
// //         whileHover={{ scale: 1.01 }}
// //         whileTap={{ scale: 0.99 }}
// //         className="relative w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#10A37F] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#0D8F6E] hover:shadow-lg hover:shadow-[#10A37F]/20 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
// //       >
// //         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
// //         {isLoading ? (
// //           <Loader2 size={18} className="animate-spin" />
// //         ) : (
// //           <>
// //             Sign In
// //             <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
// //           </>
// //         )}
// //       </motion.button>

// //       <SocialLogin mode="login" />
// //     </form>
// //   );
// // }\

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { Mail, ArrowRight, Loader2 } from "lucide-react";
// import { PasswordInput } from "./password-input";
// import { SocialLogin } from "./social-login";

// interface FormErrors {
//   email?: string;
//   password?: string;
//   general?: string;
// }

// export function LoginForm() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isLoading, setIsLoading] = useState(false);

//   const validate = (): boolean => {
//     const newErrors: FormErrors = {};
    
//     if (!email) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
    
//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
    
// //     if (!validate()) return;
    
// //     setIsLoading(true);
// //     setErrors({});

// //     try {
// //       const result = await signIn("credentials", {
// //         email,
// //         password,
// //         redirect: false,
// //         callbackUrl: "/",
// //       });

// //       if (result?.error) {
// //         setErrors({ general: "Invalid email or password" });
// //         setIsLoading(false);
// //         return;
// //       }

// //       router.push("/");
// //       router.refresh();
// //     } catch {
// //       setErrors({ general: "Something went wrong. Please try again." });
// //       setIsLoading(false);
// //     }
// //   };
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!validate()) return;

//   setIsLoading(true);
//   setErrors({});

//   try {
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (result?.error) {
//       setErrors({
//         general: "Invalid email or password",
//       });
//       setIsLoading(false);
//       return;
//     }

//     router.push("/dashboard");
//     router.refresh();
//   } catch (error) {
//     setErrors({
//       general: "Something went wrong. Please try again.",
//     });

//     setIsLoading(false);
//   }
// };
//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       {/* General error */}
//       <AnimatePresence>
//         {errors.general && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, height: 0 }}
//             animate={{ opacity: 1, y: 0, height: "auto" }}
//             exit={{ opacity: 0, y: -10, height: 0 }}
//             className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
//           >
//             {errors.general}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Email field */}
//       <div className="space-y-1.5">
//         <label className="block text-sm font-medium text-white/70">
//           Email
//         </label>
//         <motion.div
//           animate={{
//             boxShadow: errors.email 
//               ? "0 0 0 2px rgba(239, 68, 68, 0.15)" 
//               : "0 0 0 0px rgba(16, 163, 127, 0)",
//           }}
//           className={`relative flex items-center rounded-xl border bg-[#0D0D0D] transition-colors duration-200 focus-within:border-[#10A37F]/50 ${errors.email ? "border-red-500/50" : "border-[#2A2A2A]"}`}
//         >
//           <Mail size={16} className="ml-4 text-white/30 shrink-0" />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//               if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
//             }}
//             placeholder="name@company.com"
//             className="flex-1 bg-transparent pl-3 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none selection:bg-[#10A37F]/30"
//           />
//         </motion.div>
//         <AnimatePresence>
//           {errors.email && (
//             <motion.p
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -5 }}
//               className="text-xs text-red-400 pl-1"
//             >
//               {errors.email}
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Password field */}
//       <div className="space-y-1.5">
//         <div className="flex items-center justify-between">
//           <label className="block text-sm font-medium text-white/70">
//             Password
//           </label>
//           <motion.a
//             href="/forgot-password"
//             whileHover={{ color: "rgba(16, 163, 127, 0.8)" }}
//             className="text-xs text-white/40 hover:text-[#10A37F] transition-colors duration-200"
//           >
//             Forgot password?
//           </motion.a>
//         </div>
//         <PasswordInput
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
//           }}
//           placeholder="Enter your password"
//           error={errors.password}
//         />
//       </div>

//       {/* Remember me */}
//       <div className="flex items-center gap-2.5">
//         <motion.button
//           type="button"
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setRememberMe(!rememberMe)}
//           className={`relative w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center ${rememberMe ? "bg-[#10A37F] border-[#10A37F]" : "border-[#2A2A2A] bg-transparent hover:border-white/30"}`}
//         >
//           <AnimatePresence>
//             {rememberMe && (
//               <motion.svg
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0 }}
//                 className="w-2.5 h-2.5 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={3}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//               </motion.svg>
//             )}
//           </AnimatePresence>
//         </motion.button>
//         <span className="text-sm text-white/50">Remember me</span>
//       </div>

//       {/* Submit button */}
//       <motion.button
//         type="submit"
//         disabled={isLoading}
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.99 }}
//         className="relative w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#10A37F] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#0D8F6E] hover:shadow-lg hover:shadow-[#10A37F]/20 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//         {isLoading ? (
//           <Loader2 size={18} className="animate-spin" />
//         ) : (
//           <>
//             Sign In
//             <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
//           </>
//         )}
//       </motion.button>

//       <SocialLogin mode="login" />
//     </form>
//   );
// }
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import { PasswordInput } from "./password-input";
import { SocialLogin } from "./social-login";

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setErrors({
          general: "Invalid email or password",
        });
        setIsLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setErrors({
        general: "Something went wrong. Please try again.",
      });

      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* General error */}
      <AnimatePresence>
        {errors.general && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
          >
            {errors.general}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email field */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-white/70">
          Email
        </label>
        <motion.div
          animate={{
            boxShadow: errors.email
              ? "0 0 0 2px rgba(239, 68, 68, 0.15)"
              : "0 0 0 0px rgba(16, 163, 127, 0)",
          }}
          className={`relative flex items-center rounded-xl border bg-[#0D0D0D] transition-colors duration-200 focus-within:border-[#10A37F]/50 ${
            errors.email ? "border-red-500/50" : "border-[#2A2A2A]"
          }`}
        >
          <Mail
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 shrink-0 pointer-events-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="name@company.com"
            autoComplete="email"
            className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none selection:bg-[#10A37F]/30 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[box-shadow:0_0_0px_1000px_#0D0D0D_inset] [&:-webkit-autofill]:[caret-color:white]"
          />
        </motion.div>
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs text-red-400 pl-1"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Password field */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-white/70">
            Password
          </label>
          <motion.a
            href="/forgot-password"
            whileHover={{ color: "rgba(16, 163, 127, 0.8)" }}
            className="text-xs text-white/40 hover:text-[#10A37F] transition-colors duration-200"
          >
            Forgot password?
          </motion.a>
        </div>
        <PasswordInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          placeholder="Enter your password"
          error={errors.password}
        />
      </div>

      {/* Remember me */}
      <div className="flex items-center gap-2.5">
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setRememberMe(!rememberMe)}
          className={`relative w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center ${
            rememberMe ? "bg-[#10A37F] border-[#10A37F]" : "border-[#2A2A2A] bg-transparent hover:border-white/30"
          }`}
        >
          <AnimatePresence>
            {rememberMe && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="w-2.5 h-2.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
        <span className="text-sm text-white/50">Remember me</span>
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#10A37F] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#0D8F6E] hover:shadow-lg hover:shadow-[#10A37F]/20 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        {isLoading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <>
            Sign In
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </motion.button>

      <SocialLogin mode="login" />
    </form>
  );
}