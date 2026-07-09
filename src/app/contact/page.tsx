import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/hero/contact-hero";
import { ContactMethodsSection } from "@/components/sections/contact/method/contact-method-section";
import { ContactFormSection } from "@/components/sections/contact/form/contact-form-section";
import { WorkingTogetherSection } from "@/components/sections/contact/working/working-together-section";
import { FaqSection } from "@/components/sections/contact/faq/faq-section";
import { AvailabilitySection } from "@/components/sections/contact/availability/availability-section";
import {
  getCurrentAvailability,
  getAllAvailabilityStates,
  getContactServices,
  getContactMethods,
  getFaqItems,
  getWorkingHours,
} from "@/lib/services/contact-service";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdul Aziz (AJIX) — Enterprise Product Designer.",
};

export default function ContactPage() {
  const availability = getCurrentAvailability();
  const allStates = getAllAvailabilityStates();
  const methods = getContactMethods();
  const services = getContactServices();
  const faqs = getFaqItems();
  const hours = getWorkingHours();

  return (
    <>
      <ContactHero availability={availability} />
      <ContactMethodsSection methods={methods} />
      <ContactFormSection />
      <WorkingTogetherSection services={services} />
      <FaqSection items={faqs} />
      <AvailabilitySection
        states={allStates}
        current={availability}
        hours={hours}
      />
    </>
  );
}
