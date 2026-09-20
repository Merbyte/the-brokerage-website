"use client";

import { useState } from "react";
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
  navItems: NavItem[];
}

/**
 * Header and navigation shell (MASTER.md §5.1). Desktop shows the primary
 * nav inline; below 768px it collapses to a labelled menu trigger that
 * opens the full-screen MobileNav. No page content or final IA is baked
 * in -- navItems is supplied by the caller.
 */
export function Header({ brandLabel, brandHref = "/", navItems }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface-page border-b border-border-hairline">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-surface-raised focus:px-4 focus:py-2 focus:text-text-primary"
      >
        Skip to content
      </a>

      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          <a
            href={brandHref}
            className="inline-flex min-h-12 items-center text-heading-s font-semibold text-text-primary no-underline"
          >
            {brandLabel}
          </a>

          {/*
            The approved primary navigation carries eight destinations
            whose labels need roughly 1700px alongside the wordmark and
            the CTA, so an inline bar does not fit even at 1440px. The
            full navigation therefore lives in the menu panel at every
            width, and the bar keeps only a persistent conversion route.
            Which destinations belong in a desktop bar is a founder
            decision, not one to infer here.
          */}
          <div className="flex items-center gap-2">
            <Button
              href="/get-a-free-financing-assessment/"
              variant="primary"
              className="text-body-s max-md:hidden!"
            >
              {PRIMARY_CTA_LABEL}
            </Button>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-control)] text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              <span className="sr-only">Open menu</span>
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
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
