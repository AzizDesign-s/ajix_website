export interface ContactMethod {
  type: "email" | "whatsapp" | "phone" | "location" | "hours";
  label: string;
  value: string;
  href?: string; // where clicking the card should go, if applicable
  icon: string; // key into featureIconMap
}

export interface WorkingHours {
  weekdays: string; // e.g. "Mon – Fri, 9:00 AM – 6:00 PM"
  weekend: string; // e.g. "Saturday & Sunday: Closed"
}

export interface ContactService {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type AvailabilityLevel = "available" | "limited" | "busy";

export interface AvailabilityState {
  level: AvailabilityLevel;
  label: string;
  description: string;
  responseTime: string;
}
// --- Form-related types ---

export interface ContactFormValues {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  budget: string;
  projectType: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactSubmitResult {
  success: boolean;
  message: string;
}
