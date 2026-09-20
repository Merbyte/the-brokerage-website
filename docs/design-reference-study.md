# Design Reference Study — The Brokerage Advisory

**Stage:** Visual discovery only. No design system, no components, no code, no final copy.
**Status:** Draft for founder review.
**Inputs read:** `CLAUDE.md`, `docs/master-website-brief.md` (V4, current), `docs/claims-and-compliance-rules.md`, `docs/design-inspiration.md`, `docs/reference/The_Brokerage_Comprehensive_Website_Design_Brief.md` (V1, superseded), `docs/reference/The_Brokerage_Founder_Decision_Pack_Completed.docx`, `docs/reference/team_reference_document.docx` (internal/confidential), `docs/reference/screenshot-route-comparison.png`, `docs/reference/screenshot-advisory-comparison.png`.

**Tooling note:** **Hallmark v1.1.0 is available and installed.** This study was originally produced by direct structured analysis of the reference material. It has since been independently validated with Hallmark's `study` verb, and that validation is recorded in **`docs/hallmark-reference-validation.md`**.

Read the two documents together. Where they diverge, the validation document is authoritative: it carries founder-approved corrections to the eyebrow rule (§2.2), the responsive requirements (§2.11) and the motion requirements (§2.12), all of which have been applied below. The validation document also supplies the pre-launch Hallmark audit checklist.

Note also that Hallmark's refusal layer rejected both external reference URLs as structural sources — the RedSun Webflow demo outright, the Estatio Dribbble shot as designer presentation work. Both, along with Pinterest, are mood-only references. See validation §1.

---

# 1. Executive visual direction

## 1.1 Intended visual character

The Brokerage Advisory should read as **a firm that knows its subject and says so plainly** — not a lender, not a marketplace, not a product company. The character is substance over polish: credible because it is specific, direct and unadorned, not because it is well presented.

Specificity is the mechanism. A visitor should meet detail that only someone who does this work would bother to include — the documents that actually get asked for, the point in a project where cash gets tight, the reason a facility that fitted three years ago no longer fits. That detail is what a sceptical owner reads as competence. Nothing else on the site does that job, and no amount of craft substitutes for it.

The defining discipline is **restraint as a credibility signal**. Every visual decision should look like it was made once, on purpose, by someone who did not need to decorate. Where a consumer-finance site adds a badge, this site should add clarity.

## 1.2 Desired emotional response for a cold-outreach prospect

The realistic visitor is a 40–55 year old owner of a Singapore construction or engineering business, arriving within minutes of a cold call or cold email, sceptical by default, checking whether the caller is legitimate before returning the call. They are not browsing. They are verifying.

The response we are designing for, in sequence:

1. **"This is a real firm."** — within two seconds, from craft quality alone.
2. **"They understand my situation, not just their products."** — from the problem framing, not from claims.
3. **"They are not going to waste my time or pressure me."** — from the absence of hype, urgency and rate bait.
4. **"I can ask them a question without committing to anything."** — from the low-friction, four-field assessment form and its plain disclaimer.

The founder decision pack names the target feeling directly: **reassured**. Reassurance here comes from competence made visible, not from enthusiasm.

## 1.3 The balance

| Quality | Weight | How it shows up visually |
|---|---|---|
| **Authoritative** | Highest | Typographic hierarchy, editorial structure, calm dark surfaces, no decoration competing with content |
| **Practical** | High | Legible body text, honest tables, working calculator, plain-language disclaimers kept visible |
| **Premium** | Moderate | Material quality — spacing, type, photography, detail precision — never ornament or luxury signalling |
| **Approachable** | Moderate | Short forms, direct language, visible contact routes, nothing intimidating or gated |

The failure mode to design against is **polish overwhelming approachability**. A site that feels expensive but unapproachable loses an owner-led SME who wants a straight answer. Material quality must be expressed through clarity and craft, never through exclusivity, darkness for its own sake or luxury cues.

## 1.4 What the website must not feel like

- A consumer loan or instant-approval site — rate badges, countdowns, "apply now" urgency.
- A crypto, trading or speculative-investment product — glow, gradients, charts implying returns.
- A casino, nightclub or luxury-retail brand — heavy black-and-gold, metallic textures, gold body text.
- A generic AI SaaS landing page — bento grids, fake dashboards, floating UI cards, gradient blobs.
- A lead-generation funnel — aggressive capture, hidden disclaimers, multi-step qualification walls.
- A template. Anything that looks recognisably like a purchased theme undermines the entire proposition.

---

# 2. Design DNA

## 2.1 Macro layout and section rhythm

Compose the page as **full-width surface bands containing a contained editorial grid**. Each band is one idea. The page should read as chapters, not as a scroll of cards.

- Alternate surface temperature deliberately: dark → warm light → warm light → dark → light → dark. Alternation carries the narrative beat; it should not become a stripe pattern. Two consecutive light sections are fine when the content is continuous.
- Reserve dark bands for the three moments that need gravity: the hero, the advisory-versus-direct argument, and the closing call to action.
- Vary section internal structure — an asymmetric hero, a four-item problem row, a linear process sequence, a wide comparison table, a two-column argument. Repetition of one module type is the primary slop risk.
- Section height should follow content, not a fixed rhythm. Resist padding every band to the same vertical measure.

## 2.2 Visual hierarchy

The default section opening is **display heading → short explanatory paragraph → content**. Hierarchy is carried by heading scale, weight and spacing — not by labels. Keep body measure at roughly 60–75 characters. One H1 per page.

### Eyebrow rule (founder-approved; supersedes the earlier default)

An earlier draft of this study made the eyebrow a standard part of every section opening. Hallmark's independent review identified the repeated eyebrow as a templated-editorial tell in its own right — the problem is the repetition, not the frequency of exceptions. The rule is therefore inverted:

- **Eyebrows are off by default.**
- **Maximum one to two eyebrows per page.**
- Use an eyebrow **only** where the content is genuinely ordinal, categorical, or where the reader needs orientation they cannot get from the heading alone.
- **Never use a hanging tag-left / heading-right header.** The two-column arrangement with the label in the left margin is banned outright — it is the most reliable templated-editorial tell and fails Hallmark's gate 54.
- **When an eyebrow is used, stack it directly above its heading**, in the same column.
- **The heading and the content beneath it must remain clear with the eyebrow text removed.** If deleting the eyebrow makes the section ambiguous, the heading is doing too little work and should be rewritten rather than propped up by a label.

Recorded in full at `docs/hallmark-reference-validation.md` §3.2, Correction 1.

## 2.3 Typography personality

The recommended system is **a single modern sans carrying the entire site**, with hierarchy built from scale, weight, spacing and alignment rather than from a second family — see §6.2, Pairing 3. It is the most legible option on a phone in a site office, the least likely to read as property or wealth marketing, and the most differentiated in a category where competitors reach either for cheap defaults or for luxury serifs.

- **Modern sans (primary, and by default the only family)** — display headings, body copy, navigation, labels, tables, form fields, calculator UI, disclaimers, buttons. Selected for legibility at small sizes, a wide usable weight range and clear tabular figures.
- **Editorial display serif (optional, only if the founder elects a serif direction)** — **page H1 only, never section headings.** Its job would be one moment of voice per page, not a recurring texture.

