import { type ElementType, type ReactNode } from "react";

type ContainerSize = "prose" | "content" | "wide";

const MAX_WIDTH: Record<ContainerSize, string> = {
  prose: "max-w-[var(--container-prose)]",
  content: "max-w-[var(--container-content)]",
  wide: "max-w-[var(--container-wide)]",
};

interface ContainerProps {
  size?: ContainerSize;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Constrained inner container (MASTER.md §2.2). Full-width surface bands
 * always wrap their content in one of these; text never runs the full
 * viewport width.
 */
export function Container({
  size = "content",
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-4 md:px-6 lg:px-8 xl:px-10 ${MAX_WIDTH[size]} ${className}`}>
      {children}
    </Tag>
  );
}
