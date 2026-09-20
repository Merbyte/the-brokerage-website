> **HISTORICAL / REFERENCE ONLY:** This file records prior discovery or V1 validation. It is not a current visual authority. For current visual decisions use `docs/creative-direction-v2.md`. Where this file conflicts with V2, V2 wins.

---

# Hallmark Reference Validation — The Brokerage Advisory

**Purpose:** Independent validation of `docs/design-reference-study.md` using the Hallmark skill's `study` verb. This is the audit gate required by `docs/design-inspiration.md` ("Before designing → run Hallmark in study mode") and by `docs/master-website-brief.md` §8, which places Hallmark at position 6 of the orchestration hierarchy.

**Status:** Complete. Validation record for founder review and handoff to the design-system stage.

**Method.** Hallmark v1.1.0 (`~/.claude/skills/hallmark`, personal skill), `hallmark study` verb, protocol per its `references/study.md`. Four sources submitted: two live URLs (URL mode) and two supplied screenshots (image mode). Refusal heuristics were run before any fetch, as the protocol requires. Diagnosis only — no rebuild, no code.

**Standing constraint.** Nothing in this document authorises reproducing any reference's layout, visuals, typography, colour values, icons, text, code or interaction patterns. Structure may be learned from; nothing may be copied.

**Inputs read:** `CLAUDE.md`, `docs/master-website-brief.md`, `docs/claims-and-compliance-rules.md`, `docs/design-inspiration.md`, `docs/design-reference-study.md`, and the Hallmark study output produced in this session.

---

# 1. Reference-source handling

Hallmark's refusal layer rejected both external URLs before any content was fetched. This was not a judgement about their quality — it is a rule about what may serve as a *structural* source.

| Source | Hallmark ruling | Permitted use | Prohibited use |
|---|---|---|---|
| RedSun (`ovo-redsun.webflow.io`) | **Refused** — template demo | Mood only | Any structural source; any layout, grid, component, interaction or code |
| Estatio (`dribbble.com/shots/27601002`) | **Soft-refused** — designer presentation work | Mood only | Any structural source; signature visual choices |
| Pinterest board (`pin.it/5Cjab4sSl`) | Not submitted; governed by the same principle | Mood only | Any layout or asset source |
| Two supplied screenshots | **Proceed** — public references for the firm's own brand | Structural analysis | Any copying of content, data, styling or claims |

## 1.1 RedSun Webflow template — refused as a structural source

Hallmark's URL refuse list covers Framer and Webflow template demos as "the marketplace ecosystem by another name," and directs that such URLs are refused **before WebFetch fires**. No fetch was made. A published `*.webflow.io` demo carrying a template-vendor prefix falls squarely inside that rule.

Two independent corroborations: `docs/design-inspiration.md` already instructs that no "source code or template assets" may be taken from it, and `docs/design-reference-study.md` §3.2 independently identified it as a Webflow template whose principal risk is recognisability.

**Ruling: mood-only reference.** The general principles already recorded in study §3.2 — one idea per full-width band, controlled dark/light alternation, clean spacing between blocks — remain usable because they are generic compositional conventions, not that template's property. Nothing further may be taken. Its grids, cards, component treatments, section order, interactions and code are out of scope entirely.

## 1.2 Estatio Dribbble shot — soft-refused as a structural source

`dribbble.com/shots/*` is named explicitly in the refuse list: individual designers' presentation work, from which DNA may be described but signature choices must not be reproduced.

A second, technical reason reinforces the ruling. A Dribbble shot page is a client-rendered wrapper around an image. URL-mode extraction would have read Dribbble's own chrome rather than the design, tripping Hallmark's junk-or-blocked detection and falling back to a screenshot request. No Estatio screenshot exists in `docs/reference/`, so no diagnosis was possible by either route.

**Ruling: mood-only reference.** Study §3.3 remains correct in substance and in its risk assessment — that this is the most attractive and therefore most dangerous reference, because its polish lives largely in return-metric modules that are prohibited for this business. The boundary test recorded at study §3.3 stands as the operative control.

## 1.3 Pinterest board — mood-only, never an asset or layout source

