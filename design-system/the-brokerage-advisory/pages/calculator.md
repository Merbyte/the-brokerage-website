# Calculator — Page Override

**URL** `/tools/monthly-repayment-calculator/` · **Archetype** Practical planning tool · Inherits `MASTER.md` and `design.md`

## Page goal
Give a visitor a genuinely useful planning estimate, and make unmistakably clear that it is illustrative only. A low-commitment reason to engage with the site.

## Primary visitor
Anyone planning. Often a returning visitor, or someone not yet ready to make contact. The least sales-receptive visitor on the site, which is why the tool must be honest and unencumbered.

## Intent
Utility. The visitor wants a number, not a narrative.

## Page archetype
**Practical planning tool.** The tool is the page. Prose is support, never the lead.

## Primary visual mechanism
**The working calculator, high on the page** — inputs, results and disclaimer visible as one unit. No hero band, no narrative preamble beyond a single orienting sentence.

## Section order
1. Header
2. **H1 + one orienting sentence** — no hero band, no eyebrow.
3. **Calculator** — inputs, results, and the disclaimer adjacent to the results. Lead content.
4. **How this is calculated** — the calculation basis stated explicitly: simple interest or reducing-balance amortisation, never ambiguous. Includes a worked example.
5. **What this does not tell you** — plain-language limits.
6. **What actually determines a repayment** — short prose pointing to assessment.
7. **Next step** — inline CTA to the assessment.
8. Footer

## CTA placement
Header; after the "what actually determines" section; no dark final CTA band. The page deliberately does not close with a hard sell — pressure attached to a free tool reads as bait.

## Mobile-specific behaviour
Single column. Inputs full width, minimum 17px to prevent iOS zoom. Results in a separated block directly beneath the inputs. **The disclaimer must be legible without scrolling past the result at 320px** — this is the page's hardest layout constraint and is verified first.

## Components used
Header · Mobile nav · Calculator controls, results and disclaimer · Consent and disclaimer block · Validation messages · Footer · Buttons · Links

## Components intentionally not used
Hero band · Problem-set cards · Timeline · Route-comparison table · FAQ accordion · Dark CTA band · Photography · Charts, gauges, dials or animated counters

## SEO / AEO structure
H1 names the tool plainly. H2s in question form: how is this calculated, what does this not tell you. Title direction: *Estimated Monthly Repayment Calculator | The Brokerage Advisory*. **No FAQPage schema and no financial-product schema** — the page must not be marked up as offering a financial product.

## Claim / compliance safeguards
**The approved calculator disclaimer sits adjacent to the results, at body size, never italic, never grey, never collapsed.** Results labelled "estimated" throughout. Calculation basis stated in the interface, not only in documentation. **Not a fee calculator** — no fee input or output. No rate defaults presented as market rates; any illustrative rate is labelled as illustrative and carries a reviewed date. Degrades without JavaScript to the stated formula and worked example.

## Placeholder status
`METRIC TO CONFIRM` — the illustrative rate assumption, pending founder confirmation. The calculation method, test cases, content owner and review date all remain open per `CLAUDE.md`. **The calculator cannot ship until these are resolved**; the placeholder must not reach production.

## Acceptance criteria
- [ ] Disclaimer legible at 320px without scrolling past the result
- [ ] Calculation basis stated explicitly in the interface
- [ ] Formula documented and tested against worked examples
- [ ] Tabular figures throughout
- [ ] Degrades usefully without JavaScript
- [ ] No fee input or output; no charts, gauges or counters
- [ ] No financial-product schema
- [ ] `METRIC TO CONFIRM` resolved before launch
