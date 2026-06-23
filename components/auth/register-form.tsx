/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { User, Mail, ArrowRight, Loader2 } from "lucide-react";
// import { PasswordInput } from "./password-input";
// import { PasswordStrength } from "./password-strength";
// import { SocialLogin } from "./social-login";

// interface FormErrors {
//   name?: string;
//   email?: string;
//   password?: string;
//   confirmPassword?: string;
//   general?: string;
// }

// export function RegisterForm() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isLoading, setIsLoading] = useState(false);

//   const validate = (): boolean => {
//     const newErrors: FormErrors = {};
    
//     if (!name.trim()) {
//       newErrors.name = "Full name is required";
//     } else if (name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }
    
//     if (!email) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
    
//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }
    
//     if (password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validate()) return;
    
//     setIsLoading(true);
//     setErrors({});

//     try {
//       const response = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setErrors({ general: data.message || "Something went wrong" });
//         setIsLoading(false);
//         return;
//       }

//       // Auto sign in after registration
//       const result = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (result?.error) {
//         setErrors({ general: "Account created but sign in failed" });
//         setIsLoading(false);
//         return;
//       }

//       router.push("/");
//       router.refresh();
//     } catch {
//       setErrors({ general: "Something went wrong. Please try again." });
//       setIsLoading(false);
//     }
//   };

//   const inputField = (
//     label: string,
//     value: string,
//     onChange: (val: string) => void,
//     placeholder: string,
//     error?: string,
//     type: string = "text",
//     icon?: React.ReactNode
//   ) => (
//     <div className="space-y-1.5">
//       <label className="block text-sm font-medium text-white/70">{label}</label>
//       <motion.div
//         animate={{
//           boxShadow: error 
//             ? "0 0 0 2px rgba(239, 68, 68, 0.15)" 
//             : "0 0 0 0px rgba(16, 163, 127, 0)",
//         }}
//         className={`relative flex items-center rounded-xl border bg-[#0D0D0D] transition-colors duration-200 focus-within:border-[#10A37F]/50 ${error ? "border-red-500/50" : "border-[#2A2A2A]"}`}
//       >
//         {icon && <span className="ml-4 text-white/30">{icon}</span>}
//         <input
//           type={type}
//           value={value}
//           onChange={(e) => {
//             onChange(e.target.value);
//             if (error) setErrors((prev) => ({ ...prev, [label.toLowerCase().replace(" ", "")]: undefined }));
//           }}
//           placeholder={placeholder}
//           className="flex-1 bg-transparent px-3 py-3.5 text-sm text-white placeholder:text-white/30 outline-none selection:bg-[#10A37F]/30"
//         />
//       </motion.div>
//       <AnimatePresence>
//         {error && (
//           <motion.p
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             className="text-xs text-red-400 pl-1"
//           >
//             {error}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );

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

//       {/* Full Name */}
//       {inputField(
//         "Full Name",
//         name,
//         setName,
//         "John Doe",
//         errors.name,
//         "text",
//         <User size={16} />
//       )}

//       {/* Email */}
//       {inputField(
//         "Email",
//         email,
//         setEmail,
//         "name@company.com",
//         errors.email,
//         "email",
//         <Mail size={16} />
//       )}

//       {/* Password */}
//       <div className="space-y-1.5">
//         <label className="block text-sm font-medium text-white/70">Password</label>
//         <PasswordInput
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
//           }}
//           placeholder="Create a strong password"
//           error={errors.password}
//         />
//         <PasswordStrength password={password} />
//       </div>

//       {/* Confirm Password */}
//       <div className="space-y-1.5">
//         <label className="block text-sm font-medium text-white/70">Confirm Password</label>
//         <PasswordInput
//           value={confirmPassword}
//           onChange={(e) => {
//             setConfirmPassword(e.target.value);
//             if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
//           }}
//           placeholder="Confirm your password"
//           error={errors.confirmPassword}
//         />
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
//             Create Account
//             <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
//           </>
//         )}
//       </motion.button>

//       <SocialLogin mode="register" />
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User, Mail, ArrowRight, Loader2 } from "lucide-react";
import { PasswordInput } from "./password-input";
import { PasswordStrength } from "./password-strength";
import { SocialLogin } from "./social-login";
import api from "@/app/lib/axios";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
    const { data } = await api.post("/api/register", {
      name,
      email,
      password,
    });

    // Auto login after register
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setErrors({
        general: "Account created but sign in failed",
      });
      setIsLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  } catch (error: any) {
    setErrors({
      general:
        error.response?.data?.message ||
        "Something went wrong. Please try again.",
    });

    setIsLoading(false);
  }
};
  const inputField = (
    label: string,
    value: string,
    onChange: (val: string) => void,
    placeholder: string,
    error?: string,
    type: string = "text",
    icon?: React.ReactNode
  ) => (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-white/70">{label}</label>
      <motion.div
        animate={{
          boxShadow: error 
            ? "0 0 0 2px rgba(239, 68, 68, 0.15)" 
            : "0 0 0 0px rgba(16, 163, 127, 0)",
        }}
        className={`relative flex items-center rounded-xl border bg-[#0D0D0D] transition-colors duration-200 focus-within:border-[#10A37F]/50 ${error ? "border-red-500/50" : "border-[#2A2A2A]"}`}
      >
        {icon && <span className="ml-4 text-white/30 shrink-0">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            if (error) setErrors((prev) => ({ ...prev, [label.toLowerCase().replace(" ", "")]: undefined }));
          }}
          placeholder={placeholder}
          className="flex-1 bg-transparent pl-3 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none selection:bg-[#10A37F]/30"
        />
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs text-red-400 pl-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

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

      {/* Full Name */}
      {inputField(
        "Full Name",
        name,
        setName,
        "John Doe",
        errors.name,
        "text",
        <User size={16} />
      )}

      {/* Email */}
      {inputField(
        "Email",
        email,
        setEmail,
        "name@company.com",
        errors.email,
        "email",
        <Mail size={16} />
      )}

      {/* Password */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-white/70">Password</label>
        <PasswordInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          placeholder="Create a strong password"
          error={errors.password}
        />
        <PasswordStrength password={password} />
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-white/70">Confirm Password</label>
        <PasswordInput
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
          }}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
        />
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
            Create Account
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </motion.button>

      <SocialLogin mode="register" />
    </form>
  );
}