"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import { FormSuccessState } from "@/components/sections/contact/form/form-sucess-state";
import { FormErrorState } from "@/components/sections/contact/form/form-error-state";
import { useContactForm } from "@/hooks/use-contact-form";
import { MESSAGE_MAX_LENGTH } from "@/lib/validation/contact-form";

const projectTypeOptions = [
  "Product Design",
  "React Development",
  "Framer Development",
  "Branding",
  "Consulting",
  "Other",
];

const budgetOptions = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-danger mt-1.5 text-xs">{message}</p>;
}

export function ContactForm() {
  const {
    values,
    errors,
    status,
    statusMessage,
    updateField,
    handleSubmit,
    resetStatus,
  } = useContactForm();

  if (status === "success") {
    return (
      <GlowPanel className="bg-surface/40 p-8">
        <FormSuccessState message={statusMessage} onReset={resetStatus} />
      </GlowPanel>
    );
  }

  return (
    <GlowPanel className="bg-surface/40 p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field - invisible to real visitors, catches basic bots.
            Web3Forms checks this field name specifically. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="text-foreground/80 text-sm font-medium"
            >
              Full Name
            </label>
            <Input
              id="fullName"
              name="fullName"
              className="mt-1.5"
              value={values.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            <div id="fullName-error">
              <FieldError message={errors.fullName} />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-foreground/80 text-sm font-medium"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              className="mt-1.5"
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <div id="email-error">
              <FieldError message={errors.email} />
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="text-foreground/80 text-sm font-medium"
            >
              Company <span className="text-muted-foreground">(optional)</span>
            </label>
            <Input
              id="company"
              name="company"
              className="mt-1.5"
              value={values.company}
              onChange={(e) => updateField("company", e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="text-foreground/80 text-sm font-medium"
            >
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              className="mt-1.5"
              value={values.subject}
              onChange={(e) => updateField("subject", e.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            <div id="subject-error">
              <FieldError message={errors.subject} />
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="projectType"
              className="text-foreground/80 text-sm font-medium"
            >
              Project Type{" "}
              <span className="text-muted-foreground">(optional)</span>
            </label>
            <div className="mt-1.5">
              <Select
                id="projectType"
                name="projectType"
                value={values.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
              >
                <option value="">Select one</option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="text-foreground/80 text-sm font-medium"
            >
              Budget <span className="text-muted-foreground">(optional)</span>
            </label>
            <div className="mt-1.5">
              <Select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={(e) => updateField("budget", e.target.value)}
              >
                <option value="">Select a range</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label
              htmlFor="message"
              className="text-foreground/80 text-sm font-medium"
            >
              Message
            </label>
            <span className="text-muted-foreground text-xs">
              {values.message.length}/{MESSAGE_MAX_LENGTH}
            </span>
          </div>
          <div className="mt-1.5">
            <Textarea
              id="message"
              name="message"
              rows={5}
              maxLength={MESSAGE_MAX_LENGTH}
              value={values.message}
              onChange={(e) => updateField("message", e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
          </div>
          <div id="message-error">
            <FieldError message={errors.message} />
          </div>
        </div>

        <AnimatePresence>
          {status === "error" && (
            <FormErrorState message={statusMessage} onRetry={resetStatus} />
          )}
        </AnimatePresence>

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <motion.span className="flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </motion.span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </GlowPanel>
  );
}
