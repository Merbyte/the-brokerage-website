# Black & Gold Brand Correction — The Brokerage Advisory

**Status:** Founder correction. Binding on `design.md`, `design-system/the-brokerage-advisory/MASTER.md` and all implementation from this point.
**Supersedes:** the navy-led colour direction recorded in `design.md` §2, §5 and §10, and the Option A recommendation in `docs/design-reference-study.md` §6.1.
**Does not change:** typography, spacing, layout, component structure, compliance rules, accessibility rules or claims boundaries.

**Inputs read:** `CLAUDE.md`, `docs/master-website-brief.md`, `docs/claims-and-compliance-rules.md`, `docs/design-inspiration.md`, `docs/design-reference-study.md`, `docs/hallmark-reference-validation.md`, `docs/skill-registry.md`, `design.md`, `design-system/the-brokerage-advisory/MASTER.md`, `docs/reference/The_Brokerage_Founder_Decision_Pack_Completed.docx` §10–11, `docs/reference/The_Brokerage_Comprehensive_Website_Design_Brief.md` §20.

`docs/reference/team_reference_document.docx` was **not** opened. It is marked confidential and is barred as a content source by `docs/design-reference-study.md` §5 rule 5.

---

# 1. Source-of-truth correction

## 1.1 What was wrong

`design.md` line 199 states:

> *"the black-and-gold versus navy-and-ivory question is resolved in favour of navy-led editorial … recorded as founder-approved."*

**That record was incorrect.** Navy-led was an implementation *recommendation* produced during visual discovery, not a founder ruling. The upstream document it cites, `docs/design-reference-study.md` §8.2.1, is explicit that the question was **unresolved**:

> *"These two rules point in opposite directions here, so this is flagged rather than decided. Recommendation: Option A (navy-led) … Option B is available if the founder wants to retain obsidian specifically."*

`design.md` promoted a recommendation to an approval. This document is the founder ruling that discovery asked for, and it selects **Option B, obsidian-led**.

## 1.2 The founder source

The Black & Gold direction is founder-stated, not inferred. `The_Brokerage_Founder_Decision_Pack_Completed.docx` §11 is titled **"Black & Gold Brand Direction"** and reads:

> *"Premium bespoke — signalling beyond financing… Closest fit: Premium Financial Advisory (authority, sophistication, trust, accessibility)."*

The V1 design brief §20.1 names the palette in full: Obsidian Black `#0B0B0B`, Rich Black `#111111`, Champagne Gold `#C9A227`, Light Gold `#E0C76A`, Warm White `#F7F5F0`, White `#FFFFFF`, Charcoal `#242424`.

## 1.3 The corrected direction

> **Black-led premium financial advisory, with restrained champagne-gold accents on warm ivory and stone reading surfaces.**

- Obsidian / rich black is the **primary brand identity dark**.
- Navy is permitted **only** as a subtle blue-black undertone where depth requires it. It is never the main identity surface.
- Gold is an **accent and the primary CTA fill**. It is never body text, and never text or meaningful UI on light surfaces.
- Warm ivory and stone remain the **main reading surfaces**.
- Dark desktop hero is permitted. **The light mobile hero remains mandatory.**
- Dark argument bands and the final CTA use obsidian / rich black / graphite — **not navy**.

## 1.4 Why this does not conflict with the master brief

`docs/master-website-brief.md` §7 already permits this. Its palette table specifies the deep surface as:

> *"`#0B172A` **or approved obsidian equivalent**"*

So the correction sits **inside** the level-1 source of truth. Under the `CLAUDE.md` conflict-resolution order — (1) explicit founder decisions override older source material, (2) the current master brief overrides earlier briefs — there is no unresolved conflict. Only `design.md` and `MASTER.md`, both level 2, need amending.

## 1.5 The one thing this correction does NOT reinstate

The V1 brief §20.2 specifies **55–60% black/dark and 10–15% gold**. **Neither is adopted.**

