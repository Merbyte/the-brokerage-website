interface Step {
  index: number;
  name: string;
  detail: string;
}

interface Phase {
  name: string;
  summary: string;
  steps: Step[];
}

/**
 * The four-part spine from pages/home.md §8, carrying the six approved
 * process steps from the master brief inside it. The steps are not restated
 * or reworded: each is placed under the part of the method it belongs to.
 */
const PHASES: Phase[] = [
  {
    name: "Assess",
    summary: "Establish what is actually in front of us.",
    steps: [
      {
        index: 1,
        name: "Fact-find",
        detail:
          "Understand the business, the purpose of the funding and the timing.",
      },
      {
        index: 2,
        name: "Review relevant information",
        detail:
          "Look at the documents and existing facilities that bear on the question.",
      },
    ],
  },
  {
    name: "Diagnose",
    summary: "Name the constraint before naming a product.",
    steps: [
      {
        index: 3,
        name: "Diagnose the situation",
        detail:
          "Establish what the real constraint is, which is often not the one assumed.",
      },
    ],
  },
  {
    name: "Structure",
    summary: "Set out what each possible route would require.",
    steps: [
      {
        index: 4,
        name: "Discuss possible routes",
        detail:
          "Set out the routes that may be relevant and what each of them would need.",
      },
    ],
  },
  {
    name: "Approach",
    summary: "Go to a financier only once the case is ready.",
    steps: [
      {
        index: 5,
        name: "Approach relevant financiers",
        detail:
          "Where appropriate, approach banks and financiers in our local and overseas network.",
      },
      {
        index: 6,
        name: "Communicate next steps",
        detail: "Say plainly what happens next, including where the answer is no.",
      },
    ],
  },
];

/**
 * Advisory process (pages/home.md §8). One continuous spine rather than six
 * numbered boxes: the rule runs horizontally across the four phases on
 * desktop and becomes a single vertical rule below 1024px, with the same
 * nodes in both.
 *
 * There is no gold anywhere in this section. Nothing here is an action or an
 * active state, and gold that means nothing would weaken it everywhere else.
 */
export function AdvisorySpine() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <h2 className="text-display-section">How the advisory process works</h2>
          <p className="text-body-lg mt-6 text-text-secondary">
            Four stages, in order, from the first conversation to a clear set of
            next steps. The six steps below sit inside them.
          </p>
        </div>

        <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-2">
          <p className="text-body border-t border-border-hairline pt-4 text-text-primary">
            This process does not guarantee financing. It produces a clear view
            of the situation and the routes worth considering.
          </p>
        </div>
      </div>

      <ol className="mt-14 grid gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-y-0">
        {PHASES.map((phase) => (
          <li
            key={phase.name}
            className="relative border-l border-border-strong pl-7 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-8 lg:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] block size-2.5 rounded-full bg-text-primary lg:top-[-5px] lg:left-0"
            />

            <h3 className="text-heading-lg text-text-primary">{phase.name}</h3>
            <p className="text-body-sm mt-2 text-text-secondary">
              {phase.summary}
            </p>

            <ol className="mt-8">
              {phase.steps.map((step) => (
                <li
                  key={step.index}
                  className="flex gap-4 border-t border-border-hairline py-5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="font-figures text-meta w-4 shrink-0 pt-1 text-text-secondary"
                  >
                    {step.index}
                  </span>
                  <div>
                    <h4 className="text-heading-sm text-text-primary">
                      {step.name}
                    </h4>
                    <p className="text-body-sm mt-2 text-text-secondary">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>

      <p className="mt-12">
        <a
          href="/how-it-works/"
          className="text-body inline-flex min-h-12 items-center font-semibold text-text-primary underline decoration-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] underline-offset-[0.35em] transition-[text-decoration-color] duration-[var(--dur-fast)] [transition-timing-function:var(--ease-standard)] hover:decoration-[var(--text-primary)]"
        >
          See How We Work
        </a>
      </p>
    </>
  );
}