Rules if a serif is retained: H1 only; never below roughly 28px; never long-form body; never in gold; never more than two families plus their weights. Allowed onto section headings it spreads across the whole page and carries the property-marketing drift described in §3.3 and §8.4 — which is precisely how that drift happens.

## 2.4 Colour and contrast principles

Treat colour as structural, not decorative. Four roles:

1. **Deep surface** (navy/obsidian territory) — gravity, focus, the moments that matter.
2. **Warm light surface** (ivory/stone) — the reading environment, where most content lives. Warmth is what separates this from cold fintech.
3. **Ink** (near-black with a blue cast, plus a muted grey for secondary text) — text only.
4. **Champagne-gold accent** — strictly rationed. Eyebrows, active states, thin rules, small icon marks, the primary CTA. Never a large fill, never body text, never a gradient, never a glow.

Governing principles:

- **Gold appears at roughly 5% of surface area, not 15%.** It should feel like a detail noticed on second look.
- **Never encode meaning in colour alone.** The comparison sections must pair every colour cue with a text label or shape so that colour-blind and greyscale readers get identical information.
- **Verify every final pairing against WCAG AA.** Gold on dark and gold on warm light are both at risk; muted grey body text on warm backgrounds is the most common real-world failure. Contrast is a compliance matter here, not a preference.
- Error and success states use accessible muted red/green that never read as "rejected/approved" financing outcomes.

## 2.5 Dark and light surface usage

- **Dark is for argument and arrival**, not for atmosphere. Approximately 30–40% of total page area, concentrated at the top, the advisory argument and the close.
- **Warm light is the default reading surface** for all explanatory content, service pages, FAQs, the calculator and forms. Long-form financial explanation must not be set on dark.
- Transitions between surfaces should be clean edges. No gradient fades, no glassmorphic overlaps, no parallax seams.
- Keep a consistent rule for which elements invert — CTA treatment, eyebrow colour and rule weight should have a defined dark-surface variant rather than being improvised per section.

## 2.6 Whitespace and content-density rules

Target density is **4/10 — deliberately open**. Whitespace is the primary carrier of material quality, and it is free, unlike photography and logos, which are currently missing.

- Generous section padding; wide outer margins on desktop; a contained measure for text even inside full-width bands.
- Dense only where density serves comprehension: comparison tables, the calculator output, the footer.
- Never fill a band because it looks empty. An empty-feeling section usually means the content is thin, and the fix is content, not decoration.

## 2.7 Border, card and table treatment

- **Cards are a last resort, not a default.** Exactly one use is justified on the homepage: the problem set, where four items are genuinely parallel and independently actionable. Everything else sits in open layout with rules and spacing.
- **The financing pathways are not cards.** They are a **typographic index** — each route a heading, a one-line situation and an "Explore" link, separated by hairline rules rather than enclosed in boxes. Rendering both the problem set and the pathways as cards produces nine card objects across consecutive bands, which is the generic pattern §1.4 bans.
- Where cards are used: hairline borders, minimal or no radius, flat surfaces, no drop shadows, no hover lift beyond a restrained border or accent change.
- **The route comparison is the one table that earns full design investment.** It is a genuine trust asset: a dark header band, hairline row separators, comfortable row height, left-aligned text, sans throughout. Its mobile pattern is decided in §2.11.
- **Any additional table requires explicit justification** against its mobile cost. Tables are the highest-risk component on small screens; a second one should exist only where a list genuinely cannot carry the comparison.
- Every table that presents financing information carries a visible "what this does and does not mean" note and, where content is time-sensitive, a reviewed date.

## 2.8 Photography, image and illustration direction

- **Subject matter:** real Singapore commercial and industrial context — construction and engineering sites, project environments, commercial property, plant and yard, documents and meetings shot honestly.
- **Treatment:** editorial and observational. Natural light, restrained grade consistent with the warm-neutral palette, wide crops with room to breathe, people at work rather than posed.
- **Ban list:** stock handshakes, generic call-centre desks, skyline clichés used as filler, smiling model "business people", fake dashboards or screens, any image implying wealth, luxury or returns.
- **Confidentiality constraint.** No photography of client documents, financial statements, screens showing client data, or identifiable client meetings, premises, vehicles or personnel — including material that is blurred or partially obscured. The founder decision pack states client identities cannot be disclosed; a recognisable site hoarding, vehicle livery or document header discloses one. Where a document or meeting must be depicted, use purpose-made material with synthetic content and a documented release.
- **Scale constraint.** No imagery implying office, team or operational scale the firm does not have — large open-plan floors, boardrooms full of people, trading-floor density, multi-storey corporate frontage. Depicting scale the business lacks is an invented credential in visual form and sits in the same category as the prohibited "ex-banker team" claim. This matters practically as well as ethically: the office address is published and walk-in visits are welcomed, so the imagery sets an expectation a visitor will physically test.
- **Illustration/diagram:** use sparingly and only where a diagram genuinely explains — the cash-flow timing gap, the six-step advisory sequence, the route-decision logic. Line-based, monochrome plus one accent, no isometric 3D, no decorative abstract shapes.
- **Interim strategy:** until licensed photography exists, favour typographic and structural compositions over placeholder imagery. A confident type-led hero beats a stock photo. Never ship a visible placeholder.

## 2.9 Icon direction

Minimal, functional, and used only where an icon carries meaning — navigation affordances, contact routes, process steps, table legends. Single-weight line icons, consistent stroke and corner treatment, small scale, accent or muted colour rather than filled shapes. No icon-in-a-circle badges, no duotone, no illustrative spot icons, no icon on every bullet. If a label works alone, drop the icon.

## 2.10 Form and calculator interface character

These are the two places where the site stops being a brochure, and they carry disproportionate trust weight.

**Assessment form** — four fields only (name, email, phone, message). Visible persistent labels, never placeholder-only. Comfortable field height and tap targets. Inline validation that explains rather than scolds. Errors announced to assistive technology, never colour-only. The consent line and the "initial discussion only" disclaimer sit adjacent to the submit control at full legibility — never in fine print, never behind a disclosure toggle. Clear success and error states with a direct contact fallback.

**Calculator** — reads as a serious planning instrument: tabular figures, clearly labelled inputs with units, a plainly stated calculation basis, and results presented as estimates rather than quotations. The illustration-only disclaimer sits directly adjacent to the results, at body-text legibility, visible without interaction. No gauges, no animated counters, no progress rings, nothing that dramatises a number. The calculation method must be stated in the interface, not just in documentation.

## 2.11 Mobile adaptation principles

Mobile is designed, not compressed. The realistic context is a phone held one-handed, frequently outdoors on a site or in a vehicle, by someone over 45, on a connection that is not reliably good. The following are decisions, not preferences.

**Test widths (founder-approved).** Verify at **320, 375, 414, 768, 1024 and 1440px**. **320px is the floor**, not 360px. The route comparison and the calculator are the two components most likely to fail there and are checked first.

**Horizontal overflow.** **No horizontal overflow at 320px**, or at any other tested width. Overflow is eliminated at its source. **`overflow-x: hidden` and `overflow-x: clip` must not be used to hide layout defects** — a page that needs them in order to look correct has a bug that has been concealed rather than fixed.