The founder correction explicitly preserves "warm ivory/stone as main reading surfaces" and "all previously approved accessibility, contrast and anti-slop compliance rules." Those rules include the ≤5% gold budget (`design.md` §2, `MASTER.md` §3.5) and the 30–40% dark ratio (`design.md` §5).

> **The brand identity changes hue. The surface economy does not.**

This is the most likely misreading of this correction and the one most likely to produce a casino-styled site. Dark stays at roughly 30–40% of page area. Gold stays under 5%, and is tightened further on dark surfaces (§4).

## 1.6 The governing test

The founder's own chosen archetype is *"authority, sophistication, trust, **accessibility**."* Accessibility is therefore a **brand attribute stated by the founder**, not merely a compliance obligation. It is the counterweight that keeps black-and-gold from drifting to luxury.

> **Authority without exclusivity.** Every black-and-gold decision must raise authority without lowering accessibility. If a treatment makes the site feel more *exclusive*, it has failed — regardless of how premium it looks.

This replaces no existing test; it sits alongside the "addressed, not impressed" test in `docs/design-reference-study.md` §2.13.4.

---

# 2. Revised colour-role system

## 2.1 Primitives — replaced

The three navy primitives are retired and replaced. **No other primitive changes.**

| Retired | Replacement | Value | Role |
|---|---|---|---|
| `--navy-900` `#0B172A` | `--obsidian-900` | `#0B0B0B` | Primary identity dark — desktop hero, final CTA |
| `--navy-800` `#111827` | `--obsidian-800` | `#111111` | Rich black — advisory argument, footer |
| `--navy-700` `#1B2740` | `--obsidian-700` | `#242424` | Charcoal — hairline and elevation on dark |

Values are taken verbatim from the founder's V1 palette (§20.1) rather than invented.

## 2.2 Primitives — unchanged

Every remaining primitive holds, including **all three colours the founder specified by name**:

| Token | Value | Note |
|---|---|---|
| `--gold-500` | `#C9A227` | Already matches founder's Champagne Gold exactly |
| `--gold-300` | `#E0C76A` | Already matches founder's Light Gold exactly |
| `--ivory-50` | `#F7F5F0` | Already matches founder's Warm White exactly |
| `--white` | `#FFFFFF` | Unchanged |
| `--stone-100` / `--stone-200` | `#EFEBE3` / `#E2DCD1` | Unchanged |
| `--ink-900` / `--ink-600` / `--ink-400` | `#172033` / `#4A566B` / `#7C8798` | Unchanged — see §2.5 |
| `--gold-ink-700` | `#7A6414` | Unchanged, still restricted |
| State primitives | red / green / amber / blue families | Unchanged |

**The correction is surgical: three primitives change.** The gold and the warm reading ground were already correct.

## 2.3 One primitive re-tinted

`--ink-on-dark-secondary` is currently `#C3CBD9`, a blue-grey chosen to sit on navy. On obsidian it reads cold and slightly lilac.

| Token | Was | Becomes | Rationale |
|---|---|---|---|
| `--ink-on-dark-secondary` | `#C3CBD9` | `#C8C5C0` | Warm neutral grey; ties dark bands to the warm ivory reading surface |

## 2.4 Verified contrast — recomputed

All pairings recomputed against the new darks. **Every pairing improves or holds.**

| Pairing | Ratio | Verdict |
|---|---|---|
| `white` on `obsidian-900` | ~19.7:1 | Pass AAA *(was ~18.2:1 on navy)* |
| `white` on `obsidian-800` | ~18.9:1 | Pass AAA |
| `white` on `obsidian-700` | ~15.5:1 | Pass AAA |
| `ink-on-dark-secondary` on `obsidian-900` | ~11.4:1 | Pass AAA |
| `gold-300` on `obsidian-900` | ~11.8:1 | Pass AAA *(was ~10.9:1)* |
| `gold-300` on `obsidian-800` | ~11.3:1 | Pass AAA |
| `gold-500` on `obsidian-900` | ~8.1:1 | Pass AA *(was ~7.5:1)* |
| `obsidian-900` on `gold-500` | ~8.1:1 | Pass AA — CTA fill with dark label |
| `ink-900` on `ivory-50` | ~14.9:1 | Pass AAA — unchanged |
| `gold-500` on `ivory-50` | **~2.2:1** | **FAIL — never text or meaningful UI on light. Unchanged.** |

