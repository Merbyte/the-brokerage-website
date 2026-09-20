# MASTER.md — The Brokerage Advisory Design System

**Scope.** The complete design system. `design.md` at the project root is the portable summary and the locked contract; this file is the full specification. Page overrides live in `pages/`.

**Authority.** Subordinate to `docs/master-website-brief.md` and `docs/claims-and-compliance-rules.md`. Governs UI UX Pro Max, Frontend Design and all implementation. Hallmark audits against it.

**Status.** Provisional pending founder sign-off on the two items in `design.md` §10.

**Nothing here is production code.** All values are specification.

---

# 1. Design principles

## 1.1 Brand personality

Professional, genuine, reliable, expert. The reader should finish an encounter **reassured** — the word comes directly from the founder decision pack and is the single best test of any design decision.

The character is **substance over polish**: credible because it is specific, direct and unadorned, not because it is well presented. Specificity is the mechanism. A visitor should meet detail only someone who does this work would include — the documents actually requested, the point in a project where cash gets tight, the reason a facility that fitted three years ago no longer fits.

Restraint is a credibility signal. Where a consumer-finance site adds a badge, this site adds clarity.

## 1.2 User context

The realistic visitor is an owner-led Singapore construction or engineering business, owner aged 40–55, arriving within minutes of a cold call or cold email. They are **verifying, not browsing**. They are often outdoors, on a phone, one-handed, on an unreliable connection, with imperfect near vision.

Design consequences, all load-bearing rather than nice-to-have:

- Credibility must land in roughly two seconds, from craft quality and specificity alone.
- The mobile hero is on the light surface. Dark surfaces are the worst case outdoors.
- Base body type is 17–18px, floor 15px.
- Content must be complete and readable with JavaScript unavailable.
- A conversion route must always be within reach — the visitor may become convinced at any point.

**Secondary audiences** — business, trade, property and project financing — must remain discoverable and must recognise themselves. Construction and engineering is a priority pathway, not an exclusion.

## 1.3 Trust principles

Trust is built in this order, and the design serves it in this order:

1. **Clarity** — the visitor understands what the firm does within one screen.
2. **Recognition** — the visitor sees their own situation described accurately.
3. **Method** — the diagnosis-first process is visible and concrete.
4. **Independence** — advice spans banks and financiers, not one institution's products.
5. **Honesty** — limits are stated plainly; nothing is promised.

**No proof layer exists.** There are no approved figures, testimonials, logos or case studies. Credibility is carried entirely by craft, process clarity and qualitative language. That raises the bar on typography, spacing and specificity — it does not lower it.

## 1.4 Content-density rules

Target density **4/10 desktop, ~5/10 mobile** — deliberately open. Whitespace is the primary carrier of material quality and, unlike photography, it is free.

- Generous section padding; contained text measure inside full-width bands.
- Dense only where density aids comprehension: the route comparison, the calculator, the footer.
- Never fill a band because it looks empty. An empty-feeling section means the content is thin; the fix is content, not decoration.
- Section height follows content. Bands are not padded to a uniform measure.

## 1.5 Originality rules

- Do not reproduce any reference's layout, visuals, typography, colour values, icons, text, code or interaction patterns.
- RedSun (Webflow template demo), Estatio (Dribbble shot) and the Pinterest board are **mood-only**. Hallmark refuses the first two as structural sources. See `docs/hallmark-reference-validation.md` §1.
- The two supplied screenshots contribute **skeleton only** — section ordering, table anatomy, column logic. Their content, data, claim language, styling, marker treatments and CTA styling do not travel.
- **The boundary test:** a decision borrows *discipline* if it would still be correct with the accent removed and every photograph replaced by a plain block, because its value lives in structure. It borrows *aesthetic* if those removals make it collapse. The second category does not ship.

## 1.6 Financial-services visual boundaries

The site must not resemble any of the following. Each row is an audit item.

| Must not resemble | Specific tells to reject |
|---|---|
| Consumer-loan funnel | Rate badges, approval-speed claims, urgency, countdowns, eligibility checkers |
| Crypto or trading product | Glow, neon, dark gradient meshes, performance charts, tickers |
| Generic AI SaaS | Bento grids, fake dashboards, floating UI cards, gradient blobs, "trusted by" logo strips |
| Template | Uniform section openings, repeated eyebrows, identical page rhythms |
| Casino or nightclub | Heavy black-and-gold, metallic texture, gold fills at scale, gold body text |
| Luxury property or wealth management | Aspirational full-bleed hero imagery, exclusivity language, display-scale figures for impact |

---

# 2. Responsive framework

## 2.1 Required review widths

**320, 375, 414, 768, 1024, 1440px.** **320px is the floor.** Every component is signed off at all six. The route comparison and the calculator are checked at 320px first — they are the most likely to fail.

| Width | Class | Grid | Gutter | Container |
|---|---|---|---|---|
| 320 | Small mobile | 4-col | 16px | fluid |
| 375 | Mobile | 4-col | 16px | fluid |
| 414 | Large mobile | 4-col | 16px | fluid |
| 768 | Tablet | 8-col | 24px | fluid |
| 1024 | Small desktop | 12-col | 32px | 1200px max |
| 1440 | Desktop | 12-col | 40px | 1200px max |

