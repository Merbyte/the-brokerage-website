import { Button } from "../ui/Button";
import { AssessmentCta } from "./AssessmentCta";

interface Stage {
  name: string;
  cash: string;
  detail: string;
}

/**
 * Chronological, not a ranking. The bond sits here because it is typically
 * required between award and starting on site, which is the order a
 * contractor actually meets these stages in.
 */
const STAGES: Stage[] = [
  {
    name: "Tender and award",
    cash: "Cash committed",
    detail: "The contract is won and the cost of starting it becomes real.",
  },
  {
    name: "Bond requirement",
    cash: "Cash committed",
    detail: "A bond may be required before work can start on site.",
  },
  {
    name: "Mobilisation",
    cash: "Cash out",
    detail: "Plant, materials, deposits and manpower are paid for.",
  },
  {
    name: "Progress claim",
    cash: "Cash awaited",
    detail: "Work is done and the claim is certified on someone else's schedule.",
  },
  {
    name: "Retention",
    cash: "Cash held",
    detail: "Part of what you have earned is held back and cannot be drawn on.",
  },
  {
    name: "Final account",
    cash: "Cash in",
    detail: "The tail of the project and the release of retained sums.",
  },
];

/**
 * Construction and engineering band. Opens on a concrete project situation
 * rather than a category label, and carries the cash-gap sequence from
 * MASTER.md §5.11 as a purely typographic diagram: a hairline rule with
 * stages hanging beneath it, which reads as a timeline horizontally and as
 * dividers when it stacks. No figures, no durations, no claim that any
 * route closes the gap. Readable in greyscale and with JavaScript off.
 */
export function ConstructionBand() {
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h2 className="text-heading-l text-text-primary">
            Built for businesses where project growth moves faster than cash flow.
          </h2>
          <p className="mt-5 text-body-l text-text-primary">
            A contract is awarded. Plant, subcontractors and materials are committed. The first progress claim is
            still weeks from being certified. That is where most construction financing questions actually begin.
          </p>
        </div>
        <p className="text-body text-text-secondary lg:pt-3">
          From project mobilisation and working-capital pressure to performance bonds and existing facility
          constraints, we help construction and engineering businesses assess the route before approaching a
          financier.
        </p>
      </div>

      <div className="mt-14">
        <h3 className="text-heading-m text-text-primary">Where the gap opens on a project</h3>

        <ol className="mt-8 grid gap-x-6 gap-y-8 lg:grid-cols-6">
          {STAGES.map((stage) => (
            <li key={stage.name} className="border-t border-border-strong pt-4">
              <p className="text-body-s font-medium text-text-primary">{stage.cash}</p>
              <p className="mt-2 text-heading-s text-text-primary">{stage.name}</p>
              <p className="mt-2 text-body-s text-text-secondary">{stage.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 max-w-prose">
          <p className="text-body-l text-text-primary">
            The gap opens between the money committed at mobilisation and the money received after certification.
            It is a timing problem before it is a funding problem, which is why the assessment comes first.
          </p>
          <p className="mt-4 text-body text-text-secondary">
            This describes the shape of the problem. It is not a statement that any financing route closes the gap.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 min-[414px]:flex-row min-[414px]:flex-wrap min-[414px]:items-center">
        <AssessmentCta />
        <Button href="/construction-engineering-financing/" variant="secondary" className="text-body-s">
          Discuss Your Project
        </Button>
      </div>
    </>
  );
}