These are hand-computed from the sRGB relative-luminance formula and must be **re-verified with a contrast tool before design lock**, per `MASTER.md` §3.3.

Note the useful consequence: `--accent-on` should become `obsidian-900` rather than `ink-900`, which *raises* the CTA label contrast from ~6.7:1 to ~8.1:1.

## 2.5 Deliberately unchanged: body ink

`--ink-900` `#172033` carries a faint blue cast. It is **kept**, for three reasons: it is permitted by the correction's own "subtle blue-black undertone" clause; it is already contrast-verified at AAA; and changing body text colour is a large-blast-radius edit for an imperceptible gain. A neutral alternative (`#1A1A1C`, ~16.0:1 on ivory) is offered as an optional refinement in §9.

## 2.6 Semantic token mapping

Only the **dark-context** column changes. The light context is untouched.

| Semantic token | Light context | Dark context — was | Dark context — becomes |
|---|---|---|---|
| `--text-primary` | `ink-900` | `white` | `white` *(unchanged)* |
| `--text-secondary` | `ink-600` | `#C3CBD9` | `#C8C5C0` |
| `--text-disabled` | `ink-400` | `navy-700` | `obsidian-700` |
| `--text-accent` | `gold-ink-700` | `gold-300` | `gold-300` *(unchanged, now restricted — §4.4)* |
| `--surface-page` | `ivory-50` | `navy-900` | `obsidian-900` |
| `--surface-raised` | `white` | `navy-800` | `obsidian-800` |
| `--surface-secondary` | `stone-100` | `navy-800` | `obsidian-800` |
| `--border-hairline` | `stone-200` | `navy-700` | `obsidian-700` |
| `--border-strong` | `ink-600` | `#C3CBD9` | `#C8C5C0` |
| `--accent` | `gold-500` | `gold-500` | `gold-500` *(unchanged)* |
| `--accent-on` | `ink-900` | `ink-900` | `obsidian-900` |
| `--focus-ring` | `navy-900` → `obsidian-900` | `gold-300` | `gold-300` *(unchanged)* |
| State tokens | unchanged | unchanged | unchanged |

---

# 3. Dark and light surface rules

## 3.1 Surface roles

| Surface | Was | Becomes | Use |
|---|---|---|---|
| `surface-page` | `ivory-50` | `ivory-50` | Default reading surface — unchanged |
| `surface-raised` | `white` | `white` | Fields, the rare card — unchanged |
| `surface-secondary` | `stone-100` | `stone-100` | Alternate light band — unchanged |
| `surface-dark` | `navy-900` | `obsidian-900` `#0B0B0B` | Desktop hero, final CTA |
| `surface-dark-alt` | `navy-800` | `obsidian-800` `#111111` | Advisory argument, footer |

## 3.2 Ratio and placement

- Dark occupies **roughly 30–40% of total page area**, unchanged, concentrated at arrival, argument and close.
- **Long-form financial explanation is never set on dark.** The process, pathway index, route comparison, calculator and FAQ stay on warm light surfaces.
- **The mobile hero is light. This is not negotiable** and is not affected by the brand correction. Dark is the worst case for outdoor phone legibility and this audience arrives outdoors.
- Dark bands surviving on mobile are limited to the advisory argument and the final CTA — both reached only after the visitor has chosen to keep reading.
- Surface transitions remain clean edges. No gradient fades, no glass, no parallax seams.

## 3.3 The new risk: black bands read as luxury when empty

Navy tolerates emptiness; black does not. An empty black band with a gold detail is the casino/luxury signature.

> **Every dark band must carry a working argument, not atmosphere.** If a dark band's content could be deleted without losing information, the band is decoration and must be cut or made light.

