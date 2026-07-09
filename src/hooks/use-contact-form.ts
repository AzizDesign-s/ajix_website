"use client";

import { useState } from "react";
import { validateContactForm } from "@/lib/validation/contact-form";
import { submitContactForm } from "@/lib/services/contact-service";
import type {
  ContactFormValues,
  ContactFormErrors,
  ContactFormStatus,
} from "@/types/contact";

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  budget: "",
  projectType: "",
};

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K]
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    // Clear that field's error the moment the person starts fixing it,
    // rather than making them resubmit to see the error disappear.
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateContactForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    const result = await submitContactForm(values);

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      setValues(initialValues);
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  }

  function resetStatus() {
    setStatus("idle");
    setStatusMessage("");
  }

  return {
    values,
    errors,
    status,
    statusMessage,
    updateField,
    handleSubmit,
    resetStatus,
  };
}
