# Trade Financing — Page Override

**URL** `/trade-financing/` · **Archetype** Cash-conversion-cycle explainer · Inherits `MASTER.md` and `design.md`

## Page goal
Make the timing gap visible, so a visitor recognises their own cash-flow pressure and understands it is an assessable situation rather than a shortfall to be ashamed of.

## Primary visitor
A business paying suppliers before customers pay them — trading, import/export, subcontracting, project supply. Often under immediate pressure.

## Intent
Problem-led rather than product-led. The visitor feels the squeeze but may not have the vocabulary.

## Page archetype
**Cash-conversion-cycle explainer.** The page teaches one idea — money leaves before it arrives — then shows what gets assessed.

## Primary visual mechanism
The **cycle diagram with the gap marked** (MASTER 5.11, Trade configuration): supplier paid → work done or goods shipped → invoice raised → payment received, with the interval between first and last marked as the gap. It leads the page, immediately after the H1. An ordered text list carries the same information in the DOM.

## Section order
1. Header
2. **H1 + one-paragraph lead** — names the timing problem plainly. No eyebrow.
3. **The cycle diagram** — lead content and primary mechanism.
4. **Where the gap opens** — short prose keyed to the diagram's stages.
5. **What usually needs assessing** — invoices, contracts, counterparties, payment terms, cycle length, existing facilities.
6. **Common situations** — supplier payment pressure, receivables delay, import/export timing, a large order that cannot be funded from cash flow.
7. **Route comparison** — shared qualitative table.
8. **FAQ** — trade-specific.
9. **Final CTA** — dark.
10. Footer

## CTA placement
Header; directly after the diagram explanation; after the route comparison; final band. Four placements. Secondary "Discuss Cash Flow" permitted once.

## Mobile-specific behaviour
Diagram becomes a **vertical sequence**, never horizontally scrolling. Below 375px the ordered text list may replace the diagram entirely. Route comparison uses the block pattern.

## Components used
Header · Mobile nav · Cycle diagram (timeline component, Trade configuration) · Route-comparison table and mobile blocks · FAQ accordion · CTA band · Footer · Buttons · Links

## Components intentionally not used
Problem-set cards · Situation pairing list (Business page's mechanism) · Consideration stack (Property's mechanism) · Inline calculator · Two-column comparison · Photography

## SEO / AEO structure
H1 names the timing problem in plain language. Question-form H2s: what is trade financing, what is invoice financing, what are AR and AP financing. Service schema. Title direction: *Trade Financing Singapore | The Brokerage Advisory*. Definitions concise and answer-first.

## Claim / compliance safeguards
**The diagram carries no figures and no durations presented as typical.** No advance percentages, no rates, no turnaround times. No implication that any facility closes the gap. Terms explained neutrally and educationally.

## Placeholder status
None. The diagram is hand-built and needs no licensed asset.

## Acceptance criteria
- [ ] Diagram leads the page, with a full text alternative and a DOM-equivalent ordered list
- [ ] Diagram legible at 320px or cleanly replaced by the text list
- [ ] No figures, percentages or durations anywhere
- [ ] Section order shares no sequence with Business or Property
- [ ] Maximum two eyebrows
- [ ] No horizontal overflow at 320px
