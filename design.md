# design.md — The Brokerage Advisory

**This is the locked design system for this project.** It is the portable contract: any tool, skill or contributor reads this first and defers to it.

**Unified brand site.** Every page shares one token set, one type scale, one component library and one voice. Hallmark's diversification rule is **inverted** here — pages must share the system, not rotate away from each other. Variety lives in page composition (see §8), never in tokens.

**Authority.** This file sits at position 2 in the hierarchy defined in `CLAUDE.md`. It is subordinate to `docs/master-website-brief.md` and `docs/claims-and-compliance-rules.md`, and it governs everything below it.

**Status:** Provisional. Colour values are specified and contrast-tested but await founder sign-off on the two open items in §10.

---

## 1. Identity

| | |
|---|---|
| **Site** | The Brokerage Advisory — Singapore independent financing advisory |
| **Canonical domain** | `https://thebrokerage.sg/` |
| **Genre** | Editorial |
| **Character** | Premium, calm, practical, credible, commercially mature |
| **Governing principle** | Substance over polish — credible because specific, direct and unadorned |
| **Primary audience** | Established owner-led Singapore construction and engineering businesses, without excluding business, trade, property and project-financing audiences |
| **Primary CTA** | Get a Free Financing Assessment |

**Reader test.** An owner-led construction business should finish the hero thinking *"they deal with businesses like mine"* — not *"this is an impressive website."*

---

## 2. Colour

Three-layer token architecture: primitive → semantic → component. Components never reference primitives or raw values.

### Primitives

| Token | Value | Purpose |
|---|---|---|
| `--navy-900` | `#0B172A` | Deepest surface |
| `--navy-800` | `#111827` | Dark surface |
| `--navy-700` | `#1B2740` | Dark elevated / hairline on dark |
| `--ink-900` | `#172033` | Primary text on light |
| `--ink-600` | `#4A566B` | Secondary text on light |
| `--ink-400` | `#7C8798` | Disabled / non-text only |
| `--ivory-50` | `#F7F5F0` | Primary warm reading surface |
| `--stone-100` | `#EFEBE3` | Secondary warm surface |
| `--stone-200` | `#E2DCD1` | Hairline on warm |
| `--white` | `#FFFFFF` | Field / raised surface |
| `--gold-500` | `#C9A227` | Accent — dark surfaces and fills only |
| `--gold-300` | `#E0C76A` | Accent text on dark surfaces |
| `--gold-ink-700` | `#7A6414` | Restricted: gold-toned text on light |
| `--red-700` | `#A32B22` | Error on light |
| `--red-300` | `#E8A49E` | Error on dark |
| `--green-700` | `#1F6B4A` | Success on light |
| `--green-300` | `#8FD3B0` | Success on dark |
| `--amber-800` | `#8A5A10` | Warning on light |
| `--blue-700` | `#1F4E79` | Information on light |

### Verified contrast

| Pairing | Ratio | Verdict |
|---|---|---|
| `ink-900` on `ivory-50` | ~14.7:1 | Pass AAA |
| `ink-600` on `ivory-50` | ~6.7:1 | Pass AA |
| `ink-400` on `ivory-50` | ~3.3:1 | **Non-text only** |
| `white` on `navy-900` | ~18.2:1 | Pass AAA |
| `gold-300` on `navy-900` | ~10.9:1 | Pass AAA |
| `gold-500` on `navy-900` | ~7.5:1 | Pass AA |
| `ink-900` on `gold-500` | ~7.4:1 | Pass AA — gold fill with navy label |
| `gold-500` on `ivory-50` | **~2.2:1** | **FAIL — never text or meaningful UI on light** |
| `gold-ink-700` on `ivory-50` | ~5.3:1 | Pass AA — restricted use only |
| `red-700` on `ivory-50` | ~6.5:1 | Pass AA |
| `green-700` on `ivory-50` | ~5.8:1 | Pass AA |

**The gold constraint is load-bearing.** Champagne gold fails contrast on the warm light surface. On light surfaces gold appears **only** as a fill behind dark text, or as a non-informational hairline. Eyebrows, links and labels on light use `ink-600`, never gold.

### Gold budget

Gold occupies **≤5% of visible surface on any viewport**. Permitted: primary CTA fill, thin rules, active-state marks, small non-informational marks, accent text on dark. Prohibited: body text, gradients, glow, metallic texture, large fills, gold-on-black luxury signalling, gold as a success or approval signal.

### Never colour alone

Every state, comparison and status carries a text label or shape in addition to colour. All comparison modules must be readable in greyscale.

---

## 3. Typography

**Single modern sans superfamily. No serif in this implementation.**

