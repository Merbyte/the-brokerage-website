import { AssessmentCta } from "./AssessmentCta";
import { ASSESSMENT_FORM_DISCLAIMER, CONTACT } from "@/lib/constants";

const CONTACT_LINK_CLASS =
  "text-body inline-flex min-h-12 items-center font-semibold text-text-primary underline " +
  "decoration-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] underline-offset-[0.35em] " +
  "transition-[text-decoration-color] duration-[var(--dur-fast)] " +
  "[transition-timing-function:var(--ease-standard)] hover:decoration-[var(--text-primary)]";

/**
 * Final CTA (pages/home.md §14). The close returns to obsidian and to the
 * editorial voice for the last time.
 *
 * The form is not the only way to reach the firm, so phone, WhatsApp and
 * email sit beside it as equal routes. The assessment disclaimer is set at
 * reading size here rather than shrunk into a footnote.
 */
export function FinalCta() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <h2 className="font-editorial text-display-hero text-balance">
          Have a financing situation that is not straightforward?
        </h2>

        <p className="text-body-lg measure mt-8 text-text-secondary">
          Start with a free initial assessment. We will understand the situation
          first, then discuss the possible next steps.
        </p>

        <div className="mt-10">
          <AssessmentCta />
        </div>
      </div>

      <div className="mt-14 lg:col-span-4 lg:col-start-9 lg:mt-3">
        <div className="border-t border-border-hairline pt-6">
          <h3 className="text-heading-sm text-text-primary">
            Or speak to us directly
          </h3>

          <ul className="mt-4 flex flex-col">
            <li>
              <a
                href={CONTACT.phoneHref}
                className={`${CONTACT_LINK_CLASS} font-figures`}
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={CONTACT_LINK_CLASS}
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className={CONTACT_LINK_CLASS}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <p className="text-disclaimer mt-8 border-t border-border-hairline pt-6 text-text-secondary">
          {ASSESSMENT_FORM_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