## 2.2 Container system

| Container | Max width | Use |
|---|---|---|
| `prose` | 720px | Long-form reading — About, Insights articles, How It Works body |
| `content` | 1200px | Default section content |
| `wide` | 1200px | Route comparison, calculator |
| `full` | 100% | Surface bands only; inner content still constrained |

Full-width bands always contain a constrained inner container. Text never runs the full viewport width.

## 2.3 Grid rules

- Mobile is single-column throughout. Multi-column layouts collapse to sequential blocks with their headings retained.
- Image-bearing grid tracks use `minmax(0, 1fr)` — never a bare `1fr`.
- Two-column comparisons become stacked blocks on mobile, each retaining its column label. Dropping the label turns a comparison into two unrelated lists.
- Asymmetry is permitted and encouraged at desktop; it must not create horizontal overflow at any width.

## 2.4 Spacing scale

4pt base: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`. Semantic names `space-xs` through `space-5xl`. No arbitrary values.

Section padding: 48–64px mobile, 72px tablet, 96–128px desktop.

## 2.5 Overflow

- **No horizontal overflow at any of the six widths.** This is an acceptance criterion, not a target.
- **`overflow-x: hidden` and `overflow-x: clip` must never be used to conceal a layout defect.** A page that needs them to look correct has a bug that has been hidden rather than fixed. Find the overflowing element and fix it.
- Display headings use `overflow-wrap: anywhere` where a long unbroken word would otherwise force overflow.
- Long unbreakable strings — email addresses, URLs — are given an explicit wrapping strategy, not left to overflow.

## 2.6 Clickable labels

**No two-line clickable labels** at any width — buttons, primary navigation, footer links, breadcrumbs, CTAs. Where a label will not fit on one line at 320px, shorten the label. Do not reduce type below the minimum and do not shrink the touch target.

Touch targets: minimum 48×48px with at least 8px clear spacing, sized for imprecise taps.

---

# 3. Colour system

Three layers: primitive → semantic → component. **Components reference semantic tokens only.** No raw hex in any component. A value that does not exist as a token is added to the token layer first.

## 3.1 Primitives

Specified in full in `design.md` §2. Not duplicated here — one source of truth.

## 3.2 Semantic tokens

| Semantic token | Light context | Dark context | Purpose |
|---|---|---|---|
| `--text-primary` | `ink-900` | `white` | Body and headings |
| `--text-secondary` | `ink-600` | `#C3CBD9` | Supporting copy, captions |
| `--text-disabled` | `ink-400` | `navy-700` | Disabled only — never informational |
| `--text-accent` | `gold-ink-700` *(restricted)* | `gold-300` | Rare accent text |
| `--surface-page` | `ivory-50` | `navy-900` | Page background |
| `--surface-raised` | `white` | `navy-800` | Fields, rare cards |
| `--surface-secondary` | `stone-100` | `navy-800` | Alternate band |
| `--border-hairline` | `stone-200` | `navy-700` | Rules, dividers, table separators |
| `--border-strong` | `ink-600` | `#C3CBD9` | Field borders |
| `--accent` | `gold-500` | `gold-500` | CTA fill, active marks |
| `--accent-on` | `ink-900` | `ink-900` | Text on accent fill |
| `--focus-ring` | `navy-900` | `gold-300` | Focus indication |
| `--state-error` | `red-700` | `red-300` | Error |
| `--state-success` | `green-700` | `green-300` | Success |
| `--state-warning` | `amber-800` | `#E8C77A` | Warning |
| `--state-info` | `blue-700` | `#9BC2E3` | Information |

## 3.3 Contrast rules

- Body and heading text **≥4.5:1**. Large display text (≥24px bold or ≥30px regular) **≥3:1**, though the palette clears 4.5:1 throughout.
- Non-text UI — field borders, focus rings, icon strokes carrying meaning — **≥3:1**.
- **Focus rings ≥3:1 against both the component and its background.**
- Every final pairing tested before design lock. Contrast is a compliance matter here, not a preference.
- `ink-400` is non-text only and may not carry information at any size.

## 3.4 Dark and light surface variants

Every component defines both a light-surface and a dark-surface variant. Neither is improvised at build time.

Dark surfaces total roughly 30–40% of page area — hero (desktop only), the advisory argument, the final CTA, the footer. **The mobile hero is always light.** Where a dark band survives on mobile it uses the lighter end of the dark range and raises body contrast above its desktop value.

Surface transitions are clean edges. No gradient fades, no glassmorphism, no parallax seams.

## 3.5 Gold surface-area budget

**≤5% of visible surface on any viewport, measured per screen rather than per page.**

| Permitted | Prohibited |
|---|---|
| Primary CTA fill (with `ink-900` label) | Gold body text |
| Hairline and short accent rules | Gold gradients or glow |
| Active / selected state marks | Metallic texture |
| Small non-informational marks | Large fills or gold backgrounds |
| Accent text on dark surfaces only | Gold as a success or approval signal |

**Gold fails contrast on the ivory surface (~2.2:1).** On light surfaces gold is a fill behind dark text or a non-informational hairline — never text, never a meaningful icon, never a border that carries state.

