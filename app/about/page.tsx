import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Queen's Entrepreneurship and Innovation Committee (QEIC) is a student-led organization making entrepreneurship accessible, practical, and engaging at Queen's University.",
  alternates: { canonical: "/about" },
};

const offerings = [
  {
    title: "Speaker Events",
    body: "We host founders, executives, innovators, and industry leaders who provide honest insight into building, operating, and growing organizations.",
  },
  {
    title: "Practical Workshops",
    body: "We create interactive experiences that help students develop skills related to ideation, strategy, leadership, innovation, and execution.",
  },
  {
    title: "Community Building",
    body: "We connect students who are interested in entrepreneurship, emerging industries, creative problem-solving, and building new ventures.",
  },
  {
    title: "Career and Founder Exposure",
    body: "We expose students to entrepreneurial career paths and provide opportunities to learn directly from people working across startups, investing, innovation, and business development.",
  },
];

const benefits = [
  "Direct exposure to founders, operators, and investors.",
  "Practical skills you can apply to real ideas and ventures.",
  "A community of ambitious, like-minded students.",
  "Confidence to pursue entrepreneurial paths after Queen's.",
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About QEIC"
        title="Making entrepreneurship accessible, practical, and engaging."
      >
        <p>
          The Queen&apos;s Entrepreneurship and Innovation Committee is a student-led organization
          focused on making entrepreneurship more accessible, practical, and engaging for the
          Queen&apos;s University community.
        </p>
        <p className="mt-4">
          QEIC brings students together with founders, operators, investors, creators, and
          emerging leaders through speaker events, workshops, discussions, and community
          experiences. Our goal is to help students move beyond abstract ideas and understand how
          companies, products, and opportunities are actually built.
        </p>
      </PageHeader>

      {/* Mission */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-qeic-500">Our mission</p>
              <div className="mt-6 h-px w-16 bg-qeic-500" aria-hidden="true" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-display text-2xl leading-snug font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Our mission is to create meaningful access to entrepreneurial thinking, innovative
                people, and practical experiences that help students develop the confidence to
                pursue ambitious ideas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-border bg-off-white dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-qeic-500">What we do</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Four ways we bring entrepreneurship closer.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {offerings.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex h-full flex-col bg-card p-8 lg:p-10">
                  <span className="font-mono text-sm text-qeic-500">{pad(i + 1)}</span>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow text-qeic-500">Who it&apos;s for</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What students gain from taking part.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                QEIC serves every student at Queen&apos;s who is curious about building, whether
                you already have a venture in mind or simply want to understand how ideas become
                companies.
              </p>
              <div className="mt-8">
                <Link href="/signup" className={buttonVariants()}>
                  Join the community
                  <ArrowRight
                    className="size-4 transition-transform duration-200 ease-out group-hover/button:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="divide-y divide-border border-y border-border">
                {benefits.map((benefit, i) => (
                  <li key={benefit} className="flex items-baseline gap-5 py-5">
                    <span className="font-mono text-sm text-qeic-500">{pad(i + 1)}</span>
                    <span className="text-base leading-relaxed text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
