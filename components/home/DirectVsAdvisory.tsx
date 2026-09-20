import { AssessmentCta } from "./AssessmentCta";

/** Both lists are taken from the master brief §5, section 8, unedited. */
const GOING_DIRECT = [
  "Starting with a familiar product or institution.",
  "Working through one institution's process first.",
  "Discovering documentation or fit gaps later.",
  "Reassessing after a decline or a mismatch.",
];

const WITH_ADVISORY = [
  "Discuss the funding purpose before selecting a route.",
  "Review facility and lender-fit considerations.",
  "Identify relevant information gaps.",
  "Compare possible routes across banks and financiers in our local and overseas network.",
  "Obtain a clearer view of possible next steps.",
];

/**
 * Direct versus advisory (pages/home.md §11) -- the second obsidian argument.
 *
 * Meaning is carried by column heading and position only. There is no tick,
 * cross, colour coding or ordering that implies one route is better, so the
 * section reads identically in greyscale. Going direct is described as a
 * reasonable path, because it is one.
 */
export function DirectVsAdvisory() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <h2 className="font-editorial text-display-section lg:col-span-7">
          Going directly to a bank is not always the same as choosing the right
          route.
        </h2>

        <p className="text-body-lg mt-8 text-text-secondary lg:col-span-4 lg:col-start-9 lg:mt-2">
          Approaching your own bank first is a reasonable way to start, and in
          some situations it is the right one. The difference is what gets
          established before an application is made.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-0 lg:mt-24">
        <div className="md:pr-12 lg:pr-20">
          <h3 className="text-heading-md border-t-2 border-border-strong pt-5 text-text-primary">
            Approaching a financier directly
          </h3>
          <ul className="mt-6">
            {GOING_DIRECT.map((item) => (
              <li
                key={item}
                className="text-body border-t border-border-hairline py-5 text-text-secondary first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:border-l md:border-border-hairline md:pl-12 lg:pl-20">
          <h3 className="text-heading-md border-t-2 border-border-strong pt-5 text-text-primary">
            Working with The Brokerage Advisory
          </h3>
          <ul className="mt-6">
            {WITH_ADVISORY.map((item) => (
              <li
                key={item}
                className="text-body border-t border-border-hairline py-5 text-text-secondary first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 lg:mt-20">
        <AssessmentCta />
      </div>
    </>
  );
}