Not submitted to Hallmark, as it is a board of decontextualised images rather than a page. The ruling is unchanged from study §3.1 and is reinforced by the refusals above: unknown provenance, unclear licensing, and the highest risk of drifting the site toward lifestyle-brand territory.

**Ruling: mood conversation only.** No image may be used, traced, reproduced or treated as an asset. No composition or layout proportion may be taken.

## 1.4 The two supplied screenshots — structural analysis only

Both cleared the refusal check as public references supplied for the firm's own brand. They are the only sources in the pack from which structure may legitimately be read.

That permission is narrow. It covers the *skeleton* — section ordering, hierarchy sequence, table anatomy, column logic. It does not extend to their content, their data, their claim language, their typography, their colour values, their marker treatments or their CTA styling. Section 2 records exactly what each contains that must not travel.

---

# 2. Screenshot diagnoses

## 2.1 Route-comparison screenshot

`docs/reference/screenshot-route-comparison.png` — image mode, static capture.

```
macrostructure     Almanac-leaning (alt: Long Document)
section role       table-led comparison block
display_role       roman editorial serif, high contrast, heavy
body_role          neutral grotesque
label_role         uppercase grotesque, letterspaced
pairing_logic      two families
paper_band         light >85            paper_hue   neutral-cool
accent_hue_band    yellow (gold)        footprint   recurring 5-15%
density            medium               asymmetry   left-biased
treatments         dark table header band · hairline row rules ·
                   slight corner radius · italic grey footnote
reveal             not visible (static capture)
```

**Diagnosis.** A table-led comparison block in the Almanac family: light cool paper, uppercase letterspaced labels, tabular data, information-dense content held in a medium-air layout. The skeleton runs eyebrow → high-contrast serif heading → muted grotesque subhead → table → footnote → centred CTA. The type pairing is a high-contrast roman editorial serif against a neutral grotesque, with uppercase grotesque labels.

**The transferable structure** is the table anatomy and the decision-oriented column logic: a dark header band, hairline row separators, comfortable row height, left-aligned text, and columns arranged so a reader can locate their own situation. That is genuinely good and is already approved for reuse in study §3.4.

### Risks

**Compliance — severe.** Hallmark's honest-copy discipline (slop-test gate 46) requires comparison rows to carry real numbers, a labelled placeholder, or a different macrostructure. Every numeric column in this screenshot — maximum amount, indicative rate, EIR, indicative timeline, percentage-of-invoice — is the precise class of data prohibited by `docs/claims-and-compliance-rules.md` and by the "No public fee disclosure" and "Claim restrictions" sections of `CLAUDE.md`. Hallmark reaches this conclusion from an anti-slop premise and the compliance rules reach it from a regulatory one; the verdict is identical. An "indicative" or "rates vary" caveat does not cure it.

**Compliance — disclosure.** The update note is set in small italic grey. `CLAUDE.md` and study §5 rule 6 prohibit de-emphasising required language; Hallmark independently flags both the italic and the visual de-emphasis. The qualifying note must sit at body-text legibility.

**Accessibility.** Cell text is colour-coded across gold, grey and dark ink with no legend, so meaning is partly carried by colour alone. The small italic grey footnote is a second legibility failure.

**Originality.** Low risk at skeleton level — eyebrow/heading/copy/table/note/CTA is a generic editorial convention. Higher risk in the specifics: the column set, the gold CTA treatment and the type choices must not be reproduced.

**Mobile.** A five-column numeric table is the highest-risk component in the entire reference pack. At 320px it cannot survive as a table. The decided replacement pattern is recorded in study §2.11: self-contained per-route blocks with repeating in-block labels, verified at the narrowest breakpoint.

## 2.2 Direct-bank-versus-advisory screenshot

`docs/reference/screenshot-advisory-comparison.png` — image mode, static capture.

```
macrostructure     Split Diptych pitch block (Midnight-adjacent)
section role       two-column comparison, hairline-bordered panels
display_role       roman editorial serif, high contrast (same as 2.1)
body_role          neutral grotesque
label_role         uppercase grotesque, letterspaced, dual-accent
pairing_logic      two families
paper_band         dark <30             paper_hue   cool
accent_hue_band    dual — yellow (gold) + warm-red
footprint          recurring 5-15%
density            medium               asymmetry   left-biased head,
                                                    symmetric body
treatments         hairline-bordered panels · border-only elevation,
                   no shadow
reveal             not visible (static capture)
```

