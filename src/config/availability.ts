export type AvailabilityStatus = "available" | "open" | "busy" | "unavailable";

export const availabilityConfig: Record<
  AvailabilityStatus,
  { label: string; dotClassName: string }
> = {
  available: { label: "Available for Work", dotClassName: "bg-success" },
  open: { label: "Open to Opportunities", dotClassName: "bg-warning" },
  busy: { label: "Currently Busy", dotClassName: "bg-orange-500" },
  unavailable: { label: "Not Available", dotClassName: "bg-danger" },
};

// Sprint 1: hardcoded mock. Sprint 2+: this comes from Supabase settings table.
export const currentAvailability: AvailabilityStatus = "available";
