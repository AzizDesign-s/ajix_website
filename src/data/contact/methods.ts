import type { ContactMethod } from "@/types/contact";

// PLACEHOLDER — replace email and whatsapp with your real values before Phase 3
export const contactMethods: ContactMethod[] = [
  {
    type: "email",
    label: "Email",
    value: "aziaji46@gmail.com",
    href: "mailto:aziaji46@gmail.com",
    icon: "mail",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "+971 54 390 4098",
    href: "https://wa.me/917904332064",
    icon: "message-circle",
  },
  {
    type: "location",
    label: "Location",
    value: "Dubai, UAE",
    icon: "map-pin",
  },
  {
    type: "hours",
    label: "Working Hours",
    value: "Mon – Fri, 9 AM – 6 PM",
    icon: "clock",
  },
];
