import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/page-header";
import { SafeImage } from "@/components/safe-image";
import { EVENTS, PREVIOUS_SPEAKERS } from "@/lib/data/events";
import { initialsFrom } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming QEIC speaker events, workshops, panels, and networking nights at Queen's University, plus a look at previous speakers.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHeader eyebrow="Events" title="What we're building this year.">
        <p>
          From founder conversations to hands-on workshops, QEIC events are designed to bring
          students closer to how companies actually get built. Dates and details are confirmed
          closer to each event.
        </p>
      </PageHeader>

      {/* Upcoming */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-qeic-500">Upcoming events</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              This year&apos;s lineup
            </h2>
          </Reveal>

          <div className="mt-12 border-b border-border">
            {EVENTS.map((event, i) => (
              <Reveal key={event.id} className="group relative border-t border-border">
                <article>
                  <span
                    className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-qeic-500 transition-transform duration-300 ease-out group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <div className="grid items-start gap-6 py-10 pl-6 md:grid-cols-[auto_1fr_auto] md:gap-10 md:py-12">
                    <span className="font-display text-4xl font-black tracking-tight text-light-gray transition-colors duration-300 group-hover:text-qeic-500 md:text-5xl dark:text-dark-gray">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="eyebrow text-qeic-500">{event.category}</p>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {event.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                    <div className="md:pt-3 md:text-right">
                      {event.date ? (
                        <p className="font-display text-lg font-bold tracking-tight text-foreground">
                          {event.date}
                        </p>
                      ) : null}
                      <p className="mt-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                        {event.status}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Previous speakers */}
      <section className="border-t border-border bg-off-white dark:bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-qeic-500">Previous Speakers</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Voices we hosted in 2026
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Founders and leaders who have shared their stories with the QEIC community.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {PREVIOUS_SPEAKERS.map((speaker, i) => (
              <Reveal key={speaker.id} delay={(i % 4) * 0.06}>
                <article className="group relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-muted">
                    <SafeImage
                      src={speaker.image}
                      alt={`${speaker.name}, past QEIC speaker`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      initials={initialsFrom(speaker.name)}
                      className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                  </div>
                  <span
                    className="mt-4 block h-px w-full origin-left scale-x-0 bg-qeic-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <div className="mt-4">
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                      {speaker.name}
                    </h3>
                    <p className="mt-2 font-mono text-xs tracking-wide text-qeic-500">
                      {speaker.event}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