The three dark bands each carry real load: the hero carries the proposition, the advisory band carries the differentiation argument, the final CTA carries the ask. No fourth dark band may be added without justifying its informational content.

---

# 4. Gold budget and prohibited uses

Black-and-gold is the exact pairing the brief bans as "casino/nightclub." `docs/design-reference-study.md` §6.1 warned that "obsidian plus gold drifts toward luxury signalling faster than navy plus gold, and needs tighter control of gold surface area." **The correction raises this risk, so the gold budget tightens.**

## 4.1 Budget

| Scope | Budget |
|---|---|
| Any viewport, overall | **≤5%** of visible surface *(unchanged)* |
| **Any dark band** | **≤3%** of that band's surface *(new, tightened)* |
| Hero, above the fold | **Exactly one gold object** — the primary CTA fill |

## 4.2 Permitted

- Primary CTA fill, with an `obsidian-900` label.
- Hairline rules and short accent rules — **on light surfaces only**.
- Active and selected state marks.
- Small non-informational marks.
- Accent text on dark, **at body-s or label scale only** (§4.4).

## 4.3 Prohibited

Carried forward, plus four new bans marked **NEW**:

- Gold body text on any surface.
- Gold as text or meaningful UI on light surfaces (`gold-500` fails at ~2.2:1).
- Gold gradients, glow, metallic texture, bevel, sheen or shine.
- Large gold fills or gold backgrounds.
- Gold as a success or approval signal.
- **NEW — gold display or heading type on black at any size.** Gold headlines on black is the single most recognisable luxury/casino tell.
- **NEW — gold rules on dark surfaces.** Rules on dark use `obsidian-700`. Gold rules are a light-surface device only.
- **NEW — gold frames, borders or outlines around any block.** Gold-framed panels are a luxury-retail tell.
- **NEW — wide-letterspaced gold capitals.** Regardless of size, on any surface.

## 4.4 Gold text on dark — restricted

`gold-300` on obsidian passes at ~11.8:1, so contrast is not the constraint — **register is**. Gold text at scale on black signals luxury, not advisory.

> Gold text on dark is permitted only at `body-s` (16px) or `label` (15px). It may never carry `display-xl`, `display-l`, `heading-l`, `heading-m` or `heading-s`. Headings on dark are white.

---

# 5. Desktop and mobile hero treatment

## 5.1 Desktop hero (≥1024px) — obsidian

- Full-bleed `obsidian-900`.
- Headline in `white` at `display-xl`. **Never gold.**
- Supporting copy in `#C8C5C0`.
- **Exactly one gold object above the fold:** the primary CTA fill, `gold-500` with an `obsidian-900` label.
- Secondary CTA is an outline button in `border-strong`, never gold.
- The trust-line divider is an `obsidian-700` hairline, **not gold**.
- No photography dependency. Composition comes from scale, measure and asymmetric space, so the hero is complete with no image assets.
- No glow, no gradient, no vignette, no sheen.

## 5.2 Mobile hero (<1024px) — ivory, mandatory

- `ivory-50`, unchanged from the current implementation.
- Headline in `ink-900`.
- One gold object: the primary CTA fill.
- **This is an accessibility decision, not an aesthetic one**, and it is not reopened by the brand correction.

## 5.3 Implementation reality

The responsive hero already works. `app/globals.css` carries a `[data-surface-desktop="dark"]` scope that flips semantic tokens at 1024px, verified in the current build as ivory at 320/375/414/768 and dark at 1024/1440.

> **This correction is a token-value change, not an architecture change.** No component needs restructuring. Retinting three primitives and one secondary-ink value propagates through every component automatically.

---

# 6. Module-by-module impact

