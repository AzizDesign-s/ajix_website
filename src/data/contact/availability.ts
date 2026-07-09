import type { AvailabilityState, AvailabilityLevel } from "@/types/contact";

export const availabilityStates: Record<AvailabilityLevel, AvailabilityState> =
  {
    available: {
      level: "available",
      label: "Available for Work",
      description:
        "Currently taking on new enterprise design and engineering engagements.",
      responseTime: "Typical response time: within 24 hours",
    },
    limited: {
      level: "limited",
      label: "Limited Availability",
      description:
        "Taking on select projects alongside existing commitments — reach out to check fit.",
      responseTime: "Typical response time: within 48 hours",
    },
    busy: {
      level: "busy",
      label: "Currently Busy",
      description:
        "Not taking new engagements right now, but happy to discuss future opportunities.",
      responseTime: "Typical response time: within 3–5 business days",
    },
  };

// Mirrors src/config/availability.ts's currentAvailability — this is the
// single source of truth Phase 7 will read from. When a real CMS/admin
// exists, this becomes one dynamic value instead of a hardcoded constant.
export const currentAvailabilityLevel: AvailabilityLevel = "limited";
