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
 * Full-screen mobile navigation (MASTER.md §6.1). Traps focus while open,
 * restores focus to the trigger on close, closes on Escape and locks body
 * scroll. The panel is obsidian like the bar it comes from, so opening the
 * menu does not change the brand surface.
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
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
      aria-label="Site navigation"
      hidden={!open}
      data-surface="dark"
      className="fixed inset-0 z-50 flex flex-col bg-obsidian-900"
    >
      <div className="flex h-16 items-center justify-end px-5">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="inline-flex size-12 items-center justify-center text-text-primary"
        >
          <span className="sr-only">Close menu</span>
          <span aria-hidden="true" className="relative block size-5">
            <span className="absolute top-1/2 left-0 block h-px w-full rotate-45 bg-current" />
            <span className="absolute top-1/2 left-0 block h-px w-full -rotate-45 bg-current" />
          </span>
        </button>
      </div>

      <nav aria-label="Primary" className="flex-1 overflow-y-auto px-5 pb-10">
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className="border-t border-border-hairline">
              <a
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className="text-heading-sm flex min-h-14 items-center py-3 text-text-primary no-underline aria-[current=page]:text-text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button
            href="/get-a-free-financing-assessment/"
            variant="primary"
            fullWidthBelow414
            className="max-[413px]:px-4! max-[374px]:text-[15px]!"
          >
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-border-hairline pt-6">
          <a
            href={CONTACT.phoneHref}
            className="text-body font-figures inline-flex min-h-12 items-center text-text-primary no-underline"
          >
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body inline-flex min-h-12 items-center text-text-primary no-underline"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-body inline-flex min-h-12 items-center text-text-primary no-underline"
          >
            {CONTACT.email}
          </a>
          <p className="text-body-sm mt-2 text-text-secondary">
            {CONTACT.addressLine}
          </p>
        </div>
      </nav>
    </div>
  );
}
