"use client";

import { useId } from "react";
import { FormField } from "./FormField";
import { Disclaimer } from "./Disclaimer";
import { Button } from "./Button";
import { CALCULATOR_DISCLAIMER } from "@/lib/constants";

/**
 * Estimated monthly repayment calculator -- UI shell only (MASTER.md
 * §5.15). Fields and results region are wired for accessibility, but no
 * calculation method has been confirmed yet (design.md §10 / CLAUDE.md
 * "Calculator launch status"), so the results region stays an inert
 * placeholder. The illustrative-only disclaimer is always visible next to
 * it, never conditional on user action.
 */
export function CalculatorShell() {
  const amountId = useId();
  const rateId = useId();
  const tenureId = useId();

  return (
    <div className="flex flex-col gap-8">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-3" aria-describedby={`${amountId}-method-note`}>
        <FormField
          id={amountId}
          label="Financing amount (S$)"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="e.g. 250,000"
        />
        <FormField
          id={rateId}
          label="Illustrative annual rate (%)"
          type="text"
          inputMode="decimal"
          autoComplete="off"
          placeholder="e.g. 6.5"
        />
        <FormField
          id={tenureId}
          label="Tenure (months)"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="e.g. 36"
        />

        <p id={`${amountId}-method-note`} className="md:col-span-3 text-body-s text-text-secondary">
          Calculation method to be confirmed before launch.
        </p>

        <div className="md:col-span-3">
          <Button type="submit" variant="primary" disabled fullWidthBelow414>
            Estimate repayment
          </Button>
        </div>
      </form>

      <div
        role="region"
        aria-live="polite"
        aria-label="Estimated monthly repayment"
        className="rounded-[var(--radius-control)] border border-border-hairline bg-surface-secondary p-6"
      >
        <p className="text-label text-text-secondary">Estimated monthly repayment</p>
        {/* Reading scale, not display scale: a figure set large for impact
            is a wealth-marketing tell and is prohibited (MASTER.md §4.5). */}
        <p className="mt-2 font-figures text-heading-m text-text-primary">S$ —</p>
      </div>

      <Disclaimer tone="neutral">{CALCULATOR_DISCLAIMER}</Disclaimer>
    </div>
  );
}
