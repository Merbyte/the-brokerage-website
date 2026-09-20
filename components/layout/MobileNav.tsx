"use client";

import { useEffect, useRef } from "react";
import { Button } from "../ui/Button";
import { CONTACT, PRIMARY_CTA_LABEL } from "@/lib/constants";
import type { NavItem } from "./Header";

interface MobileNavProps {
  id: string;
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

/**
 * Full-screen mobile navigation panel (MASTER.md §5.2). Traps focus while
 * open, restores focus to the trigger on close, closes on Escape, and
 * locks body scroll. Panel transition is opacity/transform only.
 */
export function MobileNav({ id, open, onClose, navItems }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    triggerElementRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerElementRef.current?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      id={id}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Primary"
      hidden={!open}
      className={`md:hidden fixed inset-0 z-50 bg-surface-page flex flex-col transition-opacity duration-[var(--dur-base)] [transition-timing-function:var(--ease-standard)] ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex h-16 items-center justify-end px-4">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-control)] text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          <span className="sr-only">Close menu</span>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav aria-label="Primary" className="flex-1 overflow-y-auto px-6 pb-8">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-border-hairline">
              <a
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className="block py-4 text-heading-s no-underline text-text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4">
          <Button href="/get-a-free-financing-assessment/" variant="primary" fullWidthBelow414>
            {PRIMARY_CTA_LABEL}
          </Button>
          <a href={CONTACT.phoneHref} className="text-body no-underline text-text-primary">
            Call {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body no-underline text-text-primary"
          >
            Message us on WhatsApp (opens in a new tab)
          </a>
          <p className="text-body-s text-text-secondary">{CONTACT.addressLine}</p>
        </div>
      </nav>
    </div>
  );
}
