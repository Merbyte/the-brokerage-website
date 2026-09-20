# Home — Page Override

**URL** `/` · **Archetype** Editorial credibility narrative · Inherits `MASTER.md` and `design.md`

## Page goal
Convert a cold-outreach prospect's scepticism into a returned call. Establish that the firm is real, understands the visitor's situation, and can be approached without commitment.

## Primary visitor
Owner-led Singapore construction or engineering business, owner 40–55, arriving minutes after a cold call or email, on a phone, often outdoors. Secondary: business, trade, property and project-financing enquirers, who must also recognise themselves.

## Intent
Verification, not browsing. The visitor is checking legitimacy before spending ten minutes on a call.

## Page archetype
**Editorial credibility narrative.** An argument arc, not a feature list: who this is for → what usually goes wrong → how we work → which routes exist → why an advisory → the ask.

## Primary visual mechanism
Alternating surface bands carrying the argument. Rhythm comes from surface-temperature changes and varied internal structure, never from repeated card grids.

## Section order
1. Header
2. **Hero** — headline leads, no eyebrow. Four qualitative trust points as a compact line beneath, not a separate band. Dark surface permitted on desktop; **light on mobile**.
3. **Problems we help assess** — four-item problem set (the only card use). Light.
4. **Construction & engineering** — ICP addressed early. Opens on a concrete project situation, not a category label. Light, distinct treatment.
5. **How the advisory process works** — condensed six-step spine; states plainly that the process does not guarantee financing. Light.
6. **Financing pathways** — typographic index, five routes. Light, continuous.
7. **Route comparison** — qualitative table; opens on the question it answers. Light.
8. **Calculator** — inline working module, not a link out. Light.
9. **Why work with an advisory** — two-column neutral comparison. Dark.
10. **FAQ preview** — 5–6 questions. Light.
11. **Final CTA** — dark.
12. Footer

## CTA placement
Primary CTA in header, hero, construction band, after the route comparison, at the close of the advisory argument, and in the final band — six placements, identically worded. No primary-CTA gap longer than 1.5 viewport-heights on mobile; the hero CTA is visible without scrolling at 375×812.

## Mobile-specific behaviour
Light hero. Route comparison becomes per-route blocks (MASTER 5.13). Advisory comparison stacks with column headings retained. Calculator single-column, disclaimer legible without scrolling past the result. Problem set single column.

## Components used
Header · Mobile nav · Hero (light and dark variants) · Problem set · Service-pathway index · Project timeline (condensed) · Route-comparison table and mobile blocks · Direct-vs-advisory comparison · Inline calculator · FAQ accordion · CTA band · Footer · Buttons · Links

## Components intentionally not used
Standalone trust strip · Testimonials · Client or lender logos · Counters or statistics · Case-study module · Cards for pathways · Hero photography dependency · Floating WhatsApp bubble

## SEO / AEO structure
Single H1. H2 per band in question or statement form. Organization, ContactPoint, PostalAddress and `areaServed: Singapore` schema. Title direction: *The Brokerage Advisory | Singapore Financing Advisory*. Each band opens with a direct answer sentence so it can be quoted standalone.

## Claim / compliance safeguards
No figures anywhere. Route table qualitative only. Advisory comparison describes going direct honestly. Approved network wording verbatim. Calculator disclaimer adjacent to results at body size. Process section states no guarantee of financing.

## Placeholder status
`LICENSED IMAGE REQUIRED` — hero and construction band, if photography is commissioned. The page must work fully typographically without it. No proof-module placeholders: those modules are absent, not stubbed.

## Acceptance criteria
- [ ] Six CTA placements, identical wording; hero CTA above the fold at 375×812
- [ ] Mobile hero on the light surface
- [ ] Maximum two eyebrows on the page
- [ ] Route comparison and advisory comparison separated by the calculator band
- [ ] Only one card use (problem set); pathways render as a typographic index
- [ ] No horizontal overflow at 320px
- [ ] Complete and readable with JavaScript disabled
- [ ] Comparisons readable in greyscale