## 3.6 State colours

| State | Light | Dark | Always paired with |
|---|---|---|---|
| Error | `red-700` | `red-300` | Icon + explicit text, `role="alert"` |
| Success | `green-700` | `green-300` | Icon + explicit text |
| Warning | `amber-800` | `#E8C77A` | Icon + explicit text |
| Information | `blue-700` | `#9BC2E3` | Icon + explicit text |

**State colours must never read as financing outcomes.** Green is not "approved"; red is not "rejected". Success styling is reserved for interface events — a submitted form, a completed calculation.

## 3.7 Never colour alone

Every comparison, state and status carries a text label or shape alongside colour. Both comparison modules must be fully readable in greyscale. This is an audit item, checked by desaturating the page.

---

# 4. Typography system

## 4.1 Family

| | |
|---|---|
| **Primary** | Inter (variable), self-hosted, subset to Latin + Latin-Extended-A |
| **Alternative** | IBM Plex Sans — documented fallback if licensing or rendering requires |
| **Stack** | `"Inter var", Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| **Weights** | 400 regular, 500 medium, 600 semibold. Three weights only. |

**No serif in this implementation.** Hierarchy comes from scale, weight, spacing and alignment. If a serif is ever elected it is page H1 only — never section headings — and requires founder approval.

## 4.2 Scale

| Role | Mobile | Desktop | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| `display-xl` | 40px | 64px | 600 | 1.05 | −0.02em |
| `display-l` | 32px | 48px | 600 | 1.10 | −0.015em |
| `heading-l` | 26px | 34px | 600 | 1.20 | −0.01em |
| `heading-m` | 21px | 26px | 600 | 1.25 | −0.005em |
| `heading-s` | 18px | 20px | 600 | 1.30 | 0 |
| `body-l` | 18px | 20px | 400 | 1.55 | 0 |
| `body` | 17px | 18px | 400 | 1.60 | 0 |
| `body-s` | 16px | 16px | 400 | 1.50 | 0 |
| `table-cell` | 16px | 16px | 400 | 1.45 | 0 |
| `table-header` | 15px | 15px | 600 | 1.30 | 0.06em, uppercase |
| `form-label` | 16px | 16px | 500 | 1.40 | 0 |
| `form-input` | 17px | 17px | 400 | 1.45 | 0 |
| `label` | 15px | 15px | 600 | 1.30 | 0.06em, uppercase |
| `disclaimer` | 17px | 18px | 400 | 1.60 | 0 |
| `legal` | 16px | 16px | 400 | 1.55 | 0 |

## 4.3 Minimums and prohibitions

- **No text below 15px anywhere** — including table cells, footer legal, form hints and disclaimers.
- **Form input is 17px minimum** on mobile, to prevent iOS zoom-on-focus.
- **Disclaimers render at body size.** Never smaller than surrounding body copy, never italic, never low-contrast grey, never collapsed behind a toggle, never below the fold of the module they qualify.
- **No italics on headings or disclaimers.** Italic survives only as emphasis inside running body prose.
- **No all-caps runs longer than four words**, and never on body copy.

## 4.4 Measure and rhythm

- Body measure **60–75ch**; the `prose` container enforces it.
- Display measure **20–28ch** — long headlines are rewritten shorter, not shrunk.
- Headline discipline: ≤7 words and ≤50 characters where the copy is ours to write.
- One H1 per page. Logical H2/H3 descent with no skipped levels.
- `overflow-wrap: anywhere` on display headings where required.

## 4.5 Tabular figures

`font-variant-numeric: tabular-nums slashed-zero` is mandatory on calculator inputs and results, every table containing numbers, the phone number wherever displayed, and any dated content. Figures must align vertically in columns.

**Figures are set at reading scale, not display scale.** A number set large for impact is a wealth-marketing tell and is prohibited.

---

# 5. Core components

Every component defines Purpose, Variants, States, Responsive behaviour, Accessibility, Content constraints and Use / no-use rules. All eight interactive states — default, hover, focus-visible, active, disabled, loading, error, success — are addressed for interactive components; where a state does not apply, that is stated explicitly rather than omitted.

## 5.1 Header and navigation

**Purpose.** Orientation and a persistent route to conversion.

**Variants.** Light (default) · Dark (over a dark desktop hero) · Compact (scrolled).

**States.** Default · Scrolled (hairline bottom border appears; no size change) · Focus-within. Hover and active apply to links, not the bar. Disabled, loading, error and success do not apply.

**Responsive.** Desktop: wordmark left, primary navigation centre or right, primary CTA right. Tablet and mobile: wordmark left, menu trigger right. Sticky only if it stays visually calm and consumes no more than 64px of mobile viewport.

**Accessibility.** `<header>` with `<nav aria-label="Primary">`. Skip-to-content link as the first focusable element. Current page marked `aria-current="page"` **and** given a non-colour indicator. Focus order follows visual order.

**Content constraints.** Maximum nine primary destinations. Phone and WhatsApp reachable but not overloading the bar — they live in the mobile menu and the footer.

**Use / no-use.** Not a mega-menu. **Not the minimal two-link nav** — a recognised AI fingerprint. No search at launch. No language switcher.

## 5.2 Mobile navigation

**Purpose.** Full navigation plus direct contact on small screens.

**Variants.** Full-screen panel. No partial off-canvas drawer.

**States.** Closed · Opening · Open · Closing · Focus-trapped. Disabled, error and success do not apply.

**Responsive.** Below 768px. Trigger is a labelled button, minimum 48×48px. Panel covers the viewport; body scroll locked while open.

**Accessibility.** Trigger carries `aria-expanded` and `aria-controls`. Focus moves into the panel on open and returns to the trigger on close. Escape closes. Focus trapped while open. The trigger is a `<button>` with an accessible name, never a bare icon.

**Content constraints.** Full primary navigation, then primary CTA, then call and WhatsApp, then address. Nothing else.

**Use / no-use.** No nested accordions. No hamburger-to-X morph beyond a simple opacity or transform swap. Panel transition is opacity and transform only.

## 5.3 Buttons

**Purpose.** Commit to an action.

**Variants.** Primary (gold fill, `ink-900` label) · Secondary (outline) · Tertiary (text with underline). No destructive variant on this site.

| State | Primary | Secondary |
|---|---|---|
| Default | `accent` fill, `accent-on` label | Transparent, `border-strong`, `text-primary` |
| Hover | Fill darkens ~6% | Border darkens; background `stone-100` |
| Focus-visible | **Instant** `focus-ring` 2px at 2px offset — never animated | Same |
| Active | `transform: translateY(1px)` | Same |
| Disabled | `ink-400` fill, no pointer, `aria-disabled` | Muted border and label |
| Loading | Label swaps to "Sending…", control disabled, `aria-busy="true"` | Same |
| Error | Not a button state — see 5.6 | — |
| Success | Not a button state — see 5.6 | — |

**Responsive.** Full width below 414px where it is the primary action. Minimum 48px height at all widths. **Label never wraps to two lines.**

**Accessibility.** Real `<button>` or `<a>` by semantics, never a styled `<div>`. Visible focus at ≥3:1. Label describes the action, not the mechanism.

**Content constraints.** The primary CTA reads **"Get a Free Financing Assessment"** verbatim at every placement. Approved secondary labels only: See How We Work · Discuss Your Situation · Discuss Your Project · Discuss Cash Flow · Speak to a Specialist · Contact Us · Submit Enquiry.

**Use / no-use.** One primary per section. No pulsing, glow, gradient, hover-scale or icon-only primary actions.

## 5.4 Links

**Purpose.** Navigate without committing.

**Variants.** Inline (underlined) · Standalone (underlined, medium weight) · Navigation (underline on hover and focus only).

**States.** Default underlined · Hover thickens underline · Focus-visible ring, instant · Active slight colour shift · Visited not differentiated · Disabled not used · Loading, error and success do not apply.

**Responsive.** Inline links wrap naturally. Standalone links never wrap to two lines.

**Accessibility.** Link text meaningful out of context — never "click here" or a bare "read more". External links state that they are external in their accessible name. Underline is never removed from inline links in body copy.

**Content constraints.** Link text describes the destination.

**Use / no-use.** Links navigate; buttons act. A link styled as a button remains a link if it navigates.

## 5.5 Form fields

**Purpose.** Collect the four assessment fields.

**Variants.** Text · Email · Telephone · Textarea. No select, radio or checkbox at launch, except a consent checkbox if legal review requires one.

| State | Treatment |
|---|---|
| Default | `surface-raised`, `border-strong` 1px, label above |
| Hover | Border darkens slightly |
| Focus-visible | **Instant** 2px `focus-ring` at 2px offset; border strengthens |
| Filled | No visual change beyond content |
| Disabled | Not used at launch |
| Loading | Fieldset disabled during submit; `aria-busy` on the form |
| Error | `state-error` border, icon, message below, `aria-invalid="true"` |
| Success | Form-level only — see 5.6 |

**Responsive.** Single column at every width. Input 17px minimum to prevent iOS zoom. Field height ≥48px. Textarea minimum four rows.

**Accessibility.** **Persistent visible `<label>` always — never placeholder-only.** `for`/`id` bound. Errors referenced by `aria-describedby` and announced via a live region. Required fields marked in text, not by asterisk alone. Input purpose declared via `autocomplete`.

**Content constraints.** Exactly four fields: **Name, Email, Phone number, Message.** No company, amount, industry or qualification fields.

**Use / no-use.** No multi-step flow. No progressive disclosure. No inline validation firing before blur.

## 5.6 Validation messages

**Purpose.** Explain what to fix, or confirm what happened.

**Variants.** Field-level error · Form-level error · Form-level success.

**States.** Hidden · Shown. Messages persist until resolved and do not auto-dismiss.

**Responsive.** Full width of the field or form. Never truncated.

**Accessibility.** Field errors use `aria-invalid` plus `aria-describedby`. Form-level messages use `role="alert"`, with focus moved to the message on submit failure. **Never colour-only** — every message carries an icon and explicit text.

**Content constraints.** Errors explain rather than scold: "Enter an email address we can reply to," not "Invalid input." The approved success and error copy in `docs/master-website-brief.md` §3.2 is used verbatim, including the direct-contact fallback on error.

**Use / no-use.** No toasts. No modal confirmations. No auto-dismissal.

## 5.7 Consent and disclaimer blocks

**Purpose.** Carry required legal and qualifying language at full legibility.

**Variants.** Form consent · Form disclaimer · Calculator disclaimer · Page-level regulatory disclaimer.

**States.** Static. No collapsed state exists. Hover, focus, disabled, loading, error and success do not apply.

**Responsive.** Full container width; never truncated, never scrolled inside a fixed-height box.

**Accessibility.** Ordinary body text in the reading order, adjacent to what it qualifies. Never `aria-hidden`. Never visually hidden at any breakpoint.

**Content constraints.** Approved wording verbatim from `CLAUDE.md` and the master brief. The calculator disclaimer sits adjacent to the results; the form disclaimer sits adjacent to the submit control.

**Use / no-use.** **Never** small, italic, grey-on-grey, behind an accordion or tooltip, below the fold of its module, or dismissed on interaction. This is the most-audited rule in the system.

## 5.8 Alert blocks

**Purpose.** Non-form contextual notices — for example a reviewed-date note on time-sensitive content.

**Variants.** Information · Warning. No success or error variant outside forms.

**States.** Static. Not dismissible.

**Responsive.** Full container width; stacks above the content it qualifies.

**Accessibility.** Icon plus text; colour never the sole carrier. `role="note"` where appropriate — not `role="alert"` unless genuinely urgent.

**Content constraints.** One or two sentences. No claims. No calls to action.

**Use / no-use.** Not for marketing. Not for urgency. Not for cookie or consent prompts, which the consent manager handles.

## 5.9 Problem set

**Purpose.** Let the visitor self-identify in one screen.

**Variants.** Four-item grid (desktop) · Four-item stack (mobile).

**States.** Default · Hover (border strengthens, no lift) · Focus-visible (ring on the whole item) · Active. Disabled, loading, error and success do not apply.

**Responsive.** 2×2 at ≥1024px and at 768px; single column below. Equal-height items; content determines row height.

**Accessibility.** Each item is a single link with one accessible name. No nested interactive elements. Consistent heading level across items.

**Content constraints.** Exactly four situations, one short sentence each, each linking to a relevant service page.

**Use / no-use.** **This is the only justified card use on the site** — the items are genuinely parallel and independently actionable. Hairline border, minimal radius, flat surface, no shadow, no hover lift.

## 5.10 Service-pathway index

**Purpose.** Show breadth of routes without diluting the construction focus.

**Variants.** Typographic index only. **No card variant exists.**

**States.** Default · Hover (rule strengthens, label underlines) · Focus-visible · Active. Others do not apply.

**Responsive.** Single column at all widths — a list, not a grid. Hairline rule between entries at every width.

**Accessibility.** Each entry is one link containing heading and description. Rules are decorative and hidden from assistive technology.

**Content constraints.** Route name as heading, one-line situation, "Explore" affordance. Five routes.

**Use / no-use.** **Never rendered as cards.** Rendering both the problem set and the pathways as cards produces nine card objects across consecutive bands — the generic pattern §1.6 bans.

## 5.11 Project / cash-gap timeline diagram

**Purpose.** Show where the gap opens between money committed and money received. The strongest non-claim content on the site.

**Variants.** Full project timeline (Construction & Engineering) · Cash-conversion cycle (Trade) · Contract-to-capital escalation (Project & Private Capital). One component, three content configurations.

**States.** Static. No interaction, no animation.

**Responsive.** Horizontal sequence at ≥768px. **Vertical sequence below** — never a horizontally scrolling diagram. Legible at 320px, or replaced there by the ordered text list that always accompanies it.

**Accessibility.** Inline SVG with `role="img"` and a full text alternative. The same information exists as an ordered list in the DOM — the diagram is an enhancement, never the sole carrier. Stages labelled in text; meaning never carried by colour.

**Content constraints.** **No figures. No durations presented as typical. No implication that any financing route closes the gap.** It shows the shape of the problem, not a promised solution.

**Use / no-use.** Line-based, monochrome plus one accent. No isometric 3D, no decorative abstract shapes, no animation, no scroll-linked reveal.

## 5.12 Qualitative route-comparison table

**Purpose.** Help a reader decide which conversation to have. The one table that earns full design investment.

**Variants.** Four-column desktop table · Stacked blocks below 768px (5.13).

**States.** Static. Faint row-hover background is permitted; no row is clickable as a whole.

**Responsive.** Table at ≥768px. Below that, the block pattern in 5.13 — never horizontal scroll, never a card grid, never a collapsed accordion.

**Accessibility.** A real `<table>` with `<caption>`, `<th scope="col">` and row headers where meaningful. Not a div grid. Readable in greyscale.

**Content constraints.** Columns: **Financing route · May be relevant for · What usually needs assessing · Next step.** **No amounts, rates, EIR, LTVs, tenures, timelines or percentages — ever.** A visible "what this does and does not mean" note sits beneath at body size, with a reviewed date where content is time-sensitive.

**Use / no-use.** Any additional table requires explicit justification against its mobile cost. Tables are the highest-risk component on small screens.

## 5.13 Mobile route-comparison block pattern

**Purpose.** Carry the comparison at 320–767px without becoming a table or a card grid.

**Variants.** One block per financing route.

**States.** Static.

**Responsive.** Each route is a self-contained block: route name as heading, then the three remaining columns as **label-and-value pairs on their own lines**, then the next-step link last, with a hairline between blocks. **Column labels repeat inside every block** so no block depends on a header row that has scrolled out of view.

**Accessibility.** A definition list or heading-plus-list structure — not a table forced into a narrow viewport. Verified at 320px.

**Content constraints.** Identical content to the desktop table. Nothing is dropped on mobile.

**Use / no-use.** Never horizontal scroll. Never a swipe carousel. Never truncation with "see more".

## 5.14 Direct-bank-versus-advisory comparison

**Purpose.** Make the differentiation argument without a strawman.

**Variants.** Two-column on dark (desktop) · Stacked with retained headings (mobile).

**States.** Static.

**Responsive.** Side by side at ≥768px. Below that, sequential blocks **with their column headings retained** — dropping the heading turns the comparison into two unrelated lists.

**Accessibility.** Each column has a real heading. **Meaning never carried by colour or glyph alone** — no bare ✗/✓ marker system. Readable in greyscale.

**Content constraints.** Neutral, process-focused language. Going direct is described **honestly as a reasonable path**, not as a mistake. **Prohibited:** the ex-banker claim, the "full credit narrative before any document" claim, and any implication of guaranteed advantage, speed or certainty.

**Use / no-use.** Not adjacent to the route comparison — the two comparison modules are separated by at least one band of a different kind.

## 5.15 Calculator controls, results and disclaimer

**Purpose.** A planning aid. **Never a quote, offer, approval or guarantee.**

**Variants.** Inline module (homepage) · Full page (`/tools/monthly-repayment-calculator/`).

| State | Treatment |
|---|---|
| Default | Empty or sensible defaults; results area present and labelled |
| Hover / Focus | Per 5.5 field states; focus instant, never animated |
| Active | Live recalculation on valid input change |
| Disabled | Not used |
| Loading | Not applicable — calculation is synchronous and client-side |
| Error | Out-of-range or non-numeric input explained inline; results suppressed and replaced with an explanatory line, never a stale figure |
| Success | Not applicable — a result is not a success state |

**Responsive.** Single column below 768px; inputs full width; results in a clearly separated block directly beneath. Fully usable at 320px with the disclaimer legible without scrolling past the result.

**Accessibility.** Inputs are labelled fields with units stated in text. Results sit in an `aria-live="polite"` region. Tabular figures throughout. Without JavaScript it degrades to a stated formula and a worked example rather than a broken control.

**Content constraints.** Inputs: financing amount, illustrative annual rate, tenure. Outputs: estimated monthly repayment, estimated total repayment, estimated interest. **The calculation basis is stated in the interface** — explicitly simple interest or reducing-balance amortisation, never ambiguous. The approved disclaimer sits **adjacent to the results at body size**.

**Use / no-use.** No gauges, dials, progress rings, animated counters or charts. Nothing that dramatises a number. **Not a fee calculator** — no fee input, no fee output.

## 5.16 FAQ accordion

**Purpose.** Remove objections in the reader's own words.

**Variants.** Preview (5–6 questions) · Full index (FAQ page, grouped).

**States.** Collapsed · Expanding · Expanded · Collapsing · Focus-visible. Disabled, loading, error and success do not apply.

**Responsive.** Full width, single column, all breakpoints. Tap target spans the full question row, ≥48px tall.

**Accessibility.** Native `<details>`/`<summary>`, or a button-based pattern with `aria-expanded` and `aria-controls`. Keyboard operable. **All answers present in the DOM** and readable with JavaScript unavailable. Heading semantics preserved inside the summary.

**Content constraints.** Question-form headings. Each answer opens with a direct answer sentence before elaboration. No claims in answers.

**Use / no-use.** Never used to hide disclaimers, qualifying language or compliance text. Not more than one accordion per page.

## 5.17 CTA band

**Purpose.** Convert to human contact at defined intervals.

**Variants.** Dark full band (final CTA) · Inline light band (mid-page).

**States.** Static container; button states per 5.3.

**Responsive.** Centred single column below 768px; button full width below 414px. Generous padding preserved on mobile — this band must not feel compressed.

**Accessibility.** Heading precedes the action. Not a landmark. Button focus instant and visible against the dark surface at ≥3:1.

**Content constraints.** One heading, at most two supporting lines, one primary action. The trust note ("Assessment first. Clear next steps. No guarantee of approval.") may accompany it.

**Use / no-use.** One primary action only. No competing secondary CTA in the same band. No urgency, countdown or scarcity.

## 5.18 Contact and WhatsApp controls

**Purpose.** Direct human contact by the visitor's preferred channel.

**Variants.** Inline link · Footer block · Mobile menu block. **No floating WhatsApp bubble at launch.**

**States.** Default · Hover · Focus-visible · Active. Others do not apply.

**Responsive.** `tel:` and `wa.me` links always tappable, never below 48px. The displayed phone number uses tabular figures and never wraps mid-number.

**Accessibility.** Accessible names state the channel — "Call +65 8011 8194", "Message us on WhatsApp". WhatsApp links state that they open an external app.

**Content constraints.** Phone `+65 8011 8194` · WhatsApp `https://wa.me/6580118194` · Email `admin@thebrokerage-advisory.com` · Address `31A Lowland Road, Singapore 547424`. Identical NAP formatting everywhere. Pre-filled WhatsApp copy is editable.

