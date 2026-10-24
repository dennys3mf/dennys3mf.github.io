import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "cyan" | "pill";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[var(--brand-blue)] text-white shadow-sm border-transparent hover:brightness-110",
    secondary:
      "bg-[var(--bg-card-subtle)] text-[var(--text-main)] border-[var(--border-color)]",
    outline:
      "border border-[var(--border-strong)] text-[var(--text-main)] bg-transparent",
    cyan:
      "bg-[rgba(79,107,255,0.12)] text-[var(--brand-blue)] border-[rgba(79,107,255,0.25)]",
    pill:
      "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] shadow-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
