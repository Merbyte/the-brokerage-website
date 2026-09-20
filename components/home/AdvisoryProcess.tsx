interface Step {
  name: string;
  detail: string;
}

const STEPS: Step[] = [
  { name: "Fact-find", detail: "Understand the business, the purpose of the funding and the timing." },
  {
    name: "Review relevant information",
    detail: "Look at the documents and existing facilities that actually bear on the question.",
  },
  {
    name: "Diagnose the situation",
    detail: "Establish what the real constraint is before any product is discussed.",
  },
  {
    name: "Discuss possible routes",
    detail: "Set out the routes that may be relevant and what each of them would require.",
  },
  {
    name: "Where appropriate, approach relevant financiers",
    detail: "Approach banks and financiers in our local and overseas network where that is the right step.",
  },
  {
    name: "Communicate next steps clearly",
    detail: "Say plainly what happens next, including where the answer is no.",
  },
];

/**
 * The six-step advisory process. Numbering is used here and nowhere else
 * on the page, because this is the only genuinely ordinal content. Kept as
 * a vertical list rather than a card grid, and the "does not guarantee
 * financing" statement sits in the heading column rather than as a
 * footnote beneath the steps.
 */
export function AdvisoryProcess() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 className="text-heading-l text-text-primary">How the advisory process works</h2>
        <p className="mt-4 text-body-l text-text-secondary">
          Six steps, in order, from the first conversation to a clear set of next steps.
        </p>
        <p className="mt-6 text-body text-text-primary">
          This process does not guarantee financing. It produces a clear view of the situation and of the routes
          worth considering.
        </p>
        <p className="mt-6">
          <a
            href="/how-it-works/"
            className="text-body font-medium text-text-primary underline underline-offset-[0.15em]"
          >
            See How We Work
          </a>
        </p>
      </div>

      <ol className="flex flex-col">
        {STEPS.map((step, index) => (
          <li
            key={step.name}
            className="flex gap-5 border-t border-border-hairline py-5 first:border-t-0 first:pt-0"
          >
            <span aria-hidden="true" className="font-figures pt-1 text-body-s font-medium text-text-secondary">
              {index + 1}
            </span>
            <div>
              <h3 className="text-heading-s text-text-primary">{step.name}</h3>
              <p className="mt-2 text-body text-text-secondary">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
