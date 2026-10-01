import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { SIGNUP_FORM_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Sign up to hear about upcoming Queen's Entrepreneurship and Innovation Committee (QEIC) speaker events, workshops, applications, and opportunities to get involved.",
  alternates: { canonical: "/signup" },
};

export default function SignupPage() {
  return (
    <>
      <PageHeader eyebrow="Sign Up" title="Join the QEIC community.">
        <p>
          Sign up to receive information about upcoming speaker events, workshops, applications,
          and opportunities to get involved with QEIC.
        </p>
      </PageHeader>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              src={`${SIGNUP_FORM_URL}?embedded=true`}
              title="QEIC sign-up form"
              className="h-[70vh] min-h-[560px] w-full"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Having trouble with the form?{" "}
            <a
              href={SIGNUP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-qeic-600 hover:underline dark:text-qeic-300"
            >
              Open the sign-up form in a new tab
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
