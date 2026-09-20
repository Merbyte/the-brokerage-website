# Visual Direction Reset — The Brokerage Advisory

**Status:** Founder-directed reset of the visual-direction layer. Awaiting founder approval of §9 before any downstream work.
**Type:** Design direction only. No design system, no tokens, no components, no code, no final copy.
**Scope of authority:** Sits above `design.md` and `design-system/the-brokerage-advisory/` for the questions it reopens. Subordinate to `docs/master-website-brief.md` and `docs/claims-and-compliance-rules.md` in every case.

**Inputs read in full:** `CLAUDE.md` · `docs/master-website-brief.md` · `docs/claims-and-compliance-rules.md` · `docs/design-inspiration.md` · `docs/design-reference-study.md` · `docs/hallmark-reference-validation.md` · `design.md` · `design-system/the-brokerage-advisory/MASTER.md` · `design-system/the-brokerage-advisory/pages/home.md` · `docs/skill-registry.md` · `docs/black-gold-brand-correction.md`.

`docs/reference/team_reference_document.docx` was **not** opened. It is confidential and barred as a content source by `docs/design-reference-study.md` §5 rule 5.

**What this document does not do.** It does not select a final direction, replace `MASTER.md`, emit tokens, or authorise any change to `app/`, `components/`, `public/` or package files. The homepage prototype at commit `197160c` remains untouched and is treated as an implementation of the superseded direction, to be re-derived after §9 is approved.

---

# 0. Relationship to `docs/black-gold-brand-correction.md`

That document was written before this reset and takes a different approach to the same founder decision. Its status is split, deliberately:

| Part | Status now |
|---|---|
| §1 — Source-of-truth correction: navy-led was a *recommendation* promoted to an *approval* in error; the founder's Black & Gold direction is the real ruling | **Confirmed and carried forward.** This is the finding that makes the present reset necessary. |
| §1.5 — The surface economy does not automatically follow the hue change; V1's 55–60% dark and 10–15% gold are not reinstated by default | **Confirmed as a warning.** The ratios themselves are reopened in §4 below and answered per territory in §7. |
| §1.6 — "Authority without exclusivity" test | **Confirmed and adopted.** |
| §2–§6, §8, §10 — primitive-level retint, semantic mapping, module-by-module impact, the `app/globals.css` checklist | **Demoted to non-binding prior work.** These execute exactly the substitution this reset forbids: navy out, black in, everything downstream unchanged. They remain useful as a worked example of the *minimum* change and as a source of provisional contrast arithmetic, but they are no longer a plan. |
| §7 — anti-pattern guardrails | **Absorbed and expanded** into §5 below. |
| §9 — the eight founder decisions | **Superseded** by §9 of this document, which reopens the questions those decisions assumed closed. |

The distinction matters. The brand correction asked *"what is the smallest correct change?"* This document asks *"what should the site look like now that the brand is black and gold?"* — which is a different question with a different answer.

---

# 1. Current brand direction

## 1.1 The direction

> **Black & Gold — Premium Financial Advisory.**

This is a founder decision, sourced from `The_Brokerage_Founder_Decision_Pack_Completed.docx` §11 ("Black & Gold Brand Direction"), which names the closest archetype fit as *"Premium Financial Advisory (authority, sophistication, trust, accessibility)."* It is not an inference and not a recommendation.

It sits inside the level-1 source of truth rather than against it: `docs/master-website-brief.md` §7 specifies the deep surface as *"`#0B172A` **or approved obsidian equivalent**"*. Under the `CLAUDE.md` conflict-resolution order — explicit founder decisions override older source material — there is no unresolved conflict at level 1. Only level-2 documents (`design.md`, `MASTER.md`, the page overrides) need to change.

## 1.2 Emotional outcome

**Reassured.** The word comes from the founder decision pack and is the single best test of any design decision on this project. It is carried forward unchanged from `MASTER.md` §1.1.

Reassurance here comes from competence made visible, not from enthusiasm and not from opulence. A visitor should relax, not be impressed.

## 1.3 Personality

Professional · genuine · reliable · expert.

## 1.4 Desired perception

Sophisticated · credible · commercially mature · authoritative — **and approachable**.

The last term is not a softener. The founder's own archetype names **accessibility** as a brand attribute, which makes it a design requirement rather than a compliance obligation. The governing test from the brand correction stands:

> **Authority without exclusivity.** Every black-and-gold decision must raise authority without lowering accessibility. If a treatment makes the site feel more *exclusive*, it has failed — regardless of how premium it looks.

This sits alongside, and does not replace, the "addressed, not impressed" test in `docs/design-reference-study.md` §2.13.4.

## 1.5 Primary audience

Established, owner-led Singapore business owners — **construction and engineering as the priority pathway**, not an exclusion. Business, trade, property, project and complex financing audiences must remain discoverable and must recognise themselves.

The realistic visitor profile from `MASTER.md` §1.2 is unchanged and remains load-bearing: owner aged 40–55, on a phone, often outdoors, frequently on an unreliable connection, with imperfect near vision.

## 1.6 The site's job

**A trust layer after cold outreach.** The visitor arrives within minutes of a cold call or cold email. They are verifying, not browsing. They are deciding whether the caller is worth ten minutes.

This is the fact that disciplines every visual decision below. A site designed to *win* a comparison shop would look different from one designed to *survive* a scepticism check. This is the second kind.

---

# 2. Superseded decisions

These are recorded, not deleted. Future agents need to know what was decided, why, and why it no longer binds — otherwise the same reasoning will be re-derived and the same conclusions reinstated by default.

## 2.1 Navy-led editorial as the primary colour direction — SUPERSEDED

**Where it lives:** `docs/design-reference-study.md` §6.1 Option A · `design.md` §2, §5, line 199 · `MASTER.md` §3.2, §3.4 · `app/globals.css` (implementation).

**The original rationale, preserved:** navy read as institutional and calm; the warm ivory kept it approachable; it was judged the direction that most cleanly satisfied the V4 brief's simultaneous requirements for material quality and distance from black-and-gold luxury styling; it was called "the safest fit for financial-services trust."

**Why it no longer binds:** it was an implementation *recommendation* produced during visual discovery. `docs/design-reference-study.md` §8.2.1 is explicit that the black-and-gold question was **"flagged rather than decided."** `design.md` line 199 recorded it as founder-approved. That record was wrong. The founder ruling now exists and selects black.

**What survives from the rationale:** the underlying concern — that black-and-gold drifts toward luxury faster than navy-and-gold — is correct and is the reason §5 of this document exists. The concern survives. The conclusion does not.

## 2.2 Navy as the primary brand dark — SUPERSEDED

Obsidian / rich black is the primary brand identity dark. Navy is permitted only as a subtle blue-black undertone where depth requires it, never as the main identity surface. This much the brand correction settled correctly.

**A consequence to notice:** `--ink-900` `#172033` (body text on light) carries a faint blue cast and was chosen to harmonise with navy. It is contrast-verified at AAA and is not urgent, but its justification is gone. It is now a live question rather than a settled token, and is listed in §4.

## 2.3 Single-sans-only typography — SUPERSEDED

**Where it lives:** `docs/design-reference-study.md` §6.2 Pairing 3 · `design.md` §3 · `MASTER.md` §4.1.

**The original rationale, preserved:** most legible on a phone outdoors for a 40–55 year old reader; least likely to read as property or wealth marketing; most differentiated in a category where competitors reach for either system defaults or a luxury serif; cheapest to license, smallest font payload, and it *removed* a drift vector rather than managing it.

