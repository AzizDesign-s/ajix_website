import type { BusinessMetric } from "@/types/about";

export const businessMetrics: BusinessMetric[] = [
  {
    label: "Faster Lead Response",
    value: 40,
    suffix: "%",
    context:
      "Unified lead inbox replaced manual follow-ups across the sales team.",
    icon: "zap",
    projectSlug: "nexora-dealer-os",
  },
  {
    label: "Fewer Missed Follow-Ups",
    value: 65,
    suffix: "%",
    context: "Automated reminders closed the gap left by manual scheduling.",
    icon: "refresh-cw",
    projectSlug: "nexora-dealer-os",
  },
  {
    label: "Staff Satisfaction",
    value: 92,
    suffix: "%",
    context: "Measured in a pilot rollout across two dealership locations.",
    icon: "users",
    projectSlug: "nexora-dealer-os",
  },
  {
    label: "Faster Onboarding",
    value: 80,
    suffix: "%",
    context:
      "Guided onboarding animations and interactive tutorials for new users.",
    icon: "play-circle",
  },
  {
    label: "Fewer Support Tickets",
    value: 90,
    suffix: "%",
    context:
      "Clearer flows in the Digital Ordering System and Point of Sale platform reduced confusion-driven tickets.",
    icon: "message-circle-off",
  },
];
