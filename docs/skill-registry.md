# Skill Registry — The Brokerage Advisory Website

## Purpose

This registry records the verified Claude Code skills, plugins, agents and specialist tools permitted for this website project.

- This file does not override CLAUDE.md, the master brief, claims/compliance rules or the project design system.
- If a listed skill is unavailable in a future session, Claude must report that rather than silently substituting another skill.
- Skills may not introduce unapproved claims, financial data, rates, fees, testimonials, lender logos, customer logos, guarantees, external assets, dependencies or architecture changes.

## Required reading

- `docs/design-reference-study.md` is the approved visual discovery document.
- `docs/hallmark-reference-validation.md` records source refusal rules, structural findings and final design directives.

## Official workflow

1. Hallmark: reference study, originality review and pre-launch audit.
2. UI UX Pro Max: project design system, component rules, responsive UX and page overrides.
3. Frontend Design: implementation craftsmanship after design-system approval.
4. Super Design: optional internal concept exploration only.
5. Superpowers: brainstorming, planning, task decomposition and workflow support only.
6. Anti-Slop: UI, human-factor, mobile, copy and code audit.
7. ECC specialists: accessibility, SEO and performance QA.
8. Native CSS transitions only for launch motion.

## Verified skills table

| Skill/tool | Exact identifier or invocation | Verified location/source | Status | Permitted project role | Allowed project phases | Explicitly not for | Notes/constraints |
|---|---|---|---|---|---|---|---|
| Hallmark | `Skill(hallmark)`, `/hallmark`, or explicit reference by name in a prompt | `~/.claude/skills/hallmark`, symlinked to `~/.agents/skills/hallmark` (v1.1.0) | Active | Reference study, structural/originality diagnosis, redesign review and pre-launch audit | Reference study; final originality and anti-slop audit; launch | Pixel-cloning; treating template demos or designer presentation shots as structural sources; overriding business/claims/compliance rules | Modes: study, audit, redesign. Pinterest, RedSun Webflow and Estatio Dribbble are mood-only. May study user-provided screenshots structurally only — never copy their layout, text, style, colour values, components, icons or claims |
| UI UX Pro Max | `Skill(ui-ux-pro-max:design-system)` or verified equivalent in the active session | `~/.claude/plugins/cache/ui-ux-pro-max-skill/` (`ui-ux-pro-max@ui-ux-pro-max-skill v2.13.0`) | Active | Design-system creation, component specifications, responsive UX, accessibility guidance and page-specific design overrides | Design system; homepage build; service page implementation | Writing code before design-system approval; setting claims or business strategy | Must follow approved `design.md`, `MASTER.md`, master brief and claims rules. Cannot introduce conflicting brand direction or unapproved financial claims |
| Frontend Design | `Skill(frontend-design:frontend-design)` | `~/.claude/plugins/cache/claude-plugins-official/frontend-design/` | Active | Implementation craftsmanship, component construction, responsive layout, semantic markup and frontend quality | Next.js setup; reusable-component foundation; homepage build; calculator implementation; form/contact implementation; service page implementation | Choosing strategy, claims or architecture; installing dependencies without approval | Use only after design-system approval |
| Super Design | `Skill(superdesign:superdesign)` | `~/.claude/plugins/cache/claude-plugins-official/superdesign/` (`superdesign@claude-plugins-official v0.6.0`) | Active | Optional concept or mockup exploration only | Optional concept exploration | Shipped code without explicit approval; imitating inspiration references | Non-binding. May not override the master brief or design system |
| Superpowers | `Skill(superpowers:brainstorming)` and other verified planning/process skills | `~/.claude/plugins/cache/claude-plugins-official/superpowers/` (`superpowers@claude-plugins-official v6.3.0`) | Active | Brainstorming, task decomposition, implementation plans, reviews and workflow support | Reference study; design system; Next.js setup; calculator specification; all implementation phases as process support | Visual art direction; claims/compliance decisions; changing code or architecture without explicit instruction | Not a visual-art-direction authority. Not a claims/compliance authority |
| Anti-Slop | `Skill(antislop)`, `Skill(antislop-ui)`, `Skill(antislop-human)`, `Skill(antislop-layoutmobile)`, `Skill(antislop-copywriting)`, `Skill(antislop-code)` | `~/.claude/skills/` | Active | Pre-launch and milestone audits for generic AI design, mobile UX, human factors, copy quality and code quality | Homepage build; service page implementation; final originality and anti-slop audit; launch | Acting as the primary design-system authority; generic visual rewrites without specific findings | Audit/review gate, not the primary design-system authority. Must produce specific actionable findings |
| ECC accessibility specialist | `ecc:a11y-architect` | ECC plugin, verified active | Active | WCAG 2.2-oriented audit, semantic HTML, keyboard interaction, contrast, focus states, form accessibility and reduced-motion review | Accessibility QA; final originality and anti-slop audit; launch | Introducing new package dependencies without approval | Use during component QA and pre-launch QA |
| ECC SEO specialist | `ecc:seo-specialist` | ECC plugin, verified active | Active | Technical SEO, metadata, canonical rules, XML sitemap, robots, structured data, internal linking, AEO/local SEO review and migration QA | SEO/AEO/local SEO; launch | Fabricating ratings, reviews, prices, availability, financial-product data or author credentials | Use during SEO implementation and pre-launch QA |
| ECC performance specialist | `ecc:performance-optimizer` | ECC plugin, verified active | Active | Core Web Vitals, JavaScript budget, image optimisation, font loading, third-party script review and performance QA | Performance QA; launch | Trading off accessibility or required form/calculator behavior for speed | Use during build optimisation and pre-launch QA |
| Chrome DevTools / Lighthouse | ECC Chrome DevTools / Lighthouse capability, if available in the current session | Conditional on session availability | Conditional | Responsive checks, performance testing, accessibility checks and final production/staging audit | Performance QA; accessibility QA; launch | Testing against production data without a staging/local production-like environment | Record findings in QA documentation |
| Inspo MCP | `inspo`, if available in the active session | Conditional on session availability | Conditional | Discovery of real production website patterns and screenshots only when needed | Reference study, only if further discovery is required | Copying websites; adding reference sites without updating design-inspiration and Hallmark-validation documents | Not required for the current build because visual discovery is complete |

