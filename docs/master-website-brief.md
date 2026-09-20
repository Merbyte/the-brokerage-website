# The Brokerage Advisory — Master Website Build Brief V4

**Document purpose:** Single source of truth for Claude Code, designers, developers, copywriters and QA reviewers building the new website.  
**Project:** The Brokerage Advisory premium financing-advisory website  
**Canonical production domain:** `https://thebrokerage.sg/`  
**Secondary domain:** `https://thebrokerageadvisorysg.com/` — consolidate, then redirect to matching canonical URLs  
**Market:** Singapore  
**Primary CTA:** Get a Free Financing Assessment  
**Launch scope:** Premium marketing website, simple lead form, repayment calculator, SEO/AEO/local SEO foundations  
**Not in launch:** Booking system, client portal, AI chat, public document upload, live lender matching, public fee disclosure

---

# 1. Build objective

Build one premium, credible and high-converting website for The Brokerage Advisory. The site must primarily build confidence for prospects who arrive after cold outreach or referral, then convert relevant visitors into direct human contact through a simple free financing-assessment form.

The website must feel like a sophisticated Singapore financing advisory, not a generic consumer-loan lead-generation page, lender website, crypto product, casino, luxury retail brand or SaaS dashboard.

The core commercial principle is:

> **Diagnose the financing situation first, then determine the appropriate route.**

---

# 2. Business facts and approved boundaries

## 2.1 Approved description

> The Brokerage Advisory is a Singapore-based independent financing advisory that helps businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.

## 2.2 Positioning

- Financing advisory and capital-solutions partner.
- Focus on difficult, complex and non-standard financing situations.
- Examples may include multiple entities, unusual collateral, previous rejection, project requirements, trade-cycle pressure or existing facilities that may not fit current needs.
- The company is not a bank, financial institution or licensed moneylender. Final disclaimer wording remains a launch placeholder until founder approval.
- Singapore is the active market.

## 2.3 Priority audience

Primary ICP: established, owner-led construction and engineering businesses in Singapore. This is a priority pathway, not an exclusion rule. The site must also support established businesses with business, trade, property, project and complex financing situations.

## 2.4 Customer problems

1. Growth opportunity or project but insufficient capital/cash flow.
2. Previous bank rejection.
3. Existing financing terms or structure may not fit the business.
4. Timing gap between supplier/project costs and customer receipts.
5. Project mobilisation or performance-bond requirement.

## 2.5 Approved network wording

> **Banks and financiers in our local and overseas network.**

Do not add a number, named lender, “preferred partner” statement, “best rate” assertion or guaranteed lender access without later written approval.

## 2.6 Public fees

Do not publish fees, fee models, success fees, “zero upfront fees,” commissions, fee ranges or fee calculators.

## 2.7 Claims that must not appear

- Guaranteed approval, financing, rates, savings, outcomes or timelines.
- “No deal too complex.”
- Specific success-rate or approval-rate figures.
- S$100M+ financing placed.
- “Ex-banker team” unless later approved with supporting bios.
- Named clients, lender partners, lender logos or testimonials without permission.
- Specific public rate, LTV, amount, tenure or eligibility promises without a verified, dated content owner.
- Invented credentials, awards, office hours, client stories or team biographies.

---

# 3. Contact and conversion requirements

## 3.1 Public contact details

- **Phone:** `+65 8011 8194`
- **WhatsApp:** Same number, WhatsApp-enabled.
- **Email:** `admin@thebrokerage-advisory.com`
- **Office / walk-in address:** `31A Lowland Road, Singapore 547424`

Use consistent formatting in header, footer, Contact page, schema and relevant profiles.

## 3.2 Primary form

### Heading

> Get a Free Financing Assessment

### Intro

> Tell us briefly about your financing situation. Our team will contact you directly to discuss the possible next steps.

### Required fields

- Name
- Email
- Phone number
- Message

### Consent copy placeholder

> By submitting this form, you agree that The Brokerage Advisory may use the information provided to respond to your enquiry. Please review our Privacy Policy.

### Required disclaimer

