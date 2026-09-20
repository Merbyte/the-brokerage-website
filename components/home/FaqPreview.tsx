import { FaqAccordion, type FaqItem } from "../ui/FaqAccordion";

/** The six approved questions from the master brief §5, section 11. */
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does a financing advisory do?",
    answer:
      "It helps a business understand its financing situation before deciding where and how to approach a financier. The assessment comes first, and the discussion about possible routes follows from it.",
  },
  {
    question: "Is The Brokerage Advisory a bank or lender?",
    answer:
      "No. The Brokerage Advisory is an independent financing advisory. It is not a bank, financial institution or licensed moneylender, and it does not lend.",
  },
  {
    question: "What is a free financing assessment?",
    answer:
      "It is an initial discussion about your situation. It is not a financing approval, offer, commitment or guarantee, and there is no obligation to proceed.",
  },
  {
    question: "Can you help after a bank rejection?",
    answer:
      "A previous decline is one of the more common reasons businesses get in touch. The assessment starts with understanding why the answer was no, before considering whether another route is worth pursuing.",
  },
  {
    question: "Can you help construction and engineering companies?",
    answer:
      "Yes. Construction and engineering is a priority client segment, covering project mobilisation, working-capital timing, performance bonds and existing facility constraints.",
  },
  {
    question: "Does an assessment guarantee financing?",
    answer:
      "No. A free financing assessment is an initial discussion only. It is not a financing approval, offer, commitment or guarantee. Any financing route depends on the information provided and the relevant financier's assessment.",
  },
];

/**
 * FAQ preview (pages/home.md §13). Deliberately the quietest chapter on the
 * page: one narrow column, no rules other than the accordion's own, and no
 * accompanying artwork. After the pathway index and two obsidian arguments,
 * the drop in intensity is the point.
 */
export function FaqPreview() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-10">
      <h2 className="text-heading-lg lg:col-span-5">
        Questions we are usually asked first
      </h2>

      <div className="mt-10 lg:col-span-7 lg:mt-0">
        <FaqAccordion items={FAQ_ITEMS} />

        <p className="mt-8">
          <a
            href="/faq/"
            className="text-body inline-flex min-h-12 items-center font-semibold text-text-primary underline decoration-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] underline-offset-[0.35em] transition-[text-decoration-color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] hover:decoration-[var(--text-primary)]"
          >
            Read all frequently asked questions
          </a>
        </p>
      </div>
    </div>
  );
}
