// import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.97]",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft",
//         ghost: "hover:bg-white/5 text-foreground",
//         outline: "border border-border hover:bg-white/5 text-foreground",
//         subtle: "bg-surface hover:bg-surface-hover text-foreground border border-border",
//         destructive: "bg-red-500/10 text-red-400 hover:bg-red-500/20",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4",
//         sm: "h-8 px-3 text-xs",
//         lg: "h-12 px-6 text-base",
//         icon: "h-9 w-9",
//         "icon-sm": "h-7 w-7",
//       },
//     },
//     defaultVariants: { variant: "default", size: "default" },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {}

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, ...props }, ref) => (
//     <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
//   )
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft",
        ghost:
          "hover:bg-white/5 text-foreground",
        outline:
          "border border-border hover:bg-white/5 text-foreground",
        subtle:
          "bg-surface hover:bg-surface-hover text-foreground border border-border",
        destructive:
          "bg-red-500/10 text-red-400 hover:bg-red-500/20",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-9 w-9",
        "icon-sm": "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      type = "button", // ✅ default type
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };