import { Button } from "../ui/Button";
import { PRIMARY_CTA_LABEL } from "@/lib/constants";

/**
 * The primary call to action, used at every placement on the homepage so the
 * approved wording stays identical by construction.
 *
 * The label is fixed and must never wrap or truncate. It needs roughly 250px
 * at 16px against the 280px of content available at the 320px floor, so the
 * padding tightens below 414px and the label steps down to 15px below 375px.
 * The `!` modifiers are required because Tailwind emits `.px-6` after
 * `.px-4`, which makes stylesheet order rather than class order decide.
 */
export function AssessmentCta({ className = "" }: { className?: string }) {
  return (
    <Button
      href="/get-a-free-financing-assessment/"
      variant="primary"
      fullWidthBelow414
      className={`max-[413px]:px-4! max-[374px]:text-[15px]! ${className}`}
    >
      {PRIMARY_CTA_LABEL}
    </Button>
  );
}
