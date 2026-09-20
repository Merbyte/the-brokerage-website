# design.md — The Brokerage Advisory Design System V2

**Status:** Current design-system summary  
**Authority:** Derived from `docs/creative-direction-v2.md`, within the business/compliance boundaries of `docs/master-website-brief.md` and `docs/claims-and-compliance-rules.md`.  
**Role:** Portable implementation contract. The detailed specification is `design-system/the-brokerage-advisory/MASTER.md`.

---

## 1. Design thesis

> **Black & Gold — Premium Financial Advisory**

Creative territory:

> **CHAMBER × WORKS**

CHAMBER creates confidence through black architectural surfaces, scale and decisive transitions. WORKS makes expertise visible through financing diagrams, operational narratives, comparisons and information graphics.

The site should feel premium because it is **precise, visually confident and substantively useful** — never because it imitates luxury, wealth-management or casino styling.

The visitor should leave the first screen thinking:

> **Experienced financing people. Clear about difficult situations. Worth speaking to.**

Desired emotional outcome: **reassured**.

---

## 2. Core visual grammar

### 2.1 Surfaces

Primary relationship:

> **Obsidian + warm light + restrained gold**

- Obsidian black is a primary brand surface.
- Warm ivory is the default reading surface.
- Warm stone creates diagram/plate variation.
- White is reserved for high-clarity utility surfaces and controls.

Black is structural. It must carry meaningful content.

### 2.2 Composition

Use:
- asymmetrical desktop layouts
- strong horizontal and vertical alignment
- large editorial scale followed by denser information
- hard surface transitions
- open compositions
- ruled structures
- tables, diagrams and process visualisation

Avoid:
- centred-everything layouts
- repeated hero-shaped sections
- card grids as the default
- decorative empty black bands
- template-like light/dark alternation

### 2.3 Gold

Primary semantic meaning:

> **Action / attention / active state**

Permitted:
- primary CTA fill
- active navigation/route marker
- active control state
- critical diagram marker
- small brand marks

Never use gold to mean approval, success, wealth or luxury status.

Never use:
- metallic gradients
- glow
- foil texture
- gold body text on light surfaces
- gold display headings
- decorative gold frames

No arbitrary percentage budget is used. Judge gold by semantic necessity and composition.

---

## 3. Colour tokens

### Primitive tokens

| Token | Value | Role |
|---|---|---|
| `--obsidian-900` | `#0B0B0B` | Primary brand black |
| `--obsidian-800` | `#111111` | Rich black |
| `--charcoal-700` | `#242424` | Dark elevation / rules |
| `--ink-900` | `#172033` | Primary text on light |
| `--ink-600` | `#4A566B` | Secondary text on light |
| `--ink-400` | `#7C8798` | Disabled/non-informational only |
| `--ivory-50` | `#F7F5F0` | Primary reading surface |
| `--stone-100` | `#EFEBE3` | Secondary warm surface |
| `--stone-200` | `#E2DCD1` | Light rules / dividers |
| `--white` | `#FFFFFF` | Utility/raised surface |
| `--gold-500` | `#C9A227` | Primary action accent |
| `--gold-300` | `#E0C76A` | Accent on dark backgrounds |
| `--gold-ink-700` | `#7A6414` | Restricted accent text on light |
| `--ink-on-dark-secondary` | `#C8C5C0` | Secondary text on dark |

State colours remain subordinate to the brand palette:

- error: `#A32B22` on light / approved light red on dark
- success: `#1F6B4A` on light / approved light green on dark
- warning: `#8A5A10` on light / approved light amber on dark
- info: `#1F4E79` on light / approved light blue on dark

### Semantic tokens

| Semantic | Light | Dark |
|---|---|---|
| text-primary | `ink-900` | `white` |
| text-secondary | `ink-600` | `ink-on-dark-secondary` |
| text-disabled | `ink-400` | `charcoal-700` |
| text-accent | `gold-ink-700` — restricted | `gold-300` |
| surface-page | `ivory-50` | `obsidian-900` |
| surface-raised | `white` | `obsidian-800` |
| surface-secondary | `stone-100` | `obsidian-800` |
| border-hairline | `stone-200` | `charcoal-700` |
| border-strong | `ink-600` | `ink-on-dark-secondary` |
| accent | `gold-500` | `gold-500` |
| accent-on | `obsidian-900` | `obsidian-900` |
| focus-ring | `obsidian-900` | `gold-300` |