**Diagnosis.** A Split Diptych on dark cool paper using the same serif-and-grotesque pairing as 2.1, with a dual accent — gold marking the favourable column, muted red the unfavourable one. Hallmark's theme map places dark + cool + high-contrast serif near its **Midnight** theme, but Midnight's accent is indigo, not gold. **The source maps onto no catalog theme cleanly.** That finding is load-bearing and is taken up in §3.4.

**The transferable structure** is the dark-surface two-column argument with concise parallel bullets, one idea per line, and a clear textual label on each column.

### Risks

**Compliance — severe.** The bullet content includes claims prohibited by name in `docs/claims-and-compliance-rules.md` and `docs/design-inspiration.md`: the ex-banker capability claim and the "full credit narrative before any document" claim, together with an implication of superior outcomes. Because the prohibited material here is *language* rather than data, copying the tone is as dangerous as copying the text.

**Accessibility.** The ✗/✓ treatment carries its entire meaning in colour plus glyph. In greyscale, or for a colour-blind reader, the two columns are not reliably distinguishable. Text labels and non-colour differentiation are mandatory.

**Trust.** The "applying direct" column is a strawman. An owner with a good existing bank relationship will read it as a sales tactic, which damages the diagnosis-first positioning more than it helps. The alternative must be described honestly as a reasonable path.

**Originality.** The panel treatment and dual-accent marker system are distinctive and must not be reproduced. The underlying two-column comparison is generic and may be used.

**Mobile.** Two columns become sequential blocks with their column headings retained. Retaining the heading is what preserves the comparison; dropping it turns the section into two unrelated lists.

## 2.3 Cross-cutting observation

Both screenshots share one skeleton: gold uppercase eyebrow → high-contrast serif heading → muted grotesque subhead → content module. Both stack the eyebrow vertically above the heading, so both **pass** Hallmark's gate 54, which bans the tag-left / heading-right hanging-header pattern outright as the most reliable templated-editorial tell.

However, the repetition of that opening across sections is itself the issue Hallmark raises in §3.2 below, and it is the single largest correction this validation makes to the existing study.

---

# 3. Reconciliation with `docs/design-reference-study.md`

## 3.1 Confirmed decisions — the study was right

Five findings where Hallmark, working from an independent anti-slop premise, reached the same conclusion as the study.

1. **Unverifiable and invented metrics must not appear.** Gate 46 converges with study §5 rule 5 and §3.4. The strongest validation in the run, because the two lines of reasoning are unrelated.
2. **Required language must never be de-emphasised.** Hallmark flags small italic grey as a tell; study §5 rule 6 bans it as a disclosure failure. Same verdict.
3. **Meaning must not be carried by colour alone.** Confirms study §2.4 and §3.5.
4. **Typography-first hero.** Hallmark's enrichment hierarchy — typography → CSS art → hand-built SVG → generated still → library → Lottie as last resort — independently matches study §2.13.3. Its rule that invented stock photography must never ship as final design matches study §2.8.
5. **No fabricated interface chrome.** Hallmark bans fake browser bars, phone frames and IDE chrome; study §1.4 bans fake dashboards. Hallmark's version is broader and is adopted.

## 3.2 Required corrections — founder-approved

Five corrections. All are founder-approved decisions and are binding on the design-system stage.

### Correction 1 — Eyebrows are off by default, capped at 1–2 per page

**The study is wrong here.** Study §2.2 prescribes eyebrow → heading → intro as the standard section opening. Even with the pattern-break requirement added, nine of twelve homepage bands would still carry an eyebrow. Hallmark's position is that section eyebrows are **default OFF**, permitted only where content is genuinely ordinal, and capped at 1–2 per page even then.

The study treated the symptom by requiring three bands to break the pattern. Hallmark rejects the premise: a repeated eyebrow is itself the templated-editorial tell.

**Approved directive.** Eyebrows off by default. Maximum two per page. Each use must be justified by genuinely ordinal or sequential content. Hierarchy is carried by heading scale, weight and spacing. Gate 54 also applies absolutely: an eyebrow, where used, stacks vertically above its heading — the tag-left / heading-right arrangement is banned.

