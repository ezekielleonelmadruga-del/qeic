"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

import { LinkedInIcon } from "@/components/icons";
import { SafeImage } from "@/components/safe-image";
import { useMediaQuery } from "@/hooks/use-media-query";
import { easeOutExpo } from "@/lib/motion";
import { PORTFOLIOS, type Portfolio, type TeamMember } from "@/lib/data/team";
import { cn, initialsFrom } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

/** Mobile/tablet: tap a member to reveal their photo and details inline. */
function MemberDetails({ member, open }: { member: TeamMember; open: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="details"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: easeOutExpo }}
          className="overflow-hidden"
        >
          <div className="flex items-start gap-4 pb-6 pt-1">
            <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
              <SafeImage
                src={member.image}
                alt={member.name}
                fill
                sizes="80px"
                initials={initialsFrom(member.name)}
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">{member.role}</p>
              {member.bio ? (
                <p className="mt-2 text-sm leading-relaxed text-foreground">{member.bio}</p>
              ) : null}
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-qeic-600 dark:text-qeic-300"
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type MemberRowProps = {
  member: TeamMember;
  index: number;
  isDesktop: boolean;
  expanded: boolean;
  onToggle: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

function MemberRow({
  member,
  index,
  isDesktop,
  expanded,
  onToggle,
  onHoverStart,
  onHoverEnd,
}: MemberRowProps) {
  const content = (
    <>
      <div className="flex items-baseline gap-4 sm:gap-6">
        <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-qeic-500">
          {pad(index + 1)}
        </span>
        <span className="font-display text-xl font-bold tracking-tight text-foreground transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-qeic-600 sm:text-2xl dark:group-hover:text-qeic-300">
          {member.name}
        </span>
      </div>
      <div className="flex items-center gap-3 pl-8 sm:pl-0">
        <span className="text-sm text-muted-foreground">{member.role}</span>
        {isDesktop && member.linkedin ? (
          <LinkedInIcon className="size-4 text-muted-foreground transition-colors group-hover:text-qeic-500" />
        ) : null}
        {isDesktop ? null : (
          <Plus
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
              expanded && "rotate-45 text-qeic-500",
            )}
            aria-hidden="true"
          />
        )}
      </div>
    </>
  );

  const rowClass =
    "group flex w-full items-center justify-between gap-4 border-t border-border py-4 text-left transition-colors sm:py-5";

  // Desktop: hovering shows a floating photo; the row links to LinkedIn if set.
  if (isDesktop) {
    return member.linkedin ? (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={rowClass}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        {content}
      </a>
    ) : (
      <div className={rowClass} onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
        {content}
      </div>
    );
  }

  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="group flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        {content}
      </button>
      <MemberDetails member={member} open={expanded} />
    </div>
  );
}

type PortfolioSectionProps = {
  portfolio: Portfolio;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isDesktop: boolean;
  expandedMemberId: string | null;
  onToggleMember: (id: string) => void;
  onHoverStart: (member: TeamMember) => void;
  onHoverEnd: () => void;
};

function PortfolioSection({
  portfolio,
  index,
  isOpen,
  onToggle,
  isDesktop,
  expandedMemberId,
  onToggleMember,
  onHoverStart,
  onHoverEnd,
}: PortfolioSectionProps) {
  const panelId = `portfolio-panel-${portfolio.id}`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full items-center justify-between gap-4 py-6 text-left transition-colors lg:py-8"
        >
          <span className="flex items-baseline gap-4">
            <span
              className={cn(
                "font-display text-2xl font-black tracking-tight transition-colors sm:text-3xl lg:text-4xl",
                isOpen
                  ? "text-qeic-600 dark:text-qeic-300"
                  : "text-foreground group-hover:text-qeic-600 dark:group-hover:text-qeic-300",
              )}
            >
              {portfolio.title}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{pad(index + 1)}</span>
          </span>
          <ChevronDown
            className={cn(
              "size-5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:text-qeic-500",
              isOpen && "rotate-180 text-qeic-500",
            )}
            aria-hidden="true"
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={portfolio.title}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="overflow-hidden"
          >
            <div className="pb-6 lg:pb-8">
              {portfolio.blurb ? (
                <p className="mb-2 max-w-xl text-sm text-muted-foreground">{portfolio.blurb}</p>
              ) : null}
              {portfolio.members.length > 0 ? (
                portfolio.members.map((member, i) => (
                  <MemberRow
                    key={member.id}
                    member={member}
                    index={i}
                    isDesktop={isDesktop}
                    expanded={expandedMemberId === member.id}
                    onToggle={() => onToggleMember(member.id)}
                    onHoverStart={() => onHoverStart(member)}
                    onHoverEnd={onHoverEnd}
                  />
                ))
              ) : (
                <p className="border-t border-border py-5 text-sm text-muted-foreground">
                  Roster coming soon.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const followSpring = { stiffness: 280, damping: 28, mass: 0.5 };

/** Desktop-only photo that trails the cursor while hovering a member row. */
function FloatingPreview({
  member,
  mouseX,
  mouseY,
}: {
  member: TeamMember | null;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const x = useSpring(mouseX, followSpring);
  const y = useSpring(mouseY, followSpring);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          key="floating-preview"
          style={{ x, y }}
          className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.22, ease: easeOutExpo }}
            className="-translate-y-1/2 translate-x-8"
          >
            <div className="relative h-56 w-44 overflow-hidden rounded-md shadow-2xl ring-1 ring-black/10">
              <SafeImage
                src={member.image}
                alt=""
                fill
                sizes="176px"
                initials={initialsFrom(member.name)}
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TeamAccordion() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(PORTFOLIOS.length ? [PORTFOLIOS[0].id] : []),
  );
  const [hovered, setHovered] = useState<TeamMember | null>(null);
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const togglePortfolio = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div
      onPointerMove={(e) => {
        if (e.pointerType === "mouse") {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
      }}
    >
      {PORTFOLIOS.map((portfolio, i) => (
        <PortfolioSection
          key={portfolio.id}
          portfolio={portfolio}
          index={i}
          isOpen={openIds.has(portfolio.id)}
          onToggle={() => togglePortfolio(portfolio.id)}
          isDesktop={isDesktop}
          expandedMemberId={expandedMemberId}
          onToggleMember={(id) => setExpandedMemberId((cur) => (cur === id ? null : id))}
          onHoverStart={(member) => {
            if (isDesktop) setHovered(member);
          }}
          onHoverEnd={() => setHovered(null)}
        />
      ))}
      <FloatingPreview member={hovered} mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
}
