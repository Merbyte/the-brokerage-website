interface Problem {
  title: string;
  detail: string;
  href: string;
}

const PROBLEMS: Problem[] = [
  {
    title: "A growth opportunity ahead of your cash flow",
    detail:
      "A new project, expansion or equipment requirement has arrived before the capacity to fund it is in place.",
    href: "/business-financing/",
  },
  {
    title: "A bank has already declined the application",
    detail:
      "Understanding why the answer was no matters more than sending the same file to another institution.",
    href: "/how-it-works/",
  },
  {
    title: "Facilities that no longer fit the business",
    detail:
      "Terms or structure agreed some years ago may not match how the business actually operates today.",
    href: "/business-financing/",
  },
  {
    title: "A situation that does not fit a standard application",
    detail:
      "Multiple entities, unusual collateral or non-standard requirements that one product does not cover.",
    href: "/project-private-capital/",
  },
];

/**
 * Problem set -- the only justified card use on the site (MASTER.md §5.9).
 * Hairline border, square corners, flat surface, no shadow and no hover
 * lift: the hover affordance is a border change only. Each item is a
 * single link so it carries one accessible name.
 */
export function ProblemSet() {
  return (
    <>
      <div className="max-w-prose">
        <h2 className="text-heading-l text-text-primary">
          Not every financing situation is solved by another application.
        </h2>
        <p className="mt-4 text-body-l text-text-secondary">
          Most enquiries fall into one of four situations. Each needs a different assessment before a route is
          worth choosing.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {PROBLEMS.map((problem) => (
          <li key={problem.title} className="flex">
            <a
              href={problem.href}
              className="flex w-full flex-col gap-3 border border-border-hairline bg-surface-raised p-6 no-underline transition-colors duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] hover:border-text-primary"
            >
              <h3 className="text-heading-s text-text-primary">{problem.title}</h3>
              <p className="text-body text-text-secondary">{problem.detail}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