**Use / no-use.** **WhatsApp must never be the only visible conversion route.** No invented opening hours — use "Walk-in visits welcome by arrangement."

## 5.19 Footer

**Purpose.** Complete NAP, navigation and legal.

**Variants.** One footer across all pages.

**States.** Static; link states per 5.4.

**Responsive.** Single column below 768px, grouped with headings. Two or three groups at 768px; full layout at ≥1024px.

**Accessibility.** `<footer>` with `<nav aria-label="Footer">`. Address in a real `<address>` element. Heading structure for each group.

**Content constraints.** Brand, full navigation, phone, WhatsApp, email, address, "Walk-in visits welcome by arrangement," legal links, cookie preferences, copyright.

**Use / no-use.** **Must not read as the generic four-columns-of-links-plus-social-row pattern** — a recognised AI fingerprint. Group by purpose with real headings and asymmetric group sizes. No newsletter signup. No social icon row unless real accounts exist. No competing CTA.

## 5.20 Map and contact block

**Purpose.** Show the public walk-in office.

**Variants.** Static map image with a link out (preferred) · Embedded interactive map only if consent-compatible.

**States.** Default · Loaded · Failed (falls back to address plus a directions link).

**Responsive.** Full width below 768px at a fixed aspect ratio; beside the contact details at ≥1024px.