This supersedes study §2.2 in full, including its pattern-break requirement, which becomes redundant once eyebrows are rare.

### Correction 2 — Six breakpoints, with 320px as the floor

Study §2.11 set 360px and 375×812. Hallmark verifies at 320 / 375 / 414 / 768.

**Approved directive.** Verify at **320, 375, 414, 768, 1024 and 1440px**. 320px is the floor, not 360px. The route-comparison block and the calculator are the two components most likely to fail there and must be checked first.

### Correction 3 — No horizontal overflow, and no masking of layout defects

**Approved directive.** Horizontal overflow must be eliminated at its source. `overflow-x: hidden` and `overflow-x: clip` must **not** be used to conceal a layout defect — a page that needs them in order to look correct has a bug that has been hidden rather than fixed. Display headings use `overflow-wrap: anywhere` where long words would otherwise force overflow. Grid tracks that carry images use `minmax(0, 1fr)`, never a bare `1fr`.

### Correction 4 — No two-line clickable CTA labels

Not present in the study at all, and it bites directly: the route table's per-row "next step" links and a full-width mobile primary CTA are both at risk of wrapping at 320px.

**Approved directive.** Buttons, primary navigation links, footer links, breadcrumbs and CTAs must not wrap to two lines at any tested breakpoint. Where a label cannot fit on one line at 320px, shorten the label — do not shrink the type below the minimum or reduce the touch target.

### Correction 5 — Motion specifics

Study §2.12 has the correct posture (2/10, interaction feedback only, no scroll-arrival animation) but is imprecise, and omits the focus-ring rule entirely.

**Approved directive.**

- Animate **opacity and transform only**. No layout properties.
- **Never animate focus rings.** A focus ring appears instantly on focus, at ≥3:1 contrast.
- Use **named custom easings**. The browser default `ease` is not permitted.
- Under `prefers-reduced-motion: reduce`, non-essential movement is either removed or reduced to a **maximum 150ms opacity transition**.
- Scroll-arrival entrance animation remains removed. All content is present and readable on load.

## 3.3 New gaps identified

Two genuine holes the study does not cover.

### Gap 1 — Inter-page structural variety across the service pages

Hallmark's central thesis is that two pages should not share a rhythm, enforced through named macrostructures, nav archetypes, footer archetypes and a rotation log. `docs/design-reference-study.md` governs the homepage only. The launch sitemap in the master brief contains **five service pages** — Business, Trade, Property, Project & Private Capital, Performance Bonds — plus Construction & Engineering. Left unaddressed, these become one template with the nouns swapped, which is exactly the generic pattern the brief bans.

**Approved directive.** **Every service page must have a distinct information archetype, not a cloned template.** Each page's structure follows the shape of its own subject: a trade page organised around a cash-flow timing cycle should not have the same skeleton as a property page organised around asset and ownership assessment, or a performance-bonds page organised around a definition and a trigger. Shared components — header, footer, CTA band, form, disclaimer — stay consistent; the body composition does not.

### Gap 2 — Named component archetypes instead of prose descriptions

Study §7 names sections in prose. Hallmark works from explicit archetype picks with variation knobs, which is a materially more precise handoff. It also defaults *away* from two specific archetypes as the most-recognised AI fingerprints: the minimal two-link nav, and the four-column-links-plus-social footer. The footer specified in the master brief sits close to the second of those.

**Approved directive.** The design-system stage names an explicit archetype and knob set per section, per page, and records the nav and footer picks. The footer must carry the full NAP, navigation and legal requirements without reading as the generic four-column pattern.

## 3.4 Where the existing study remains correct

Four positions that survive validation unchanged.