> A free financing assessment is an initial discussion only. It is not a financing approval, offer, commitment or guarantee. Any financing route depends on the information provided and the relevant financier’s assessment.

### Success state

> Thank you. Your enquiry has been received. A member of The Brokerage Advisory team will contact you directly.

### Error state

> We could not submit your enquiry right now. Please try again or contact us directly at admin@thebrokerage-advisory.com or +65 8011 8194.

## 3.3 Lead routing

- Initially configure the form destination as a secure environment variable placeholder.
- The probable initial destination is founder Gmail, but do not hardcode credentials.
- Architecture must allow later replacement with a CRM or shared inbox.
- Form submissions must be server-side validated, spam-protected, logged safely and monitored.
- Do not place free-text form content in GA4 or other third-party analytics.

## 3.4 WhatsApp CTA

Use `https://wa.me/6580118194` with editable pre-filled copy:

> Hi, I would like to get a free financing assessment.

Track as `whatsapp_click`. Do not make WhatsApp the only conversion route.

---

# 4. Information architecture

## Primary navigation

- Home
- Business Financing
- Trade Financing
- Property Financing
- Project & Private Capital
- Construction & Engineering
- How It Works
- About
- **Get a Free Financing Assessment**

## Launch sitemap

| Page | URL | Purpose | Primary CTA |
|---|---|---|---|
| Home | `/` | Category, trust, problems, process and conversion | Get a Free Financing Assessment |
| Business Financing | `/business-financing/` | Business funding situations | Get a Free Financing Assessment |
| Trade Financing | `/trade-financing/` | AR/AP, invoice and trade-cycle questions | Discuss Your Situation |
| Property Financing | `/property-financing/` | Property-backed routes and considerations | Speak to a Specialist |
| Project & Private Capital | `/project-private-capital/` | Project, contract and complex capital situations | Discuss Your Project |
| Performance Bonds | `/performance-bonds/` | Project bonding-related enquiries | Get a Free Financing Assessment |
| Construction & Engineering | `/construction-engineering-financing/` | Priority ICP pathway | Discuss Your Project |
| How It Works | `/how-it-works/` | Diagnose-first process | Get a Free Financing Assessment |
| About | `/about/` | Philosophy, independent model, credibility | Contact Us |
| FAQ | `/faq/` | Answer objections and queries | Get a Free Financing Assessment |
| Calculator | `/tools/monthly-repayment-calculator/` | Illustrative repayment estimate | Get a Free Financing Assessment |
| Assessment | `/get-a-free-financing-assessment/` | Simple enquiry form | Submit Enquiry |
| Contact | `/contact/` | Office details and direct contact | WhatsApp Us / Call Us |
| Thank You | `/thank-you/` | Post-form confirmation | Contact / Learn More |
| Privacy | `/privacy-policy/` | Placeholder until reviewed | None |
| Terms | `/terms-and-conditions/` | Placeholder until reviewed | None |
| Disclaimer | `/disclaimer/` | Placeholder until final approved wording | None |

## Post-launch phase

**Insights (`/insights/`) is not in launch scope.** It is deferred to a post-launch content phase and is excluded from the launch primary navigation and launch sitemap until at least three approved articles exist. The CMS/content structure (article schema, category taxonomy, URL pattern, reviewed-date field) may be built in advance, but no thin or empty public Insights page ships at launch. Once the three-article threshold is met, add Insights back to primary navigation and the sitemap in a dedicated, reviewable change.

---

# 5. Homepage implementation blueprint

## Section 1 — Header

- Logo placeholder component, easily replaceable.
- Desktop primary navigation.
- Mobile accessible menu.
- Visible primary CTA.
- Telephone and WhatsApp accessible via footer or contact controls; do not overload header.
- Sticky header only if it remains visually calm and does not consume mobile viewport.

## Section 2 — Hero

**Eyebrow:** Independent Financing Advisory in Singapore  
**H1:** When financing gets complicated, start with the right diagnosis.  
**Supporting copy:** We help businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.  
**Primary CTA:** Get a Free Financing Assessment  
**Secondary CTA:** See How We Work  
**Trust note:** Assessment first. Clear next steps. No guarantee of approval.