## Explicitly prohibited skills and approaches

### ECC Taste

- Identifiers: `ecc:taste`, `ecc:taste-distillation`, `ecc:taste-application`.
- Status: installed but prohibited for this project.
- Reason: music-video and short-form-edit creative-direction skills, not website editorial-art-direction tools.
- Do not invoke.

### ECC motion skills

- Examples: `ecc:motion-foundations`, `ecc:motion-patterns`, `ecc:motion-advanced`.
- Status: available as partial match only, but not approved for this project.
- Reason:
  - The launch design uses motion intensity 2/10.
  - Native CSS transitions are sufficient.
  - These skills may encourage `motion/react` adoption.
  - Adding `motion/react` is a dependency and architecture decision requiring founder approval.
- Do not invoke or add a motion package without written approval.

### Unapproved marketplace skills

- Do not install or invoke a new skill merely because it appears relevant.
- First inspect it, confirm licensing, confirm its role does not overlap/conflict with the approved hierarchy, and obtain founder approval if it would alter dependencies, codebase architecture, content claims or data handling.

## Required skill use by phase

| Project phase | Required/allowed skills | Do not use | Output |
|---|---|---|---|
| Reference study | Hallmark (study mode), Superpowers (planning support), Inspo MCP (conditional, if further discovery needed) | UI UX Pro Max, Frontend Design, Super Design | `docs/hallmark-reference-validation.md` and/or `docs/design-reference-study.md` updates |
| Design system | UI UX Pro Max, Superpowers (planning support) | Frontend Design, Anti-Slop | `design.md`, `design-system/the-brokerage-advisory/MASTER.md`, page overrides |
| Optional concept exploration | Super Design (optional) | Frontend Design (shipped code) | Non-binding concept sketches only |
| Next.js setup | Frontend Design, Superpowers (planning support) | UI UX Pro Max, Super Design, Anti-Slop | Project scaffold per approved architecture |
| Reusable-component foundation | Frontend Design | Super Design | Shared components matching `MASTER.md` tokens |
| Homepage build | Frontend Design, UI UX Pro Max (design fidelity check), Anti-Slop | Super Design | Implemented homepage |
| Calculator specification | Superpowers (planning support) | Frontend Design (no build until spec approved) | Documented method, illustrative rate, worked test cases, content owner, review date |
| Calculator implementation | Frontend Design, ECC accessibility specialist | Super Design | Implemented, tested calculator with disclaimer |
| Form/contact implementation | Frontend Design, ECC accessibility specialist | Super Design | Implemented assessment form and contact page |
| Service page implementation | Frontend Design, UI UX Pro Max (page overrides), Anti-Slop | Super Design | Implemented service pages |
| SEO/AEO/local SEO | ECC SEO specialist | — | Metadata, schema, sitemap, robots, redirect plan |
| Accessibility QA | ECC accessibility specialist, Chrome DevTools / Lighthouse (conditional) | — | Accessibility audit findings and fixes |
| Performance QA | ECC performance specialist, Chrome DevTools / Lighthouse (conditional) | — | Core Web Vitals and performance audit findings |
| Final originality and anti-slop audit | Hallmark (audit mode), Anti-Slop | Super Design | Pre-launch audit report |
| Launch | Hallmark, Anti-Slop, ECC accessibility specialist, ECC SEO specialist, ECC performance specialist | Super Design | Launch go/no-go against acceptance criteria |

## Invocation protocol

1. Read required project documents before invoking a skill.
2. Name the skill and narrow its scope in the prompt.
3. Tell the skill what files it may and may not change.
4. Ask before installing packages or changing architecture.
5. Make one logical change per commit.
6. Use the strongest model and High effort for architecture, calculator assumptions, security, SEO migration and final audits.
7. Use Sonnet-class model and Medium/High effort for ordinary implementation.
8. Use Low effort only for small, easily verifiable edits.
9. Use RTK for noisy terminal output, but rerun critical failures with full raw output if needed.
10. Skills never override approved business facts or claims restrictions.

## Registry maintenance

- The registry must be updated whenever a new skill is installed, removed, enabled, disabled or assigned a new project role.
- Future sessions must verify skills rather than assuming this document guarantees current availability.
- If a skill is unavailable, record it and use only an approved substitute after review.