**Why it no longer binds:** the second and fourth reasons — avoiding the property/wealth register, removing a drift vector — were arguments about what to *avoid*, and they were calibrated against a system that was already deliberately restrained. §2.6 below explains why avoidance arguments are exactly the class of reasoning this reset reopens.

**What survives:** the legibility argument is independent of brand direction and remains binding — field legibility, 17–18px mobile base, 15px floor, tabular figures. The *anti-drift* argument is now one input among several rather than the decisive one. Note also that the drift risk has changed shape: a high-contrast display serif on obsidian with gold is a **worse** stack than the same serif on navy, so reopening the question does not mean the answer flips. It means it gets argued on its merits.

## 2.4 Visual decisions justified primarily by avoiding black-and-gold — SUPERSEDED

Any decision whose stated reason was distance from a black-and-gold aesthetic no longer has a reason. Specifically identified:

- **The recommendation of Option A over Option B** in `docs/design-reference-study.md` §6.1, on the grounds that obsidian-plus-gold "drifts toward luxury signalling faster than navy plus gold."
- **The framing of black-and-gold as an anti-pattern** in `MASTER.md` §1.6 ("Casino or nightclub — heavy black-and-gold"). The *tells* in that row remain correct and are sharpened in §5. The characterisation of the brand's own palette as an anti-pattern does not survive.
- **`docs/design-reference-study.md` §1.4 bullet 3**, which lists "a casino, nightclub or luxury-retail brand — heavy black-and-gold" among things the website must not feel like. The nightclub and luxury-retail outcomes remain banned. The palette does not.

## 2.5 Composition decisions that existed only because the navy system was intentionally restrained — SUPERSEDED

The navy system was designed to be quiet, and several composition decisions followed from that posture rather than from the content. Each is reopened:

- **~30–40% dark, concentrated at arrival, argument and close.** A ratio inherited from a palette decision that no longer holds.
- **Dark reserved for exactly three bands.** A consequence of the ratio, not of the argument structure.
- **Clean-edge surface transitions only.** Still probably right, but it was never tested against an identity where the dark surface *is* the brand.
- **Gold at "roughly 5% of surface area."** A number chosen to keep navy-plus-gold from reading as luxury. Under a black-led identity gold's *job* changes, and the budget should follow the job rather than the other way round.
- **The route-comparison table's dark header band was specified but never built** (`docs/design-reference-study.md` §2.7; `black-gold-brand-correction.md` §6.1). Under navy it was a nice-to-have. It is now a candidate for the strongest brand moment on the page.
- **"Dark is for argument and arrival, not for atmosphere."** This one is *upgraded*, not superseded — see §5.2. Under black it becomes more important, not less.

## 2.6 The general form of the problem

The superseded decisions share a shape: they were **avoidance-led**. The navy system was largely an argument about what the site should not resemble, and the resulting composition was correct-by-subtraction. That produces a defensible site and a forgettable one.

Black and gold cannot be made to work by subtraction. Subtracting black and subtracting gold from a black-and-gold brand reproduces the navy system with different hex values. §5 is the positive account that replaces the avoidance account.

---

# 3. Decisions that remain valid

Unchanged and binding. Nothing in §4–§8 may weaken any of these, and no territory in §7 is viable if it does.

## 3.1 Business and positioning

1. **Approved description and positioning** — `docs/master-website-brief.md` §2.1–2.2. Singapore-based independent financing advisory; not a bank, financial institution or licensed moneylender.
2. **Diagnosis-first proposition** — *diagnose the financing situation first, then determine the appropriate route.* This is the commercial core and the reason the site's structure is an argument rather than a catalogue.
3. **Premium financial-advisory positioning** — confirmed and now reinforced by the brand ruling.
4. **Construction and engineering priority** — a priority pathway, never an exclusion. Secondary audiences must recognise themselves.
5. **The site is a trust layer after cold outreach**, not a comparison-shopping destination.

## 3.2 Compliance and claims

6. **Every restriction in `docs/claims-and-compliance-rules.md` and `CLAUDE.md`.** No rates, EIR, amounts, LTVs, tenures, timelines, percentages, fees, fee models, success rates, placement volumes, approval claims, ex-banker claims, named lenders, lender logos, client logos or testimonials. **No palette change makes any of this permissible.**
7. **Approved network wording verbatim** — *banks and financiers in our local and overseas network.*
8. **No public fee disclosure of any kind; no fee calculator.**
9. **No fabricated proof** — no invented metrics, counters, ratings, credentials, case studies, awards, office hours or biographies. No imagery implying office, team or operational scale the firm does not have. No fabricated interface chrome.
10. **Qualitative financing comparisons only.** The route-comparison columns stay *Financing route · May be relevant for · What usually needs assessing · Next step.*
11. **Calculator disclaimer requirements** — approved wording, adjacent to the results, at body size, never italic, never grey-on-grey, never collapsed, never below the module's fold. The calculation basis is stated in the interface. The calculator remains in launch scope and remains blocked on the five confirmations in `CLAUDE.md` §"Calculator launch status".
12. **Disclaimer visibility generally** — `MASTER.md` §5.7 and §8.6. The most-audited rule in the system.

## 3.3 CTA requirements

13. **Primary CTA reads "Get a Free Financing Assessment" verbatim at every placement.** Approved secondary labels only.
14. **Assessment form carries exactly four fields** — name, email, phone, message — with consent copy and the required disclaimer adjacent to the submit control.
15. **WhatsApp is never the only visible conversion route.** A conversion route is always within reach; no primary-CTA gap longer than 1.5 viewport-heights on mobile.

## 3.4 Accessibility

16. **WCAG-conscious contrast on every final pairing**, tested before design lock, in both light and dark variants. **`gold-500` `#C9A227` fails at ~2.2:1 on ivory and may never be text or meaningful UI on a light surface.** That is a measurement, not a style preference, and it survives every territory below.
17. **Meaning is never carried by colour alone.** Both comparison modules must be fully readable in greyscale.
18. **Semantic HTML, full keyboard operation, visible instant focus at ≥3:1, labelled fields, logical heading order, one H1 per page.**
19. **`prefers-reduced-motion` honoured**; focus rings never animated.
20. **Content complete and readable with JavaScript unavailable.**
21. **Type minimums** — mobile base 17–18px, absolute floor 15px including table cells, footer legal and disclaimers; form inputs ≥17px. Touch targets ≥48×48px with ≥8px spacing.

## 3.5 Mobile responsiveness

22. **Verified at 320, 375, 414, 768, 1024 and 1440px. 320px is the floor.**
23. **No horizontal overflow at any width**, and `overflow-x: hidden` / `clip` is never used to conceal a defect.
24. **No two-line clickable labels** anywhere.
25. **Mobile is designed, not compressed.** The route comparison degrades to self-contained per-route blocks with repeating in-block labels — never horizontal scroll, never a card grid, never a collapsed accordion.
26. **Performance posture** — mid-range Android on a congested connection; no hero video; self-hosted subset fonts; nothing that depends on JavaScript to become readable.

## 3.6 Originality

27. **Hallmark's refusal layer holds.** RedSun (Webflow template demo) and Estatio (Dribbble presentation shot) are refused as structural sources. Pinterest is governed by the same principle. All three are **mood-only**.
28. **The two supplied screenshots contribute skeleton only.** Their content, data, claim language, typography, colour values, marker treatments and CTA styling do not travel.
29. **Nothing is copied.** No reference layout, visual, typeface, colour value, icon, text, code or interaction pattern is reproduced. Every output is original.
30. **The boundary test** (`MASTER.md` §1.5): a decision borrows *discipline* if it would still be correct with the accent removed and every photograph replaced by a plain block. It borrows *aesthetic* if those removals make it collapse. The second category does not ship.

