import { Container } from "./Container";
import { CONTACT, LEGAL_LINKS } from "@/lib/constants";
import type { NavItem } from "./Header";

interface FooterProps {
  brandLabel: string;
  navItems: NavItem[];
}

const LINK_CLASS =
  "text-body-sm inline-flex min-h-11 items-center text-text-primary no-underline " +
  "underline-offset-[0.35em] hover:underline";

/**
 * Footer (pages/home.md §15). Grouped by purpose under real headings rather
 * than the generic four-columns-of-links pattern. It sits on rich black so it
 * reads as the base of the page rather than as a repeat of the closing band.
 *
 * Carries the full NAP and the walk-in note. No opening hours are invented.
 */
export function Footer({ brandLabel, navItems }: FooterProps) {
  return (
    <footer data-surface="dark" className="bg-obsidian-800">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-10">
          <div>
            <p className="text-heading-sm font-semibold text-text-primary">
              {brandLabel}
            </p>
            <p className="text-body-sm measure mt-4 text-text-secondary">
              An independent Singapore financing advisory. We help businesses
              understand their financing situation before deciding where and how
              to approach banks, financiers or capital providers.
            </p>
          </div>

          <div>
            <h2 className="text-label text-text-secondary">Navigate</h2>
            <nav aria-label="Footer">
              <ul className="mt-4 flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={LINK_CLASS}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-label text-text-secondary">Contact</h2>
            <address className="mt-4 flex flex-col not-italic">
              <a
                href={CONTACT.phoneHref}
                className={`${LINK_CLASS} font-figures`}
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASS}
              >
                WhatsApp (opens in a new tab)
              </a>
              <a href={`mailto:${CONTACT.email}`} className={LINK_CLASS}>
                {CONTACT.email}
              </a>
              <span className="text-body-sm mt-3 text-text-primary">
                {CONTACT.addressLine}
              </span>
              <span className="text-body-sm mt-1 text-text-secondary">
                {CONTACT.walkInNote}
              </span>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border-hairline pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-8">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={LINK_CLASS}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-body-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {brandLabel}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