**Long headings.** Display headings use **`overflow-wrap: anywhere`** where a long unbroken word would otherwise force overflow. Grid tracks carrying images use `minmax(0, 1fr)`, never a bare `1fr`.

**Clickable labels.** **Avoid two-line clickable labels** — buttons, primary navigation links, footer links, breadcrumbs and CTAs. CTA labels stay concise and readable on one line at 320px. Where a label will not fit, shorten the label rather than shrinking the type below the minimum or reducing the touch target.

**Type size.** Mobile base body is **17–18px**, not 16px. The audience is owners aged 40–50+; presbyopia is the norm here, not an edge case. The floor for any text — disclaimers, table cells, form hints, footer legal — is 15px. Small italic grey is prohibited outright (§5, rule 6).

**Sunlight versus dark surfaces — decided.** Dark surfaces are the worst case for outdoor phone legibility, and the hero is the first thing this audience sees, often outdoors. **Resolution: the mobile hero uses the light surface, not the dark one.** Dark bands on mobile are limited to the advisory argument and the final CTA, both reached only after the visitor has chosen to keep reading. Any dark band retained on mobile uses the lighter end of the dark range and raises body contrast above its desktop value. This is a genuine conflict with the desktop art direction and is logged in §8.2.

**Route comparison table — decided pattern.** Not horizontal scroll, not a card grid, not a collapsed accordion. Each financing route becomes a **self-contained block**: route name as a heading, the three remaining columns as label-and-value pairs on their own lines, the "next step" link last, hairline rule between blocks. Column labels repeat inside every block so that no block depends on a header row that has scrolled out of view. Verified at 320px.

**Primary CTA reach.** The primary CTA sits within one-handed thumb reach — horizontally centred or full-width, never in a top corner — and is never the page's smallest touch target. Minimum touch target 48×48px with at least 8px clear spacing, sized for imprecise taps from someone with dusty or gloved hands.

**Contact routes.** Call and WhatsApp reachable without hunting, but the assessment CTA stays visually primary. WhatsApp must never become the only visible conversion route.

**Sticky mobile CTA.** Permitted only if it is slim, never overlaps the form disclaimer, calculator assumptions or any legal text, and never covers content at the foot of the page. If it cannot satisfy all three, it is not used.

**Performance budget.** Assume a mid-range Android on a congested mobile connection, not a flagship on office wifi. Target a usable first render inside three seconds on that assumption. Consequences: no hero video, self-hosted subset fonts, responsive and lazy-loaded imagery below the fold, and **no layout that depends on JavaScript to become readable** — content must be complete with JavaScript unavailable.

**General.** Single column throughout. No horizontal scroll anywhere. No hover-dependent information.

## 2.12 Appropriate motion principles

**Effective motion intensity 2/10.** Motion responds to what the visitor does. It does not perform on its own.

**Founder-approved constraints.**

- **Animate opacity and transform only.** No layout properties, ever.
- **Never animate focus rings.** A focus ring appears instantly on focus, at ≥3:1 contrast. Animating it delays the one affordance a keyboard user depends on.
- **Use named approved custom easing values.** The browser-default `ease` is not permitted. Easings are defined as named tokens in the design system and referenced by name.
- **`prefers-reduced-motion: reduce` removes non-essential motion, or reduces it to a maximum 150ms opacity transition.** Nothing spatial survives the reduced-motion path.

**Application.**

- **Permitted — interaction feedback only:** hover and active states on links and buttons, focus state changes, accordion expansion and collapse, form validation state changes, calculator result updates.
- **Scroll-arrival entrance animation is removed.** No fade-in or offset reveal on section arrival, no stagger cascades, no scroll-linked scrubbing, no parallax, no counting numbers, no pulsing CTAs, no auto-playing video backgrounds. Scroll reveals are a template and AI-SaaS signature, they put content behind JavaScript, and they degrade badly on the connections this audience actually uses. **All content is present and readable on load.**
- Durations short (roughly 150–250ms), using the named easing tokens.
- Because nothing animates on arrival, the reduced-motion experience is already close to identical to the default — which is the point, not a limitation.
- Motion is applied only after layout is stable, per the orchestration order.

## 2.13 Construction and engineering design implications

Construction and engineering is the priority ICP, and the rest of this section would otherwise describe a design suitable for any advisory firm in any sector. These are the decisions that make the site specific to it.

### 2.13.1 What the process diagram actually depicts

The six-step advisory sequence must be drawn in the language of a project, not of a generic funnel. A contractor should recognise their own operating year in it. The diagram works against a **project timeline**, not an abstract process arrow, and marks the points where financing questions genuinely arise:

- **Tender and award** — the point where a contract is won and the cost of starting it becomes real.
- **Mobilisation** — plant, materials, subcontractor deposits and manpower committed before any money arrives.
- **Progress claims and certification** — work done, claim submitted, payment certified and paid on someone else's schedule.
- **Retention** — a portion held back, often for a long period, sitting on the balance sheet as value that cannot be spent.
- **Bond timing** — when a performance bond is required relative to award and mobilisation.
- **Final account and release** — the tail of the project and the release of retained sums.

The diagram's purpose is to show *where the gap opens* between money committed and money received. That gap is the client's actual problem and the site's single most persuasive piece of non-claim content. It must be drawn without figures, without timelines presented as typical, and without implying that any financing route closes the gap — it shows the shape of the problem, not a promised solution.

### 2.13.2 Register for the route comparison table

The table's language decides whether a contractor sees themselves in it. The register is **operational, not institutional** — the terms used on a site and in a project meeting, not the terms used in a credit paper.

- Write "money committed before a progress claim is certified", not "working-capital timing mismatch".
- Write "a bond required before you can start on site", not "bonding facility requirement".
- Write "retention you cannot draw on yet", not "restricted asset position".
- The "what usually needs assessing" column should name the documents a contractor actually holds — the contract, the payment terms, the claim and certification history, the existing facility letters — not abstract categories such as "financial position".

Two cautions. First, the register must stay accurate: plain language must not become loose language, and nothing in the table may imply eligibility, availability or outcome. Second, the register must not narrow the table so far that a trading, manufacturing or property-holding business fails to recognise itself — construction is the priority pathway, not an exclusion rule. Where the two pull apart, keep the row headings sector-neutral and let the construction specificity live in the dedicated band and its own page.

### 2.13.3 Hero visual direction with no photography

Licensed imagery does not yet exist and may not exist by design lock (§8.3). The hero must therefore be designed to work **without a photograph at all**, with imagery as a later enhancement rather than a dependency.

- **Primary direction: typographic.** The headline carries the hero, set large on the light surface (per §2.11), with the supporting line, trust note and both CTAs. Composition comes from scale, measure and generous asymmetric space — not from an image.
- **Permitted secondary element:** a restrained structural graphic derived from the project-timeline logic in §2.13.1 — a simple line treatment showing the gap between committed cost and certified payment. It must read as an explanatory mark, not as decoration, and must be legible at 360px or be omitted there.
- **Explicitly rejected:** aspirational full-bleed imagery, skyline photography, abstract "capital" gradients, stock construction imagery not shot for this firm, and any placeholder image shipped as a stand-in. A confident typographic hero is better than a borrowed photograph, and it is also the fastest thing to load (§2.11).
- When commissioned photography arrives, it enters as a contained, cropped element beside the type — the hero is not rebuilt around it.

