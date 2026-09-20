# FAQ — Page Override

**URL** `/faq/` · **Archetype** Question-first knowledge index · Inherits `MASTER.md` and `design.md`

## Page goal
Answer the objections that stop a prospect calling, in their own words, without a single claim.

## Primary visitor
A cautious prospect working through doubts privately before making contact. Also answer engines, for which this is the highest-value page on the site.

## Intent
Objection resolution. The visitor is looking for the catch and for reassurance.

## Page archetype
**Question-first knowledge index.** Questions are the navigation, not a supplement to it.

## Primary visual mechanism
A **grouped question index followed by accordions**: a scannable list of all questions at the top, grouped by theme, each linking down to its answer. The index is the mechanism — it lets a visitor find their own doubt in seconds rather than scrolling an accordion wall.

## Section order
1. Header
2. **H1 + one line** — no eyebrow.
3. **Question index** — all questions, grouped: about the firm · about the process · about business and trade financing · about property and project financing · about fees and outcomes.
4. **Answers** — accordion groups matching the index order.
5. **Still have a question** — short block pointing to direct contact.
6. **Final CTA** — dark.
7. Footer

## CTA placement
Header; after the answers; final band. Three placements.

## Mobile-specific behaviour
Index collapses to a single column list. Accordion rows at least 48px tall with the full row as the target. All answers present in the DOM regardless of open state, so the page is complete without JavaScript.

## Components used
Header · Mobile nav · Question index (anchored list) · FAQ accordion · CTA band · Footer · Buttons · Links

## Components intentionally not used
Problem-set cards · Timeline · Route-comparison table · Consideration stack · Calculator · Photography · Search

## SEO / AEO structure
Single H1; each question an H2 or H3 in question form. **Answer-first: every answer opens with a direct one-sentence answer** before elaboration. `FAQPage` schema **only where content genuinely qualifies** — real questions with real answers, no marketing entries. Title direction: *FAQ | The Brokerage Advisory*. The site's primary AEO surface.

## Claim / compliance safeguards
**The fees question must be answered without disclosing fees** — state that fees depend on the situation and are discussed directly, never a model, range or "no upfront" claim. No success rates. No approval language. No timelines. No lender names. The "can you help after a rejection" answer must not imply a decline can be reversed.

## Placeholder status
None. Any question that cannot be answered without an unapproved claim is omitted rather than placeholdered.

## Acceptance criteria
- [ ] Every answer opens with a direct answer sentence
- [ ] Fees question answered with no fee disclosure
- [ ] No claim, figure, timeline or lender name in any answer
- [ ] All answers present in the DOM with JavaScript disabled
- [ ] FAQPage schema only on genuinely qualifying content
- [ ] Accordion rows at least 48px at 320px