**Visual direction:** editorial image or refined abstract structured-finance visual; priority imagery includes Singapore commercial/project settings, construction/engineering environments and real advisory context. Avoid generic handshakes, stock call-centre scenes, fake dashboards and lender logos.

## Section 3 — Hero trust line

**Not a standalone trust-strip section or band.** A single compact line, part of the hero itself, directly beneath the hero CTAs. Use approved qualitative proof only, condensed to one line, for example:

> Independent, diagnosis-first advisory. Banks and financiers in our local and overseas network.

## Section 4 — Problems we help assess

Heading: **Not every financing situation is solved by another application.**

Four cards:

- Growth opportunity: new project, expansion or facility pressure.
- Bank rejection: understand the situation before applying again.
- Existing financing: terms or structure may no longer fit.
- Complex situation: multiple entities, collateral or non-standard requirements.

Each card links to a relevant service page.

## Section 5 — How the advisory process works

Ordered process:

1. Fact-find.
2. Review relevant information.
3. Diagnose the situation.
4. Discuss possible routes.
5. Where appropriate, approach relevant financiers.
6. Communicate next steps clearly.

Include language that this process does not guarantee financing.

## Section 6 — Financing pathways

**Typographic route index, not cards.** A single-column list separated by hairline rules — no enclosed card containers, borders-as-boxes or grid of tiles.

- Business Financing
- Trade Financing
- Property Financing
- Project & Private Capital
- Performance Bonds

Each entry has: route name as heading, one-sentence situation, appropriate-use example, “Explore” link.

## Section 7 — Construction and engineering pathway

**Heading:** Built for businesses where project growth moves faster than cash flow.  
**Copy:** From project mobilisation and working-capital pressure to performance bonds and existing facility constraints, we help construction and engineering businesses assess the route before approaching a financier.  
**CTA:** Discuss Your Project.

## Section 8 — Why work with an advisory

Use a two-column section inspired by the approved screenshot direction, but with original design and compliance-safe copy.

**Heading:** Going directly to a bank is not always the same as choosing the right route.

**Direct approach may involve:**

- Starting with a familiar product or institution.
- Working through one institution’s process first.
- Discovering documentation or fit gaps later.
- Reassessing after a decline or mismatch.

**With The Brokerage Advisory:**

- Discuss funding purpose before selecting a route.
- Review facility and lender-fit considerations.
- Identify relevant information gaps.
- Compare possible routes across banks and financiers in our local and overseas network.
- Obtain a clearer view of possible next steps.

## Section 9 — Route comparison

Use a qualitative comparison table. Do not publish volatile rates, amounts, LTVs, approval times or public fee data until separately verified.

| Financing route | May be relevant for | What usually needs assessing | Next step |
|---|---|---|---|
| Business financing | Growth, operations, equipment or expansion | Business profile, cash flow, existing facilities and documents | Discuss your situation |
| Trade financing | Supplier payments and receivables timing | Invoices, contracts, counterparties and cycle | Discuss cash flow |
| Property-backed financing | Asset-backed or larger financing needs | Ownership, valuation, existing debt and repayment capacity | Speak to a specialist |
| Project financing | Contract execution and mobilisation | Contract, payment terms, timing and supporting documents | Discuss your project |

Heading: **Compare possible financing routes at a glance.**  
Support: Different facilities solve different situations. The right route depends on your purpose, cash flow, information, existing obligations and the relevant financier’s assessment.

## Section 10 — Calculator teaser

Heading: **Estimate a monthly repayment for planning purposes.**  
Copy: Use an illustrative estimate to understand how amount, rate and tenure can affect repayment. It is not a quote or financing offer.  
CTA: Try the Repayment Calculator.

## Section 11 — FAQ preview

Show 5–6 questions:

- What does a financing advisory do?
- Is The Brokerage Advisory a bank or lender?
- What is a free financing assessment?
- Can you help after a bank rejection?
- Can you help construction and engineering companies?
- Does an assessment guarantee financing?

