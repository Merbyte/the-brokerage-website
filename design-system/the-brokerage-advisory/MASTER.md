# MASTER.md — The Brokerage Advisory Design System V2

**Status:** Current design-system specification  
**Derived from:** `docs/creative-direction-v2.md`  
**Business/compliance authority:** `docs/master-website-brief.md` and `docs/claims-and-compliance-rules.md`

This is an implementation-grade specification. It defines the visual system without delegating art direction to a skill, framework or reference website.

---

# 1. Brand expression

## 1.1 Position

**The Brokerage Advisory** is an independent Singapore financing advisory.

Brand line:

> **Black & Gold — Premium Financial Advisory**

Creative territory:

> **CHAMBER × WORKS**

The visual system must communicate:
- experience
- commercial maturity
- financing expertise
- clarity
- confidence
- approachability

The emotional outcome is **reassurance**, not excitement.

## 1.2 Design thesis

**CHAMBER** is used when a message needs gravity.

**WORKS** is used when a message needs explanation.

CHAMBER:
- obsidian surfaces
- large-scale composition
- hard transitions
- strong contrast
- visual chapters

WORKS:
- diagrams
- process visualisation
- cash-flow logic
- route comparison
- structured information
- construction/project realities

Do not let CHAMBER become luxury styling or let WORKS become a software dashboard.

---

# 2. Colour system

## 2.1 Primitive tokens

`#0B0B0B` — primary obsidian  
`#111111` — rich black  
`#242424` — charcoal  
`#172033` — primary light-surface ink  
`#4A566B` — secondary light-surface ink  
`#7C8798` — disabled/non-information ink  
`#F7F5F0` — warm ivory  
`#EFEBE3` — warm stone  
`#E2DCD1` — light rule  
`#FFFFFF` — white  
`#C9A227` — champagne gold  
`#E0C76A` — light gold  
`#7A6414` — gold text on light, restricted  
`#C8C5C0` — warm secondary text on dark

These values become CSS primitives. Components never use raw colour values directly.

## 2.2 Semantic mapping

Light:
- page = ivory
- raised = white
- secondary = stone
- primary text = ink-900
- secondary text = ink-600
- action = gold-500
- action text = obsidian-900
- focus = obsidian-900

Dark:
- page = obsidian-900
- raised = obsidian-800
- secondary = obsidian-800
- primary text = white
- secondary text = ink-on-dark-secondary
- action = gold-500
- action text = obsidian-900
- focus = gold-300

## 2.3 Gold semantics

Gold means **action / attention / active state**.

Examples:
- primary CTA
- active route marker
- selected navigation state
- active diagram node

Gold never indicates:
- "best"
- approval
- success
- wealth
- guaranteed outcome

In comparisons, do not colour one financing route as the preferred answer.

## 2.4 Contrast gate

Before design lock:
- verify all colour pairs with a real contrast checker
- re-check hover, focus, disabled and error states
- verify dark/light variants separately
- verify at 320px where small utility text is most likely to shrink visually

Known restriction:

**Champagne gold `#C9A227` is not suitable for informational text on the warm ivory surface.**

---

# 3. Typography

## 3.1 Families

### Manrope

Primary system voice.

Use for:
- navigation
- body
- buttons
- labels
- forms
- tables
- calculator
- diagrams
- metadata

### Source Serif 4

Editorial voice.

Use selectively for:
- major H1/H2 moments
- editorial statement sections
- long-form content where a serif genuinely improves hierarchy

Do not use it for:
- UI
- forms
- financial tables
- calculator
- disclaimer copy
- navigation
- labels

## 3.2 Hierarchy

### Hero

Desktop:
- 72px
- line-height 1.02–1.06
- maximum measure approximately 6 columns
- weight should be strong, never hairline

Mobile:
- 44px
- line-height 1.04–1.08
- rewrap intentionally at 320–414px

### Major section

Desktop:
- 54px

Mobile:
- 34px