1. **The whole of §5, the compliance rules.** Independently reinforced, not weakened. Rule 5 (no internal rate data from the confidential team document) and rule 6 (no pattern that hides required language) remain the two most important controls in the project.
2. **§2.13, construction and engineering design implications.** Hallmark has nothing to say about ICP resonance; this section is domain judgement and stands in full, including the project-timeline diagram, the operational register for the route table, the typography-only hero and the "addressed, not impressed" test.
3. **§8.2 conflict log**, including the unresolved black-and-gold versus navy-and-ivory ruling and the serif-versus-ICP question. Hallmark adds a supporting data point rather than a resolution — see 4 below.
4. **Theme rotation does not apply to this project, and the sans-led direction is reinforced.** Hallmark's diversification rule assumes successive unrelated projects; a single brand site needs consistency, and Hallmark concedes this itself — on a `design.md`-managed project the rule inverts and pages must share the system. Separately, the reference DNA maps onto **no catalog theme cleanly** (dark cool paper with a gold accent is near Midnight, but Midnight's accent is indigo). That independently supports study §6.2's recommendation of a bespoke, sans-led system over adopting a named theme.

---

# 4. Final directives for the design-system stage

Binding. Founder-approved. These carry into `design-system/the-brokerage-advisory/` and govern every subsequent stage.

## 4.1 Structure and hierarchy

1. Eyebrows off by default; maximum two per page; each justified by ordinal or sequential content.
2. Where an eyebrow is used, it stacks vertically above its heading. Tag-left / heading-right is banned.
3. Hierarchy is carried by heading scale, weight and spacing, not by labels.
4. Every service page has a distinct information archetype derived from its own subject matter. No cloned templates.
5. Shared chrome — header, footer, CTA band, assessment form, disclaimers — stays consistent across all pages.
6. Name an explicit component archetype and knob set per section. Record nav and footer picks. Avoid the minimal two-link nav and the generic four-column footer.

## 4.2 Responsive

7. Verify at **320, 375, 414, 768, 1024 and 1440px**. 320px is the floor.
8. No horizontal overflow at any breakpoint.
9. `overflow-x: hidden` / `clip` must not be used to conceal a layout defect. Fix the cause.
10. Display headings use `overflow-wrap: anywhere` where required.
11. No two-line clickable labels — buttons, nav links, footer links, breadcrumbs, CTAs.
12. Image-bearing grid tracks use `minmax(0, 1fr)`.
13. Mobile base body 17–18px, floor 15px for any text including disclaimers and table cells (study §2.11).
14. Mobile hero uses the light surface (study §2.11).
15. Route comparison degrades to self-contained per-route blocks with repeating in-block labels, verified at 320px.

## 4.3 Motion

16. Opacity and transform only.
17. Never animate focus rings; focus is instant, at ≥3:1 contrast.
18. Named custom easings only; the browser default `ease` is not permitted.
19. `prefers-reduced-motion: reduce` removes non-essential movement or reduces it to a maximum 150ms opacity transition.
20. No scroll-arrival entrance animation. All content present and readable on load.

## 4.4 Proof, placeholders and honesty

21. Labelled placeholders are permitted **during development only**, and must be visibly marked as such.
22. **Any proof module without substantiated content is omitted from the public launch site** — not shipped with a placeholder, not shipped empty. This applies to statistics, counters, client logos, lender logos, testimonials, ratings, case studies and success-rate claims.
23. No fabricated interface chrome — no fake browser bars, phone frames, dashboards or IDE windows.
24. Every colour pairing is contrast-tested before design lock. Meaning is never carried by colour alone.

## 4.5 Originality

25. Do not reproduce any reference's layout, visuals, typography, colour values, icons, text, code or interaction patterns.
26. RedSun, Estatio and Pinterest are mood-only. They may inform conversation about quality; they may not be a structural source.
27. The two screenshots supply skeleton only. Their content, data, claim language, styling and CTA treatment do not travel.

## 4.6 System file

28. Create a **`design.md` project design-system file** at the project root during the design-system stage, so Hallmark understands this is a unified brand site. This inverts Hallmark's diversification rule — pages share the system rather than rotating away from each other — and makes subsequent Hallmark runs enforce consistency. It is also the mechanism by which the directives above become machine-checkable rather than advisory.

---

# 5. Pre-launch Hallmark audit checklist

Run `hallmark audit` against the built site before launch. This checklist is the acceptance record; every line must pass or carry a written, founder-accepted exception.

## 5.1 Compliance and claims