## Section 12 — Final CTA

**Heading:** Have a financing situation that is not straightforward?  
**Copy:** Start with a free initial assessment. We will understand the situation first, then discuss the possible next steps.  
**CTA:** Get a Free Financing Assessment.

## Section 13 — Footer

- Canonical brand/logo.
- Full navigation.
- Phone, WhatsApp, email and address.
- “Walk-in visits available by arrangement” unless office hours are supplied.
- Legal links.
- Cookie preferences.
- Copyright.

---

# 6. Page specifications

## Business Financing

**H1:** Business financing should start with your situation—not a generic product.  
Include: growth funding, working capital, term needs, existing facilities, refinancing considerations, complex/rejected scenarios, information to prepare, FAQs, calculator teaser, assessment CTA.

## Trade Financing

**H1:** When customers pay later but suppliers need to be paid now.  
Include: cash-flow-cycle visual; AR, AP, invoice, import/export concepts; what needs assessing; practical considerations; FAQ and assessment CTA.

## Property Financing

**H1:** Explore whether property can support your financing requirement.  
Include: residential/commercial/industrial/shophouse use cases; ownership/debt/valuation considerations; risks; assessment process; FAQ and CTA. No LTV/rate promise.

## Project & Private Capital

**H1:** When the opportunity is larger than your current financing structure.  
Include: project/contract execution, mobilisation, cash flow, complex structures and alternative capital. M&A/overseas referrals only as a case-by-case supporting capability. No “we will fund” claim.

## Performance Bonds

**H1:** Understand your performance-bond requirement before the next project milestone.  
Include: plain-English definition, when bonds may be relevant, documents/context to prepare, process and CTA. Do not imply bond-issuance authority.

## Construction & Engineering

**H1:** Financing advisory for Singapore construction and engineering businesses.  
Include: project award, mobilisation, subcontractor/supplier/payroll timing, bond, existing limits, growth opportunity and complex-credit scenarios. This is the strongest industry page.

## How It Works

**H1:** Understand the situation before approaching a financier.  
Include the six-step process, what information may be needed, what happens after the free assessment and what the process does not promise.

## About

**H1:** Financing decisions deserve clear, practical advice.  
Include company philosophy, independent model, process, network wording and integrity principles. Use no team biographies until approved. Do not leave hollow “coming soon” cards.

## Calculator

**H1:** Estimated Monthly Repayment Calculator  
Purpose: planning aid, not offer/quote/approval.

**The estimated monthly repayment calculator stays in launch scope, but it cannot be implemented until the following are approved: the calculation method (simple interest vs. reducing-balance amortisation), the illustrative rate used, documented worked test cases, an assigned content owner and a review date.** Until then this remains a specified, unbuilt launch requirement — not a placeholder to route around and not a feature to drop from scope.

Required inputs:

- Financing amount.
- Illustrative annual rate.
- Tenure (months or years).
- Calculation-basis explanation.

Required outputs:

- Estimated monthly repayment.
- Estimated total repayment.
- Estimated interest.

Required disclaimer:

> This calculator provides an illustrative estimate only. It is not a quotation, financing offer, approval or guarantee. Actual repayment amounts, interest, fees, tenure and availability depend on the relevant financier’s assessment and final facility terms.

The developer must document and test the formula. If using simple interest, say so explicitly. If using reducing-balance amortisation, say so explicitly. Do not combine assumptions ambiguously.

## Contact

**H1:** Contact The Brokerage Advisory  
Show phone, WhatsApp, email, map and public walk-in office address. Include the free-assessment form or link to it. Do not invent office hours.

---

# 7. UX/UI design system

## Design personality

Premium, editorial, calm, sophisticated, credible and commercially mature.

## Visual direction

- Deep navy or obsidian backgrounds.
- Warm ivory, stone and white light surfaces.
- Restrained champagne-gold accents.
- Editorial high-contrast serif for selective display headings.
- Modern sans-serif for UI/body copy.
- Wide editorial grid; generous whitespace.
- High-quality real photography where approved.
- Minimal, meaningful icons.
- Low-to-moderate motion.