### Supporting headings

Desktop:
- 36/28/21px hierarchy

Mobile:
- 28/22/18px hierarchy

### Body

Desktop:
- 18px

Mobile:
- 17px

### Labels

14px minimum, uppercase only where semantic orientation is genuinely useful.

No decorative eyebrow above every section.

## 3.3 Typographic rules

- one H1 per page
- display headings use `overflow-wrap:anywhere` where needed
- no gold display type
- no extreme tracking
- no paragraph in all caps
- tabular numerals for financial values
- readable prose measure: ~65–75ch
- no text below 14px

---

# 4. Layout system

## 4.1 Containers

Default content max width:

**1200px**

Prose:

**680–760px**

Full-bleed bands can use the viewport, but their inner content stays aligned to the 1200px system.

## 4.2 Grid

Desktop:
- 12 columns
- 32px gutter at 1024
- 40px gutter at 1440

Tablet:
- 8 columns
- 24px gutter

Mobile:
- 4-column planning grid
- 16px gutter
- most modules ultimately compose as a single reading column

## 4.3 Asymmetry

Asymmetry is a major quality signal.

Permitted:
- 5/7 and 4/8 content splits
- unequal text/image widths
- offset diagram placement
- large negative space on one side

Not permitted:
- arbitrary misalignment
- decorative asymmetry with no compositional reason
- horizontal overflow caused by off-axis positioning

## 4.4 Spacing

