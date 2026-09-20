import {
  RouteComparisonTable,
  type RouteComparisonRow,
} from "../ui/RouteComparisonTable";
import { AssessmentCta } from "./AssessmentCta";

/** Rows as approved in the master brief §5, section 9. Qualitative only. */
const ROWS: RouteComparisonRow[] = [
  {
    route: "Business financing",
    relevantFor: "Growth, operations, equipment or expansion",
    needsAssessing:
      "Business profile, cash flow, existing facilities and documents",
    nextStepLabel: "Discuss Your Situation",
    nextStepHref: "/business-financing/",
  },
  {
    route: "Trade financing",
    relevantFor: "Supplier payments and receivables timing",
    needsAssessing: "Invoices, contracts, counterparties and the trade cycle",
    nextStepLabel: "Discuss Cash Flow",
    nextStepHref: "/trade-financing/",
  },
  {
    route: "Property-backed financing",
    relevantFor: "Asset-backed or larger financing needs",
    needsAssessing: "Ownership, valuation, existing debt and repayment capacity",
    nextStepLabel: "Speak to a Specialist",
    nextStepHref: "/property-financing/",
  },
  {
    route: "Project financing",
    relevantFor: "Contract execution and mobilisation",
    needsAssessing:
      "The contract, payment terms, timing and supporting documents",
    nextStepLabel: "Discuss Your Project",
    nextStepHref: "/project-private-capital/",
  },
];

const CAPTION =
  "A qualitative comparison of financing routes and what each one usually requires.";

const NOTE =
  "This comparison is a guide to which conversation to have. It is not an indication of eligibility, availability, amount, rate, tenure or timing. Those depend on the information provided and the relevant financier's assessment.";

/**
 * Route comparison chapter (pages/home.md §10). No route is styled as the
 * answer: the columns describe what each route suits and what it would need,
 * and the qualifier sits directly beneath the data rather than in a footnote.
 */
export function RouteComparison() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <h2 className="text-display-section lg:col-span-6">
          Compare possible financing routes at a glance.
        </h2>
        <p className="text-body-lg mt-6 text-text-secondary lg:col-span-5 lg:col-start-8 lg:mt-2">
          Different facilities solve different situations. The right route
          depends on your purpose, cash flow, information, existing obligations
          and the relevant financier&rsquo;s assessment.
        </p>
      </div>

      <div className="mt-14 lg:mt-20">
        <RouteComparisonTable caption={CAPTION} rows={ROWS} note={NOTE} />
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-border-hairline pt-10 min-[414px]:flex-row min-[414px]:items-center min-[414px]:justify-between">
        <p className="text-body text-text-primary">
          Not sure which row describes your situation?
        </p>
        <AssessmentCta />
      </div>
    </>
  );
}
