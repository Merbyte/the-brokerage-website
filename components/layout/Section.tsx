import { type ReactNode } from "react";

import { Container } from "./Container";

/**
 * Surface roles (MASTER.md §5.1):
 *   obsidian  -- chapters that need gravity: hero, argument, close
 *   ivory     -- the default reading ground
 *   stone     -- diagram and utility plates, and variation between two
 *                consecutive reading sections
 */
type Surface = "obsidian" | "ivory" | "stone";

type Rhythm = "default" | "tall" | "quiet";

const SURFACE_CLASS: Record<Surface, string> = {
  obsidian: "bg-obsidian-900",
  ivory: "bg-ivory-50",
  stone: "bg-stone-100",
};

/* MASTER.md §4.4: 56-72 mobile, 72-88 tablet, 96-128 desktop. */
const RHYTHM_CLASS: Record<Rhythm, string> = {
  default: "py-16 md:py-20 lg:py-28",
  tall: "py-20 md:py-24 lg:py-32",
  quiet: "py-14 md:py-16 lg:py-24",
};

interface SectionProps {
  surface: Surface;
  rhythm?: Rhythm;
  id?: string;
  className?: string;
  /** Set false when the section owns its own full-bleed inner composition. */
  contained?: boolean;
  "aria-labelledby"?: string;
  children: ReactNode;
}

/**
 * Full-bleed surface band. Obsidian bands set data-surface="dark" so every
 * semantic token beneath them resolves to its dark-context value
 * (globals.css, MASTER.md §2.2) -- no component carries a dark colour of
 * its own.
 */
export function Section({
  surface,
  rhythm = "default",
  id,
  className = "",
  contained = true,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      data-surface={surface === "obsidian" ? "dark" : undefined}
      className={`${SURFACE_CLASS[surface]} ${RHYTHM_CLASS[rhythm]} ${className}`}
      {...rest}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