## Suggested palette

| Role | Colour |
|---|---|
| Deep surface | `#0B172A` or approved obsidian equivalent |
| Dark surface | `#111827` |
| Primary text | `#172033` |
| Warm background | `#F7F5F0` |
| White surface | `#FFFFFF` |
| Gold accent | `#C9A227` |
| Light gold | `#E0C76A` |
| Muted text | `#647084` |
| Error | Accessible muted red |
| Success | Accessible muted green |

All final contrast combinations must pass WCAG-conscious testing.

## Anti-patterns

Do not use:

- Generic bento-grid homepage.
- Fake dashboard screenshots.
- Crypto glow, huge gradients or glassmorphism.
- Constant gold background or gold paragraph text.
- Consumer-loan rate badges or “instant approval” elements.
- Repetitive rounded cards for every paragraph.
- Pulsing CTAs, decorative counters or fake social proof.
- Excessive hover-scale, parallax or automatic reveals.

---

# 8. AI design-skill orchestration protocol

## Order of authority

1. This master brief and its compliance/claims boundaries.
2. Project-specific design system file and `design.md`.
3. Hallmark for reference study, originality review and launch audit.
4. UI UX Pro Max for responsive UX, component and accessibility guidance.
5. Frontend design skill for technical implementation.
6. Art direction is carried by **Hallmark + UI UX Pro Max + the approved project design system; Super Design may be used only for optional concept exploration; Anti-Slop is the final design-quality audit gate.**
7. Native/CSS transitions only for launch motion.

## Workflow

1. Use Hallmark `study` mode on references/screenshots; extract design DNA without copying. Hallmark's refusal layer governs which sources qualify — template demos and designer presentation shots are refused as structural sources and remain mood-only. Record the outcome in `docs/hallmark-reference-validation.md`.
2. Use UI UX Pro Max to create `design-system/the-brokerage-advisory/MASTER.md` and page override files, plus a `design.md` at the project root so the site is treated as one unified brand system.
3. Apply the approved visual settings via **Hallmark + UI UX Pro Max + the approved project design system**:
   - Design variance: 5/10
   - Visual density: 4/10
   - Motion: native/CSS transitions only (see the motion constraints below)
4. Build original components/pages using the approved system. Every page carries a distinct primary information archetype — see the service-page requirement below.
5. Use **Super Design only for optional concept exploration**, never as the source of the shipped system.
6. Run `hallmark audit` before launch, then the **Anti-Slop audit as the final design-quality gate**. Work the pre-launch checklist in `docs/hallmark-reference-validation.md` §5.

## Responsive acceptance criterion

Verify at **320, 375, 414, 768, 1024 and 1440px**. **320px is the floor.** No horizontal overflow at any width; `overflow-x: hidden` / `clip` must not be used to conceal layout defects. Display headings use `overflow-wrap: anywhere` where required. No two-line clickable labels on buttons, navigation, footer links, breadcrumbs or CTAs.

## Service-page archetype variety

Every page must have a **distinct primary information archetype**, derived from the shape of its own subject. Shared tokens and reusable components are required — colour, type, spacing, buttons, forms, disclaimers, header, footer and CTA band are identical everywhere — but no page may be a previous page with the nouns changed. Consistency lives in the system; variety lives in the composition. The per-page archetype table is in `docs/design-reference-study.md` §2.14.

## Motion constraints

- Animate **opacity and transform only**. No layout properties.
- **Never animate focus rings**; focus is instant, at ≥3:1 contrast.
- Use **named approved custom easing values**; the browser-default `ease` is not permitted.
- `prefers-reduced-motion: reduce` removes non-essential motion or reduces it to a **maximum 150ms opacity transition**.
- No scroll-arrival entrance animation. All content present and readable on load.

## Development-only placeholder convention

During development, unresolved assets are marked with these exact labels, in capitals, in an obviously unfinished internal style: `METRIC TO CONFIRM`, `APPROVED CASE STUDY REQUIRED`, `LICENSED IMAGE REQUIRED`, `DO NOT SHIP PLACEHOLDER`.