**Accessibility.** Map is `role="img"` with a text alternative, or marked decorative where the address is adjacent in text. **The address is always available as text** — never only inside the map.

**Content constraints.** Address exactly as specified. No invented opening hours. "Walk-in visits welcome by arrangement."

**Use / no-use.** Lazy-loaded. Must not load third-party scripts before consent. Never the only place the address appears.

## 5.21 Placeholder components

**Purpose.** Make missing assets visible during development so they cannot ship silently.

**Variants.** `METRIC TO CONFIRM` · `APPROVED CASE STUDY REQUIRED` · `LICENSED IMAGE REQUIRED` · `DO NOT SHIP PLACEHOLDER`.

**States.** Visible in development only.

**Responsive.** Occupies the footprint of the content it stands in for, so layout review is realistic.

**Accessibility.** Announced as placeholder content; never mistakable for real content.

**Content constraints.** Label in capitals, in an obviously unfinished internal style. Never styled to resemble finished content.

**Use / no-use.** **Development only. Never in public production.** At launch each placeholder is either resolved with approved content or **the module containing it is removed from the page entirely** — not shipped empty, not stubbed, not hidden with CSS. An audit or build step must fail if any placeholder token appears in a production bundle.

---

# 6. Motion rules

**Intensity 2/10. Native CSS transitions only.** No motion library. Adding `motion/react` or any equivalent is an architecture change requiring founder approval.

