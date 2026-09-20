# CLAUDE.md — The Brokerage Advisory Website

## Purpose

A premium, credible, high-converting marketing website for **The Brokerage Advisory**, a Singapore-based independent financing advisory that helps businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.

Core principle: **diagnose the financing situation first, then determine the appropriate route.**

Launch scope: marketing site, simple lead form, repayment calculator, SEO/AEO/local SEO foundations. Out of scope: booking system, client portal, AI chat, document upload, live lender matching, public fee disclosure.

Priority audience: established, owner-led construction and engineering businesses in Singapore — a priority pathway, not an exclusion. Business, trade, property, project and complex financing must stay discoverable.

## Canonical domain

`https://thebrokerage.sg/`

Only canonical-domain URLs appear in sitemaps, internal links, structured data and social metadata. `thebrokerageadvisorysg.com` is consolidated and 301-redirected to the closest matching canonical URL — never blanket-redirected to the homepage.

## Primary CTA

**Get a Free Financing Assessment** — worded exactly this way wherever the primary CTA appears.

Approved secondary/contextual CTAs: See How We Work, Discuss Your Situation, Discuss Your Project, Discuss Cash Flow, Speak to a Specialist, Contact Us, Submit Enquiry.

## Contact details (exact, consistent everywhere)

- Phone: `+65 8011 8194`
- WhatsApp: same number — `https://wa.me/6580118194`
- Email: `admin@thebrokerage-advisory.com`
- Address: `31A Lowland Road, Singapore 547424`

Use identical NAP formatting in header, footer, Contact page and schema. The office address may be publicly displayed and walk-in visits are allowed. Do not invent opening hours. Until official hours are supplied, use: "Walk-in visits are welcome by arrangement." WhatsApp must never be the only conversion route.

## Assessment form

Heading: **Get a Free Financing Assessment**. Required fields, and only these four:

1. Name
2. Email
3. Phone number
4. Message

Must include the consent copy and this disclaimer:

> A free financing assessment is an initial discussion only. It is not a financing approval, offer, commitment or guarantee. Any financing route depends on the information provided and the relevant financier's assessment.

Technical: server-side validation, honeypot/CAPTCHA, rate limiting, HTML sanitisation, configurable destination via environment variable (never hardcoded credentials), failure alerting. Never send submitted message text or PII to GA4 or any third-party analytics.

## Claim restrictions

Never publish:

- Guaranteed approval, financing, rates, savings, terms, timing or outcomes
- "No deal too complex"
- Success-rate or approval-rate figures; "S$100M+ placed"
- "Ex-banker team" (until founder-approved bios and proof exist)
- Named clients, lender partners, lender logos or testimonials without permission
- Specific rates, LTVs, loan limits, tenures or eligibility criteria without a dated, approved review
- Invented case studies, credentials, awards, office hours or team biographies

Approved network wording is exactly: **banks and financiers in our local and overseas network** — no counts, named lenders, "preferred partner" or "best rate" claims.

The company is not a bank, financial institution or licensed moneylender. Final regulatory disclaimer wording is a pre-launch placeholder; do not invent licensing language.

## No public fee disclosure

Do not publish fees, fee models, success fees, "zero upfront fees", commissions or fee ranges. Do not build a fee calculator.

The estimated monthly repayment calculator is required for launch. It is not a fee calculator, quotation, financing offer or approval — it must be illustrative only, use the approved formula and always display the approved calculator disclaimer.

## Calculator disclaimer

The repayment calculator is a planning aid only and must always display, visibly and adjacent to its results:

> This calculator provides an illustrative estimate only. It is not a quotation, financing offer, approval or guarantee. Actual repayment amounts, interest, fees, tenure and availability depend on the relevant financier's assessment and final facility terms.

The formula must be documented and tested. State explicitly whether it is simple interest or reducing-balance amortisation — never blend assumptions ambiguously.

## Calculator launch status

The estimated monthly repayment calculator is required for launch. The following still require confirmation before it ships: the calculation method (simple interest vs. reducing-balance amortisation), the illustrative rate used, documented test cases, an assigned content owner and a review date.

## Documentation authority

Use this authority order:

1. **Business truth / scope:** `docs/master-website-brief.md`
2. **Claims / compliance:** `docs/claims-and-compliance-rules.md`
3. **Current creative direction:** `docs/creative-direction-v2.md`
4. **Current design system:** `design.md` + `design-system/the-brokerage-advisory/MASTER.md` only after they are re-derived from V2
5. **Implementation:** application code

Historical/reference documents do not outrank current project documents.

### Current visual direction

> **Black & Gold — Premium Financial Advisory**
>
> **CHAMBER × WORKS**

The existing application is a superseded V1 visual prototype. Do not treat its current visual tokens, colour balance, typography or component composition as the design specification.

### Skills are opt-in

Do not automatically invoke Claude Code skills. Ordinary Claude Code + current repository documents is the default.

Use a specialist skill only when the task materially benefits from it and the user explicitly requests or approves it for that phase.

A skill recommendation is never a founder decision and may not replace Creative Direction V2 with a different visual direction.

### Current design-system state

`design.md` and `design-system/the-brokerage-advisory/MASTER.md` are reset bridges until the new design system is derived. The old page override files were removed because they belonged to the superseded V1 system.

Do not perform a colour-only patch of the V1 system. Derive the new system from V2.


## Accessibility and SEO

Accessibility: semantic HTML, keyboard navigation, visible focus states, labelled form fields, WCAG-conscious contrast on every final colour pairing, `prefers-reduced-motion` support, and mobile layouts that are designed rather than compressed.

SEO: one H1 per page, logical H2/H3 hierarchy, clean descriptive URLs, unique title and meta description per indexable page, self-referencing canonicals, XML sitemap, robots.txt, useful 404, Open Graph/Twitter metadata, responsive AVIF/WebP images, minimal blocking scripts, strong Core Web Vitals.

Structured data: Organization, ContactPoint, PostalAddress, `areaServed: Singapore`, Service, Article, BreadcrumbList, and LocalBusiness/FAQPage only where the details and content genuinely qualify. Never add fake ratings, reviews, prices, availability or financial-product data.

AEO: lead each information section with a direct answer, use question-based H2s, add concise definitions and reviewed dates on changing financial content.

## Working rules

**Read the current docs before major work.** For design, copy or build tasks, read:
- `docs/master-website-brief.md`
- `docs/claims-and-compliance-rules.md`
- `docs/creative-direction-v2.md`

Read `docs/README.md` when the documentation structure is unclear. Read historical reference studies only when their research/provenance is specifically needed.

**Source of truth vs implementation.** Business facts and claims come from the master brief and claims/compliance rules. Creative decisions come from Creative Direction V2 until a new design system is derived.

**Conflict resolution.**
1. Explicit founder decisions override older source material.
2. Current master brief overrides earlier briefs.
3. Claims/compliance rules override design or implementation preferences.
4. Creative Direction V2 governs visual interpretation.
5. If a conflict still cannot be resolved, flag it instead of silently choosing.

**Never copy the references.** References communicate quality and principles only. Do not reproduce layout, copy, photography, logos, exact colours, components, icons, motion, code, page hierarchy or financial claims.

**Ask before adding packages or changing architecture.** No new dependencies, frameworks, hosting/CMS choices, data models or structural refactors without confirmation.

**Small, reviewable commits.** One logical change per commit, with a clear message.

## Pre-launch placeholders (track, never silently resolve)

Regulatory disclaimer, privacy policy, terms and conditions, cookie/consent copy, lead destination email/CRM, logo and licensed imagery, team bios and case studies (if added), office hours (only if the business wants them published).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
