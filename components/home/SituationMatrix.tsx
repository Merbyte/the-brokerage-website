interface Situation {
  title: string;
  detail: string;
  linkLabel: string;
  href: string;
}

const SITUATIONS: Situation[] = [
  {
    title: "A growth opportunity ahead of the cash flow",
    detail:
      "A project, an expansion or an equipment requirement has arrived before the capacity to fund it is in place.",
    linkLabel: "Business financing",
    href: "/business-financing/",
  },
  {
    title: "An application a bank has already declined",
    detail:
      "Understanding why the answer was no matters more than sending the same file to another institution.",
    linkLabel: "How we work",
    href: "/how-it-works/",
  },
  {
    title: "Facilities that no longer fit the business",
    detail:
      "Terms and structure agreed some years ago may not match how the business operates or what it now needs.",
    linkLabel: "Business financing",
    href: "/business-financing/",
  },
  {
    title: "A situation no standard application covers",
    detail:
      "Multiple entities, unusual collateral or non-standard requirements that a single product does not answer.",
    linkLabel: "Project and private capital",
    href: "/project-private-capital/",
  },
];

/**
 * Recognition chapter (pages/home.md §6). An editorial matrix rather than
 * four cards: each entry hangs off its own rule with the index figure in the
 * margin. The rules do the containing, so no entry gets a box, a shadow or a
 * hover lift, and all four read as equally important.
 */
export function SituationMatrix() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <h2 className="text-display-section lg:col-span-7">
          Not every financing situation is solved by another application.
        </h2>
        <p className="text-body-lg mt-6 text-text-secondary lg:col-span-4 lg:col-start-9 lg:mt-2">
          Most enquiries begin in one of four situations. Each one needs a
          different assessment before a route is worth choosing.
        </p>
      </div>

      <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:mt-20">
        {SITUATIONS.map((situation, index) => (
          <li
            key={situation.title}
            className="border-t border-border-hairline pt-6 pb-10 md:odd:pr-8 md:even:border-l md:even:pl-8 lg:odd:pr-14 lg:even:pl-14"
          >
            <div className="flex gap-6">
              <span
                aria-hidden="true"
                className="font-figures text-meta w-4 shrink-0 text-text-secondary"
              >
                {index + 1}
              </span>

              <div>
                <h3 className="text-heading-md text-text-primary">
                  {situation.title}
                </h3>
                <p className="text-body mt-4 text-text-secondary">
                  {situation.detail}
                </p>
                <p className="mt-5">
                  <a
                    href={situation.href}
                    className="text-body inline-flex min-h-12 items-center font-semibold text-text-primary underline decoration-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] underline-offset-[0.35em] transition-[text-decoration-color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] hover:decoration-[var(--text-primary)]"
                  >
                    {situation.linkLabel}
                  </a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
