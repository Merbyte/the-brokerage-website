export interface RouteComparisonRow {
  route: string;
  relevantFor: string;
  needsAssessing: string;
  nextStepLabel: string;
  nextStepHref: string;
}

interface RouteComparisonTableProps {
  caption: string;
  rows: RouteComparisonRow[];
  note: string;
}

const COLUMN_LABELS = {
  route: "Financing route",
  relevantFor: "May be relevant for",
  needsAssessing: "What usually needs assessing",
  nextStep: "Next step",
} as const;

const LINK_CLASS =
  "text-body-sm inline-flex min-h-12 items-center font-semibold text-text-primary underline " +
  "decoration-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] underline-offset-[0.35em] " +
  "transition-[text-decoration-color] duration-[var(--dur-fast)] " +
  "[transition-timing-function:var(--ease-standard)] hover:decoration-[var(--text-primary)]";

/**
 * Qualitative route comparison (pages/home.md §10). A real table from 1024px
 * up, with an obsidian header band over a warm reading ground; below that,
 * one self-contained block per route with its column labels repeated, so
 * nothing scrolls sideways and no label is separated from its value.
 *
 * The component is deliberately structural. No rate, amount, LTV, tenure,
 * approval time or fee may be passed into it, and no row may be marked as
 * recommended or preferred.
 */
export function RouteComparisonTable({
  caption,
  rows,
  note,
}: RouteComparisonTableProps) {
  return (
    <div>
      <table className="hidden lg:table">
        <caption className="text-body-sm mb-5 text-left text-text-secondary">
          {caption}
        </caption>

        <thead data-surface="dark" className="bg-obsidian-900">
          <tr>
            <th scope="col" className="text-label px-5 py-4 text-text-primary">
              {COLUMN_LABELS.route}
            </th>
            <th scope="col" className="text-label px-5 py-4 text-text-primary">
              {COLUMN_LABELS.relevantFor}
            </th>
            <th scope="col" className="text-label px-5 py-4 text-text-primary">
              {COLUMN_LABELS.needsAssessing}
            </th>
            <th scope="col" className="text-label px-5 py-4 text-text-primary">
              {COLUMN_LABELS.nextStep}
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.route}
              className="border-b border-border-hairline transition-colors duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] hover:bg-surface-secondary"
            >
              <th
                scope="row"
                className="text-heading-sm w-[20%] px-5 py-7 align-top text-text-primary"
              >
                {row.route}
              </th>
              <td className="text-body-sm w-[22%] px-5 py-7 align-top text-text-secondary">
                {row.relevantFor}
              </td>
              <td className="text-body-sm px-5 py-7 align-top text-text-secondary">
                {row.needsAssessing}
              </td>
              <td className="w-[22%] px-5 py-4 align-top">
                <a href={row.nextStepHref} className={LINK_CLASS}>
                  {row.nextStepLabel}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Below 1024px the table becomes a reading sequence, one route at a
          time, with every column label kept. Tablets get the sequence rather
          than a squeezed table: four columns plus a fixed CTA label do not
          fit 768px without either wrapping the link or shrinking the body
          type below its floor. */}
      <div className="lg:hidden">
        <p className="text-body-sm text-text-secondary">{caption}</p>

        <dl className="mt-8">
          {rows.map((row) => (
            <div
              key={row.route}
              className="border-t border-border-strong pt-5 pb-8"
            >
              <dt className="text-heading-md text-text-primary">{row.route}</dt>
              <dd className="mt-5">
                <dl>
                  <dt className="text-label text-text-secondary">
                    {COLUMN_LABELS.relevantFor}
                  </dt>
                  <dd className="text-body mt-2">{row.relevantFor}</dd>

                  <dt className="text-label mt-5 text-text-secondary">
                    {COLUMN_LABELS.needsAssessing}
                  </dt>
                  <dd className="text-body mt-2">{row.needsAssessing}</dd>

                  <dt className="text-label mt-5 text-text-secondary">
                    {COLUMN_LABELS.nextStep}
                  </dt>
                  <dd className="mt-1">
                    <a href={row.nextStepHref} className={LINK_CLASS}>
                      {row.nextStepLabel}
                    </a>
                  </dd>
                </dl>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="text-disclaimer measure-wide mt-8 text-text-secondary">
        {note}
      </p>
    </div>
  );
}
