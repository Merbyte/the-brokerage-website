import { type ReactNode } from "react";

type Tone = "neutral" | "information" | "warning" | "error" | "success";

const TONE_CLASS: Record<Tone, string> = {
  neutral: "border-border-hairline bg-surface-secondary text-text-primary",
  information: "border-state-info/40 bg-surface-secondary text-text-primary",
  warning: "border-state-warning/40 bg-surface-secondary text-text-primary",
  error: "border-state-error/40 bg-surface-secondary text-text-primary",
  success: "border-state-success/40 bg-surface-secondary text-text-primary",
};

const TONE_ICON: Record<Exclude<Tone, "neutral">, string> = {
  information: "ⓘ",
  warning: "⚠",
  error: "⚠",
  success: "✓",
};

const TONE_ICON_COLOR: Record<Exclude<Tone, "neutral">, string> = {
  information: "text-state-info",
  warning: "text-state-warning",
  error: "text-state-error",
  success: "text-state-success",
};

interface DisclaimerProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

/**
 * Compliance disclaimer (MASTER.md §5.7, tone="neutral", the default) and
 * contextual alert block (§5.8, tone="information" | "warning" | "error" |
 * "success"). Always renders at body size -- never small, italic or
 * collapsible -- and colour is never the sole carrier: every tone pairs an
 * icon with explicit text.
 */
export function Disclaimer({ tone = "neutral", children, className = "" }: DisclaimerProps) {
  const role = tone === "error" ? "alert" : tone === "neutral" ? undefined : "note";

  return (
    <div
      role={role}
      className={`flex items-start gap-3 rounded-[var(--radius-control)] border ${TONE_CLASS[tone]} p-4 text-disclaimer ${className}`}
    >
      {tone !== "neutral" ? (
        <span aria-hidden="true" className={`shrink-0 ${TONE_ICON_COLOR[tone]}`}>
          {TONE_ICON[tone]}
        </span>
      ) : null}
      <div>{children}</div>
    </div>
  );
}
