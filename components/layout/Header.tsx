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
          <a href={brandHref} className="text-heading-s font-semibold text-text-primary no-underline">
            {brandLabel}
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`text-body-s no-underline hover:underline underline-offset-[0.2em] ${
                      item.current ? "text-text-primary font-medium" : "text-text-secondary"
                    }`}
                  >
                    {item.label}
                    {item.current ? <span className="sr-only"> (current page)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="/get-a-free-financing-assessment/" variant="primary" className="text-body-s">
              {PRIMARY_CTA_LABEL}
            </Button>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen(true)}
            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-control)] text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            <span className="sr-only">Open menu</span>
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
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