| Rule | Specification |
|---|---|
| Properties | **`opacity` and `transform` only.** Never layout properties. |
| Easings | `--ease-standard`, `--ease-enter`, `--ease-exit`. **Browser-default `ease` is not permitted.** |
| Durations | `--dur-fast` 120ms · `--dur-base` 180ms · `--dur-slow` 240ms |
| Focus rings | **Never animated.** Instant on focus, ≥3:1 contrast. |
| Reduced motion | `prefers-reduced-motion: reduce` removes non-essential motion or caps it at a **150ms opacity transition** |

**Permitted — interaction feedback only:** hover and active states, focus state changes, accordion expand and collapse, form validation state changes, calculator result updates, mobile menu open and close.

**Prohibited:** scroll-arrival reveals, stagger cascades, scroll-linked scrubbing, parallax, counting numbers, pulsing CTAs, autoplay video, hover-scale on cards or images, gradient hover sweeps, and **any layout that depends on JavaScript to become readable**.

All content is present and readable on load. Because nothing animates on arrival, the reduced-motion experience is nearly identical to the default — which is the intent, not a limitation.

---

# 7. Page archetype matrix

Shared tokens and components are mandatory. **Page rhythm, lead content and primary visual mechanism must vary.** No page may be another page with the nouns changed.

