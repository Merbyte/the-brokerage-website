import { Button } from "../ui/Button";
import { PRIMARY_CTA_LABEL } from "@/lib/constants";

/**
 * The primary call to action, used at every placement on the homepage so
 * the wording is identical by construction.
 *
 * The label is long and must never wrap or truncate (MASTER.md §2.6). It
 * needs ~255px at 16px, against 288px of content width at the 320px
 * floor, so padding tightens below 414px and the label drops to the 15px
 * type floor below 375px. `!` is required throughout because Tailwind
 * emits `.px-6` after `.px-4`, making stylesheet order rather than class
 * order decide the winner.
 */
export function AssessmentCta() {
  return (
    <Button
      href="/get-a-free-financing-assessment/"
      variant="primary"
      className="text-body-s max-[413px]:px-3! max-[374px]:text-[15px]!"
      fullWidthBelow414
    >
      {PRIMARY_CTA_LABEL}
    </Button>
  );
}