### 2.13.4 Addressed, not impressed

The governing test for every ICP-facing decision: an owner-led construction business should finish the hero thinking **"they deal with businesses like mine"**, not "this is an impressive website".

Those two reactions pull in opposite directions, and the second is the more seductive one to design for. Practical consequences:

- **Recognition beats aspiration.** One accurate sentence about mobilisation pressure outperforms any amount of visual sophistication.
- **Do not design for the visitor's aspirations.** This audience is not buying status; they are checking whether a cold caller is worth ten minutes.
- **Avoid the wealth-advisory register entirely** — no "bespoke", no "discerning", no exclusivity cues, no invitation-only tone. It signals a different client and a different fee expectation, and it interacts badly with the transparent-fair-fee positioning in the founder decision pack.
- **Seniority of address.** Write to an owner who understands their own numbers better than the reader does. Explain financing structure, never their own business back to them.

## 2.14 Inter-page structural variety

Everything above governs the homepage. The launch sitemap carries roughly seventeen pages, six of them service pages. Without an explicit rule those six become one template with the nouns swapped — which is precisely the generic pattern §1.4 bans, and which Hallmark's independent review identified as a gap in this study (`docs/hallmark-reference-validation.md` §3.3, Gap 1).

**The rule.** **Every page has a distinct primary information archetype, derived from the shape of its own subject.** Shared tokens and reusable components are required — colour, type, spacing, buttons, forms, disclaimers, header, footer and CTA band must be identical everywhere. **Consistency lives in the system; variety lives in the composition.** A page is not allowed to be a previous page with different words in the same slots.

| Page | Primary information archetype | What drives the shape |
|---|---|---|
| **Home** | Problem-diagnosis narrative | Self-identification first, then method, then routes, then the ask |
| **Business Financing** | Situation catalogue | Several distinct funding situations, each assessed differently; breadth is the subject |
| **Trade Financing** | Cash-flow timing sequence | A cycle with a gap in it — receivables in, payables out; the timeline *is* the explanation |
| **Property Financing** | Asset-and-obligation assessment | Ownership, valuation, existing debt and repayment capacity as a set of interacting conditions |
| **Project & Private Capital** | Scale-and-structure escalation | The opportunity outgrowing the current structure; complexity increases down the page |
| **Performance Bonds** | Definition → trigger → preparation | A single instrument most readers do not fully understand; plain-English teaching page |
| **Construction & Engineering** | Project-timeline walkthrough | Tender, mobilisation, progress claims, retention, bond timing (§2.13.1) |
| **How It Works** | Sequential process document | Six ordered steps with what each requires and what it does not promise |
| **Calculator** | Tool-first utility page | Inputs, result, assumptions and disclaimer dominate; prose is support, not the page |
| **Assessment / Contact** | Single-task conversion page | Four fields, disclaimer, direct contact routes; nothing competing for attention |

**Consequences.** No two adjacent service pages may share a section order. Trade's timing sequence must not be re-skinned as Property's assessment set. The Performance Bonds teaching page must not open like a service pitch. Where two pages genuinely need the same module — the route comparison, the FAQ accordion, the CTA band — the module is reused unchanged; the composition around it differs.

This is a design-system deliverable, not a build-time improvisation: each page's archetype and its component picks are named before implementation begins.

---

# 3. Reference-by-reference analysis

## 3.1 Pinterest board reference (`https://pin.it/5Cjab4sSl`)

**Useful high-level principles.** Mood and aspiration only: the sense that composition was intentional; confident typographic scale; warm neutral grounds against controlled dark; images cropped with editorial judgement rather than filling a box; spacing used as a compositional element.

**What must not be copied.** Any specific composition, image, font, colour value, decorative element, brand identity or layout proportion. Pinterest material is also of unknown provenance and licensing — nothing from it may be traced, reproduced or used as an asset.

**Translation.** Take the *discipline* — intentional cropping, confident scale, warmth — and apply it to original Singapore business, construction and advisory subject matter. The output must read as a financing advisory, not as fashion, lifestyle or real-estate marketing.

**Risks.** Highest inspiration-copying and licensing risk of the three external references, because the material is decontextualised imagery with no clear rights. Also the highest risk of drifting the site toward lifestyle-brand territory, which would actively damage financial-services credibility. Use for mood conversation only; do not use as a layout or asset source.

## 3.2 RedSun Webflow reference (`https://ovo-redsun.webflow.io/`)

**Useful high-level principles.** Strong full-width section transitions; clear modular storytelling where each band carries one idea; large visual hierarchy that survives skim-reading; controlled alternation between dark and light surfaces; clean spacing between content blocks.

**What must not be copied.** Product/dashboard framing, SaaS language, its grids, cards, component treatments, template interactions, placeholder content structure, or any source code or template asset. It is a Webflow template — reproducing its structure would be both derivative and recognisable.

**Translation.** Keep the modular-narrative principle and re-sequence it around the advisory argument: problem → diagnosis → possible routes → why an advisory approach matters → construction and engineering pathway → free assessment. Replace every software-product visual with financing-advisory substance — process explanation, qualitative route comparison, cash-flow timing diagrams, credible editorial imagery.

**Risks.** Template recognisability is the main one. A secondary risk is inheriting SaaS conversion patterns — feature grids, "trusted by" logo strips, product screenshots — which would introduce fake social proof and a product framing the business does not have.

## 3.3 Estatio Dribbble concept (`https://dribbble.com/shots/27601002`)

**Useful high-level principles.** The serif-display-plus-clean-sans pairing; warm neutrals against controlled dark contrast; generous whitespace; refined hierarchy; elegant, unhurried CTA treatment; high-quality presentation of comparison and data modules.

**What must not be copied.** Its real-estate-investment positioning, portfolio and return claims, property-buying flows, return charts, metrics and dashboards, specific layout, colour palette, typography choices, imagery, text or any branded asset.

**Translation.** Borrow one thing only: **the typographic discipline** — a clear scale, restrained weights, consistent alignment and generous measure, applied to genuinely useful content. Apply it to the route comparison, the cash-flow explanation, the direct-versus-advisory argument and the repayment calculator.

**The boundary, stated so it can be tested.** A decision borrows *discipline* if it would still be correct with the serif removed, the gold removed and every photograph replaced by a plain block — because its value lives in structure and hierarchy. It borrows *aesthetic* if those removals make it collapse, because its value lived in surface. Anything in the second category is property and wealth marketing and does not ship. Three specific tells to reject on sight:

1. A hero whose composition depends on an aspirational full-bleed image.
2. A module whose visual weight exceeds its informational content.
3. Figures set at display scale for impact rather than for reading.

The line that must not be crossed: nothing may imply investment returns, wealth management, guaranteed outcomes or a financing product being sold.

**Risks.** The most dangerous reference from a compliance standpoint, because it is the most attractive. Its polish lives largely in return-metric modules that are prohibited for us to imitate in substance. There is a real risk of a designer reproducing a beautiful "performance" module and filling it with financing numbers we are not permitted to publish. Dribbble concepts are also unbuilt — they routinely fail accessibility, and their contrast and type sizes must not be inherited.

## 3.4 Screenshot — financing-route comparison (`docs/reference/screenshot-route-comparison.png`)