- [ ] No rates, EIR figures, maximum amounts, LTVs, tenures, timelines or percentage limits anywhere on the public site
- [ ] No fees, fee models, success fees, commissions or fee ranges; no fee calculator
- [ ] No success-rate figures, placement volumes or approval claims
- [ ] No ex-banker claim, no credit-narrative claim, no guarantee or certainty language
- [ ] No client names, lender names, lender logos, client logos or testimonials
- [ ] No content traceable to the confidential internal team reference document
- [ ] Approved network wording used verbatim, with no counts or named lenders
- [ ] Primary CTA reads "Get a Free Financing Assessment" at every placement
- [ ] Assessment form carries exactly four fields, with consent copy and the required disclaimer adjacent to the submit control at body legibility
- [ ] Calculator displays the approved disclaimer adjacent to its results, and states its calculation method explicitly
- [ ] No disclaimer is small, italic, grey, collapsed, tooltipped or below the fold of the module it qualifies

## 5.2 Originality and anti-slop

- [ ] No reference layout, visual, typeface, colour value, icon, text, code or interaction pattern reproduced
- [ ] Eyebrows: maximum two per page, each justified; none in tag-left / heading-right arrangement
- [ ] Service pages carry distinct information archetypes; no cloned templates
- [ ] No generic four-column footer; no minimal two-link nav
- [ ] No bento grid, feature-tile wall, fake dashboard, gradient blob or "trusted by" logo strip
- [ ] No fabricated browser, phone, dashboard or IDE chrome
- [ ] Cards used only where justified; financing pathways render as a typographic index, not cards
- [ ] Gold within its approximately 5% surface budget, as details rather than fills
- [ ] No italic headings anywhere
- [ ] Hero works with photography removed; no module whose visual weight exceeds its informational content

## 5.3 Responsive

- [ ] Verified at 320, 375, 414, 768, 1024 and 1440px
- [ ] No horizontal overflow at any breakpoint
- [ ] No `overflow-x: hidden` / `clip` concealing a layout defect
- [ ] No two-line clickable labels at any breakpoint
- [ ] Display headings wrap correctly; no forced overflow from long words
- [ ] Route comparison renders as per-route blocks with repeating labels at 320px
- [ ] Calculator usable and its disclaimer fully legible at 320px
- [ ] Mobile base body 17–18px; no text below 15px
- [ ] Primary CTA within one-handed thumb reach; touch targets at least 48×48px with 8px clear spacing

## 5.4 Motion

- [ ] Only opacity and transform animated
- [ ] Focus rings never animated; visible instantly at ≥3:1 contrast
- [ ] Named custom easings only; no browser-default `ease`
- [ ] `prefers-reduced-motion: reduce` removes non-essential movement or caps it at a 150ms opacity transition
- [ ] No scroll-arrival animation; all content present and readable with JavaScript unavailable

## 5.5 Accessibility

- [ ] Every final colour pairing passes WCAG AA
- [ ] No meaning carried by colour alone in any comparison module
- [ ] Full keyboard navigation with visible focus states throughout
- [ ] All form fields labelled; errors announced to assistive technology and never colour-only
- [ ] Logical heading hierarchy, one H1 per page
- [ ] Comparison tables readable in greyscale

## 5.6 Proof and placeholders

- [ ] No labelled development placeholder remains on the public site
- [ ] Every unsupported proof module has been omitted, not shipped empty or stubbed
- [ ] No invented metric, counter, rating or credential
- [ ] No imagery implying office, team or operational scale the firm does not have
- [ ] No photography of client documents, premises, vehicles or identifiable personnel

## 5.7 System

- [ ] `design.md` exists at the project root and matches the built system
- [ ] All colour and font declarations reference named tokens; no inline raw values
- [ ] Pre-launch placeholders from study §8.3 are each resolved or explicitly accepted as a launch blocker

---

**Open items carried forward.** The two conflicts logged at study §8.2 — black-and-gold versus navy-and-ivory (8.2.1) and editorial-serif versus construction-and-engineering ICP resonance (8.2.10) — remain unresolved and require a founder ruling before design lock. Hallmark's finding that the reference DNA maps onto no catalog theme cleanly is evidence in favour of the bespoke, sans-led direction recommended at study §6.2, but it does not settle either question.
