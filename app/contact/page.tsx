import { ArrowUpRight, Mail } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, LINKEDIN_URL, QEIC_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Queen's Entrepreneurship and Innovation Committee (QEIC) about events, speaking, collaborations, or getting involved.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { href: INSTAGRAM_URL, label: "Instagram", value: INSTAGRAM_HANDLE, Icon: InstagramIcon },
  { href: LINKEDIN_URL, label: "LinkedIn", value: "QEIC", Icon: LinkedInIcon },
  { href: `mailto:${QEIC_EMAIL}`, label: "Email", value: QEIC_EMAIL, Icon: Mail },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch.">
        <p>
          Interested in attending an event, speaking with QEIC, collaborating with the committee,
          or learning more about what we do? Reach out through one of the channels below.
        </p>
      </PageHeader>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <h2 className="eyebrow text-qeic-500">Reach us directly</h2>
            <div className="mt-6">
              <ul className="space-y-3">
                {channels.map(({ href, label, value, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-md border border-border px-4 py-3 transition-colors hover:border-qeic-400 hover:bg-qeic-50 dark:hover:bg-qeic-900/40"
                    >
                      <span className="flex items-center gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border bg-card text-qeic-500">
                          <Icon className="size-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">
                            {label}
                          </span>
                          <span className="block truncate text-sm text-muted-foreground">
                            {value}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-qeic-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="eyebrow text-qeic-500">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
