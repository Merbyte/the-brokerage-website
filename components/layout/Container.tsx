import { type ElementType, type ReactNode } from "react";

type ContainerSize = "prose" | "content";

const MAX_WIDTH: Record<ContainerSize, string> = {
  prose: "max-w-[var(--container-prose)]",
  content: "max-w-[var(--container-content)]",
};

interface ContainerProps {
  size?: ContainerSize;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Constrained inner container (MASTER.md §4.1). Full-bleed surface bands run
 * to the viewport edge; their content is always wrapped in one of these so
 * it stays aligned to the 1200px grid. Gutters step 20 / 24 / 40px, which
 * keeps 280px of readable width at the 320px floor.
 */
export function Container({
  size = "content",
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full px-5 md:px-6 lg:px-10 ${MAX_WIDTH[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