## 3.7 Anti-slop principles worth keeping

These earn their place independently of colour direction:

31. **No bento grid, fake dashboard, floating UI cards, gradient blobs or "trusted by" logo strips.**
32. **Eyebrows off by default, maximum two per page, each justified by genuinely ordinal or categorical content; never in a tag-left / heading-right hanging arrangement.**
33. **Cards are not a default.** The four-item problem set is the one justified card use identified so far. The financing pathways render as a typographic index. (Whether the problem set remains a card set is reopened in §4 — the *principle* that cards must be earned is not.)
34. **No italic headings anywhere.**
35. **No module whose visual weight exceeds its informational content.**
36. **No figure set at display scale for impact rather than for reading.**
37. **The footer must not read as the generic four-columns-plus-social pattern; the nav must not be the minimal two-link pattern.**
38. **No standalone trust strip while no substantiated proof exists.** This rests on the absence of approved figures, logos and testimonials — an argument entirely independent of palette — so it survives.
39. **Vocabulary is part of the visual system.** "Bespoke", "discerning", "curated" and exclusivity cues stay banned in published copy. The founder decision pack §11 uses "bespoke" descriptively; that does not license it on the site.

## 3.8 High-trust, not high-hype

40. **The experience is high-trust rather than high-hype.** No urgency, countdowns, scarcity, pulsing CTAs, rate badges, eligibility teasers or approval-speed language. Restraint remains a credibility signal. What changes is that restraint is no longer the *only* instrument.

---

# 4. Visual questions that are now open

Each question below is answered *fresh* in §7, per territory. The prior answer is recorded only so it is not mistaken for a constraint. **No prior answer may be inherited by default.**

| # | Open question | Prior answer (non-binding) |
|---|---|---|
| 1 | **How black is used across the site** — as surface, as ink, as mount, as rule, or in combination | Navy as full-bleed surface on three bands |
| 2 | **How gold is used** — what single thing it means, and where it may appear | Rationed accent: CTA fill, thin rules, active marks, accent text on dark |
| 3 | **How much warm ivory/stone balances the black** | Ivory dominant; dark 30–40% |
| 4 | **Hero mechanism** — photography-led, typography-led, diagram-led or hybrid | Typography-led, photography as later enhancement |
| 5 | **Serif versus sans** | Sans only, no serif in the implementation |
| 6 | **If serif: H1-only or broader** — including the untested option of serif for *reading* rather than *display* | Serif permitted at H1 only, if ever elected |
| 7 | **Image and art direction** — subject, crop, treatment, and whether photography is commissioned at all | Documentary Singapore commercial/industrial; type-led until licensed imagery exists |
| 8 | **Section rhythm** — alternating bands, continuous document flow, or modular plates | Alternating surface bands |
| 9 | **Dark/light transitions** — hard edge, ruled seam, or overlap | Clean hard edges only |
| 10 | **Degree of asymmetry** | Asymmetry permitted and encouraged at desktop |
| 11 | **Use of editorial composition** — how far the page reads as a publication | Editorial genre, restrained |
| 12 | **Use of diagrams** — enhancement or protagonist | Sparing; one timeline component in three configurations |
| 13 | **Use of data and comparison modules** — one investment or the site's spine | One table earns full investment; additional tables require justification |
| 14 | **Card usage** — whether the problem set remains cards at all | Cards for the problem set only |
| 15 | **Visual density** | 4/10 desktop, ~5/10 mobile |
| 16 | **Design variance** | 5/10 |
| 17 | **Motion level** | 2/10, native CSS transitions only |

**Two notes on the edges of this list.**

**Motion (17) is open only within a hard ceiling.** `CLAUDE.md` forbids adding `motion/react` or any motion library without founder approval, and forbids ECC motion skills. A territory may argue for 1/10 or for 3/10; none may argue for a dependency. The motion *rules* in §3.4 — opacity and transform only, no animated focus rings, named easings, reduced-motion honoured, no scroll-arrival reveals — are not open.

**The mobile hero surface is only half open.** The requirement — *the first screen must be legible on a phone held outdoors in strong daylight by a reader over 45* — is an accessibility requirement and stays fixed (§3.4). The *implementation* — a light-surface mobile hero — was one solution. A territory may propose a different solution only if it names the compensating mechanism and commits to an outdoor device test before lock. This is a real fork and appears in §9.

---

# 5. Black-and-gold design principles

Principles, not tokens. No hex values, ratios or scales are fixed here; those follow the territory decision.

## 5.1 The governing insight

**Black and gold fails through weakness, not through quantity.**

The instinct when black-and-gold looks cheap is to use less of it. That instinct produced the navy system. It does not work here, because a *timid* black-and-gold reads as a brand that is embarrassed by its own identity — which is a worse outcome than a confident one, and is also visually indistinguishable from every other restrained professional-services site.

What separates a credible black-and-gold from a casino is not proportion. It is **whether each element has a job**.

- Casino black is **atmosphere**: a dark field that exists to make gold look expensive.
- Advisory black is **material**: ink, rule, mount, ground — something that carries, separates or holds information.
- Casino gold is **ornament**: gold that refers to nothing except value.
- Advisory gold is **notation**: gold that consistently means one specific thing the reader can learn in two seconds.

Every principle below is a consequence of that distinction.

## 5.2 Black must do work

**The deletion test.** Take any black area and delete its content. If the black still looks good — if it reads as a handsome dark panel — it was decoration and must be cut or made light.

Navy tolerates emptiness because navy is a colour. Black is an absence, and an empty black field is the single most reliable luxury signature in the reference set. Dark areas carry argument, structure or separation, never mood.

Practical consequences:

- No dark band exists to "give the page weight". If a band's job is weight, its job is nothing.
- **Density is the antidote, not the enemy.** Wealth-management and luxury-property black is black at *very low information density*. A black surface carrying a dense, well-set argument reads as authoritative. The same surface carrying six words and a rule reads as exclusive.
- Black at the *component* scale — a table header band, a footer, a mount around an image, a heavy rule — is often stronger than black at the *page* scale, because a component has an obvious job and a full-bleed band does not.

## 5.3 Gold must mean one thing

Pick a single referent for gold, state it, and hold it across every page. Any of these is defensible; mixing them is not:

- *Gold marks the one action available here.*
- *Gold marks the live or current element.*
- *Gold marks the firm's own mark — a seal, used once or twice per page.*

Casino gold has no referent, which is why it spreads: with no rule for where gold belongs, every element becomes a candidate. **Gold creep is not an aesthetic failure; it is the absence of a rule.**

Consequences that hold across all territories:

- **Gold is never text or meaningful UI on a light surface.** `#C9A227` at ~2.2:1 on ivory is a measurement (§3.4 item 16).
- **Gold never carries display or heading type on black, at any size.** Gold headlines on black is the most recognisable casino/luxury tell in existence. Headings on dark are white.
- **Gold is never a frame, border or outline around a block.** Gold-framed panels are a luxury-retail tell.
- **No wide-letterspaced gold capitals**, on any surface, at any size.
- **Gold never signals approval or success.** Green is not "approved" and gold is not "you qualify". This is a compliance issue as much as a design one.

## 5.4 Flat metal, never simulated metal

Black-and-gold goes wrong through **material simulation**. The entire failure vocabulary is the same short list: gradient, glow, bevel, emboss, sheen, shine, metallic texture, foil, drop shadow on a dark field, vignette.

