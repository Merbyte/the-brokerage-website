"use client";

import { useId } from "react";

import { FormField } from "./FormField";
import { Button } from "./Button";
import { CALCULATOR_DISCLAIMER } from "@/lib/constants";

const OUTPUTS = [
  "Estimated monthly repayment",
  "Estimated total repayment",
  "Estimated interest",
] as const;

/**
 * Estimated monthly repayment calculator -- interface only.
 *
 * The calculation method, the illustrative rate, the worked test cases, the
 * content owner and the review date are all still approval gates in the
 * master brief §6. Nothing here computes a figure, and nothing invents one:
 * the controls are disabled, the outputs read as dashes, and the outstanding
 * approvals are shown to the reader rather than hidden. The disclaimer sits
 * next to the results permanently, never behind an interaction.
 */
export function CalculatorShell() {
  const amountId = useId();
  const rateId = useId();
  const tenureId = useId();
  const noteId = useId();

  return (
    <div className="bg-surface-raised p-6 md:p-10">
      <form
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        aria-describedby={noteId}
      >
        <FormField
          id={amountId}
          label="Financing amount (S$)"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="e.g. 250,000"
          disabled
        />

        <FormField
          id={rateId}
          label="Illustrative annual rate (%)"
          type="text"
          inputMode="decimal"
          autoComplete="off"
          placeholder="e.g. 6.5"
          disabled
        />

        <FormField
          id={tenureId}
          label="Tenure (months)"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="e.g. 36"
          disabled
        />

        <div className="md:col-span-3">
          <Button type="submit" variant="primary" disabled fullWidthBelow414>
            Estimate repayment
          </Button>
        </div>
      </form>

      <dl className="mt-10 grid grid-cols-1 border-t border-border-hairline sm:grid-cols-3">
        {OUTPUTS.map((output) => (
          <div
            key={output}
            className="border-b border-border-hairline py-5 sm:border-b-0 sm:pr-6"
          >
            <dt className="text-body-sm text-text-secondary">{output}</dt>
            {/* Reading scale, not display scale: a figure set large for
                impact is a wealth-marketing tell and is prohibited. */}
            <dd className="font-figures text-heading-md mt-2 text-text-primary">
              S$ &mdash;
            </dd>
          </div>
        ))}
      </dl>

      <div id={noteId} className="mt-8 border-t border-border-hairline pt-6">
        <h3 className="text-heading-sm text-text-primary">
          Before this tool goes live
        </h3>
        <ul className="mt-4 flex flex-col gap-2">
          <li className="text-body-sm text-text-secondary">
            The calculation basis is being confirmed and will be stated
            explicitly as either simple interest or reducing-balance
            amortisation.
          </li>
          <li className="text-body-sm text-text-secondary">
            The illustrative annual rate and its worked test cases are being
            reviewed and dated.
          </li>
        </ul>
      </div>

      <p className="text-disclaimer mt-8 border-t border-border-hairline pt-6 text-text-primary">
        {CALCULATOR_DISCLAIMER}
      </p>
    </div>
  );
}
