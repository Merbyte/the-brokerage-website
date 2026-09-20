# Contact — Page Override

**URL** `/contact/` · **Archetype** Local office and direct contact hub · Inherits `MASTER.md` and `design.md`

## Page goal
Prove the firm is physically real and locally present, and give every contact channel without friction.

## Primary visitor
Two distinct visitors: one verifying the business exists at a real address; one who simply wants to phone or message. Both must be served above the fold.

## Intent
Verification and direct contact. Neither wants a narrative.

## Page archetype
**Local office and direct contact hub.** Utility-first, with physical presence as the credibility mechanism.

## Primary visual mechanism
A **contact-method set beside the address and map** — the four channels (phone, WhatsApp, email, walk-in) presented as equals in a single block, with the map as supporting evidence rather than the lead.

## Section order
1. Header
2. **H1 + one orienting line** — no hero band, no eyebrow.
3. **Contact methods** — phone, WhatsApp, email, walk-in address. Lead content.
4. **Map** — lazy-loaded, supporting the address, never the sole carrier of it.
5. **Link to the Free Financing Assessment page** — a clear, single link. The full form is not embedded on Contact.
6. Footer

## CTA placement
Header; the contact methods themselves are the primary action, alongside the link to the dedicated Free Financing Assessment page. No dark CTA band — it would compete with the contact methods.

## Mobile-specific behaviour
Contact methods first, above the map. All `tel:` and `wa.me` targets at least 48px tall. Phone number in tabular figures and never wrapping mid-number. Map at a fixed aspect ratio, lazy-loaded, never blocking first render.

## Components used
Header · Mobile nav · Contact and WhatsApp controls · Map and contact block · Footer · Buttons · Links

## Components intentionally not used
Hero band · Problem-set cards · Timeline · Route-comparison table · FAQ accordion · Calculator · Form fields and disclaimer · Dark CTA band · Photography of the office

## SEO / AEO structure
Single H1. Address in a real `<address>` element. **LocalBusiness and PostalAddress schema with confirmed details only** — no `openingHours` property, since hours are not published. ContactPoint for phone and email. Title direction: *Contact | The Brokerage Advisory*. Exact NAP matching every other surface.

## Claim / compliance safeguards
**No invented opening hours.** Use "Walk-in visits welcome by arrangement." NAP identical to header, footer and schema. Map must not load third-party scripts before consent. Address always present as text independently of the map.

## Placeholder status
None. Office hours remain deliberately unpublished rather than placeholdered — absence is the correct state until the founder supplies them.

## Acceptance criteria
- [ ] Exact NAP, identical to all other surfaces
- [ ] No opening hours in content or schema
- [ ] "Walk-in visits welcome by arrangement" present
- [ ] Address available as text without the map
- [ ] Map lazy-loaded and consent-compatible
- [ ] Phone number does not wrap mid-number at 320px
- [ ] Links to the Free Financing Assessment page; full form not embedded on Contact
