import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-border-hover",
  ghost: "bg-transparent text-foreground hover:bg-surface",
  gradient:
    "gradient-brand text-white shadow-[0_0_30px_-8px_var(--color-brand-blue)] hover:shadow-[0_0_40px_-6px_var(--color-brand-blue)] hover:brightness-110",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
