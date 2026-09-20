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
 * Service-pathway index (MASTER.md §5.10). A typographic index separated
 * by hairline rules -- never cards, at any width. Rendering both this and
 * the problem set as cards would put nine card objects across consecutive
 * bands, which is the generic pattern the brief bans.
 */
export function PathwayIndex() {
  return (
    <>
      <div className="max-w-prose">
        <h2 className="text-heading-l text-text-primary">Which financing route fits the situation?</h2>
        <p className="mt-4 text-body-l text-text-secondary">
          Five routes, each suited to a different situation. The assessment determines which of them is worth
          pursuing.
        </p>
      </div>

      <ul className="mt-10 flex flex-col">
        {ROUTES.map((route) => (
          <li key={route.href} className="border-b border-border-hairline first:border-t">
            <a
              href={route.href}
              className="group flex flex-col gap-2 py-6 no-underline md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_auto] md:items-baseline md:gap-8"
            >
              <h3 className="text-heading-m text-text-primary group-hover:underline group-hover:underline-offset-[0.15em]">
                {route.name}
              </h3>
              <p className="text-body text-text-secondary">{route.situation}</p>
              <span className="text-body font-medium text-text-primary md:text-right">Explore</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
