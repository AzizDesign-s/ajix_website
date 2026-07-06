"use client";

import { useCountUp } from "@/hooks/use-count-up";

export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const { ref, value: display } = useCountUp(value);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