**These exist in internal development only and must never reach public production.** At launch each placeholder is either resolved with approved content, or the module containing it is removed from the page entirely — not shipped empty, not stubbed, not hidden with CSS.

## Hard guardrails

- Never allow a skill to replace verified business facts.
- Never copy a reference site, screenshot, image, exact layout or brand asset.
- Do not let a visual skill introduce financial claims, data, testimonials or trust logos not approved in this brief.
- Calculator must always display its illustration-only disclaimer.
- Use `prefers-reduced-motion` and avoid unnecessary animation.

---

# 9. SEO, AEO and local SEO requirements

## Canonical/migration

- Production canonical URL: `https://thebrokerage.sg/`.
- Consolidate all useful content from `thebrokerageadvisorysg.com`.
- Map each old URL to closest equivalent canonical URL using 301 redirects.
- Do not redirect all old pages to homepage when a relevant target exists.
- Only canonical-domain URLs appear in sitemap, internal links, structured data and social metadata.

## Technical SEO

- Semantic HTML.
- One H1 per page.
- Logical H2/H3 hierarchy.
- Clean descriptive URLs.
- Unique title and meta description per indexable page.
- Self-referencing canonical tags.
- XML sitemap and robots.txt.
- Custom useful 404 page.
- Open Graph and Twitter metadata.
- Responsive images with AVIF/WebP where supported.
- Minimal blocking scripts; strong Core Web Vitals.
- Search Console and GA4 configured.

## Structured data

- Organization schema.
- LocalBusiness schema only with confirmed public details.
- ContactPoint for phone/email.
- PostalAddress for confirmed address.
- `areaServed: Singapore`.
- Service schema for relevant service pages.
- Article schema for Insights content.
- BreadcrumbList where applicable.
- FAQPage only where content genuinely qualifies.
- Never add fake ratings, reviews, prices, availability or financial-product data.

## Local SEO

- Publish exact NAP consistently: The Brokerage Advisory, 31A Lowland Road, Singapore 547424, +65 8011 8194.
- Confirm Google Business Profile category and ownership.
- Add map on Contact page; lazy-load it for performance.
- Do not state office hours until supplied.
- Do not create thin pages for neighbourhoods.

## AEO

- Start each information section with a direct answer.
- Use question-based H2s.
- Add concise definitions.
- Use original first-party process explanations.
- Add updated/reviewed dates to changing financial content.
- Use factual, neutral comparison content.
- Show author/reviewer only where approved.
- Do not rely on FAQ schema as a visibility guarantee.

## SEO title examples

| Page | Title direction |
|---|---|
| Home | The Brokerage Advisory \| Singapore Financing Advisory |
| Assessment | Get a Free Financing Assessment \| The Brokerage Advisory |
| Construction | Construction & Engineering Financing Singapore \| The Brokerage Advisory |
| Calculator | Estimated Monthly Repayment Calculator \| The Brokerage Advisory |
| Business | Business Financing Singapore \| The Brokerage Advisory |

---

# 10. Technical architecture

## Recommended stack

- Next.js.
- TypeScript.
- Tailwind CSS or equivalent token-driven styling system.
- Headless CMS or Git-based content for pages, FAQs and insights.
- Managed hosting such as Vercel or comparable secure platform.
- Server-side route/API for form submission.
- Transactional email provider.
- GA4 + GTM + Search Console.
- Consent manager pending legal review.

## Required environments

- Local development.
- Preview/staging deployment.
- Production.
- Separate environment variables and keys.

## Form technical requirements

- Server-side validation.
- Honeypot or CAPTCHA.
- Rate limiting.
- Safe HTML sanitisation.
- Configurable destination email.
- User acknowledgement email if approved.
- Technical failure alert.
- No credentials in source control.
- Do not send submitted message text to analytics.

## Security

- HTTPS.
- MFA for hosting/CMS/email provider.
- Least-privilege access.
- Dependency maintenance.
- Error monitoring.
- Backup and rollback plan.
- Secure headers and CSP review.

