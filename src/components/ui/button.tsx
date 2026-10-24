import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass" | "pill";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantStyles = {
      default:
        "bg-[var(--brand-blue)] text-white hover:brightness-110 shadow-md hover:shadow-lg active:scale-95",
      outline:
        "border border-[var(--border-strong)] text-[var(--text-main)] hover:bg-[var(--bg-card-subtle)] active:scale-95",
      ghost:
        "hover:bg-[var(--bg-card-subtle)] text-[var(--text-main)] active:scale-95",
      glass:
        "bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(255,255,255,0.18)] text-white hover:bg-[rgba(255,255,255,0.15)] shadow-lg active:scale-95",
      pill:
        "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] rounded-full hover:opacity-90 shadow-sm active:scale-95",
    };

    const sizeStyles = {
      default: "h-11 px-6 py-2 text-sm font-bold",
      sm: "h-9 px-4 py-1.5 text-xs font-semibold rounded-lg",
      lg: "h-13 px-8 py-3 text-base font-extrabold rounded-full",
      icon: "h-10 w-10 p-0 rounded-full flex items-center justify-center",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
