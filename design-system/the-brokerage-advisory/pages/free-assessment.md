# Free Assessment — Page Override

**URL** `/get-a-free-financing-assessment/` · **Archetype** Low-friction contact conversion · Inherits `MASTER.md` and `design.md`

## Page goal
Complete the enquiry. Nothing on this page exists for any other reason.

## Primary visitor
Someone who has decided to make contact. They have already been persuaded; the page's only job is to avoid losing them.

## Intent
Transactional. Every element that is not the form is friction.

## Page archetype
**Low-friction contact conversion.** The most deliberately sparse page on the site.

## Primary visual mechanism
A **single-column form with nothing competing**. No hero, no narrative, no cross-links beyond the header and footer, no secondary offers.

## Section order
1. Header
2. **H1 "Get a Free Financing Assessment" + the approved two-sentence intro** — no eyebrow, no hero band.
3. **The form** — name, email, phone number, message. Consent copy and disclaimer adjacent to the submit control.
4. **Direct contact alternatives** — phone, WhatsApp, email, for visitors who would rather not use a form.
5. Footer

## CTA placement
The form is the CTA. The header CTA is suppressed on this page or rendered inert — linking to the current page is a dead control.

## Mobile-specific behaviour
Single column at every width. Inputs minimum 17px and 48px tall. Submit full width below 414px, label on one line. **Disclaimer adjacent to submit and legible without scrolling.** Direct contact alternatives reachable without returning to the header.

## Components used
Header · Mobile nav · Form fields · Validation messages · Consent and disclaimer block · Contact and WhatsApp controls · Footer · Buttons

## Components intentionally not used
Hero band · Problem-set cards · Service-pathway index · Timeline · Route-comparison table · FAQ accordion · Calculator · CTA band · Photography · Any cross-sell or related-content module

## SEO / AEO structure
Single H1 matching the CTA wording exactly. Minimal content by design. Title direction: *Get a Free Financing Assessment | The Brokerage Advisory*. No FAQ schema. Thin content is correct here and should not be padded for SEO.

## Claim / compliance safeguards
**Exactly four fields — name, email, phone number, message.** No company, amount, industry, purpose or qualification fields. Approved consent copy and the approved disclaimer, both at body size adjacent to submit. Approved success and error copy verbatim, error state including the direct-contact fallback. **No message text or PII to GA4 or any third-party analytics.** Server-side validation, honeypot or CAPTCHA, rate limiting, sanitisation, configurable destination via environment variable.

## Placeholder status
None visible. The lead destination remains an environment-variable placeholder and is a launch blocker tracked outside the page.

## Acceptance criteria
- [ ] Exactly four fields
- [ ] Persistent visible labels, never placeholder-only
- [ ] Consent and disclaimer adjacent to submit, at body size
- [ ] Errors announced to assistive technology and never colour-only
- [ ] Success and error copy verbatim, error includes direct-contact fallback
- [ ] No analytics receive message text or PII
- [ ] Submit label on one line at 320px
- [ ] Header CTA suppressed or inert
