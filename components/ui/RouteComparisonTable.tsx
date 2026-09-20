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
  note?: string;
}

const COLUMN_LABELS = {
  relevantFor: "May be relevant for",
  needsAssessing: "What usually needs assessing",
  nextStep: "Next step",
} as const;

/**
 * Qualitative route-comparison shell (MASTER.md §5.12/§5.13). A real
 * <table> at >=768px; below that, one self-contained block per route with
 * repeated column labels, never a horizontally scrolling table or a card
 * grid. Purely structural -- no rates, amounts, timelines, LTVs or fee
 * data belong in the rows passed to this component.
 */
export function RouteComparisonTable({ caption, rows, note }: RouteComparisonTableProps) {
  return (
    <div>
      {/* Desktop / tablet: real table */}
      <table className="hidden md:table w-full">
        <caption className="mb-4 text-left text-body-s text-text-secondary">{caption}</caption>
        <thead>
          <tr className="border-b border-border-hairline">
            <th scope="col" className="py-3 pr-4 text-left text-table-header">
              Financing route
            </th>
            <th scope="col" className="py-3 pr-4 text-left text-table-header">
              {COLUMN_LABELS.relevantFor}
            </th>
            <th scope="col" className="py-3 pr-4 text-left text-table-header">
              {COLUMN_LABELS.needsAssessing}
            </th>
            <th scope="col" className="py-3 text-left text-table-header">
              {COLUMN_LABELS.nextStep}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.route} className="border-b border-border-hairline hover:bg-surface-secondary">
              <th scope="row" className="py-4 pr-4 align-top text-left text-table-cell font-semibold">
                {row.route}
              </th>
              <td className="py-4 pr-4 align-top text-table-cell">{row.relevantFor}</td>
              <td className="py-4 pr-4 align-top text-table-cell">{row.needsAssessing}</td>
              {/* Approved CTA wording is fixed, so the column is sized to
                  the label rather than the label shortened to the column:
                  clickable labels must not wrap (MASTER.md §2.6). */}
              <td className="py-4 align-top text-table-cell whitespace-nowrap">
                <a href={row.nextStepHref} className="text-text-primary underline underline-offset-[0.15em]">
                  {row.nextStepLabel}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: stacked blocks, column labels repeated per block */}
      <dl className="md:hidden flex flex-col divide-y divide-border-hairline">
        {rows.map((row) => (
          <div key={row.route} className="py-6">
            <dt className="text-heading-s">{row.route}</dt>
            <div className="mt-3 flex flex-col gap-3">
              <div>
                <dt className="text-label text-text-secondary">{COLUMN_LABELS.relevantFor}</dt>
                <dd className="mt-1 text-body">{row.relevantFor}</dd>
              </div>
              <div>
                <dt className="text-label text-text-secondary">{COLUMN_LABELS.needsAssessing}</dt>
                <dd className="mt-1 text-body">{row.needsAssessing}</dd>
              </div>
              <div>
                <dt className="text-label text-text-secondary">{COLUMN_LABELS.nextStep}</dt>
                <dd className="mt-1">
                  <a href={row.nextStepHref} className="text-text-primary underline underline-offset-[0.15em]">
                    {row.nextStepLabel}
                  </a>
                </dd>
              </div>
            </div>
          </div>
        ))}
      </dl>

      {note ? <p className="mt-6 text-disclaimer text-text-secondary">{note}</p> : null}
    </div>
  );
}
