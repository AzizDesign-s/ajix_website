import type { ContactFormValues, ContactFormErrors } from "@/types/contact";

export const MESSAGE_MAX_LENGTH = 1000;
export const SUBJECT_MAX_LENGTH = 120;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please add a subject.";
  } else if (values.subject.length > SUBJECT_MAX_LENGTH) {
    errors.subject = `Subject must be under ${SUBJECT_MAX_LENGTH} characters.`;
  }

  if (!values.message.trim()) {
    errors.message = "Please add a message.";
  } else if (values.message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Message must be under ${MESSAGE_MAX_LENGTH} characters.`;
  }

  return errors;
}