Gold on this site is a flat ink colour. It is gold because of its hue, not because it pretends to be metal. Anything that makes gold look *reflective* moves the site toward packaging design.

The same rule governs black: flat, matte, one value per role. No black-to-charcoal gradients, no radial falloff behind a hero, no dark mesh.

## 5.5 Warm, not cool

Nightclub black is cool and blue. The warm ivory and stone reading surfaces are what keep this palette in advisory territory, and the dark should be tuned to sit with them rather than against them — a neutral or faintly warm black, with any supporting grey warm rather than blue.

This is also why the ivory/stone surfaces are not negotiable as *reading* grounds in any territory: they are the counterweight that makes the black legible as material rather than as atmosphere.

## 5.6 Off-axis, not symmetrical

Centred symmetry plus a thin gold rule is the luxury-retail and invitation-card signature. It is what a hero becomes when nobody decides where the content goes.

Composition should be **off-axis and decided**: asymmetric measure, deliberate left or right bias, content that starts where the argument starts rather than in the middle of the viewport. Asymmetry is also what prevents the page from looking like a template, which `docs/design-reference-study.md` §1.4 correctly names as the outcome that would undermine the entire proposition.

## 5.7 Gold small and exact; type large and plain

A useful inversion: **luxury makes the gold big and the type small; advisory makes the type big and the gold small.**

Scale is the premium instrument here, not colour. A large, plainly-set headline on black is confident. A small headline with a gold flourish is decorated. Where a territory wants a moment of drama, it should spend it on type scale, measure or space — never on the accent.

Corollary, carried from `MASTER.md` §4.5: **figures are set at reading scale, never display scale.** A number set large for impact is a wealth-marketing tell.

## 5.8 Register is part of the palette

Vocabulary and imagery belong to the visual system. A black-and-gold page using the word "bespoke", showing an aspirational skyline, or addressing the reader as "discerning" has already drifted regardless of its colour discipline. Conversely, black-and-gold carrying plain operational language — *money committed before a progress claim is certified* — cannot easily be mistaken for luxury marketing.

This is the cheapest and most reliable control available, and it costs nothing.

## 5.9 Contrast is a brand attribute

The founder's chosen archetype names **accessibility** alongside authority, sophistication and trust. That makes high contrast, real focus states, 17–18px body type and greyscale-readable comparisons part of the brand expression rather than a tax on it.

Stated positively: this brand's black is a high-contrast black. Low-contrast dark-on-dark, grey-on-black subtlety and "elegant" thin light type are the aesthetic of a different industry.

## 5.10 The seven failure modes, and the specific tells

| Must not resemble | Tells to reject on sight | Why it happens here |
|---|---|---|
| **Casino** | Gold headlines on black · gold fills at scale · metallic or gradient gold · gold frames · ornament · centred symmetry with gold rules · black with no informational load | Black treated as atmosphere and gold as ornament — §5.2, §5.3 |
| **Nightclub** | Cool blue-black · low-contrast dark-on-dark · glow · thin light type on black · moody photography · oversized wordmark centred on black | Cool dark plus low contrast — §5.5, §5.9 |
| **Crypto / trading** | Glow, neon, dark gradient meshes · performance charts · tickers · monospace used as decoration rather than as notation · "dark mode" UI conventions imported wholesale | Simulated material plus dashboard framing — §5.4 |
| **Luxury retail** | Wide-letterspaced gold capitals · thin gold rule under a centred hero · gold-framed panels · invitation-only tone · enormous whitespace with almost no content | Symmetry plus emptiness — §5.2, §5.6 |
| **Wealth management** | Display-scale figures · aspirational imagery · "discerning" / "bespoke" / "curated" · portfolio and returns modules · serif display plus gold plus black stacked together | Register drift plus the display-serif stack — §5.7, §5.8 |
| **Luxury property** | Full-bleed aspirational photography carrying the hero · skyline filler · lifestyle framing · a hero that collapses without its image | Image doing the work the argument should do — §5.2, §5.8 |
| **Consumer loan** | Rate badges · approval-speed claims · urgency · countdowns · eligibility checkers · gold used as a badge or ribbon | Gold used as a reward signal — §5.3 |

## 5.11 What "premium" is bought with here

Because there is no proof layer — no approved figures, logos, testimonials or case studies (`MASTER.md` §1.3) — premium quality has to come from execution. The budget is spent on, in order:

1. **Type scale and measure discipline.** One system, held exactly, at every breakpoint.
2. **Rule and edge craft.** Hairlines that are actually hairlines; alignments that actually align; optical adjustment where mathematical alignment looks wrong.
3. **Space.** Generous, unequal, decided. Free, unlike photography.
4. **Tabular figure alignment.** Where numbers exist, they line up. This reads as competence to exactly this audience.
5. **Specificity of content.** One accurate sentence about mobilisation pressure outperforms any amount of surface polish.

**Bespoke without being luxurious** means: the site looks made for this firm and nobody else, and it does so through structure rather than through finish.

---

# 6. Reference interpretation, reassessed

Reassessed under the corrected brand direction. **None of these becomes a template.** Hallmark's refusals (§3.6) stand in full: RedSun, Estatio and Pinterest remain mood-only and may not supply layout, grid, component, interaction, typography, colour values or code.

## 6.1 Pinterest board (`pin.it/5Cjab4sSl`)

**What remains useful.** Compositional intent — the sense that cropping, scale and spacing were decided rather than defaulted. Warm neutral grounds set against controlled dark. Images cropped with editorial judgement rather than fitted to a box.

**What the previous process over-suppressed.** Two things. First, the **warm-dark pairing itself** — the board's most transferable quality is warm neutrals against a genuinely dark ground, which is precisely the pairing the black direction now needs, and which the navy system had no use for. Second, the idea that **an image can carry compositional weight**. The navy system pushed imagery to "later enhancement", which was a sound response to missing assets but hardened into a principle it was never entitled to be.

**What must not be copied.** Any specific composition, image, font, colour value, decorative element, brand identity or layout proportion. The material is decontextualised and of unknown provenance and licensing — nothing may be traced, reproduced or used as an asset.

**What may legitimately influence.** The discipline of the crop and the confidence of the scale, applied to original Singapore commercial, industrial and advisory subject matter. The register must stay commercial. Nothing from this board may push the site toward fashion, lifestyle or real-estate marketing.

## 6.2 RedSun (`ovo-redsun.webflow.io`) — refused as a structural source

**What remains useful.** Generic compositional conventions only, and only because they are generic rather than that template's property: one idea per full-width band; strong transitions between bands; clean spacing between blocks; controlled alternation of dark and light surfaces.

**What the previous process over-suppressed.** The refusal was correct, but the aversion generalised. The navy system's "clean edges, calm alternation" became a rhythm with very little **amplitude** — the transitions were technically clean and compositionally uneventful. Under a black-led identity, the *confidence* of a surface change is available as an instrument again. A hard, uncompromising edge between ivory and obsidian is a legitimate and strong compositional device, and it is not RedSun's invention.

**What must not be copied.** Product and dashboard framing; SaaS language; its grids, cards, component treatments, section order, interactions, placeholder content structure; any source code or template asset. Template recognisability is the primary risk.

**What may legitimately influence.** Modular narrative sequencing — problem → diagnosis → possible routes → why an advisory approach → construction and engineering pathway → free assessment — re-sequenced around this firm's argument and filled entirely with financing-advisory substance.

## 6.3 Estatio (`dribbble.com/shots/27601002`) — soft-refused as a structural source

