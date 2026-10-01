"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { QEIC_EMAIL } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) errors.message = "Please write a message.";
  return errors;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * There's no backend: on submit this validates, then opens the visitor's
 * email app with a pre-filled message to QEIC_EMAIL.
 */
export function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opening">("idle");
  const configured = !QEIC_EMAIL.startsWith("INSERT_");

  const update =
    (key: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const inputClass = (error?: string) =>
    cn(
      "w-full rounded-md border bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-qeic-500 focus:outline-none focus:ring-2 focus:ring-qeic-400/40",
      error ? "border-destructive" : "border-input",
    );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
    window.location.href = `mailto:${QEIC_EMAIL}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opening");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {!configured && (
        <p className="rounded-md border border-input bg-muted px-4 py-3 text-sm text-muted-foreground">
          Note: the contact email hasn&apos;t been configured yet (
          <code className="font-mono text-xs">QEIC_EMAIL</code> in site-config). Until then, please
          use the social links.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(errors.name)}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <Field id="subject" label="Subject" error={errors.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={update("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={inputClass(errors.subject)}
        />
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass(errors.message)}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={!configured}>
          Send message
        </Button>
        {status === "opening" && (
          <p role="status" className="text-sm text-muted-foreground">
            Opening your email app…
          </p>
        )}
      </div>
    </form>
  );
}
