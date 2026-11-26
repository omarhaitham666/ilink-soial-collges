import type { ReactNode } from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface CustomButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
}



export default function VoteButton({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  className = "",
}: CustomButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12111b] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#a855f7] text-white shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:bg-[#9333ea] hover:shadow-[0_6px_25px_rgba(168,85,247,0.35)]",

    secondary:
      "border border-[#30263d] bg-[#1c192a] text-[#e9d5ff] hover:border-[#a855f7]/40 hover:bg-[#252036]",

    danger:
      "border border-red-500/20 bg-red-500/10 text-red-400 hover:border-red-500/40 hover:bg-red-500/20",

    outline:
      "border border-[#a855f7]/40 bg-transparent text-[#c084fc] hover:bg-[#a855f7]/10 hover:border-[#a855f7]",

    ghost:
      "bg-transparent text-[#a1a1aa] hover:bg-[#a855f7]/10 hover:text-[#c084fc]",
  };

  const sizes = {
    sm: "min-h-9 px-3 text-xs rounded-lg",
    md: "min-h-11 px-5 text-sm rounded-xl",
    lg: "min-h-12 px-6 text-base rounded-xl",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : "w-fit"
      } ${className}`}
    >
      {loading ? (
        <>
          <Loader2 size={17} className="animate-spin shrink-0" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="shrink-0">{leftIcon}</span>
          )}

          <span>{children}</span>

          {rightIcon && (
            <span className="shrink-0">{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
}