**Useful high-level principles.** The section skeleton is genuinely good and worth keeping at principle level: small eyebrow label → large serif heading → concise explanatory copy → comparison table → dated update/disclaimer note → CTA below the table. Dark table header against a warm light ground gives the table authority. The decision-oriented column logic helps a reader self-locate.

**What must not be copied.** The entire data layer, which is precisely what our compliance rules forbid: maximum amounts, indicative rates, EIR figures, indicative timelines and percentage-of-invoice limits. Also the specific column set, visual styling, type choices and the WhatsApp-styled gold CTA button.

**Translation.** Keep the skeleton, replace the payload with the qualitative four-column structure already approved in the master brief — financing route, what it may be relevant for, what usually needs assessing, next step. The table then answers "which conversation should I be having?" rather than "what will I get?", which is both compliant and a better fit for a diagnosis-first positioning.

**Risks.** Severe and specific. This screenshot publishes rates, amounts and timelines, and the source material in `docs/reference/team_reference_document.docx` contains the same class of figures. An "indicative" or "rates vary" caveat does **not** make these publishable under `docs/claims-and-compliance-rules.md`. A second risk: the caveat text in the screenshot is set in small italic grey, which is both a legibility failure and exactly the pattern our rules prohibit — disclaimers must not be visually de-emphasised.

## 3.5 Screenshot — direct bank versus advisory (`docs/reference/screenshot-advisory-comparison.png`)

**Useful high-level principles.** A dark-surface two-column argument is an effective, quiet way to make a differentiation case. Concise parallel bullet hierarchy, one idea per line, with a clear label on each column.

**What must not be copied.** The claim content, most of which is explicitly banned: the ex-banker capability claim, the "full credit narrative before any document" claim, and the implication of superior outcomes. Also the ✗/✓ red-and-gold marker treatment, the card containers and the specific styling.

**Translation.** Use the compliance-safe framing already drafted in `docs/design-inspiration.md` and the master brief — describing what going direct typically involves versus what an advisory process involves, in neutral, process-focused language, with no claim of guaranteed advantage. Prefer a labelled two-column layout with a clear textual heading per column over symbolic markers.

**Risks.** Three distinct ones. **Compliance:** the reference's bullets are close to the exact sentences our rules forbid, so copying tone here is as dangerous as copying text. **Trust:** the "applying direct" column is a strawman, and an experienced business owner with a good bank relationship will read it as a sales tactic — it should describe a reasonable alternative honestly. **Accessibility:** the ✗/✓ plus red/gold pattern carries meaning in colour and symbol alone; it needs text labels and non-colour differentiation to be usable in greyscale or by colour-blind readers.

---

# 4. Borrow / avoid / translate table

| Reference principle | Borrow at principle level | Avoid | Translation for The Brokerage Advisory |
|---|---|---|---|
| Editorial composition and intentional cropping (Pinterest) | Compositional discipline, warm-neutral grounds, confident scale | Any specific composition, image, font, colour, decorative element; unlicensed assets | Apply to original Singapore construction, project and advisory subject matter; keep the register commercial, not lifestyle |
| Modular full-width storytelling (RedSun) | One idea per band; strong section transitions; controlled dark/light alternation | Product/dashboard framing, SaaS copy patterns, its grids, cards, interactions, any template code | Re-sequence as problem → diagnosis → routes → why advisory → construction pathway → assessment |
| Serif display + clean sans pairing (Estatio) | Strict separation of display and functional type roles | Its specific fonts, palette, layout, imagery; serif in long-form body; serif on section headings | Single sans carrying the site (§6.2, Pairing 3); if a serif is elected, page H1 only — never section headings |
| Warm neutrals against controlled dark (Estatio, Pinterest) | Warmth as the differentiator from cold fintech; dark used for gravity | Constant dark, black-and-gold luxury styling, gradient/glow transitions | ~30–40% dark, concentrated at hero, advisory argument and close; clean surface edges |
| Refined data/comparison module presentation (Estatio) | Typographic care applied to genuinely useful comparison content | Investment-return charts, performance metrics, portfolio dashboards | Apply the care to qualitative route comparison and the repayment calculator only |
| Comparison-section skeleton (route screenshot) | Eyebrow → display heading → short copy → table → dated note → CTA | Max amounts, indicative rates, EIR, timelines, LTV/invoice percentages; its styling and CTA treatment | Qualitative four-column table: route / may be relevant for / what needs assessing / next step; opens on the question, per §2.2 |
| Dark table header on warm ground (route screenshot) | Dark header band, hairline separators, left-aligned sans, comfortable row height | Small italic grey caveat text; colour-only emphasis | Same structural treatment; disclaimer at body legibility, with a reviewed date where content is time-sensitive |
| Two-column differentiation argument (advisory screenshot) | Dark-surface side-by-side, concise parallel bullets, one idea per line | Ex-banker claim, credit-narrative claim, any superiority or certainty implication; ✗/✓ colour-coded markers | Neutral process comparison per the approved wording; text-labelled columns, meaning never carried by colour or symbol alone |
| Elegant CTA treatment (Estatio, screenshots) | Unhurried, confident, well-spaced primary action | Pulsing, glowing, gradient or oversized gold buttons; WhatsApp-styled primary CTA | Single restrained gold primary CTA reading "Get a Free Financing Assessment", repeated at defined intervals |
| Gold as positive accent (advisory screenshot) | Gold as a rationed detail accent | Gold backgrounds, gold body text, gold-on-black luxury signalling, gold as a "success/approval" signal | ~5% surface area: eyebrows, thin rules, active states, small marks, primary CTA — contrast-verified in both themes |

---

# 5. Financial-services trust and compliance rules

These are preserved explicitly and carry forward into the design system and build stages. They override visual preference in every case.

1. **No generic consumer-loan visual cues.** No rate badges, approval-speed claims, "apply now" urgency, eligibility checkers, countdown timers or pre-qualification teasers.
2. **No crypto, trading or speculative-investment aesthetic.** No glow, neon, dark-gradient meshes, candlestick or performance charts, ticker treatments, or any visual implying returns or market movement.
3. **No casino, nightclub or excessive black-and-gold luxury styling.** No metallic textures, gold gradients, gold fills at scale, gold body text, or high-contrast black-gold ornamentation.
4. **No generic AI SaaS dashboard.** No fake product screenshots, floating UI cards, bento grids, feature-tile walls, gradient blobs or "trusted by" logo strips.
5. **No fake social proof or unverified data.** No client logos, lender logos, named partnerships, testimonials, ratings, review stars, animated counters, success-rate figures, placement volumes, rates, fees, LTVs, tenures, approval claims or outcome claims. This includes anything sourced from `docs/reference/team_reference_document.docx`, which is marked confidential and internal-only and contains rates, LTV bands, processing fees and a lender-count claim — **none of it may reach the website in any form**.
6. **No design pattern that hides required language.** Legal disclaimers, the calculator's illustration-only disclaimer and calculation basis, form consent and error text, and financing-route qualification language must all be visible at body-text legibility on first view. Specifically prohibited: disclaimers in small italic grey, behind accordions or tooltips, below the fold of the module they qualify, in a colour that fails contrast, or dismissed on interaction.
7. **No copying from reference materials.** No reference layout, image, logo, brand, text, component, icon, animation, interaction pattern or code may be reproduced. Where a reference principle is used, it is used at the structural level only, as recorded in §4.

