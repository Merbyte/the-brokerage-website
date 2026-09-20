import { Button } from "../ui/Button";
import { AssessmentCta } from "./AssessmentCta";

type CashDirection = "out" | "pending" | "in";

interface Stage {
  name: string;
  direction: CashDirection;
  marker: string;
  detail: string;
}

/**
 * The sequence a contractor actually works through, in order. Nothing here is
 * quantified: no values, durations, percentages or financing amounts, because
 * none of those may be published (claims-and-compliance-rules.md).
 */
const STAGES: Stage[] = [
  {
    name: "Mobilisation",
    direction: "out",
    marker: "Cash out",
    detail: "Plant, materials, deposits and site set-up are paid for.",
  },
  {
    name: "Procurement",
    direction: "out",
    marker: "Cash out",
    detail: "Suppliers and subcontractors work to their own payment terms.",
  },
  {
    name: "Progress claim",
    direction: "pending",
    marker: "No movement",
    detail: "Work already completed is submitted for valuation.",
  },
  {
    name: "Certification",
    direction: "pending",
    marker: "No movement",
    detail: "The claim is assessed and certified on another party's schedule.",
  },
  {
    name: "Payment",
    direction: "in",
    marker: "Cash in",
    detail: "Funds arrive, less anything retained until later in the project.",
  },
];

const EXPOSURE_NOTE =
  "Cash is committed here and only returns at the end of the sequence.";

/**
 * Construction and engineering chapter (pages/home.md §7) -- the first major
 * WORKS moment.
 *
 * The drawing is built from type and rules rather than an SVG, so every label
 * sits on the real type scale at every width and the sequence can be redrawn
 * vertically on small screens instead of scrolling sideways. Ticks below the
 * axis are cash leaving the business, the tick above it is cash arriving, and
 * plain nodes are events that move no money at all. The single gold element
 * is the span where the business is funding the project itself.
 */
export function ConstructionChapter() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <h2 className="text-display-section lg:col-span-6">
          Built for businesses where project growth moves faster than cash flow.
        </h2>

        <div className="mt-6 lg:col-span-5 lg:col-start-8 lg:mt-2">
          <p className="text-body-lg text-text-primary">
            A contract is awarded. Plant, subcontractors and materials are
            committed. The first progress claim is still weeks from being
            certified.
          </p>
          <p className="text-body mt-4 text-text-secondary">
            From project mobilisation and working-capital pressure to
            performance bonds and existing facility constraints, we help
            construction and engineering businesses assess the route before
            approaching a financier.
          </p>
        </div>
      </div>

      {/* Drawing plate: obsidian inside a warm section, the way a drawing sits
          on a board. */}
      <figure
        data-surface="dark"
        className="-mx-5 mt-14 bg-obsidian-900 px-5 py-12 md:-mx-6 md:px-8 lg:mx-0 lg:mt-20 lg:px-14 lg:py-16"
      >
        <figcaption className="text-heading-md text-text-primary">
          Where the gap opens on a project
        </figcaption>

        {/* Horizontal drawing, 1024px and up */}
        <div className="mt-12 hidden lg:block">
          <ol className="grid grid-cols-5">
            {STAGES.map((stage) => (
              /* Padding sits on the text, not the column, so the axis
                 segments meet and read as one continuous line. */
              <li key={stage.name}>
                <p className="text-label pr-6 text-text-secondary">
                  {stage.marker}
                </p>

                <div className="relative mt-5 h-16">
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 right-0 left-0 block border-t border-diagram-line"
                  />

                  {stage.direction === "pending" ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 left-0 block size-2.5 -translate-y-1/2 rounded-full border border-diagram-line-strong bg-obsidian-900"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 block w-px bg-diagram-line-strong ${
                        stage.direction === "out" ? "top-1/2 h-7" : "bottom-1/2 h-7"
                      }`}
                    >
                      <span
                        className={`absolute left-1/2 block size-2 -translate-x-1/2 bg-diagram-line-strong ${
                          stage.direction === "out" ? "bottom-0" : "top-0"
                        }`}
                      />
                    </span>
                  )}
                </div>

                <h3 className="text-heading-sm mt-5 pr-6 text-text-primary">
                  {stage.name}
                </h3>
                <p className="text-body-sm mt-2 pr-6 text-text-secondary">
                  {stage.detail}
                </p>
              </li>
            ))}
          </ol>

          {/* The exposure window closes only when payment lands, so the
              bracket stops at the fifth node. */}
          <div className="mt-10 grid grid-cols-5">
            <p className="text-body-sm col-span-4 border-t-2 border-accent pt-4 pr-6 text-text-primary">
              {EXPOSURE_NOTE}
            </p>
          </div>
        </div>

        {/* Vertical redraw below 1024px */}
        <ol className="mt-10 lg:hidden">
          {STAGES.map((stage) => (
            <li
              key={stage.name}
              className="relative border-l border-diagram-line pb-8 pl-7 last:pb-0"
            >
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[5px] block size-2.5 ${
                  stage.direction === "pending"
                    ? "rounded-full border border-diagram-line-strong bg-obsidian-900"
                    : "bg-diagram-line-strong"
                }`}
              />
              <p className="text-label text-text-secondary">{stage.marker}</p>
              <h3 className="text-heading-sm mt-2 text-text-primary">
                {stage.name}
              </h3>
              <p className="text-body-sm mt-2 text-text-secondary">
                {stage.detail}
              </p>
            </li>
          ))}
        </ol>

        <p className="text-body-sm mt-8 border-l-2 border-accent pl-7 text-text-primary lg:hidden">
          {EXPOSURE_NOTE}
        </p>
      </figure>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="text-body-lg text-text-primary">
            The gap opens between the money committed at mobilisation and the
            money received after certification. It is a timing problem before it
            is a funding problem, which is why the assessment comes first.
          </p>
          <p className="text-body-sm mt-4 text-text-secondary">
            This describes the shape of the problem. It is not a statement that
            any financing route closes the gap.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[414px]:flex-row min-[414px]:flex-wrap min-[414px]:items-center">
            <AssessmentCta />
            <Button
              href="/construction-engineering-financing/"
              variant="secondary"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