**Contrast rule:** every final pairing must be checked before design lock. `gold-500` must not be used as informational text or meaningful UI on `ivory-50`; use the dark-text-on-gold treatment for primary actions.

---

## 4. Typography

### Primary family

**Manrope** — interface, body copy, navigation, forms, tables, calculator and supporting information.

### Editorial family

**Source Serif 4** — selective display/editorial moments only.

Use serif to create character, not to create a private-bank aesthetic.

### Rules

- Serif is never gold.
- Serif is never used for form labels, navigation, buttons, tables or calculator UI.
- Serif should appear on major headings only where it improves hierarchy or editorial character.
- Never alternate serif and sans on every line.
- No decorative luxury serif.
- No thin display weights that reduce legibility.

### Type scale

| Token | Mobile | Desktop | Use |
|---|---:|---:|---|
| display-hero | 44px | 72px | homepage H1 |
| display-section | 34px | 54px | major section heading |
| heading-lg | 28px | 36px | H2 |
| heading-md | 22px | 28px | H3 |
| heading-sm | 18px | 21px | H4 |
| body-lg | 19px | 21px | lead/supporting |
| body | 17px | 18px | default copy |
| body-sm | 16px | 16px | captions/table body |
| label | 14px | 14px | navigation/category labels |
| disclaimer | 17px | 18px | legal/calculator disclaimers |

Line-height targets:
- display: 1.02–1.10
- headings: 1.10–1.25
- body: 1.55–1.70
- labels: 1.25–1.40

Do not render production text below **14px**. Critical reading text and disclaimers remain at body size.

Tabular numerals are mandatory for calculations, financial tables and phone numbers.

---

## 5. Grid and spacing

### Container

- maximum content width: **1200px**
- wide visual compositions may use the full viewport while their content remains aligned to the 1200px grid
- prose measure: 680–760px

### Grid

| Width | Columns | Gutter |
|---|---:|---:|
| 320 | 4 | 16px |
| 375 | 4 | 16px |
| 414 | 4 | 16px |
| 768 | 8 | 24px |
| 1024 | 12 | 32px |
| 1440 | 12 | 40px |

### Spacing scale

