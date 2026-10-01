import { Mail } from "lucide-react";
import Link from "next/link";

import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { Logo } from "@/components/layout/logo";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  NAV_ITEMS,
  QEIC_EMAIL,
  SITE_NAME,
} from "@/lib/site-config";

const socials = [
  { href: INSTAGRAM_URL, label: "Instagram", Icon: InstagramIcon },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${QEIC_EMAIL}`, label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-off-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo light className="[&_img]:h-8" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-off-white/70">
            {SITE_NAME}.
            <br />
            Built by students. Driven by ideas.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-off-white/80 transition-colors hover:border-qeic-400 hover:bg-white/5 hover:text-white"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-off-white/50">Explore</h2>
          <ul className="mt-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-off-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-off-white/50">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-off-white/70">
            <li>Queen&apos;s University</li>
            <li>Kingston, Ontario</li>
            <li>
              <a href={`mailto:${QEIC_EMAIL}`} className="transition-colors hover:text-white">
                {QEIC_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-xs text-off-white/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}.
          </p>
          <p>QEIC is a student-led organization at Queen&apos;s University.</p>
        </div>
      </div>
    </footer>
  );
}