**What remains useful.** Typographic discipline: a clear scale, restrained weights, consistent alignment, generous measure. Unhurried CTA treatment. The quality of attention paid to comparison and data modules.

**What the previous process over-suppressed.** Two things, and this is the reference where over-suppression bit hardest.

First, **the serif question was closed on drift-risk grounds rather than argued on its merits.** `docs/design-reference-study.md` §6.2 recommended sans-only substantially because a serif "removes the drift vector rather than managing one". That is a risk-management argument, not a design argument, and it is exactly the category §2.4 reopens. The merits still need testing — including the possibility, never considered, that a serif could serve *reading* rather than *display* (§7.1).

Second, **the comparison module was under-invested.** The reference's polish lives largely in how seriously it treats a comparison surface. The navy system acknowledged the route table as "the one table that earns full design investment" and then specified a dark header band that was never built. Under a black-led identity that band is a genuine brand moment, not a refinement.

**What must not be copied.** Real-estate-investment positioning; portfolio and return claims; property-buying flows; return charts, metrics and dashboards; its specific layout, palette, typography, imagery, text or any branded asset. **Dribbble concepts are unbuilt** — they routinely fail accessibility, and their contrast values and type sizes must never be inherited.

**The boundary, restated so it can be tested.** A decision borrows *discipline* if it would still be correct with the serif removed, the gold removed and every photograph replaced by a plain block. It borrows *aesthetic* if those removals make it collapse. Three tells to reject on sight: a hero whose composition depends on an aspirational full-bleed image; a module whose visual weight exceeds its informational content; figures set at display scale for impact.

**What may legitimately influence.** Typographic rigour applied to genuinely useful content — the route comparison, the cash-flow explanation, the direct-versus-advisory argument, the calculator. Nothing may imply investment returns, wealth management, guaranteed outcomes or a financing product being sold.

## 6.4 Financing-route comparison screenshot — structural analysis permitted

**What remains useful.** The section skeleton: eyebrow → display heading → concise explanatory copy → comparison table → dated qualifying note → CTA below the table. The table anatomy: dark header band on a warm light ground, hairline row separators, comfortable row height, left-aligned text. The decision-oriented column logic that lets a reader locate their own situation.

**What the previous process over-suppressed.** **The dark header band.** It was specified in `docs/design-reference-study.md` §2.7 and §4, never implemented, and treated throughout as a table-styling detail. Under a black-led identity it is the clearest example in the entire project of **black doing structural work on the site's most important trust asset** — an obsidian band on warm ivory, white uppercase column labels at very high contrast, carrying the one module that most directly helps a sceptical reader decide which conversation to have. This is black earning its place rather than being allotted a percentage.

Also under-used: the **dated qualifying note** as a trust device. The reference sets it in small italic grey, which is a failure — but the *practice* of dating reviewed content is an AEO requirement (`CLAUDE.md` §"Accessibility and SEO") and a credibility signal, and it deserves proper typographic treatment rather than being inherited as fine print.

**What must not be copied.** The entire data layer — maximum amounts, indicative rates, EIR figures, indicative timelines, percentage-of-invoice limits. This is precisely the class of data `docs/claims-and-compliance-rules.md` prohibits, and an "indicative" caveat does not cure it. Also: the specific column set, visual styling, type choices, the gold CTA button treatment, and the small italic grey note.

**What may legitimately influence.** The skeleton with a qualitative payload — *Financing route · May be relevant for · What usually needs assessing · Next step* — so the table answers "which conversation should I be having?" rather than "what will I get?". The qualifying note sits at body legibility with a reviewed date. The header band is a live candidate for the brand's strongest structural moment.

## 6.5 Direct-bank-versus-advisory screenshot — structural analysis permitted

**What remains useful.** A dark-surface two-column argument as a quiet, effective way to make a differentiation case. Concise parallel bullets, one idea per line, with a clear textual label on each column.

**What the previous process over-suppressed.** The **pointedness of the dark surface**. Navy made this band read as institutional background; the reference's dark ground makes it read as *an argument being made deliberately*. That is the correct reading and it is more available under black than it was under navy. This is the band where §5.2's "black must carry argument" is easiest to satisfy, because the content is literally an argument.

**What must not be copied.** The claim content, most of which is banned by name: the ex-banker capability claim, the "full credit narrative before any document" claim, and any implication of superior outcomes. Because the prohibited material here is *language* rather than data, copying the tone is as dangerous as copying the text. Also: the ✗/✓ red-and-gold marker system, the card containers, the panel treatment and the specific styling.

**Three risks that travel with this reference.** *Compliance* — its bullets are close to the exact sentences the rules forbid. *Trust* — the "applying direct" column is a strawman, and an owner with a good bank relationship will read it as a sales tactic; going direct must be described honestly as a reasonable path. *Accessibility* — meaning carried in colour plus glyph alone, unreadable in greyscale.

**What may legitimately influence.** A labelled two-column comparison in neutral, process-focused language, with real headings on each column, no symbolic markers, and no implication of guaranteed advantage. On mobile it becomes sequential blocks with their column headings retained.

## 6.6 Cross-cutting

Both screenshots share one opening: gold uppercase eyebrow → high-contrast serif heading → muted grotesque subhead → content module. Both stack the eyebrow above the heading, so both pass Hallmark gate 54. But the **repetition** of that opening is the tell, which is why §3.7 item 32 caps eyebrows at two per page. That cap survives this reset unchanged.

One further finding carries forward: Hallmark recorded that the reference DNA — dark cool paper with a gold accent — **maps onto no catalog theme cleanly**. That was evidence for a bespoke system rather than a named theme, and it is more true now, not less. The black-and-gold direction is bespoke by necessity.

---

# 7. Proposed creative territories

Three territories. All three are Black & Gold — Premium Financial Advisory. All three satisfy §3 in full. They differ in **what black is**, **what gold means**, **what carries the hero**, and **how the page moves** — not in hue.

The quickest way to see that they are genuinely different:

| | **A · Ledger** | **B · Chamber** | **C · Works** |
|---|---|---|---|
| **Black is** | Ink and rule | Surface and room | Ground and mount |
| **Gold means** | The firm's own mark | The one action here | The live element |
| **Hero carried by** | A document masthead | Type at architectural scale | A working drawing |
| **Page moves as** | One continuous ruled document | Rooms entered and left | Plates laid down in sequence |
| **Dark is roughly** | 10–15%, component-scale | 35–45%, full-bleed | 25–30%, contained |
| **Type answer** | Sans interface + serif *reading* | Sans only, extreme scale | Sans + technical mono labels |
| **Category risk** | Reads austere | Reads luxury | Reads technical |

---

## 7.1 Territory A — **Ledger**

**Creative thesis.** The site is set like a well-made financial document, where black is ink and rule rather than background, and gold appears once or twice as the firm's own mark.

**Emotional character.** Considered, exact, unhurried. The feeling of receiving a document from someone who does this properly. Authority through craft rather than through gravity.

**Colour balance.** Warm ivory and stone carry roughly 85–90% of the page. Black appears at component scale — heavy rules, a table header band, a black footer, small solid blocks — and full-bleed dark is used at most once, at the close. Gold is the smallest of the three territories.

**Typography direction.** The untested answer, and the one that makes this territory worth proposing: **a sans for interface, data and headings; a text serif for long-form reading.** This inverts the conventional serif-display/sans-body pairing that carries the property-and-wealth register, and puts the serif where it is genuinely useful — sustained explanatory prose about financing situations. A text serif at 18–19px with generous leading is more comfortable to read at length than a grotesque, and it signals *document* rather than *brochure*. Display headings stay sans, so the drift stack (display serif + black + gold) never forms. Tabular figures throughout. Rule weight is a hierarchy instrument alongside scale and weight.