---

# 6. Proposed art direction

Exact hexadecimal values are deliberately deferred to the design-system step, where every pairing will be contrast-tested.

## 6.1 Colour direction options

All three stay within the approved territory: deep navy/obsidian, warm ivory/stone, restrained champagne gold.

**Option A — Navy-led editorial (recommended).**
A deep blue-leaning navy as the dark surface, a warm ivory as the primary reading ground, ink that is near-black with a blue cast, a muted blue-grey for secondary text, and champagne gold as a rationed detail accent. The navy reads as institutional and calm; the warm ivory keeps it approachable. This is the direction that most cleanly satisfies the V4 brief's simultaneous requirements for material quality and distance from black-and-gold luxury styling, and it is the safest fit for financial-services trust.

**Option B — Obsidian-led with warm stone.**
A near-neutral obsidian rather than navy as the dark surface, paired with a slightly deeper warm stone ground and the same rationed gold. Closer to the founder's stated black-and-gold preference while staying clear of casino styling, because the gold ratio stays low and the light surfaces stay warm and dominant. Requires more discipline: obsidian plus gold drifts toward luxury signalling faster than navy plus gold, and needs tighter control of gold surface area.

**Option C — Ink-and-ivory with minimal gold.**
Warm ivory and stone dominate throughout; the dark surface is a deep ink used only for the hero and the closing CTA; gold is reduced further, to rules, eyebrows and the primary CTA only. The most editorial and most approachable of the three, and the strongest differentiator from every competitor in the category. The trade-off is that it delivers the least of the founder's stated "premium black and gold" expectation and leans hardest on photography and typography quality — which are currently the least-resourced assets.

**Common rules across all options:** gold at roughly 5% of surface area; no gradients; no glow; no gold body text; both a dark-surface and light-surface variant defined for every component; every pairing verified against WCAG AA before design lock.

## 6.2 Typography pairing options

**Pairing 3 — Single sans superfamily, two weights, tabular figures (recommended).**
One modern sans carries the whole site. Hierarchy is built from scale, weight, letterspacing and alignment rather than from a second family: a heavier weight for display and headings, a regular for body, and a proper tabular-figure set for the calculator, the route table and any numeric content. Candidate direction: a superfamily in the Inter / IBM Plex Sans / Söhne territory with genuinely distinct display and text optical treatment.

Argued against the ICP: it is **the most legible option** on a phone held outdoors by someone over 45, which is the realistic first encounter (§2.11). It is **the least likely to read as property or wealth marketing**, removing the single largest carrier of the drift identified in §3.3 and §8.4. It is **the most differentiated** in the Singapore SME financing category, where competitors reach either for cheap system defaults or for a luxury serif — a rigorously set sans-only system reads as engineering rather than marketing, which is the correct signal for a construction and engineering audience. It is also **the cheapest to get right and the hardest to get wrong**: one family, fewer licences, a smaller font payload against the performance budget, and no risk of a serif spreading across section headings during the build. The trade-off is honest — it delivers the least of the founder's stated visual expectation and places the entire burden of distinctiveness on the type scale, spacing and colour system, which must then be executed to a genuinely high standard rather than merely competently.

**Pairing 1 — Transitional serif + neutral grotesque (fallback if a serif is elected).**
A transitional or Scotch-style display serif with moderate contrast and a sturdy, businesslike character, paired with a highly legible neutral sans with strong tabular figures. The serif carries authority without drama; the sans handles dense financial content, tables, forms and the calculator without strain. Lower risk at small sizes than Pairing 2. Candidate direction: a serif in the Source Serif / Newsreader / Spectral territory with a sans in the Inter / IBM Plex Sans territory.

**Pairing 2 — High-contrast editorial serif + geometric-humanist sans (not recommended).**
A higher-contrast display serif with more editorial personality, paired with a slightly warmer humanist sans. Delivers a more distinctive voice and more magazine character, at the cost of fragility and fit: high-contrast serifs weaken at small sizes and on low-density screens, demand tight control of heading sizes, and carry the property-and-wealth register most strongly of the three. Candidate direction: a serif in the Fraunces / Libre Caslon territory with a sans in the Manrope / DM Sans territory.

**Recommendation across all three.** Take **Pairing 3**. It is the best fit for the ICP, the performance budget and the compliance posture simultaneously, and it removes a known drift vector rather than managing one. If the founder elects a serif direction on brand grounds, take **Pairing 1**, not Pairing 2 — and in that case **the serif is restricted to page H1 only, never section headings** (§2.3). That restriction is the condition of the fallback, not a refinement of it: a serif on every section heading reinstates the exact property-marketing texture the boundary test in §3.3 is written to catch.

For any pairing: confirm licensing for web and any future print use before design lock, self-host for performance and privacy, keep the weight set constrained, and specify a full responsive type scale in the design-system step.

## 6.3 Photography and art direction

Original, licensed, Singapore-specific. Priority subjects: active construction and engineering sites, project and yard environments, commercial and industrial property, plant and equipment, and honest documentary shots of advisory work. Treatment: natural light, warm-neutral grade matched to the palette, wide and patient crops, people at work rather than posed. Avoid stock handshakes, posed boardrooms, skyline filler and anything implying wealth or luxury. Until licensed imagery exists, favour type-led and structural compositions over placeholders.

## 6.4 Icon direction

Single-weight line icons, consistent stroke and corner treatment, small scale, used only where they carry meaning — contact routes, process steps, navigation affordances, table legends. No badges, no duotone, no filled shapes, no decorative spot illustration, no icon per bullet.

## 6.5 Recommended settings

| Setting | Value | Rationale |
|---|---|---|
| Design density | **4/10** | Open and editorial; whitespace carries material quality while photography is unresourced. Roughly 5/10 on mobile |
| Design variance | **5/10** | Enough structural variety to avoid template feel; not so much that the site reads as experimental — wrong signal for financial services. Enforced by the pattern-break requirement in §2.2 |
| Motion intensity | **2/10** | Interaction feedback only; no scroll-arrival animation; reduced-motion fully honoured (§2.12) |

## 6.6 Suggested desktop and mobile visual rhythm

**Desktop.** Wide outer margins with a contained text measure inside full-width bands. Asymmetric hero. Alternating surface temperature at the band level. Section openings on a consistent eyebrow/heading/intro pattern. Tables and the calculator given full contained width. Vertical rhythm varies with content rather than snapping to a fixed section height.

**Mobile.** Single column throughout. Hero type re-composed, not merely scaled. Comparison tables become labelled stacked rows. Two-column arguments become sequential blocks with retained column headings. Contact routes reachable without hunting; the assessment CTA remains the primary action. Section padding reduced proportionally but never to the point of losing the open, unhurried quality — density should read as roughly 5/10 on mobile, not 8/10.

---

# 7. Recommended homepage composition

Structure only. No final copy. Section order follows the approved V4 master brief blueprint.

Four changes from the earlier draft: the trust strip is folded into the hero, the construction band moves up to address the ICP early, the two comparison modules are separated, and the calculator becomes an inline module rather than a late-page exit.

