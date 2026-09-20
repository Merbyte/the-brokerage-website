import { AssessmentCta } from "./AssessmentCta";

const GOING_DIRECT = [
  "Starting with a familiar product or institution.",
  "Working through one institution's process first.",
  "Discovering documentation or fit gaps later.",
  "Reassessing after a decline or mismatch.",
];

const WITH_ADVISORY = [
  "Discuss the funding purpose before selecting a route.",
  "Review facility and lender-fit considerations.",
  "Identify relevant information gaps.",
  "Compare possible routes across banks and financiers in our local and overseas network.",
  "Obtain a clearer view of possible next steps.",
];

/**
 * Direct-versus-advisory comparison (MASTER.md §5.14). Meaning is carried
 * by column headings and position only -- no tick, cross, colour coding or
 * superiority claim -- so the section reads identically in greyscale.
 * Going direct is described as a reasonable path, not a mistake.
 */
export function DirectVsAdvisory() {
  return (
    <>
      <div className="max-w-prose">
        <h2 className="text-heading-l text-text-primary">
          Going directly to a bank is not always the same as choosing the right route.
        </h2>
        <p className="mt-5 text-body-l text-text-secondary">
          Approaching your own bank first is a reasonable way to start, and for some situations it is the right
          one. The difference is in what gets established before an application is made.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
        <div className="md:pr-10">
          <h3 className="text-heading-m text-text-primary">Approaching a financier directly</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {GOING_DIRECT.map((item) => (
              <li key={item} className="border-t border-border-hairline pt-3 text-body text-text-secondary">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:border-l md:border-border-hairline md:pl-10">
          <h3 className="text-heading-m text-text-primary">Working with The Brokerage Advisory</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {WITH_ADVISORY.map((item) => (
              <li key={item} className="border-t border-border-hairline pt-3 text-body text-text-secondary">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <AssessmentCta />
      </div>
    </>
  );
}