**Hero concept.** A masthead. The H1 set large but not enormous, on ivory, with a heavy black rule directly above or below it, the supporting line at reading measure, the trust line as a single ruled row, and the two CTAs. No image. Composition is left-biased with a wide right margin that the rule system runs into.

**Image / art direction.** Photography is optional and enters late, as small contained plates mounted inside the document flow with generous caption treatment — never full-bleed, never atmospheric. Diagrams are drawn in the same rule vocabulary as the page, so they read as part of the document rather than as illustrations. The territory is fully complete with zero photography, which is its practical advantage.

**Section rhythm.** Continuous document flow. Sections are separated by rule weight and space rather than by surface change. There is no alternation to fall into a stripe pattern, which removes the most common template tell. Vertical rhythm varies with content.

**Dark / light distribution.** ~10–15% dark, almost all of it at component scale: the route-table header band, the footer, and one full-bleed close. The advisory-versus-direct argument is made on ivory inside a heavy ruled frame.

**Data / comparison treatment.** The territory's strength. The route comparison is the page's centrepiece and is given full investment: obsidian header band, hairline rules, comfortable row height, left-aligned sans, tabular figures, a properly-set reviewed date beneath. The direct-versus-advisory comparison is a ruled two-column spread in the same vocabulary.

**Card philosophy.** No cards at all. The problem set becomes four ruled entries in a single column or a two-column ruled matrix — parallel and individually linked, but not enclosed. This removes the last card from the site and makes the "cards must be earned" rule trivially auditable.

**Gold philosophy.** *Gold is the firm's mark.* It appears as the primary CTA fill and as one small index mark near the wordmark or at the document's close — one or two instances per page, functioning like an issuing seal. Roughly 1–2% of surface. Because it is so rare, it carries more weight per instance than a larger budget would.

**Mobile adaptation.** The most naturally mobile-friendly of the three: a single-column ruled document is what a phone wants anyway. The masthead re-sets rather than scaling. The route comparison becomes per-route ruled blocks with repeating labels. The hero is ivory, which is the accessibility default (§4 note). Serif reading type needs a size check at 320px — the floor is 17px, and a serif may need 18px to match a sans's apparent size.

**Why it feels premium.** Because nothing is decorated and everything is exact. Premium here is the quality of the rules, the alignment, the measure and the figure setting — the same reason a well-typeset legal instrument reads as serious. It is also the most defensible against the "this is an impressive website" failure in `docs/design-reference-study.md` §2.13.4.

**Main risk.** **It reads austere, dry or under-designed**, and delivers the least of the founder's stated black-and-gold expectation. A sceptical founder could reasonably look at it and ask where the brand went.

**How to prevent the risk.** Spend the whole quality budget on scale contrast and on one or two decisive black moments. Specifically: make the H1 genuinely large; make the route-table header band heavy and full-width; make the footer a solid black plate rather than a dark tint; allow one full-bleed black close. Austerity fails when it is also *timid* — a document with a very large headline, a heavy rule and a solid black footer is not austere, it is confident.

---

## 7.2 Territory B — **Chamber**

**Creative thesis.** Black is a room the reader enters and leaves — arrival, argument and close are held in obsidian, and everything between them is daylight.

**Emotional character.** Composed and consequential. The gravity of a serious meeting. This is the territory that most directly delivers the founder's stated "Premium Financial Advisory" reading.

**Colour balance.** Roughly 35–45% obsidian, concentrated in three or four full-bleed bands; warm ivory and stone carry all reading content in between. Gold appears almost exclusively inside the dark rooms, plus the CTA fill on light.

**Typography direction.** **Single sans, no serif, hierarchy from extreme scale contrast.** This is the territory where large plain sans on black is the whole point: it is what makes black-and-gold read as *modern* rather than as *luxury*, and it is the strongest argument that survives from the superseded sans-only decision. Display sizes run larger than the current scale allows — the dark bands can carry a headline at a size the ivory bands cannot. Body stays at 17–18px. Tight negative tracking on display; no letterspacing on anything.

**Hero concept.** Full-bleed obsidian on desktop. The H1 in white at the largest size on the site, set off-axis with a deliberately unequal measure. Supporting line in warm grey. Trust line as a single row separated by a charcoal hairline — never gold. Exactly one gold object above the fold: the primary CTA fill. No image dependency; the composition is built from scale, measure and space. A restrained hairline structural mark derived from the cash-gap logic is permitted as a secondary element, drawn in charcoal, never gold.

**Image / art direction.** Photography, if commissioned, sits *inside* the light bands as contained documentary plates, never in the dark rooms — dark bands stay typographic so they cannot become atmospheric. No full-bleed imagery anywhere. This keeps the hero free of asset dependency while giving photography a real place.

**Section rhythm.** Strong alternation with high amplitude. Hard, uncompromising edges between obsidian and ivory — no fades, no seams, no overlaps. The rhythm must not become a stripe: two or three consecutive light bands are correct where content is continuous, and the dark bands are placed by argument, not by pattern.

**Dark / light distribution.** Three or four dark rooms: hero (desktop), the direct-versus-advisory argument, the final CTA, and the footer. **Each must pass the deletion test in §5.2** — if the content could be removed and the band would still look good, the band is decoration.

**Data / comparison treatment.** The route comparison stays on ivory with an obsidian header band — the light surface is non-negotiable for the module a reader studies longest. The direct-versus-advisory comparison is the flagship dark module: two columns, real headings, neutral parallel bullets, white type at very high contrast, charcoal hairlines, no markers, no gold.

**Card philosophy.** Cards survive only for the four-item problem set, with hairline borders, minimal radius, flat surfaces, no shadow and no hover lift. Everything else is open layout. Cards never appear on a dark band — a bordered card on black is a luxury panel.

**Gold philosophy.** *Gold is the one action available here.* It marks the primary CTA and nothing else at any scale above a label. Inside dark rooms gold is capped hard: **one gold object per band**, and gold text only at label or small-body scale. No gold rules on dark, no gold headings on dark, no gold frames. Roughly 3–4% overall, tighter inside dark bands.

**Mobile adaptation.** The territory's pressure point. The hero stays ivory on mobile by default — the outdoor-legibility requirement is fixed (§4 note) — which means **the hero looks materially different on desktop and mobile**. That is a deliberate decision to be approved, not an inconsistency to be discovered at review. Dark bands surviving on mobile are limited to the argument and the close, both reached only after the reader has chosen to continue. If a dark mobile hero is required on brand grounds, it needs the lighter end of the dark range, raised body contrast and a real outdoor device test before lock.

**Why it feels premium.** Scale and gravity, used sparingly and deliberately. Entering a black room and leaving it again is an experience; a uniformly light page is not. The premium signal is the *confidence* of the transitions, not the darkness itself.

**Main risk.** **The casino/luxury failure mode, at close range.** This is the territory with the most black, the most drama and the least margin. An empty dark band, a gold rule, or a centred hero would take it over the line in one move.

**How to prevent the risk.** Four controls, all auditable: (1) the deletion test on every dark band, with the band cut or made light if it fails; (2) dark bands stay typographic and information-dense — no imagery, no atmosphere, no large empty areas; (3) one gold object per dark band, gold never above label scale on dark, no gold rules or frames; (4) composition stays off-axis — no centred hero, no symmetrical band. A fifth, softer control: hold the register plain, because a dark band carrying operational language cannot read as luxury.

