import { CalculatorShell } from "../ui/CalculatorShell";

/**
 * Calculator teaser (pages/home.md §12). The utility chapter: after two
 * chapters of argument, the page hands the reader something to use. The white
 * plate on the warm stone band marks it as a tool rather than as a further
 * piece of reading.
 */
export function CalculatorTeaser() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <h2 className="text-heading-lg lg:col-span-5">
          Estimate a monthly repayment for planning purposes.
        </h2>
        <p className="text-body-lg mt-4 text-text-secondary lg:col-span-5 lg:col-start-7 lg:mt-0">
          Use an illustrative estimate to understand how amount, rate and tenure
          can affect repayment. It is not a quote or financing offer.
        </p>
      </div>

      <div className="mt-10 lg:mt-14">
        <CalculatorShell />
      </div>

      <p className="mt-8">
        <a
          href="/tools/monthly-repayment-calculator/"
          className="text-body inline-flex min-h-12 items-center font-semibold text-text-primary underline decoration-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] underline-offset-[0.35em] transition-[text-decoration-color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] hover:decoration-[var(--text-primary)]"
        >
          Try the Repayment Calculator
        </a>
      </p>
    </>
  );
}
