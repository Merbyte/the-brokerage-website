# Property Financing — Page Override

**URL** `/property-financing/` · **Archetype** Collateral and ownership consideration framework · Inherits `MASTER.md` and `design.md`

## Page goal
Help an owner understand whether property they already hold could support a financing requirement, and what would have to be examined before anyone could say.

## Primary visitor
A business owner or director holding residential, commercial, industrial or shophouse property, considering whether it can be used to raise capital. Often asset-rich and cash-constrained.

## Intent
Exploratory and cautious. The visitor is weighing whether to put an asset behind a facility, which is a heavier decision than a working-capital enquiry.

## Page archetype
**Collateral and ownership consideration framework.** Not a product list and not a timeline — a set of interacting conditions the visitor can check themselves against.

## Primary visual mechanism
A **layered consideration stack**: four stacked strata, each a heading plus its considerations — the property, the ownership, the existing debt, the repayment capacity. Each layer is a full-width band separated by a hairline, read top to bottom as increasing specificity. Deliberately not a grid and not a timeline.

## Section order
1. Header
2. **H1 + lead** — frames the question as "whether", not "how much". No eyebrow.
3. **Consideration stack** — the four layers, in order. Lead content and primary mechanism.
4. **Property types** — residential, commercial, industrial, shophouse, as a plain list with one line each.
5. **Why the answer varies** — short prose on why no figure can be given without review.
6. **What usually needs assessing** — ownership structure, valuation basis, existing charges, repayment capacity, purpose of funds.
7. **Route comparison** — shared qualitative table.
8. **FAQ** — property-specific.
9. **Final CTA** — dark.
10. Footer

## CTA placement
Header; after the consideration stack; after the route comparison; final band. Four placements. Secondary "Speak to a Specialist" permitted once.

## Mobile-specific behaviour
The stack is already vertical and needs no reflow — each layer becomes a full-width block with its heading retained. Route comparison uses the block pattern.

## Components used
Header · Mobile nav · Consideration stack (layout pattern, not a card grid) · Route-comparison table and mobile blocks · FAQ accordion · CTA band · Footer · Buttons · Links

## Components intentionally not used
Problem-set cards · Timeline or cycle diagram · Situation pairing list · Inline calculator · Two-column comparison · Photography of property (a wealth-marketing tell)

## SEO / AEO structure
H1 frames property as a possible support for a requirement, never as guaranteed collateral. Question-form H2s: can property be used to raise business capital, what is property refinancing, what affects a property-backed facility. Service schema. Title direction: *Property Financing Singapore | The Brokerage Advisory*.

## Claim / compliance safeguards
**No LTV figures, no rates, no loan limits, no valuation percentages, no tenure.** No statement that property "unlocks" a specific amount. No implication of approval. The "why the answer varies" section exists specifically to explain the absence of numbers rather than leaving it conspicuous.

## Placeholder status
None. Property photography is deliberately excluded — it pulls the page toward property-investment marketing.

## Acceptance criteria
- [ ] No LTV, rate, amount or tenure anywhere
- [ ] Consideration stack renders as layered bands, not cards or a grid
- [ ] Section order shares no sequence with Business or Trade
- [ ] No property photography
- [ ] Maximum two eyebrows
- [ ] No horizontal overflow at 320px
