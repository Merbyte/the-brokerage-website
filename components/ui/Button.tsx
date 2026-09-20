import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";

const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis " +
  "text-body font-medium min-h-[48px] px-6 rounded-[var(--radius-control)] " +
  "transition-[background-color,border-color,color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] " +
  "active:translate-y-px disabled:pointer-events-none";

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-on hover:bg-[color-mix(in_srgb,var(--accent)_94%,black)] " +
    "disabled:bg-text-disabled disabled:text-surface-raised",
  secondary:
    "bg-transparent border border-border-strong text-text-primary hover:bg-surface-secondary hover:border-text-primary " +
    "disabled:border-border-hairline disabled:text-text-disabled",
  tertiary:
    "bg-transparent text-text-primary underline underline-offset-[0.15em] px-0 min-h-0 hover:decoration-2 " +
    "disabled:text-text-disabled",
};

interface SharedProps {
  variant?: Variant;
  loading?: boolean;
  fullWidthBelow414?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Primary / secondary / tertiary button per MASTER.md §5.3. Renders a real
 * <button> or <a> depending on whether href is supplied -- never a styled
 * <div>. Full width below 414px is opt-in via fullWidthBelow414, matching
 * "full width below 414px where it is the primary action."
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

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...anchorRest}>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{children}</span>
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type="button"
      className={classes}
      disabled={loading || buttonRest.disabled}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {loading ? "Sending…" : children}
      </span>
    </button>
  );
}
