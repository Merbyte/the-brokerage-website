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

## Skill orchestration hierarchy

Order of authority — higher entries always win:

1. `docs/master-website-brief.md` and the compliance/claims boundaries
2. The project design system (`design-system/the-brokerage-advisory/`)
3. UI UX Pro Max — responsive UX, components, accessibility
4. Taste Skill — premium editorial art direction
5. Frontend design skill — technical implementation
6. Hallmark and Anti-Slop — audit/review gates
7. Design Motion Principles — restrained motion, only after layout is stable

Visual settings: design variance 5/10, motion intensity 3/10, visual density 4/10.

Guardrails: no skill may override verified business facts, introduce financial claims, data, testimonials or trust logos not approved in the brief, or replace the calculator disclaimer.

## Accessibility and SEO

Accessibility: semantic HTML, keyboard navigation, visible focus states, labelled form fields, WCAG-conscious contrast on every final colour pairing, `prefers-reduced-motion` support, and mobile layouts that are designed rather than compressed.

SEO: one H1 per page, logical H2/H3 hierarchy, clean descriptive URLs, unique title and meta description per indexable page, self-referencing canonicals, XML sitemap, robots.txt, useful 404, Open Graph/Twitter metadata, responsive AVIF/WebP images, minimal blocking scripts, strong Core Web Vitals.

Structured data: Organization, ContactPoint, PostalAddress, `areaServed: Singapore`, Service, Article, BreadcrumbList, and LocalBusiness/FAQPage only where the details and content genuinely qualify. Never add fake ratings, reviews, prices, availability or financial-product data.

AEO: lead each information section with a direct answer, use question-based H2s, add concise definitions and reviewed dates on changing financial content.

## Working rules

**Read the docs before major work.** Before any design, copy or build task, read:

- `docs/master-website-brief.md`
- `docs/claims-and-compliance-rules.md`
- `docs/design-inspiration.md`

**Source of truth vs. operational instructions.** `docs/master-website-brief.md` and `docs/claims-and-compliance-rules.md` are the source of truth for business facts, scope, content and claims. This CLAUDE.md provides operational instructions for how Claude should work in this repository — it does not override business facts.

**Conflict resolution.** If documents conflict, resolve in this order:

1. Explicit founder decisions override older source material.
2. The current master brief overrides earlier briefs.
3. Claims/compliance rules override design or implementation preferences.
4. If a conflict does not resolve cleanly under 1–3, flag it to the user instead of silently choosing.

**Small, reviewable commits.** One logical change per commit, with a clear message. No sweeping multi-page rewrites in a single commit; keep diffs readable by a non-developer reviewer.

**Never copy the references.** The design references communicate quality and composition only. Do not reproduce any reference's layout, copy, photography, logos, exact colour values, components, icons, motion, code, page hierarchy or financial claims. Every build output must be original.

**Ask before adding packages or changing architecture.** No new dependencies, frameworks, hosting/CMS choices, data models or structural refactors without confirming first. Intended stack: Next.js, TypeScript, token-driven Tailwind (or equivalent), Git-based or headless content, server-side form route.

## Pre-launch placeholders (track, never silently resolve)

Regulatory disclaimer, privacy policy, terms and conditions, cookie/consent copy, lead destination email/CRM, logo and licensed imagery, team bios and case studies (if added), office hours (only if the business wants them published).
