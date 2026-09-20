export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

/**
 * FAQ accordion (MASTER.md §5.16). Native <details>/<summary> keeps every
 * answer in the DOM and keyboard/JS-optional by construction, with heading
 * semantics preserved inside the summary.
 */
export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  return (
    <div className={`flex flex-col divide-y divide-border-hairline ${className}`}>
      {items.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-4 text-heading-s marker:content-none">
            <h3 className="text-heading-s">{item.question}</h3>
            <span aria-hidden="true" className="shrink-0 text-body-l group-open:rotate-45 transition-transform duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)]">
              +
            </span>
          </summary>
          <p className="mt-3 text-body text-text-secondary">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