---

## 7.3 Territory C — **Works**

**Creative thesis.** The site is a working record — diagrams, comparisons and annotated structure are the protagonists, and black is the ground they are drawn on.

**Emotional character.** Practical, technical, unpretentious, expert. The register of a drawing office or a project file. This is the territory that speaks most directly to the construction and engineering ICP, and the one least likely to be mistaken for a wealth-management site.

**Colour balance.** Warm ivory and stone for all reading content, roughly 70–75%. Black appears as contained dark plates — the ground for diagrams, the mount around images, the table header, the footer — rather than as full-bleed bands. Gold is functional.

**Typography direction.** **Sans for everything, plus a technical mono used strictly for notation** — diagram labels, stage markers, column labels, units, reviewed dates. The mono is a notation voice, never a display voice, and never appears in running prose. This is a genuinely different third answer to the serif-versus-sans question, and it is earned by the subject matter rather than borrowed from a category. Tabular figures throughout; the mono handles anything that behaves like a dimension or a reference.

**Hero concept.** Hybrid, and the most distinctive of the three. The H1 on ivory beside or above a **working drawing**: the cash-gap rail from `docs/design-reference-study.md` §2.13.1 — money committed against money certified, drawn as a hairline structure with mono stage labels. The drawing is not decoration; it is the argument, stated visually before it is stated in words. It must be legible at 320px or be replaced there by the ordered text list that always accompanies it.

**Image / art direction.** Documentary Singapore construction, engineering, yard and plant environments, shot honestly, mounted on black plates with mono captions. Black-as-mount is what makes the imagery read as *record* rather than as *aspiration*. Full constraints from `docs/design-reference-study.md` §2.8 apply: no client documents, premises, vehicles or identifiable personnel; no imagery implying scale the firm does not have; no skyline filler; no lifestyle framing. The territory is complete without photography — the diagrams carry it — but it is the territory that would *benefit* most from commissioning.

**Section rhythm.** Modular plates laid down in sequence. Each section is a self-contained unit with its own internal logic — a drawing, a matrix, a stepped sequence, a typographic index, a table, a two-column comparison — set on ivory with occasional dark plates. Rhythm comes from the varying *shape* of each module rather than from surface alternation, which is the strongest available defence against the generic-SaaS scroll.

**Dark / light distribution.** ~25–30% dark, all of it contained: diagram grounds, image mounts, the route-table header band, the footer, and one dark close. Very little full-bleed black. Every dark area has an obvious functional job, which makes §5.2 trivially satisfiable.

**Data / comparison treatment.** The territory's core. Diagrams, the route comparison and the direct-versus-advisory argument are the **spine of the whole site**, not three moments within it. Every service page leads with its own structural drawing (trade's cycle, property's obligation stack, project's escalation, bonds' trigger sequence), which resolves the inter-page-variety requirement structurally rather than by rule. The route table gets its obsidian header band and mono column labels.

**Card philosophy.** No cards; **plates instead**. The problem set becomes four annotated entries on a shared ground, referenced by mono labels rather than enclosed in borders. The distinction is real: a card is a container, a plate is a surface with things drawn on it.

**Gold philosophy.** *Gold marks the live element.* The primary CTA; the current or active stage in a diagram; the selected route; the focused control. Gold is wayfinding, never decoration, and its meaning is learnable in one screen. Roughly 2–3%. **Gold must never mark the favourable option in a comparison** — that would make it an approval signal, which is both a compliance and an honesty failure.

**Mobile adaptation.** Diagrams re-draw vertically — never horizontal scroll, never a pinch-zoom image — and always sit alongside an equivalent ordered list in the DOM. Mono labels need a size floor check: mono runs optically smaller than sans, so the 15px floor may require 16px in practice. Plates stack single-column. The hero is ivory with the drawing beneath the headline rather than beside it.

**Why it feels premium.** Because the site demonstrably knows the subject. Drawing the cash-gap accurately is a credential no competitor can fake and no stock photograph can imitate — it is `docs/design-reference-study.md` §1.1's "specificity as the mechanism" made visual. Premium here reads as expertise rather than as finish, which is the most durable kind for this audience.

**Main risk.** **It reads technical, dry or engineering-first in a way that narrows the audience** — a trading, manufacturing or property-holding business may fail to recognise itself. There is a secondary risk that mono plus dark plates drifts toward a crypto or developer-tool aesthetic.

**How to prevent the risk.** Keep the homepage's structural drawings **sector-neutral** and let construction specificity live in the dedicated band and its own page, per `docs/design-reference-study.md` §2.13.2. Keep the mono strictly at label scale and strictly inside notation contexts — the moment mono appears in a heading or a paragraph, the crypto drift has started. Keep the reading surfaces warm and generous so the page is a document with drawings in it, not a dashboard. And hold the prose register plain and human: the drawings are technical, the writing is not.

---

# 8. Recommended homepage visual architecture

Composition only. **No final copy.** Section inventory and order follow the approved blueprint in `docs/master-website-brief.md` §5 and `design-system/the-brokerage-advisory/pages/home.md`; what differs per territory is composition, surface, mechanism and emphasis.

All three architectures satisfy: six identically-worded primary CTA placements; the hero CTA visible without scrolling at 375×812; no primary-CTA gap longer than 1.5 viewport-heights on mobile; the route comparison and the advisory comparison separated by at least one band of a different kind.

## 8.1 Territory A — Ledger

**First viewport.** A masthead on ivory. The H1 dominates, set left with a wide unequal right margin; a heavy black rule sits directly above or below it; the supporting line runs at reading measure; the trust line is one ruled row; two CTAs, the primary in gold. Nothing else. No image, no dark surface, no eyebrow.

**First major visual moment.** The rule system itself, in the first screen — a black rule at a weight the reader does not expect on a marketing site. It says *document* before a word is read.

**Eye travel.** Vertically down one column, paced by rule weight. Heavy rules mark chapter breaks; hairlines mark entries within a section. Because there is no surface alternation, the reader is never handed a rhythm to skim — they are handed a sequence of increasingly specific statements. The page reads as chapters of one instrument.

**Where dark appears.** Three places only: the route-table header band (mid-page), the footer, and one full-bleed black close. The advisory argument is made on ivory inside a heavy ruled frame.

**Where contrast changes.** Contrast is carried by rule weight and type scale rather than by surface. The single sharpest change is the arrival of the obsidian table header — which lands exactly where the reader has begun comparing, giving the moment of maximum decision-weight the maximum visual weight.

**Photography, diagrams, data.** Data dominates. The route comparison is the centrepiece. The advisory process is an ordered ruled sequence. The construction cash-gap is a small ruled inset, drawn in the page's own rule vocabulary. Photography, if it exists, is a contained plate with a proper caption — never full-bleed, never in the hero.

**How the construction story becomes distinctive.** Positioned early, directly after the problem set, opening on a concrete project situation rather than a category label, and set as a ruled inset showing the gap between committed cost and certified payment. In a document-led page, a small accurate technical inset reads as the author's own working — which is exactly the signal wanted.

**How it avoids generic SaaS.** No bands, no cards, no tiles, no alternating stripe, no feature grid, no icon row. A SaaS landing page cannot be built out of rules and measure; the format itself is the defence.

## 8.2 Territory B — Chamber

**First viewport (desktop).** Full-bleed obsidian. A very large white H1 set off-axis, with deliberately unequal space around it. Supporting line in warm grey at reading measure. Trust line as one row, separated by a charcoal hairline. One gold object: the primary CTA. **(Mobile: the same composition on ivory, re-set rather than scaled — see §7.2.)**

