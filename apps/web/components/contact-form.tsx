"use client";

import { useId, useState, type FormEvent } from "react";
import type { ContactContent } from "@/content/contact";

type ContactFormProps = {
  content: ContactContent["form"];
  linkedinHref: string;
};

type ContactFormValues = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

type ContactFormMessages = Partial<Record<keyof ContactFormValues, string>>;

const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  reason: "",
  message: "",
};

function isEmailAddress(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getReasonLabel(
  content: ContactContent["form"],
  reasonValue: string,
): string {
  return (
    content.reasons.find((reason) => reason.value === reasonValue)?.label ??
    reasonValue
  );
}

function formatMessage(
  content: ContactContent["form"],
  values: ContactFormValues,
): string {
  const labels = content.formattedMessageLabels;

  return [
    `${labels.name}: ${values.name.trim()}`,
    `${labels.email}: ${values.email.trim()}`,
    `${labels.reason}: ${getReasonLabel(content, values.reason)}`,
    "",
    `${labels.message}:`,
    values.message.trim(),
  ].join("\n");
}

export function ContactForm({ content, linkedinHref }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [messages, setMessages] = useState<ContactFormMessages>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [showLinkedInFallback, setShowLinkedInFallback] = useState(false);

  function validateForm(): ContactFormMessages {
    const nextMessages: ContactFormMessages = {};

    if (!values.name.trim()) {
      nextMessages.name = content.validation.name;
    }

    if (!isEmailAddress(values.email.trim())) {
      nextMessages.email = content.validation.email;
    }

    if (!values.reason) {
      nextMessages.reason = content.validation.reason;
    }

    if (!values.message.trim()) {
      nextMessages.message = content.validation.message;
    }

    return nextMessages;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextMessages = validateForm();
    setMessages(nextMessages);
    setNotice(null);
    setShowLinkedInFallback(false);

    if (Object.keys(nextMessages).length > 0) {
      return;
    }

    const openedWindow = window.open("about:blank", "_blank");
    let copiedToClipboard = false;

    if (openedWindow) {
      openedWindow.opener = null;
    }

    try {
      await navigator.clipboard.writeText(formatMessage(content, values));
      copiedToClipboard = true;
      setNotice(content.notice.copied);
    } catch {
      setNotice(content.notice.clipboardUnavailable);
    }

    if (openedWindow) {
      openedWindow.location.href = linkedinHref;
    }

    if (!openedWindow || !copiedToClipboard) {
      setShowLinkedInFallback(true);
    }
  }

  function updateValue(field: keyof ContactFormValues, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setMessages((currentMessages) => ({ ...currentMessages, [field]: undefined }));
  }

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const reasonId = `${formId}-reason`;
  const messageId = `${formId}-message`;

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor={nameId}>
          {content.nameLabel}
          <span className="contact-form__required" aria-hidden="true">
            *
          </span>
        </label>
        <input
          aria-describedby={messages.name ? `${nameId}-message` : undefined}
          aria-invalid={messages.name ? "true" : "false"}
          autoComplete="name"
          id={nameId}
          name="name"
          onChange={(event) => updateValue("name", event.target.value)}
          required
          type="text"
          value={values.name}
        />
        {messages.name ? (
          <p className="contact-form__field-message" id={`${nameId}-message`}>
            {messages.name}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={emailId}>
          {content.emailLabel}
          <span className="contact-form__required" aria-hidden="true">
            *
          </span>
        </label>
        <input
          aria-describedby={messages.email ? `${emailId}-message` : undefined}
          aria-invalid={messages.email ? "true" : "false"}
          autoComplete="email"
          id={emailId}
          inputMode="email"
          name="email"
          onChange={(event) => updateValue("email", event.target.value)}
          required
          type="email"
          value={values.email}
        />
        {messages.email ? (
          <p className="contact-form__field-message" id={`${emailId}-message`}>
            {messages.email}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={reasonId}>
          {content.reasonLabel}
          <span className="contact-form__required" aria-hidden="true">
            *
          </span>
        </label>
        <select
          aria-describedby={messages.reason ? `${reasonId}-message` : undefined}
          aria-invalid={messages.reason ? "true" : "false"}
          id={reasonId}
          name="reason"
          onChange={(event) => updateValue("reason", event.target.value)}
          required
          value={values.reason}
        >
          <option value="">{content.reasonPlaceholder}</option>
          {content.reasons.map((reason) => (
            <option key={reason.value} value={reason.value}>
              {reason.label}
            </option>
          ))}
        </select>
        {messages.reason ? (
          <p className="contact-form__field-message" id={`${reasonId}-message`}>
            {messages.reason}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={messageId}>
          {content.messageLabel}
          <span className="contact-form__required" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          aria-describedby={messages.message ? `${messageId}-message` : undefined}
          aria-invalid={messages.message ? "true" : "false"}
          id={messageId}
          name="message"
          onChange={(event) => updateValue("message", event.target.value)}
          required
          rows={7}
          value={values.message}
        />
        {messages.message ? (
          <p className="contact-form__field-message" id={`${messageId}-message`}>
            {messages.message}
          </p>
        ) : null}
      </div>

      <button className="contact-form__submit" type="submit">
        {content.submitLabel}
      </button>

      <div aria-live="polite" className="contact-form__notice">
        {notice ? <p>{notice}</p> : null}
        {showLinkedInFallback ? (
          <a href={linkedinHref} rel="noopener noreferrer" target="_blank">
            {content.linkedinLabel}
          </a>
        ) : null}
      </div>
    </form>
  );
}