Approved scale:

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`

Do not introduce one-off spacing values to make a component fit.

Section heights follow content.

---

# 5. Surface architecture

## 5.1 Primary surface roles

### Obsidian

Use for:
- desktop hero
- direct-vs-advisory argument
- final CTA
- footer
- selected high-value transition moments

A black area must carry substantive content.

### Ivory

Use for:
- recognition
- service explanation
- route comparison
- calculator
- FAQ
- forms

### Stone

Use for:
- diagrams
- supporting plates
- visual variation
- secondary information modules

### White

Use for:
- form controls
- utility surfaces
- genuinely raised content

## 5.2 Surface rhythm

Do not alternate dark and light simply because the last section was light.

Use argument-led transitions.

Approved homepage rhythm:

1. black impact
2. warm recognition
3. visual explanation
4. calm method
5. route exploration
6. dense comparison
7. black argument
8. utility
9. calm FAQ
10. black close

A fifth major black band needs an explicit content reason.

---

# 6. Component system

## 6.1 Header

Desktop:
- wordmark left
- explicit navigation
- primary CTA visible
- generous horizontal breathing room

Mobile:
- accessible menu
- primary CTA remains findable
- no crowded utility row

Header can adapt text colour/surface to the section underneath.

## 6.2 Button system

### Primary

Gold fill, obsidian text.

Height target:
- 48–52px mobile
- 52–56px desktop

Radius:
- 6px

No gradient.

### Secondary

Prefer a text/action treatment or restrained outline.

Do not make primary and secondary controls visually equal.

## 6.3 Links

Use strong text contrast and an obvious hover/focus state.

Gold may be used for active states, not as general light-surface link colour.

## 6.4 Cards

Use only when:
- items are genuinely parallel
- independence matters
- the container improves scanning

Preferred alternatives:
- ruled rows
- indexes
- plates
- open split layouts

## 6.5 Tables

The route comparison is a flagship component.

Rules:
- warm light body surface
- obsidian header band
- strong row alignment
- generous row height
- 16px body minimum
- no "recommended" styling
- qualitative language only
- visible qualification note
- mobile stack must retain route labels and reading order

## 6.6 Accordions

FAQ:
- generous vertical spacing
- strong question typography
- simple indicator
- no decorative pill container
- keyboard accessible
- motion limited to height/opacity only when technically safe; never obscure content

## 6.7 Form fields

- white control surface
- high-contrast border
- visible label
- obvious focus
- 48px+ control height
- no placeholder-only labelling
- four-field assessment form exactly as specified by CLAUDE/master brief

---

# 7. Diagram system

## 7.1 Diagram principles

Every diagram needs:
1. a clear subject
2. a beginning/reading order
3. visible labels
4. an explicit relationship
5. equivalent text content in the DOM

Do not make the user decipher an infographic.

## 7.2 Visual primitives

Use:
- 1px hairlines
- 2px anchor rules
- circles/nodes only when they convey a stage/state
- arrows only when direction matters
- restrained fills for grouping
- gold for one live/active element where necessary

Avoid:
- generic icon libraries as the diagram itself
- gradient lines
- glows
- dashboard widgets
- fake numerical precision

## 7.3 Hero diagram

Preferred V2 treatment:

A simplified financing/cash-flow structure that shows the relationship between:
- business/project commitment
- cash timing
- certification/payment timing
- financing assessment
- possible route selection

No fabricated numbers.

The diagram is an explanatory model, not a calculator or financial projection.

---

# 8. Photography system

## 8.1 Selection

Prioritise real Singapore context and working environments.

Do not use imagery to imply:
- client relationships
- company scale
- transaction volume
- named lender relationships
- guaranteed outcomes

## 8.2 Placement

Photography works best:
- beside explanatory copy
- inside a documentary plate
- in the construction/project section
- as supporting context for an operational narrative

Avoid:
- huge luxury-property hero photography
- lifestyle montage
- image walls
- meaningless decorative full-bleed photos

---

# 9. Homepage architecture

## 9.1 Hero

Desktop:
- full-bleed obsidian
- 12-column asymmetric grid
- H1 occupies ~5–6 columns
- visual mechanism occupies ~5–7 columns
- CTA group below H1
- one gold object
- hard transition into warm reading surface

The hero must communicate the financing proposition without requiring photography.

## 9.2 Recognition

Move immediately from brand promise to customer situations.

Use:
- editorial matrix
- ruled problem list
- composed four-entry structure

Do not use four identical rounded cards.

## 9.3 Construction / engineering

Bring the priority audience forward.

Use a project/cash-flow sequence such as:

> mobilisation → procurement/subcontractor obligations → progress claim → certification → payment

The visual should show why timing matters, not invent financial figures.

## 9.4 Process

Visualise:

> Assess → Diagnose → Structure → Approach

The six detailed content stages can sit within the four-part spine.

Avoid six equal boxes.

## 9.5 Financing pathways

Use a large route index:
- Business Financing
- Trade Financing
- Property Financing
- Project & Private Capital
- Performance Bonds

Each route should have:
- clear label
- situation description
- concise context
- action link

## 9.6 Route comparison

This is a flagship information-design moment.

Treat it almost like a printed advisory instrument translated to the web:
- strong header
- clear columns
- careful row rhythm
- visible qualifier
- CTA after comparison

## 9.7 Direct vs advisory

Use an obsidian full-width argument band.

Both columns must be neutral and factual.

Do not depict direct banking as bad or advisory as universally superior.

The design communicates that the **sequence of diagnosis before application** is the core difference.

## 9.8 Calculator

Calm ivory utility section.

Inputs:
- financing amount
- illustrative annual rate
- tenure
- basis explanation

Outputs:
- estimated monthly repayment
- estimated total repayment
- estimated interest

The exact formula/rate/test cases remain a content-owner approval gate before implementation.

## 9.9 FAQ

Quiet section. The page should intentionally reduce visual intensity here.

## 9.10 Final CTA

Return to obsidian.

The visual signal is:

> **The conversation can start now.**

Not urgency. Not pressure.

---

# 10. Mobile composition

## 10.1 Principle

Mobile is not a resized desktop.

Recompose:
- hero
- diagram
- image crop
- route index
- comparison
- black bands

## 10.2 Hero

A dark desktop hero may become lighter on mobile if outdoor legibility is materially better.

The final choice requires real-device testing.

## 10.3 Diagrams

Every diagram has:
- a simplified vertical visual
- equivalent readable text/list content

Never require horizontal scrolling to understand the subject.

## 10.4 Tables

At 320px:
- route label stays attached to its data
- columns stack into a readable sequence
- no clipped cells
- no tiny typography

---

# 11. Motion

Motion is an enhancement, not an identity.

Allowed:
- opacity
- translate
- colour
- border state
- accordion state changes

Target duration:
- fast: 140–160ms
- base: 180ms
- slow: 220ms

Easing:
- enter: `cubic-bezier(0, 0, 0.2, 1)`
- standard: `cubic-bezier(0.2, 0, 0.2, 1)`
- exit: `cubic-bezier(0.4, 0, 1, 1)`

No motion dependency without explicit approval.

Under `prefers-reduced-motion: reduce`, remove non-essential transitions.

---

# 12. Responsive acceptance criteria

Every major component must be checked at:

**320 / 375 / 414 / 768 / 1024 / 1440**

Acceptance:
- no horizontal overflow
- no hidden-overflow hack
- no clipped headings
- no two-line critical CTA labels
- no touch target below 48×48px
- no loss of comparison labels
- no unreadable diagram
- no disclaimer reduction below body-size readability

---

# 13. Accessibility acceptance criteria

- WCAG-conscious contrast for all final pairings
- keyboard navigation
- visible focus state
- semantic landmarks
- correct heading hierarchy
- labelled forms
- status not conveyed by colour alone
- comparison content remains understandable in greyscale
- reduced motion
- no essential information locked behind animation

---

# 14. Anti-slop acceptance criteria

Reject the implementation when it exhibits:
- generic SaaS bento layout
- repeated card walls
- hero-copy + three cards + CTA pattern repeated throughout
- excessive pills
- gradient/glass/neon treatment
- stock finance imagery
- fake dashboards
- oversized counters
- decorative gold everywhere
- symmetrical centred compositions with no hierarchy
- obvious reference cloning

The strongest originality signal is **specific financing explanation expressed through the site's own visual grammar**.

---

# 15. Claims and compliance

Design must never encourage unapproved claims.

Never invent:
- rates
- LTVs
- loan limits
- approval times
- success rates
- transaction/placement volume
- lender logos
- testimonials
- client names
- awards
- regulatory credentials

Approved network wording:

> **banks and financiers in our local and overseas network**

Keep required disclaimers visible and readable.

The company is not presented as a bank, financial institution or licensed moneylender unless approved regulatory wording is supplied.

---

# 16. Design-lock checklist

Before declaring V2 implementation-ready:

### Brand
- [ ] Black & Gold is immediately recognisable.
- [ ] Black feels structural, not decorative.
- [ ] Gold reads as action/attention, not luxury.

### Experience
- [ ] The homepage has clear visual chapters.
- [ ] The visual rhythm varies in shape and intensity.
- [ ] Diagrams and information modules are first-class.
- [ ] Photography, when used, adds context.

### Quality
- [ ] Typography has character without wealth-management cues.
- [ ] No section feels like a stock SaaS template.
- [ ] Spacing and alignment remain precise at every target width.
- [ ] Interactions feel polished without heavy animation.

### Accessibility
- [ ] Contrast verified.
- [ ] Focus verified.
- [ ] Reduced motion verified.
- [ ] 320px verified.

### Compliance
- [ ] No unapproved financial claims.
- [ ] Form disclaimer visible.
- [ ] Calculator disclaimer visible.
- [ ] No fake proof.

---

# 17. Source hierarchy

For implementation decisions:

1. `docs/master-website-brief.md`
2. `docs/claims-and-compliance-rules.md`
3. `docs/creative-direction-v2.md`
4. this `MASTER.md`
5. `design.md`
6. application code

Historical reference studies explain prior work but do not override the current system.

Do not reinterpret the brand because an external reference or tool appears to suggest a more conservative direction.
