import { ArrowRight, ArrowUpRight, Lightbulb, Mic, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { EVENTS } from "@/lib/data/events";

const pillars = [
  {
    Icon: Mic,
    title: "Founder Access",
    body: "Direct conversations with entrepreneurs, operators, and industry leaders.",
  },
  {
    Icon: Lightbulb,
    title: "Practical Learning",
    body: "Events that convert broad ideas into useful, applicable insight.",
  },
  {
    Icon: Users,
    title: "Student Community",
    body: "A place for ambitious students to connect, collaborate, and build.",
  },
];

const arrowClass =
  "size-4 transition-transform duration-200 ease-out group-hover/button:translate-x-0.5";

export default function HomePage() {
  const featured = EVENTS.filter((e) => e.featured);

  return (
    <>
      {/* Hero */}
      <section
        aria-label="QEIC introduction"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal"
      >
        <Image
          src="/images/home/qeic-hero-background.jpg"
          alt="Smith School of Business at Queen's University"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/85" />
        <div className="relative z-10 flex flex-col items-center px-6 pt-20 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">Queen&apos;s Entrepreneurship</span>
            <span className="block text-[#1C7FAC]">&amp; Innovation Committee</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            Connecting ambitious students with the founders, operators, and ideas shaping what
            comes next.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/events" className={buttonVariants({ variant: "inverse", size: "lg" })}>
              Explore Our Events
              <ArrowRight className={arrowClass} aria-hidden="true" />
            </Link>
            <Link
              href="/team"
              className={buttonVariants({ variant: "inverse-outline", size: "lg" })}
            >
              Meet the Team
              <ArrowRight className={arrowClass} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-qeic-700">Who we are</p>
            <p className="mt-6 font-display text-2xl leading-snug font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              QEIC is a student-led platform for entrepreneurship, innovation, and meaningful
              connection. We create experiences that bring students closer to founders, emerging
              industries, practical ideas, and the people building what comes next.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {pillars.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="flex h-full flex-col bg-card p-8">
                  <Icon className="size-6 text-qeic-700" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured events */}
      <section className="border-b border-border bg-off-white dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-qeic-700">What&apos;s next</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Featured events
              </h2>
            </div>
            <Link href="/events" className="inline-flex">
              <span className="group/text inline-flex items-center gap-1 font-semibold text-qeic-600 dark:text-qeic-300">
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-out group-hover/text:bg-[length:100%_1px]">
                  See all events
                </span>
                <ArrowRight
                  className="size-3.5 transition-transform duration-200 ease-out group-hover/text:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>

          <div className="mt-14 divide-y divide-border border-t border-border">
            {featured.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.06}>
                <Link
                  href="/events"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-7 transition-colors sm:gap-8"
                >
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="eyebrow text-qeic-700">{event.category}</p>
                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-qeic-700 sm:text-2xl dark:group-hover:text-qeic-300">
                      {event.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="size-5 text-muted-foreground transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-qeic-700"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-qeic-700 text-white dark:bg-qeic-900">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow text-qeic-300">Get involved</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-3xl font-black tracking-tight sm:text-5xl">
              Come build something with us this year.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/80">
              Attend an event, meet a founder, or join the QEIC community. There&apos;s a place
              here for every ambitious student at Queen&apos;s.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/signup" className={buttonVariants({ variant: "inverse", size: "lg" })}>
                Join QEIC
                <ArrowRight className={arrowClass} aria-hidden="true" />
              </Link>
              <Link
                href="/events"
                className={buttonVariants({ variant: "inverse-outline", size: "lg" })}
              >
                Explore Our Events
                <ArrowRight className={arrowClass} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