| # | Section | Purpose | Visual role | Density | Transition in | CTA |
|---|---|---|---|---|---|---|
| 1 | Header | Orientation and immediate contact path | Light, quiet, minimal; calm sticky behaviour only if it does not consume mobile viewport | Low | — | Primary CTA visible, not shouted |
| 2 | Hero *(absorbs the trust strip)* | Answer "what is this and is it for me" in seconds | Light surface on mobile (§2.11); dark permitted on desktop. Asymmetric, type-led; no eyebrow — headline leads | Low | Page entry | **Primary CTA** + secondary "how we work"; trust note and the four qualitative trust points set as a compact line beneath, not as a separate band |
| 3 | Problems we help assess | Let the visitor self-identify | Warm light; four parallel items — the one place cards are justified (§2.7) | Medium | Surface flip to light | Each item links to its service page |
| 4 | Construction & engineering | Priority ICP pathway, addressed early rather than buried | Distinct treatment; opens on a concrete project situation, not a label (§2.2). Typographic band unless commissioned photography exists (§2.13.3) | Medium | Visual shift to mark significance | **Primary CTA** + secondary "discuss your project" |
| 5 | How the advisory process works | Make the diagnosis-first method visible | Warm light; project-timeline diagram per §2.13.1, linear sequence, not cards; must state that the process does not guarantee financing | Medium | Continuous light | Secondary link to How It Works |
| 6 | Financing pathways | Show breadth without diluting the ICP focus | Warm light; **typographic index, not cards** (§2.7) — five routes as headings with a one-line situation | Medium | Continuous light, separated by heading rhythm | "Explore" link per pathway |
| 7 | Route comparison | Decision support; the strongest non-claim trust asset | Warm light; wide table, dark header band, qualitative columns only. Opens on the question the table answers (§2.2). Mobile pattern per §2.11 | High | Continuous light | CTA below the table |
| 8 | Calculator *(inline module)* | A practical, low-commitment tool used **on the page**, not a departure | Warm light; working inline module with its disclaimer adjacent to the result (§2.10). Deep link to the full calculator page is secondary | Medium | Continuous light — follows the table naturally: compare routes, then estimate a repayment | Secondary link to the full tool |
| 9 | Why work with an advisory | The differentiation argument | Dark surface; two-column, text-labelled, neutral framing. Separated from the route comparison by the calculator | Medium | Surface flip to dark — the page's second gravity point | **Primary CTA** at the close of the argument |
| 10 | FAQ preview | Remove objections before the ask | Warm light; accessible accordion, 5–6 questions | Medium | Surface flip back to light | Link to full FAQ |
| 11 | Final CTA | Convert to human contact | Dark surface; spacious, single clear action | Low | Surface flip to dark — final gravity point | **Primary CTA** |
| 12 | Footer | Complete NAP, navigation, legal | Deep neutral; dense but organised | High | Direct edge | Contact routes; no competing CTA |

**CTA placement principle.** The primary CTA appears in the header, the hero, the construction band, after the route comparison, at the close of the advisory argument, and in the final CTA band. That removes the six-band stretch in the earlier draft that offered no primary action, and it places a CTA at the argument's strongest moment rather than deferring it. Wording is identical at every placement. Secondary CTAs are contextual and never compete visually with the primary. WhatsApp and phone are always available but never the only conversion route.

**Target time-to-first-conversion-opportunity (mobile).** The primary CTA must be **visible without scrolling on a 375×812 viewport** — it is part of the hero, not below it. Thereafter no more than **1.5 viewport-heights** may pass between primary CTA opportunities anywhere on the page. Both are testable at design lock and should be treated as acceptance criteria, not aspirations: the realistic visit is a two-minute credibility check, and a visitor who becomes convinced at band 4 must not have to hunt for a way to act.

**Trust strip note.** The standalone trust strip is deliberately removed. With no substantiated figures, logos or testimonials available (§8.3), a dedicated band immediately below the hero carrying only qualitative statements reads as filler in the page's second-most-valuable position. Its four approved points are stronger as a compact line inside the hero. If substantiated proof is approved later, a standalone band can be reinstated on its own merits.

---

# 8. Decision log

## 8.1 Decisions requiring founder approval before UI implementation

1. **Colour direction — A, B or C (§6.1).** This is the single highest-impact open decision and it interacts directly with item 8.2.1 below.
2. **Typography pairing — 1 or 2 (§6.2)**, including font licensing budget.
3. **Extent of dark-surface usage** — the proposed ~30–40% versus the superseded V1 brief's 55–60%.
4. **Photography commissioning** — whether to commission original Singapore construction and project photography, and the budget and timeline for it.
5. **Whether office hours are published at all**, which determines the Contact page and LocalBusiness schema treatment.
6. **Calculator calculation method** — simple interest or reducing-balance amortisation — plus the illustrative rate assumption, test cases, content owner and review date.
7. **Whether case studies are pursued** for a later phase, and under what anonymisation and approval process.
8. **Final regulatory disclaimer wording**, which affects footer and page-level layout allocation.

## 8.2 Conflicts between inspiration quality, source documents and financial-services trust

1. **Black-and-gold versus navy-and-ivory — unresolved, needs a founder ruling.** The founder decision pack records an explicit preference for a black-and-gold "Premium Financial Advisory" direction, and the V1 reference brief specifies obsidian black, a 55–60% dark ratio and a "subtle gold glow/gradient" hero. The current V4 master brief specifies deep navy *or* obsidian with warm ivory and *restrained* champagne gold, and explicitly bans casino-like gold/black styling and excessive gradients and glow. Under the precedence rules in `CLAUDE.md`, the current master brief overrides the earlier brief — but an explicit founder decision overrides older source material, and the founder's colour preference is the more recent of the two in intent. **These two rules point in opposite directions here, so this is flagged rather than decided.** Recommendation: Option A (navy-led), which preserves the authority and material quality the founder asked for while satisfying the V4 constraint. Option B is available if the founder wants to retain obsidian specifically.

2. **Gold glow and gradient (V1) versus the V4 anti-pattern list.** V1 calls for a subtle gold glow/gradient in the hero; V4 bans excessive gradients, glow and glassmorphism. Treated here as resolved in favour of V4 — no glow, no gradient — but the degree is worth confirming if the founder is attached to that hero treatment.

3. **Form scope.** V1 specifies 8 required fields plus 7 qualification fields and a six-step interactive assessment flow. V4, `CLAUDE.md` and the launch acceptance criteria specify exactly four fields and place multi-step assessment out of launch scope. Resolved in favour of V4. Worth noting the commercial trade-off explicitly: the sales team receives less qualification data per lead, in exchange for a materially higher completion rate from a sceptical cold-outreach audience.

4. **Proof and social-proof components.** V1 specifies stat blocks, counters with number animation, testimonials and case-study cards. V4 bans decorative counters and fake social proof, and no substantiated figures, approved testimonials or approved case studies currently exist. Resolved in favour of V4: these components are not designed for launch. The practical consequence is that **credibility must be carried entirely by craft, process clarity and qualitative trust language** — which raises the quality bar on typography, spacing and photography.

5. **The "high success rate" claim.** The founder decision pack records comfort with claiming a high success rate, explicitly conditional on a real figure. `docs/claims-and-compliance-rules.md` prohibits publishing it. Remains blocked. No layout space should be reserved for it.

