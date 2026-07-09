import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ContactForm } from "@/components/sections/contact/form/contact-form";

export function ContactFormSection() {
  return (
    <Section id="contact-form">
      <Container>
        <SectionHeader
          eyebrow="Send a Message"
          title="Tell me about your project"
          description="The more detail you share, the faster I can give you a useful reply."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-2xl">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