| Module | Surface | Change required |
|---|---|---|
| Header | Light | None now. The dark-variant-over-dark-hero gap (`MASTER.md` §5.1) becomes more visually consequential — see §9. |
| Hero | Obsidian desktop / ivory mobile | Token retint only |
| Problem set (cards) | Ivory | None |
| Construction cash-gap rail | Stone | None. Rules stay `stone-200`; no gold. |
| Advisory process | Ivory | None |
| Pathway index | Stone | None |
| **Route comparison** | Ivory | **Opportunity — see §6.1** |
| Calculator | Ivory | None. Figures stay at reading scale. |
| Direct-vs-advisory | `navy-900` → `obsidian-900` | Token retint only |
| FAQ | Ivory | None |
| Final CTA | `navy-900` → `obsidian-900` | Token retint only |
| Footer | `navy-800` → `obsidian-800` | Token retint only |

## 6.1 The route comparison — where black earns its place

`docs/design-reference-study.md` §2.7 and §4 specify a **dark header band** for the route-comparison table, which the current build does not yet have.

Under a black-led identity this becomes the strongest application of the brand on the whole page: an obsidian header band on warm ivory, white uppercase column labels at ~19.7:1, hairline row rules, comfortable row height, left-aligned sans throughout.

This is black doing **structural work on the site's most important trust asset** — not black as atmosphere. It is the single highest-value change in this correction and is recommended for approval.

It must carry **no gold**. Row-level "next step" links stay `ink-900` underlined.

---

# 7. Anti-pattern guardrails

The correction names six aesthetics to avoid. Each is an audit item.

| Must not resemble | Specific tells to reject |
|---|---|
| **Casino / nightclub** | Gold headlines on black; gold fills at scale; metallic or gradient gold; gold frames; ornament; centred symmetry with gold rules; heavy black with no informational load |
| **Luxury retail** | Wide-letterspaced gold capitals; thin gold rule under a centred hero; exclusivity vocabulary; gold-framed panels; "invitation-only" tone |
| **Crypto / trading** | Glow, neon, dark gradient meshes, performance charts, tickers |
| **Consumer-loan funnel** | Rate badges, approval-speed claims, urgency, countdowns, eligibility checkers |
| **Property / wealth management** | Aspirational full-bleed imagery; figures at display scale; serif display; "bespoke", "discerning", "curated" |
| **Generic AI SaaS** | Bento grids, fake dashboards, floating cards, gradient blobs, "trusted by" logo strips |

**Vocabulary note.** The founder decision pack §11 uses the word *"bespoke"* descriptively. It remains **banned in published copy** under `design.md` §7 and is not licensed by this correction.

**Unchanged compliance.** Every claims, disclaimer, accessibility, contrast, overflow and anti-slop rule in `CLAUDE.md`, `docs/claims-and-compliance-rules.md`, `MASTER.md` §8 and `docs/hallmark-reference-validation.md` §5 survives this correction intact. No rate, fee, LTV, testimonial, lender logo or success-rate claim becomes permissible because the palette changed.

---

# 8. Required document changes

**Not applied in this document.** Each should be a separate reviewable commit per `CLAUDE.md`.

| File | Section | Change |
|---|---|---|
| `design.md` | §2 Primitives | Replace `navy-900/800/700` with `obsidian-900/800/700`; retint `ink-on-dark-secondary` |
| `design.md` | §2 Verified contrast | Replace dark pairings with §2.4 above |
| `design.md` | §2 Gold budget | Add ≤3% dark-band sub-budget and the four new prohibitions (§4.3) |
| `design.md` | §5 Surfaces | `surface-dark` → `obsidian-900`; `surface-dark-alt` → `obsidian-800` |
| `design.md` | §10.2 | Remove the navy-led "founder-approved" claim; record this correction |
| `design.md` | line 199 | Correct the statement that black-and-gold was resolved in favour of navy |
| `MASTER.md` | §3.2 | Update dark-context column per §2.6 |
| `MASTER.md` | §3.4 | Restate dark-surface variants in obsidian terms; keep the 30–40% ratio and the light mobile hero |
| `MASTER.md` | §3.5 | Add dark-band gold sub-budget and the gold-text-scale restriction (§4.4) |
| `MASTER.md` | §1.6 | Strengthen the casino/luxury row per §7 |
| `MASTER.md` | §5.12 | Add the obsidian table header band, if approved |
| `docs/design-reference-study.md` | §8.2.1 | Mark **resolved in favour of Option B (obsidian-led)**; §6.1 Option A recommendation superseded |
| `docs/hallmark-reference-validation.md` | §5.2 | Add checks: no gold display type on dark; no gold rules on dark; no gold frames |