---

# 11. Analytics plan

## Core events

| Event | Trigger | Parameters |
|---|---|---|
| `primary_cta_click` | Primary CTA clicked | page, CTA location |
| `assessment_form_start` | User first interacts with form | page/source |
| `assessment_form_submit` | Valid form submission | page/source; no PII |
| `assessment_form_error` | Validation/API error | generic error type |
| `whatsapp_click` | WhatsApp CTA clicked | page/location |
| `phone_click` | Telephone clicked | page/location |
| `email_click` | Email clicked | page/location |
| `calculator_view` | Calculator page/module visible | page |
| `calculator_calculate` | User triggers calculation | amount band only if non-identifying; avoid exact amount |
| `service_card_click` | Service route selected | service/page |
| `faq_open` | FAQ expanded | question/page |
| `scroll_depth` | Threshold reached | 25/50/75/90 |

## KPI chain

Website visits → CTA clicks → form starts → form submissions → direct human contact → qualified conversations → sales outcomes.

The sales team must eventually record the last four stages outside GA4.

---

# 12. Legal and privacy placeholders

Before launch, replace placeholders with approved legal language for:

- Privacy policy.
- Terms and conditions.
- Regulatory disclaimer.
- Cookie policy/preferences.
- Form consent.
- Calculator disclaimer.
- Data retention and marketing-consent practices.

Until approved, use the exact existing website disclaimer only where the founder has confirmed it is acceptable; do not invent additional licensing language.

---

# 13. Deliverables

## Design deliverables

- Moodboard/design-DNA output.
- Design system tokens and component rules.
- Desktop/mobile homepage.
- Service page template.
- Construction page.
- Calculator page/module.
- Assessment form and confirmation state.
- Contact page.
- Header/footer/mobile navigation.

## Development deliverables

- Fully responsive Next.js site.
- CMS/content structure.
- Simple secure contact/assessment form.
- Configurable lead destination.
- Calculator with tested formula/disclaimer.
- SEO metadata, sitemap, robots and schema.
- 301 redirect plan and implementation.
- Analytics/event tracking.
- Cookie/consent placeholder integration.
- Staging deployment and production handover.

---

# 14. Acceptance criteria

The website may launch only when all are true:

- [ ] `https://thebrokerage.sg/` is the single canonical URL.
- [ ] Secondary domain routes to relevant canonical pages through 301 redirects.
- [ ] Primary CTA consistently reads “Get a Free Financing Assessment.”
- [ ] Assessment form contains only name, email, phone and message, with validation and anti-spam protection.
- [ ] Form successfully delivers to a configurable monitored destination.
- [ ] WhatsApp, phone and email links work.
- [ ] Address is visibly published and map/contact implementation is functional.
- [ ] Walk-in wording does not invent business hours.
- [ ] Calculator is tested, accessible, formula-documented and clearly illustrative only.
- [ ] No public fees, rates, guarantees, unverified numerical claims or invented proof remain.
- [ ] Construction and engineering is prominent but broader services remain discoverable.
- [ ] Mobile experience is designed, not merely compressed.
- [ ] Keyboard navigation, focus states, labels, contrast and reduced-motion support work.
- [ ] SEO fundamentals, schema, sitemap, robots, titles, metadata and canonicals validate.
- [ ] GA4 events fire without sending personal or sensitive financial information.
- [ ] Privacy, terms and disclaimer content are approved or knowingly held as pre-launch blockers.
- [ ] Hallmark/Anti-Slop audit identifies no unresolved critical quality issue.
- [ ] No inspiration reference has been copied.

---

# 15. Known pre-launch placeholders

These must be tracked explicitly, not silently forgotten:

1. Exact regulatory disclaimer text.
2. Privacy-policy and terms wording.
3. Final founder-Gmail/shared-inbox destination.
4. Final logo and brand asset package.
5. Licensed imagery.
6. Team biographies/headshots, if added.
7. Approved anonymised case studies, if added.
8. Calculator formula choice, illustrative rate assumption and content review date.
9. Office hours, only if the business wants them published.