Use a 4pt-derived scale:

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128` px.

Recommended section padding:
- mobile: 56–72px
- tablet: 72–88px
- desktop: 96–128px

Section height follows content. Never pad a section simply to manufacture visual drama.

---

## 6. Shapes and component language

### Radius

- Default containers/plates: square
- Interactive controls: **6px**
- No pill-shaped primary UI
- No large rounded cards

### Borders

Rules are part of the visual identity:
- use 1px hairlines for structure
- use 2px rules for chapter-level emphasis
- do not box every piece of content

### Buttons

Primary:
- gold fill
- obsidian label
- compact but generous height
- 6px radius

Secondary:
- text/link treatment or quiet obsidian outline depending on context
- never compete visually with the primary CTA

Primary CTA wording:

> **Get a Free Financing Assessment**

### Cards

Cards are permitted, but not the default content structure.

Prefer:
- open rows
- plates
- indexes
- ruled entries
- split compositions
- diagrams
- tables

A card must earn its container by improving comprehension or interaction.

---

## 7. Visual storytelling system

### 7.1 Diagrams

Diagrams are first-class brand assets.

Preferred subjects:
- cash-flow timing
- financing diagnosis
- route comparison
- advisory process
- construction/project cash-flow pressure
- project mobilisation/payment sequence

Visual language:
- hairline geometry
- restrained fills
- strong alignment
- clear labels
- obvious reading direction
- one meaningful gold marker where required

Do not make diagrams look like:
- trading dashboards
- CAD software
- developer tools
- generic infographic templates

### 7.2 Photography

Photography is documentary, not aspirational.

Prefer:
- Singapore construction/engineering environments
- project mobilisation
- industrial/operational environments
- commercial property context
- real working environments

Avoid:
- stock handshakes
- staged smiling executives
- skyline filler
- luxury lifestyle
- aspirational property photography
- imagery that implies unsupported company scale

Image treatment:
- purposeful crop
- sharp edges or restrained 6px frame where useful
- captions where context matters
- image should explain or ground a section, not exist because the section feels empty

### 7.3 Data and comparisons

High-investment modules:
- route comparison table
- direct-vs-advisory comparison
- repayment calculator
- financing pathway index

These modules should feel authored and specific, not like generic SaaS widgets.

---

## 8. Surface architecture

The homepage uses **argument-led surface changes**, not a fixed alternating pattern.

Approved rhythm:

> **Black impact → warm recognition → visual explanation → calm method → route exploration → dense comparison → black argument → utility → calm FAQ → black close**

### Hero

Desktop:
- obsidian
- asymmetric composition
- very large headline
- warm secondary text
- one gold primary CTA
- bespoke financing visual mechanism

Mobile:
- recompose for legibility rather than simply shrinking
- maintain recognisable black/gold identity
- test both light and dark hero compositions on real devices before lock
- default implementation should favour the lighter treatment if outdoor legibility is materially better

### Dark sections

Dark sections must carry substantive content:
- major argument
- significant transition
- diagram/visual explanation
- major CTA
- important comparison

Never ship a full-width black band containing only a headline and decorative gold line.

---

## 9. Homepage component rules

### Header
- clear desktop navigation
- accessible mobile menu
- visible primary CTA
- no permanent hamburger-only desktop navigation
- header treatment may switch with the underlying surface

### Recognition
Use an editorial matrix, ruled entries or another composed structure rather than four generic cards.

### Construction / engineering
Lead with an operational diagram or purposeful documentary image. The module should visually demonstrate understanding of project cash-flow pressure.

### Process
Use a coherent spine/sequence. Do not present six equal cards.

### Pathways
Use an index or structured list. Avoid a five-card wall.

### Route comparison
Use an obsidian header band, warm reading ground, generous rows and a visible qualifier. No "winning" route.

### Direct vs advisory
Use a substantial obsidian argument band with neutral side-by-side comparison. No ticks/crosses that imply moral or commercial superiority.

### Calculator
Treat as a utility product:
- clear inputs
- strong numerical hierarchy
- assumptions visible
- no oversized money-number hero
- disclaimer adjacent to result

### FAQ
Quiet, spacious, low-decoration accordion/list.

### Final CTA
Return to obsidian and make the invitation visually decisive without hype.

---

## 10. Interaction and motion

Motion character:

> **Subtle but alive.**

Use native CSS only unless a dependency is explicitly approved.

Preferred transitions:
- 160–220ms
- opacity
- translate
- colour/border-state changes where useful

Do not use:
- scroll-jacking
- perpetual reveals
- bounce
- pulse
- decorative parallax
- autoplay hero video by default
- animated counters
- hover scaling as the primary interaction signal

Respect `prefers-reduced-motion`. Motion must never be required to understand content.

---

## 11. Responsive behaviour

Mobile is a deliberate composition.

Rules:
- no horizontal overflow
- no hidden overflow used to conceal defects
- no horizontal scrolling for diagrams
- diagrams redraw vertically
- comparison columns stack with labels preserved
- large type re-wraps intentionally
- image crops are deliberate
- CTAs remain obvious and touchable
- primary action remains reachable throughout long pages

Required QA widths:

**320, 375, 414, 768, 1024, 1440px**

---

## 12. Accessibility

- semantic HTML
- keyboard-accessible interactions
- visible focus states
- minimum 48×48px interactive target
- focus ring must meet contrast requirements
- no information communicated by colour alone
- table semantics preserved
- form labels explicit
- disclaimers readable at body size
- reduced-motion support
- no text embedded in essential images
- contrast verified on every final combination

---

## 13. Anti-slop acceptance tests

Reject a section when:
- it could belong unchanged to a generic AI/SaaS landing page
- its black surface is decorative rather than functional
- its gold exists mainly to make the site look expensive
- its cards could be removed without loss of comprehension
- its image does not add real context
- its animation exists only because a modern website "should animate"
- it copies a recognizable external reference structure

The site should feel **designed**, not decorated.

---

## 14. Content/compliance constraints carried into the design system

Never design toward:
- guaranteed approval
- guaranteed rates/terms/savings/timing
- success/approval rates
- unsupported placement volume
- named lenders or lender logos without approval
- fake testimonials
- fabricated case studies or credentials
- public fees
- invented regulatory status
- investment-return presentation

Use approved network wording exactly:

> **banks and financiers in our local and overseas network**

Calculator and assessment-form disclaimers are substantive content and must remain visible and readable.

---

## 15. Implementation guardrail

The design system is a **derivation from Creative Direction V2**, not a licence to reinterpret it.

Do not:
- return to navy-led identity
- reinstate the old fixed dark/gold ratios
- restore sans-only as a fixed brand rule
- rebuild the previous V1 page overrides
- introduce a new visual direction because a library/tool recommends it
- copy an external template

The detailed rules in `design-system/the-brokerage-advisory/MASTER.md` must remain consistent with this summary.