**First major visual moment.** The hero itself, and then the hard edge where obsidian meets ivory. That edge is the page's signature and must be absolute — no fade, no seam, no shadow.

**Eye travel.** In and out of rooms. Dark → light → light → light → dark → light → dark. The reader descends through daylight reading sections, is brought into a dark room for the differentiation argument, returns to light for the FAQ, and closes in the dark. Amplitude is high but the *count* is low — three or four dark bands, placed by argument.

**Where dark appears.** Hero (desktop), the direct-versus-advisory argument, the final CTA, the footer. Nothing else may be dark without justifying its informational load.

**Where contrast changes.** At each hard surface edge, by design. Within light bands, contrast stays even and calm so the transitions retain their force. A fifth dark band would halve the value of the other four.

**Photography, diagrams, data.** Dark bands stay typographic — no imagery, no diagram, no atmosphere. Photography, if commissioned, lives in the light bands as contained documentary plates. The route comparison sits on ivory with an obsidian header band. The cash-gap diagram sits on stone, drawn in hairlines.

**How the construction story becomes distinctive.** Placed early on a light surface, with a distinct internal structure from every other light band — a horizontal project sequence rather than the column layouts around it. It is deliberately *not* given a dark band: this territory's dark bands are scarce and reserved for argument, and giving the ICP a dark room would read as flattery rather than as recognition.

**How it avoids generic SaaS.** SaaS alternation is low-amplitude, evenly spaced and tile-filled. This is high-amplitude, unevenly spaced, and the dark bands carry prose arguments rather than feature grids. The absence of any dark band containing cards, tiles or icons is the specific control.

## 8.3 Territory C — Works

**First viewport.** Ivory. The H1 upper-left; beneath or beside it, the cash-gap rail drawn in hairlines with mono stage labels — committed cost rising against certified payment, with the gap marked. Supporting line, trust line, two CTAs. The drawing is roughly a third of the composition and is the first thing the eye resolves after the headline.

**First major visual moment.** The drawing, in the first screen. It states the reader's problem before the copy does, and it is the strongest single differentiator available to this project: no competitor's site opens by accurately drawing the visitor's cash-flow problem.

**Eye travel.** Plate by plate. Each section presents a different *shape* — a drawing, a four-entry matrix, a stepped sequence, a typographic index, a table, a two-column comparison — so the reader keeps encountering a new structure rather than a new instance of the same one. The progression runs from *your problem* to *our method* to *your options* to *the comparison* to *the ask*.

**Where dark appears.** Contained plates only: diagram grounds where a drawing needs to invert, image mounts, the route-table header band, the footer, and one dark close. Very little full-bleed black; almost all black has a drawing or a label sitting on it.

**Where contrast changes.** At plate boundaries, and it changes often but in small amounts. This territory has the lowest amplitude of the three and the highest structural variety — the reverse of Chamber.

**Photography, diagrams, data.** Diagrams and data are the spine. Every major section has a structural mechanism. Photography, if commissioned, appears as documentary plates on black mounts with mono captions, placed in the construction band and possibly the process band. The route comparison and the cash-gap drawing are the two highest-investment modules.

**How the construction story becomes distinctive.** It is native to the format rather than a section within it. The homepage hero drawing is a sector-neutral version of the cash-gap; the construction band gives the full project timeline — tender, mobilisation, progress claims, retention, bond timing, final account — with mono stage labels, on the page's most substantial plate. A contractor recognises their own operating year drawn accurately. The register stays operational throughout, per `docs/design-reference-study.md` §2.13.2.

**How it avoids generic SaaS.** Hand-built structural drawings are the opposite of the bento/tile/fake-dashboard family, and each drawing is specific to content only this firm would bother to draw. The explicit controls are: no icon grids, no feature tiles, no dashboard imagery, and mono confined to notation so the page never reads as a developer tool.

---

# 9. Founder approval gate

## Decisions I need to approve

Ten decisions. Nothing downstream should be built until 1, 2 and 3 are settled; the rest can follow quickly once they are.

**1. Which territory — Ledger, Chamber or Works.** The single decision everything else depends on. They are genuinely different sites, not three palettes. A directed hybrid is acceptable — for example, Chamber's hero with Works' diagram spine — but it must be stated as a direction, not assembled later by accretion.

**2. What black *is*.** Ink and rule (A), surface and room (B), or ground and mount (C). This determines the dark ratio, the section rhythm and the hero simultaneously. It is a more consequential question than "how much black", and it has not previously been asked.

**3. What gold *means*.** The firm's own mark (A), the one action available (B), or the live element (C). One referent, held site-wide. Approving a referent is what prevents gold creep; approving a percentage is not.

**4. The dark surface ratio.** Roughly 10–15% (A), 35–45% (B) or 25–30% (C) — replacing the inherited 30–40%. Note that V1's 55–60% is **not** recommended in any territory: long-form financial explanation must not sit on dark, and the warm reading surfaces are the counterweight that keeps black-and-gold out of luxury territory.

**5. Typography.** Three live answers, one per territory: sans interface plus a **text serif for long-form reading** (A); **sans only** with extreme scale contrast (B); sans plus a **technical mono for notation** (C). Please also rule explicitly on whether any *display* serif is permitted at all — my recommendation is no, in every territory, because display serif + obsidian + gold is the wealth-marketing stack.

**6. The mobile hero surface.** Keep the light mobile hero as mandatory — accepting that the hero will look materially different on desktop and mobile in Territory B — or allow a dark mobile hero with stated compensations and a real outdoor device test before lock. This is an accessibility decision with a brand cost, and it should be approved rather than discovered at design review.

**7. Whether photography is commissioned, and when.** All three territories are complete without it. Territory C benefits most; Territory A benefits least. The answer determines whether an image brief and budget are needed now or deferred, and it is currently the largest missing-asset risk in `docs/design-reference-study.md` §8.3.

**8. The obsidian header band on the route-comparison table.** Recommended in all three territories. It was specified during discovery, never built, and is the clearest case of black doing structural work on the site's most important trust asset. Approving it is low-risk and high-value.

**9. Confirm or revise the visual settings.** Design variance 5/10, visual density 4/10, motion 2/10 are inherited from the navy direction. Territory C in particular argues for higher structural variance; Territory A argues for slightly higher density. Motion should stay at 2/10 in every case, and no motion library is on the table.

**10. The status of `docs/black-gold-brand-correction.md`.** Please confirm the split recorded in §0: its §1 findings stand, and its §2–§10 token-level plan is demoted to non-binding prior work rather than deleted. The alternative — treating it as the plan — is exactly the navy-to-black substitution this reset was called to prevent.

---

## What happens after approval

Recorded here so the sequence is visible. **Not started, and not to be started without instruction.**

1. Amend `design.md` and `design-system/the-brokerage-advisory/MASTER.md` to the approved territory — as a re-derivation, not a find-and-replace.
2. Re-derive the page overrides, starting with `pages/home.md`.
3. Re-verify every colour pairing with a contrast tool before design lock. The arithmetic in `black-gold-brand-correction.md` §2.4 is hand-computed and must not be trusted as final.
4. Re-derive the homepage prototype at commit `197160c`, which implements the superseded direction.
5. Update `docs/design-reference-study.md` §6.1 and §8.2.1, and `docs/hallmark-reference-validation.md` §5.2, to record the resolution rather than silently leaving the old recommendation standing.
6. Add this document to the required-reading list in `CLAUDE.md` §"Read the docs before major work".

Each as a separate reviewable commit, per `CLAUDE.md`.