| Page | Archetype | Primary visual mechanism | Lead content | Dark bands |
|---|---|---|---|---|
| **Home** | Editorial credibility narrative | Alternating surface bands carrying a diagnosis-first argument arc | Headline + trust line | Hero (desktop), advisory argument, final CTA |
| **Business Financing** | Diagnostic decision framework | Situation → what-needs-assessing pairing list | Situation set | Final CTA only |
| **Trade Financing** | Cash-conversion-cycle explainer | Cycle diagram with the gap marked | Cycle diagram | Final CTA only |
| **Property Financing** | Collateral and ownership consideration framework | Layered consideration stack | Consideration stack | Final CTA only |
| **Project & Private Capital** | Contract-to-capital timeline | Escalation ladder: contract scale → structure complexity | Escalation ladder | Final CTA only |
| **Performance Bonds** | Readiness and requirement checklist | Definition → trigger → preparation checklist | Plain-English definition | Final CTA only |
| **Construction & Engineering** | Operating-project cash-gap timeline | Project timeline: tender → mobilisation → claims → retention → bond → final account | Project timeline | Final CTA only |
| **How It Works** | Transparent six-step method | Numbered vertical process spine | Step 1 | Final CTA only |
| **Calculator** | Practical planning tool | The working tool, high on the page | Calculator controls | None |
| **Free Assessment** | Low-friction contact conversion | Single-column form, nothing competing | The form | None |
| **Contact** | Local office and direct contact hub | Contact-method set plus map | Contact methods | None |
| **FAQ** | Question-first knowledge index | Grouped question index with accordion | Question index | Final CTA only |
| **About** | Philosophy and operating-principles narrative | Long-form prose with principle pull-outs | Opening statement | Final CTA only |
| **Insights** | Editorial resource index | Dated article index list | Article index | None |

