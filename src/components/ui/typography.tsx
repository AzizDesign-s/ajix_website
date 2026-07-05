import type { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

type TypographyProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Display({
  children,
  className,
  as: Tag = "h1",
}: TypographyProps) {
  return (
    <Tag
      className={cn(
        "font-display text-5xl leading-[1.1] font-semibold tracking-tight md:text-7xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Heading1({
  children,
  className,
  as: Tag = "h2",
}: TypographyProps) {
  return (
    <Tag
      className={cn(
        "font-display text-4xl leading-tight font-semibold tracking-tight md:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Heading2({
  children,
  className,
  as: Tag = "h3",
}: TypographyProps) {
  return (
    <Tag
      className={cn(
        "font-display text-2xl leading-snug font-semibold tracking-tight md:text-3xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Heading3({
  children,
  className,
  as: Tag = "h4",
}: TypographyProps) {
  return (
    <Tag
      className={cn(
        "font-sans text-xl leading-snug font-medium md:text-2xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Body({ children, className, as: Tag = "p" }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-foreground/80 font-sans text-base leading-relaxed",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Caption({
  children,
  className,
  as: Tag = "span",
}: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-muted-foreground font-sans text-sm leading-normal",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Label({
  children,
  className,
  as: Tag = "span",
}: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-muted-foreground font-sans text-xs font-medium tracking-wide uppercase",
        className
      )}
    >
      {children}
    </Tag>
  );
}
