import { Container } from "./Container";
import { CONTACT, LEGAL_LINKS } from "@/lib/constants";
import type { NavItem } from "./Header";

interface FooterProps {
  brandLabel: string;
  navItems: NavItem[];
}

/**
 * Footer (MASTER.md §5.19). Grouped by purpose with real headings rather
 * than the generic four-columns-of-links pattern. Carries full NAP, the
 * walk-in note and legal placeholder links. No invented opening hours.
 */
export function Footer({ brandLabel, navItems }: FooterProps) {
  return (
    <footer data-surface="dark" className="bg-surface-secondary text-text-primary">
      <Container size="content" className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1.5fr]">
          <div>
            <p className="text-heading-s font-semibold">{brandLabel}</p>
            <p className="mt-3 max-w-prose text-body-s text-text-secondary">
              Independent financing advisory. {CONTACT.walkInNote}
            </p>
          </div>

          <div>
            <h2 className="text-label text-text-secondary">Navigate</h2>
            <nav aria-label="Footer">
              <ul className="mt-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-body-s no-underline hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-label text-text-secondary">Contact</h2>
            <address className="mt-4 flex flex-col gap-2 not-italic text-body-s">
              <a href={CONTACT.phoneHref} className="no-underline hover:underline font-figures">
                Call {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:underline"
              >
                Message us on WhatsApp (opens in a new tab)
              </a>
              <a href={`mailto:${CONTACT.email}`} className="no-underline hover:underline">
                {CONTACT.email}
              </a>
              <span>{CONTACT.addressLine}</span>
              <span className="text-text-secondary">{CONTACT.walkInNote}</span>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-hairline pt-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-legal no-underline hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-legal text-text-secondary">
            © {new Date().getFullYear()} {brandLabel}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