**Enforcement.** No two adjacent service pages may share a section order. Trade's cycle must not be re-skinned as Property's consideration stack. Performance Bonds must not open like a service pitch. Where two pages need the same module — route comparison, FAQ accordion, CTA band — the module is reused unchanged and the composition around it differs.

---

# 8. QA rules

Every item is a gate. Failure blocks launch or carries a written, founder-accepted exception.

## 8.1 Accessibility

- Full keyboard operation; visible focus on every interactive element; logical focus order.
- Skip-to-content link present and functional.
- All form fields have persistent visible labels; errors announced and never colour-only.
- One H1 per page; no skipped heading levels.
- Images have appropriate alternative text; decorative images hidden from assistive technology.
- Diagrams have text alternatives and an equivalent DOM text representation.
- Touch targets ≥48×48px with ≥8px spacing.
- Content complete and readable with JavaScript unavailable.

## 8.2 Contrast

- Body and heading text ≥4.5:1; large display ≥3:1; non-text UI and focus rings ≥3:1.
- Every final pairing tested in both light and dark variants.
- `gold-500` never used as text or meaningful UI on light surfaces.
- `ink-400` never carries information.
- Page fully comprehensible when desaturated to greyscale.

## 8.3 Mobile

- Verified at 320, 375, 414, 768, 1024, 1440px.
- No horizontal overflow at any width.
- No `overflow-x: hidden` / `clip` concealing a defect.
- No two-line clickable labels.
- Route comparison renders as per-route blocks with repeating labels at 320px.
- Calculator usable and disclaimer legible at 320px.
- Base body 17–18px; no text below 15px; form inputs ≥17px.
- Mobile hero on the light surface.

## 8.4 Design originality

- No reference layout, visual, typeface, colour value, icon, text, code or interaction pattern reproduced.
- Eyebrows: maximum two per page, each justified; none in tag-left / heading-right arrangement.
- Every page carries its assigned archetype; no cloned templates.
- Footer does not read as the generic four-column pattern; nav is not the minimal two-link pattern.
- No bento grid, fake dashboard, gradient blob, glow or "trusted by" strip.
- Cards used only for the problem set; pathways render as a typographic index.
- Gold within its ≤5% budget, as details and fills rather than large areas.
- No italic headings anywhere.
- Hero works with photography removed.
- No module whose visual weight exceeds its informational content.

## 8.5 Compliance and claims

- No rates, EIR, amounts, LTVs, tenures, timelines or percentage limits.
- No fees, fee models, commissions or fee ranges; no fee calculator.
- No success-rate figures, placement volumes or approval claims.
- No ex-banker claim, credit-narrative claim or guarantee language.
- No client names, lender names, logos or testimonials.
- No content traceable to the confidential internal team reference document.
- Approved network wording used verbatim.
- Primary CTA reads "Get a Free Financing Assessment" at every placement.
- No invented opening hours.

## 8.6 Disclaimer visibility

- Every disclaimer at body size, not italic, not low-contrast, not collapsed, not below its module's fold.
- Calculator disclaimer adjacent to results; form disclaimer adjacent to submit.
- No disclaimer hidden behind an accordion, tooltip or dismissible control.
- Disclaimers legible at 320px without scrolling past the content they qualify.

## 8.7 Calculator and form UX

- Form carries exactly four fields.
- Server-side validation, honeypot or CAPTCHA, rate limiting, sanitisation.
- Configurable destination via environment variable; no hardcoded credentials.
- No message text or PII sent to GA4 or any third-party analytics.
- Calculator formula documented, tested, and its basis stated in the interface.
- Calculator degrades gracefully without JavaScript.
- Success and error states use the approved copy, including the direct-contact fallback.

## 8.8 Placeholder removal

- No `METRIC TO CONFIRM`, `APPROVED CASE STUDY REQUIRED`, `LICENSED IMAGE REQUIRED` or `DO NOT SHIP PLACEHOLDER` token anywhere in a production build.
- Every unsupported proof module removed from the page, not shipped empty or stubbed.
- No placeholder hidden with CSS rather than deleted.
- Pre-launch placeholders in `docs/design-reference-study.md` §8.3 each resolved or explicitly accepted as a launch blocker.
