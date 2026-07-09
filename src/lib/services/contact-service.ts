import { contactMethods } from "@/data/contact/methods";
import { workingHours } from "@/data/contact/working-hours";
import { contactServices } from "@/data/contact/services";
import { faqItems } from "@/data/contact/faq";
import type { ContactFormValues, ContactSubmitResult } from "@/types/contact";
export {
  getCurrentAvailability,
  getAllAvailabilityStates,
} from "@/config/availability";

export function getContactMethods() {
  return contactMethods;
}

export function getWorkingHours() {
  return workingHours;
}

export function getContactServices() {
  return contactServices;
}

export function getFaqItems() {
  return faqItems;
}

export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactSubmitResult> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New message from ${values.fullName} — ${values.subject}`,
        from_name: values.fullName,
        email: values.email,
        company: values.company || "Not provided",
        message: values.message,
        project_type: values.projectType || "Not specified",
        budget: values.budget || "Not specified",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message:
          "Thank you for reaching out. Your message has been successfully sent. I'll get back to you as soon as possible.",
      };
    }

    return {
      success: false,
      message:
        "Something went wrong sending your message. Please try again, or email me directly.",
    };
  } catch {
    return {
      success: false,
      message:
        "Couldn't connect right now. Please check your connection and try again.",
    };
  }
}
