# Insights — Page Override

**URL** `/insights/` · **Archetype** Editorial resource index · Inherits `MASTER.md` and `design.md`

## Page goal
Present the resource library so it reads as genuine expertise rather than SEO filler, and make individual pieces easy to find.

## Primary visitor
Two: a prospect researching their situation before contact, and an answer engine indexing topical authority.

## Intent
Research. This visitor is learning, not buying, and should not be pushed.

## Page archetype
**Editorial resource index.** A publication's contents page, not a blog grid.

## Primary visual mechanism
A **dated article index list** — each entry a row with title, one-line summary, category and date, separated by hairline rules. Deliberately a list, never a card grid with thumbnails. The absence of images is a design decision: it keeps the page fast, avoids the licensed-image dependency, and reads as editorial rather than promotional.

## Section order
1. Header
2. **H1 + one line** — no eyebrow, no hero band.
3. **Category filter** — plain text links, not a control widget. Optional at launch.
4. **Article index** — reverse-chronological list. Lead content.
5. Footer

## CTA placement
Header only. **No CTA band on this page.** A research visitor pushed to convert mid-library reads as a funnel, which is exactly what the brief bans. Conversion happens on the article pages and through the header.

## Mobile-specific behaviour
Single column. Each row remains one tap target with the title as the accessible name. Dates in tabular figures. No truncated summaries with "read more" — summaries are written short enough to render in full.

## Components used
Header · Mobile nav · Article index (list pattern) · Category links · Footer · Links

## Components intentionally not used
Article cards with thumbnails · Featured-article hero · Problem-set cards · Timeline · Route-comparison table · FAQ accordion · Calculator · CTA band · Author bylines (until approved) · Pagination controls at launch

## SEO / AEO structure
Single H1. Each article title an H2 inside its row, linking to the article. Article schema on individual article pages, not on the index. BreadcrumbList. Title direction: *Insights | The Brokerage Advisory*. Category structure supports the topical clusters in the master brief.

## Claim / compliance safeguards
**No article may carry rates, amounts, LTVs, tenures or eligibility criteria** without a dated, approved review — the same rule as the rest of the site, applied to editorial content. Comparison and decision articles stay neutral and educational; no self-serving "best option" framing. **Reviewed dates are mandatory on any article containing changing financial information.** Author or reviewer bylines appear only where approved.

## Launch status (final)
**Insights is a post-launch content phase.** The page, its primary navigation entry and its launch sitemap entry are omitted until at least three approved articles exist. This is not a placeholder gap — it is the correct state until there is enough approved content to justify a public index. **No thin or empty public Insights page ships at launch.**

The CMS/content structure (article schema, category taxonomy, URL pattern, reviewed-date field) is built and kept ready during this phase, so that publishing the first three articles requires no structural rework.

## Placeholder status
None at launch — the page itself does not exist publicly until the three-article threshold is met, so there is no empty or stubbed content to placeholder.

## Acceptance criteria
- [ ] Index renders as a list, not a card grid, once published
- [ ] No thumbnails and no licensed-image dependency
- [ ] Dates in tabular figures; reviewed dates present where required
- [ ] No CTA band
- [ ] Page, primary navigation entry and sitemap entry omitted until at least three approved articles exist
- [ ] CMS/content structure ready in advance, independent of publish date
- [ ] No horizontal overflow at 320px