6. **Both reference screenshots conflict directly with the compliance rules.** The route-comparison screenshot publishes maximum amounts, indicative rates, EIR figures and timelines; the advisory-comparison screenshot uses the ex-banker and credit-narrative claims by name. Their *structure* is approved for reuse; their *content* is prohibited. This conflict must be restated to anyone who works from these screenshots, because the visual quality makes them persuasive.

7. **`docs/reference/team_reference_document.docx` is confidential internal material.** It is marked internal-only and contains specific rates, EIR figures, LTV bands, processing fees, tenor ranges and a "20+ banks and financial institutions" claim, alongside a named internal escalation contact. It is useful for understanding the business but is **not a content source for the website**. Flagged as a live leak risk during copywriting.

8. **The V1 reference brief names a different primary CTA** ("Get a Financing Assessment" / "Speak to a Financing Specialist"). V4 and `CLAUDE.md` require "Get a Free Financing Assessment" verbatim. Resolved in favour of V4.

9. **Dark-surface art direction versus mobile sunlight legibility — partially resolved, worth confirming.** The desktop art direction opens on a dark hero, which every source document supports. The realistic first encounter for this ICP is a phone held outdoors on a site or in a vehicle, where a dark surface is the worst case for legibility. These genuinely conflict. Resolved in §2.11 in favour of legibility: **the mobile hero uses the light surface**, and dark bands on mobile are limited to the advisory argument and the final CTA. The consequence the founder should see explicitly is that **the hero will not look the same on desktop and mobile** — this is a deliberate decision, not an inconsistency, and it should be approved as such rather than discovered at design review. If the founder requires a dark mobile hero on brand grounds, it must use the lighter end of the dark range with body contrast raised above the desktop value, and be tested outdoors on a real device before lock.

10. **Editorial-serif direction versus construction-and-engineering ICP resonance — needs a founder ruling.** An editorial display serif is what most cleanly delivers the founder's stated visual expectation, and it is also the element most likely to make an owner-led engineering firm feel the site is aimed at someone else. High-contrast serif display reads as publishing, property and private wealth; it is the principal carrier of the drift described in §3.3. The alternative is **Pairing 3, sans-only** (§6.2): one superfamily, hierarchy from scale and weight, tabular figures — more legible in the field, more differentiated in the category, and it removes the drift vector rather than managing it. Recommendation: take the sans-only direction. If a serif is elected, take Pairing 1 and restrict it to page H1 only. **This decision interacts with 8.2.1** — a serif plus obsidian plus gold together produce the luxury register the V4 brief bans, even where each element individually stays within tolerance.

## 8.3 Missing assets that affect visual quality

| Asset | Impact if still missing at design lock |
|---|---|
| Final logo and brand asset package | Header, footer and favicon remain placeholders; overall polish ceiling is capped |
| Licensed original photography | Hero, construction pathway and About sections lose their strongest credibility lever; forces a type-led fallback |
| Approved team biographies and headshots | About page cannot carry personal credibility; must not show hollow "coming soon" cards |
| Approved case studies or anonymised outcomes | No proof layer at all; increases load on process and craft |
| Regulatory disclaimer, privacy policy, terms | Footer and legal pages cannot be finalised; these are launch blockers, not design details |
| Confirmed lead destination (inbox or CRM) | Form cannot be verified end to end |
| Calculator formula decision and review date | Calculator cannot be built or tested |
| Confirmed office hours (if publishing) | Contact page and LocalBusiness schema stay provisional |

### Internal placeholder convention (development only)

Missing assets must be visible during development, not silently absorbed or quietly invented. Use these exact labels, in capitals, rendered in an obviously unfinished internal style:

| Label | Use |
|---|---|
| `METRIC TO CONFIRM` | Any figure, count or statistic not yet substantiated and approved |
| `APPROVED CASE STUDY REQUIRED` | Any proof or outcome module awaiting an approved, anonymised case |
| `LICENSED IMAGE REQUIRED` | Any image slot awaiting commissioned or licensed photography |
| `DO NOT SHIP PLACEHOLDER` | Any block that must be resolved or removed before launch |

**These may exist in internal development only. None may ever reach public production.** At launch each placeholder is either resolved with approved content or the module containing it is **removed from the page entirely** — not shipped empty, not shipped stubbed, not shipped with the label hidden by CSS. A proof module with nothing to prove is deleted, not disguised.

A placeholder surviving to production would be worse than the missing asset: on a financial-services site it reads as either an invented claim or an unfinished build, and both cost more trust than an absent section.

## 8.4 Risks to carry into the design-system and build stages

1. **Inspiration-copying risk, concentrated in the two screenshots** — they are the most directly reusable and the most compliance-dangerous. Structure only, never content or styling.
2. **Gold creep.** Gold expands quietly across a build — one more accent, one more fill — until the site reads as the luxury styling the brief bans. Set an explicit surface-area budget in the design system and audit against it.
3. **Card creep.** The problem set and pathways justify cards; nothing else does. Without a stated rule, every section becomes a card grid and the site becomes generic.
4. **Disclaimer de-emphasis.** The strongest pressure during visual polish is to shrink, grey out or tuck away the calculator and form disclaimers. This is explicitly prohibited and should be an audit checkpoint, not a preference.
5. **Contrast failure in the warm palette.** Muted grey on warm ivory, and gold on either surface, are the likely AA failures. Test before design lock, not after build.
6. **Colour-only meaning in the comparison sections**, inherited from the reference screenshots. Every comparison needs text labels and non-colour differentiation.
7. **Mobile treated as a compression pass.** The primary audience is mobile-first and time-poor; the comparison table and calculator are the two components most likely to degrade badly.
8. **Internal rate data leaking into copy** from the confidential team document during the content stage.
9. **Placeholder content shipping.** With this many missing assets, the risk of a visible placeholder reaching production is real. Track §8.3 explicitly rather than absorbing it.
10. **Proximity of the recommended direction to property and wealth-marketing visual language.** This is the study's own largest self-inflicted risk and it must be audited for, not assumed away. The combination this document recommends — editorial hierarchy, warm neutrals against controlled dark, generous whitespace, refined comparison modules, an unhurried gold CTA — is, in 2026, close to the house style of property-investment and private-wealth marketing. Each element is individually defensible; the stack is the problem. **Specific tells to audit for, any one of which means the drift has happened:**
    - A serif appearing on section headings rather than page H1 alone.
    - A hero whose composition stops working when the photograph is removed.
    - Any module whose visual weight exceeds its informational content (the §3.3 test).
    - Figures set at display scale for impact rather than for reading.
    - Vocabulary drift toward "bespoke", "discerning", "curated" or exclusivity cues (§2.13.4).
    - Gold exceeding its ~5% surface budget, particularly as fills rather than details.
    - Photography shifting from working environments toward aspirational or lifestyle framing.

    The audit question is the one in §2.13.4: would an owner-led construction business finish the hero thinking *they deal with businesses like mine*, or *this is an impressive website*? The second answer means the direction has drifted and the fix is subtraction, not adjustment.

---

**Next step (not started):** founder review of §8.1 and §8.2.1, then the design-system step — `design-system/the-brokerage-advisory/MASTER.md` with exact tokens, contrast test results and component rules.