| | |
|---|---|
| **Primary** | Inter (variable), self-hosted and subset |
| **Documented alternative** | IBM Plex Sans |
| **Stack** | `"Inter var", Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| **Numerics** | `font-variant-numeric: tabular-nums slashed-zero` on calculator, tables and phone numbers |

| Role | Mobile | Desktop | Line height | Notes |
|---|---|---|---|---|
| `display-xl` | 40px | 64px | 1.05 | H1 only |
| `display-l` | 32px | 48px | 1.10 | Major section head |
| `heading-l` | 26px | 34px | 1.20 | H2 |
| `heading-m` | 21px | 26px | 1.25 | H3 |
| `heading-s` | 18px | 20px | 1.30 | H4 |
| `body-l` | 18px | 20px | 1.55 | Lead paragraph |
| `body` | 17px | 18px | 1.60 | Default |
| `body-s` | 16px | 16px | 1.50 | Table cells, captions |
| `label` | 15px | 15px | 1.30 | Uppercase, 0.06em tracking |
| `disclaimer` | 17px | 18px | 1.60 | **Same as body. Never smaller.** |

**Hard rules.** No text below **15px** anywhere, including table cells, footer legal and disclaimers. **No italics on headings or disclaimers.** Body measure 60–75ch; display measure 20–28ch. `overflow-wrap: anywhere` on display headings where a long unbroken word would otherwise force overflow. One H1 per page.

---

## 4. Spacing, container and grid

4pt scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`.

| Container | Max width | Use |
|---|---|---|
| `prose` | 720px | Long-form reading |
| `content` | 1200px | Default sections |
| `wide` | 1200px | Tables, calculator |

Gutters: 16px (320–414), 24px (768), 32px (1024), 40px (1440). Grid: 4-col mobile, 8-col tablet, 12-col desktop.

Section padding: 48–64px mobile, 72px tablet, 96–128px desktop. Vertical rhythm follows content; sections are not padded to a uniform height.

---

## 5. Surfaces

| Surface | Value | Use |
|---|---|---|
| `surface-page` | `ivory-50` | Default reading surface |
| `surface-raised` | `white` | Fields, the rare card |
| `surface-secondary` | `stone-100` | Alternate light band |
| `surface-dark` | `navy-900` | Desktop hero, advisory argument, final CTA |
| `surface-dark-alt` | `navy-800` | Footer |

Dark surfaces occupy roughly **30–40%** of total page area, concentrated at arrival, argument and close. **The mobile hero uses the light surface** — dark surfaces are the worst case for outdoor phone legibility, and this audience arrives outdoors. Surface transitions are clean edges: no gradient fades, no glass, no parallax seams.

---

## 6. Motion

**Intensity 2/10. Native CSS transitions only. No motion library; adding one requires founder approval.**

| Token | Value |
|---|---|
| `--ease-standard` | `cubic-bezier(0.2, 0, 0.2, 1)` |
| `--ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--dur-fast` | `120ms` |
| `--dur-base` | `180ms` |
| `--dur-slow` | `240ms` |

**Rules.** Animate **opacity and transform only** — never layout properties. **Never animate focus rings.** Use the named easings; browser-default `ease` is not permitted. No scroll reveals, parallax, pulsing, counters, autoplay video or hover-scale. Nothing may depend on JavaScript to become readable. Under `prefers-reduced-motion: reduce`, non-essential motion is removed or capped at a **150ms opacity transition**.

---

## 7. Voice

Advisory, experienced, direct, commercially aware. Plain English; operational register over institutional register. Write "money committed before a progress claim is certified," not "working-capital timing mismatch."

Avoid entirely: hype, urgency, guarantee language, "bespoke", "discerning", "curated", exclusivity cues, and any wealth-advisory register.

---

## 8. Structural variety

Shared tokens and components are mandatory. **Page rhythm, lead content and primary visual mechanism must differ per page.** No page may be a previous page with the nouns changed. The archetype per page is fixed in `design-system/the-brokerage-advisory/MASTER.md` §7 and in each page override file.

**Eyebrows are off by default**, capped at one to two per page, permitted only where genuinely ordinal, categorical, or where the reader needs orientation the heading cannot give. Never a hanging tag-left / heading-right header. When used, stacked directly above the heading.

**Cards are not a default.** Used only where content is genuinely parallel and independently actionable.

---

## 9. Compliance boundaries carried into design

These are design constraints, not only content rules.

- No public fee disclosure of any kind; no fee calculator.
- No rate, LTV, amount, tenure, timeline, approval, success-rate, placement-volume, lender-partnership or testimonial claim.
- Approved network wording only: **"banks and financiers in our local and overseas network."**
- The repayment calculator ships at launch and is **illustrative only** — never a quote, offer, approval or guarantee.
- **Calculator and form disclaimers render at body size, never small, never italic, never low-contrast grey, never collapsed behind a toggle.**
- Assessment form carries exactly four fields: name, email, phone number, message.
- Office address is public; **walk-in visits welcome by arrangement**. No invented opening hours.
- No imagery implying office, team or operational scale the firm does not have. No client documents, premises, vehicles or identifiable personnel.
- Internal placeholders (`METRIC TO CONFIRM`, `APPROVED CASE STUDY REQUIRED`, `LICENSED IMAGE REQUIRED`, `DO NOT SHIP PLACEHOLDER`) are development-only. **Unsupported proof modules are omitted from the public launch site**, not shipped empty or stubbed.

---

## 10. Open founder decisions

1. **Final gold token value.** `#C9A227` fails contrast on the ivory surface and is therefore restricted to fills and dark surfaces. If gold-toned text on light is wanted anywhere, `gold-ink-700` must be approved as a second accent value.
2. **Dark desktop hero versus light throughout.** Approved as permitted-if-restrained; the mobile hero is light regardless. Confirm the desktop hero surface at design review.

Carried forward from `docs/design-reference-study.md` §8.2: the black-and-gold versus navy-and-ivory question is resolved in favour of navy-led editorial, and the serif question in favour of sans-only. Both are recorded as founder-approved.
