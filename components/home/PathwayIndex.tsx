interface Route {
  name: string;
  situation: string;
  href: string;
}

const ROUTES: Route[] = [
  {
    name: "Business Financing",
    situation: "Growth, operations, equipment or working-capital requirements.",
    href: "/business-financing/",
  },
  {
    name: "Trade Financing",
    situation: "Supplier payments falling due before customer receipts arrive.",
    href: "/trade-financing/",
  },
  {
    name: "Property Financing",
    situation: "Whether property already held can support the requirement.",
    href: "/property-financing/",
  },
  {
    name: "Project & Private Capital",
    situation: "An opportunity larger than the current financing structure.",
    href: "/project-private-capital/",
  },
  {
    name: "Performance Bonds",
    situation: "A bond required before work can start on a project.",
    href: "/performance-bonds/",
  },
];

/**
 * Financing pathways (pages/home.md §9). The index is the display typography
 * of this chapter, so the section heading deliberately sits below the route
 * names in scale -- the list is the headline.
 *
 * Gold marks the active row and nothing else, which is the one place on the
 * page where gold responds to the reader. Every row carries its situation in
 * the markup at all widths, so nothing is hover-dependent.
 */
export function PathwayIndex() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <h2 className="text-heading-lg lg:col-span-5">
          Which financing route fits the situation?
        </h2>
        <p className="text-body-lg mt-4 text-text-secondary lg:col-span-5 lg:col-start-7 lg:mt-0">
          Five routes, each suited to a different situation. The assessment
          decides which is worth pursuing.
        </p>
      </div>

      <ul className="mt-12 lg:mt-16">
        {ROUTES.map((route) => (
          <li
            key={route.href}
            className="border-t border-border-hairline last:border-b"
          >
            <a
              href={route.href}
              className="group relative block py-7 no-underline lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-9"
            >
              {/* Active marker: gold grows out of the rule rather than
                  sitting there as a decorative border. */}
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 -left-5 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-[var(--dur-base)] [transition-timing-function:var(--ease-standard)] group-hover:scale-y-100 group-focus-visible:scale-y-100 lg:-left-10"
              />

              <h3 className="text-display-section text-text-primary transition-transform duration-[var(--dur-base)] [transition-timing-function:var(--ease-standard)] group-hover:translate-x-1 group-focus-visible:translate-x-1 lg:col-span-5">
                {route.name}
              </h3>

              <p className="text-body mt-3 text-text-secondary lg:col-span-4 lg:mt-0">
                {route.situation}
              </p>

              <span className="text-body mt-4 inline-block font-semibold text-text-primary underline decoration-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] underline-offset-[0.35em] transition-[text-decoration-color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] group-hover:decoration-[var(--text-primary)] lg:col-span-2 lg:mt-0 lg:text-right">
                Explore
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
