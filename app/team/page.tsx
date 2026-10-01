import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { TeamAccordion } from "@/components/team/team-accordion";
import { PORTFOLIOS } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the students behind the Queen's Entrepreneurship and Innovation Committee (QEIC), organized by portfolio, from Co-Chairs to Logistics.",
  alternates: { canonical: "/team" },
};

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

export default function TeamPage() {
  const count = NUMBER_WORDS[PORTFOLIOS.length] ?? String(PORTFOLIOS.length);

  return (
    <>
      <PageHeader eyebrow="Our team" title="The students behind QEIC.">
        <p>
          QEIC is run by students across {count} portfolios. Expand a portfolio to meet the people
          who make it happen.
        </p>
      </PageHeader>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <TeamAccordion />
        </div>
      </section>
    </>
  );
}
