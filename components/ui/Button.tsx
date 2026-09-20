import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "tertiary";

const BASE =
  "inline-flex items-center justify-center whitespace-nowrap font-semibold " +
  "rounded-[var(--radius-control)] " +
  "transition-[background-color,border-color,color] duration-[var(--dur-fast)] " +
  "[transition-timing-function:var(--ease-standard)] " +
  "active:translate-y-px disabled:pointer-events-none";

/* 48px minimum target on mobile, 52px on desktop (MASTER.md §6.2). */
const SIZED = "min-h-12 lg:min-h-[52px] px-6 text-body-sm lg:text-body";

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    SIZED +
    " bg-accent text-accent-on " +
    "hover:bg-[color-mix(in_srgb,var(--accent)_86%,var(--white))] " +
    // A disabled action returns to the warm surface palette rather than
    // greying out into the cool ink ramp, which reads as a different system.
    "disabled:border disabled:border-border-hairline disabled:bg-surface-secondary " +
    "disabled:text-text-disabled",
  secondary:
    SIZED +
    " border border-border-strong text-text-primary " +
    "hover:border-text-primary hover:bg-[color-mix(in_srgb,var(--text-primary)_7%,transparent)] " +
    "disabled:border-border-hairline disabled:text-text-disabled",
  tertiary:
    "min-h-12 text-body font-semibold text-text-primary underline " +
    "decoration-[color-mix(in_srgb,var(--text-primary)_45%,transparent)] underline-offset-[0.35em] " +
    "hover:decoration-[var(--text-primary)] disabled:text-text-disabled",
};

interface SharedProps {
  variant?: Variant;
  loading?: boolean;
  /**
   * The approved primary CTA label is fixed at seven words and must never
   * wrap or truncate (MASTER.md §12). Below 414px it goes full width and
   * tightens its padding so it still fits a 320px viewport on one line.
   */
  fullWidthBelow414?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Primary / secondary / tertiary control (MASTER.md §6.2). Renders a real
 * <button> or <a> depending on whether href is supplied. Gold is reserved
 * for the primary variant, because gold means action.
 */
export function Button({
  variant = "primary",
  loading = false,
  fullWidthBelow414 = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const widthClass = fullWidthBelow414 ? "w-full min-[414px]:w-auto" : "";
  const classes = `${BASE} ${VARIANT_CLASS[variant]} ${widthClass} ${className}`;

  if (typeof rest.href === "string") {
    const { href, ...anchorRest } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={buttonRest.type ?? "button"}
      className={classes}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {loading ? "Sending" : children}
    </button>
  );
}
