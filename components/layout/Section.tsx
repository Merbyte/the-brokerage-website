import { type ReactNode } from "react";
import { Container } from "./Container";

type Surface = "page" | "secondary" | "dark" | "dark-alt";
type ContainerSize = "prose" | "content" | "wide";

const SURFACE_CLASS: Record<Surface, string> = {
  page: "bg-surface-page",
  secondary: "bg-surface-secondary",
  dark: "bg-surface-page",
  "dark-alt": "bg-surface-secondary",
};

interface SectionProps {
  surface?: Surface;
  containerSize?: ContainerSize;
  className?: string;
  id?: string;
  "aria-label"?: string;
  as?: "section" | "div" | "footer";
  children: ReactNode;
}

/**
 * Full-width surface band with a constrained inner container. Dark bands
 * set data-surface="dark" so every semantic token nested inside switches
 * to its dark-context value (globals.css, MASTER.md §3.2/§3.4).
 */
export function Section({
  surface = "page",
  containerSize = "content",
  className = "",
  id,
  as: Tag = "section",
  children,
  ...rest
}: SectionProps) {
  const isDark = surface === "dark" || surface === "dark-alt";

  return (
    <Tag
      id={id}
      data-surface={isDark ? "dark" : undefined}
      className={`py-12 md:py-[72px] lg:py-24 ${SURFACE_CLASS[surface]} ${className}`}
      {...rest}
    >
      <Container size={containerSize}>{children}</Container>
    </Tag>
  );
}
