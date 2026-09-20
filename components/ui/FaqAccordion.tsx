export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

/**
 * FAQ accordion (MASTER.md §6.6). Native details/summary keeps every answer
 * in the DOM, keyboard-operable and functional without JavaScript.
 *
 * The indicator is drawn from two rules rather than set as a "+" glyph, so it
 * matches the hairline language used by the diagrams; the vertical rule
 * collapses when the answer opens.
 */
export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-t border-border-hairline last:border-b"
        >
          <summary className="flex min-h-[72px] cursor-pointer list-none items-center justify-between gap-6 py-5 marker:content-none">
            <h3 className="text-heading-sm text-text-primary">
              {item.question}
            </h3>

            <span
              aria-hidden="true"
              className="relative mt-1 block size-4 shrink-0 self-start"
            >
              <span className="absolute top-1/2 left-0 block h-px w-4 bg-text-primary" />
              <span className="absolute top-0 left-1/2 block h-4 w-px bg-text-primary transition-opacity duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] group-open:opacity-0" />
            </span>
          </summary>

          <p className="text-body measure pb-7 text-text-secondary">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
