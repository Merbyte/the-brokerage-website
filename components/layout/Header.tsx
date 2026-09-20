"use client";

import { useRef, useState } from "react";

import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { Button } from "../ui/Button";
import { PRIMARY_CTA_LABEL } from "@/lib/constants";

export interface NavItem {
  label: string;
  href: string;
  current?: boolean;
}

interface HeaderProps {
  brandLabel: string;
  brandHref?: string;
  /** Full information architecture, used by the mobile panel. */
  navItems: NavItem[];
  /** The five financing routes, grouped under one desktop disclosure. */
  routeItems: NavItem[];
  /** Destinations shown inline on desktop beside the routes disclosure. */
  desktopItems: NavItem[];
}

const NAV_LINK_CLASS =
  "inline-flex min-h-12 items-center text-body-sm font-medium text-text-primary no-underline " +
  "border-b-2 border-transparent transition-[border-color] duration-[var(--dur-fast)] " +
  "[transition-timing-function:var(--ease-standard)] hover:border-border-strong " +
  "aria-[current=page]:border-accent";

/**
 * Header (pages/home.md §4). Obsidian at every width, so the brand surface is
 * the first thing on the page and the bar reads as architecture rather than
 * as app chrome.
 *
 * The approved information architecture carries nine destinations, which will
 * not fit one desktop bar beside a wordmark and a seven-word CTA. Rather than
 * fall back to a hamburger at every width, the five financing routes are
 * grouped under one disclosure and the remaining destinations stay inline.
 * Gold marks the current page and the primary action, nothing else.
 */
export function Header({
  brandLabel,
  brandHref = "/",
  navItems,
  routeItems,
  desktopItems,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);
  const routesWrapperRef = useRef<HTMLLIElement>(null);

  return (
    <header
      data-surface="dark"
      className="sticky top-0 z-40 border-b border-border-hairline bg-obsidian-900"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-surface-raised focus:px-4 focus:py-2 focus:text-text-primary"
      >
        Skip to content
      </a>

      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <a
            href={brandHref}
            className="text-heading-sm inline-flex min-h-12 items-center font-semibold tracking-tight text-text-primary no-underline"
          >
            {brandLabel}
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li
                ref={routesWrapperRef}
                className="relative"
                onBlur={(event) => {
                  if (
                    !routesWrapperRef.current?.contains(
                      event.relatedTarget as Node | null,
                    )
                  ) {
                    setRoutesOpen(false);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setRoutesOpen(false);
                }}
              >
                <button
                  type="button"
                  aria-expanded={routesOpen}
                  aria-controls="financing-routes"
                  onClick={() => setRoutesOpen((open) => !open)}
                  className={`${NAV_LINK_CLASS} cursor-pointer gap-2`}
                >
                  Financing
                  <span
                    aria-hidden="true"
                    className={`block size-1.5 border-r border-b border-current transition-transform duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] ${
                      routesOpen ? "-translate-y-px rotate-[225deg]" : "rotate-45"
                    }`}
                  />
                </button>

                <ul
                  id="financing-routes"
                  hidden={!routesOpen}
                  className="absolute top-full left-0 w-80 border border-border-hairline bg-surface-raised py-2"
                >
                  {routeItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className="text-body-sm flex min-h-12 items-center px-5 text-text-primary no-underline transition-colors duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] hover:bg-[color-mix(in_srgb,var(--white)_8%,transparent)] aria-[current=page]:text-text-accent"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              {desktopItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={NAV_LINK_CLASS}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/get-a-free-financing-assessment/"
              variant="primary"
              className="max-md:hidden! text-body-sm! min-h-11! lg:min-h-11!"
            >
              {PRIMARY_CTA_LABEL}
            </Button>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-12 items-center justify-center text-text-primary lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true" className="block w-6">
                <span className="block h-px w-full bg-current" />
                <span className="mt-[7px] block h-px w-full bg-current" />
                <span className="mt-[7px] block h-px w-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </Container>

      <MobileNav
        id="mobile-nav-panel"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}
