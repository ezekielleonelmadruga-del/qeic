"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Transparent over the home hero until the user scrolls.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const primary = NAV_ITEMS.find((item) => item.primary);
  const links = NAV_ITEMS.filter((item) => !item.primary);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
          overHero ? "bg-transparent" : "border-b border-border bg-background/85 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo light={overHero} />

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    overHero
                      ? "text-white/80 hover:text-white"
                      : "text-muted-foreground hover:text-foreground",
                    active && (overHero ? "text-white" : "text-foreground"),
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-0.5 rounded-full",
                        overHero ? "bg-white" : "bg-qeic-700",
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            {primary && (
              <Link
                href={primary.href}
                className={cn(
                  buttonVariants({ variant: overHero ? "inverse" : "default", size: "sm" }),
                  "ml-3",
                )}
              >
                {primary.label}
              </Link>
            )}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md transition-colors lg:hidden focus-visible:ring-2 focus-visible:ring-qeic-400 focus-visible:outline-none",
              overHero ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted",
            )}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
        <ScrollProgress />
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