---

# 9. Decisions requiring founder approval

| # | Decision | Recommendation |
|---|---|---|
| 1 | **Neutral black `#0B0B0B` vs faint blue-black `#0B0C0F`** | **Neutral.** It is the founder's own specified value. The undertone variant is available if the black reads flat on final hardware. |
| 2 | Body ink stays `#172033` (faint blue cast) or goes neutral `#1A1A1C` | **Keep `#172033` for launch.** Already AAA-verified; the change is imperceptible and high-blast-radius. |
| 3 | **Dark surface ratio: 30–40% or V1's 55–60%** | **30–40%.** The correction itself mandates ivory as the main reading surface, and long-form financial content must not sit on dark. |
| 4 | Obsidian header band on the route-comparison table | **Yes.** Highest-value application of the brand identity on the page. |
| 5 | Header dark variant over the dark desktop hero | **Approve and implement.** A light bar above a `#0B0B0B` hero is a more visible seam than it was above navy. |
| 6 | Footer surface: rich black `#111111` or charcoal `#242424` | **`#111111`**, keeping charcoal for hairlines and elevation only. |
| 7 | Confirm "bespoke" stays banned in published copy | **Stays banned.** `design.md` §7 is unaffected by §11 of the decision pack. |
| 8 | Gold budget tightened to ≤3% on dark bands | **Approve.** This is the main control preventing casino drift. |

---

# 10. What changes in the current homepage

A one-page checklist against the build as it currently stands.

**Token layer — `app/globals.css`**

- [ ] Replace `--navy-900` `#0B172A` → `--obsidian-900` `#0B0B0B`
- [ ] Replace `--navy-800` `#111827` → `--obsidian-800` `#111111`
- [ ] Replace `--navy-700` `#1B2740` → `--obsidian-700` `#242424`
- [ ] Retint `--ink-on-dark-secondary` `#C3CBD9` → `#C8C5C0`
- [ ] Set `--accent-on` to `obsidian-900` (raises CTA label contrast to ~8.1:1)
- [ ] Set light-context `--focus-ring` to `obsidian-900`
- [ ] Update the same values in the `[data-surface="dark"]` scope
- [ ] Update the same values in the `[data-surface-desktop="dark"]` scope
- [ ] Update `--color-*` mappings in `@theme inline` that reference navy names

**Nothing else in the token layer changes.** Typography, spacing, containers, motion, radius and state colours are all unaffected.

**Component layer**

- [ ] No structural change required anywhere — the retint propagates through semantic tokens
- [ ] *If §9.4 approved:* add the obsidian header band to `RouteComparisonTable`
- [ ] *If §9.5 approved:* add the dark header variant over the desktop hero

**Verification to re-run after the retint**

- [ ] Re-verify every dark pairing with a contrast tool (§2.4 figures are hand-computed)
- [ ] Confirm the hero is still ivory at 320/375/414/768 and dark at 1024/1440
- [ ] Confirm zero horizontal overflow at all six widths — unchanged by a retint, but cheap to confirm
- [ ] Desaturate the page to greyscale and confirm both comparison modules still read
- [ ] Measure gold surface area per viewport: ≤5% overall, ≤3% on any dark band
- [ ] Confirm exactly one gold object above the fold on the desktop hero
- [ ] Confirm no gold heading, gold rule or gold frame appears on any dark band

**Explicitly unchanged**

- Light mobile hero
- 30–40% dark ratio
- All disclaimers, claims and compliance language
- Single-sans typography, no serif
- Native CSS transitions only, motion 2/10
- No new dependencies
