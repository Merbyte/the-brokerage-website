import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { AssessmentCta } from "./AssessmentCta";
import { DiagnosisDiagram } from "../diagrams/DiagnosisDiagram";

const EYEBROW = "Independent financing advisory in Singapore";

const HEADLINE = "When financing gets complicated, start with the right diagnosis.";

const SUPPORT =
  "We help businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.";

const TRUST_LINE =
  "Independent, diagnosis-first advisory. Banks and financiers in our local and overseas network.";

const TRUST_QUALIFIER = "Assessment first. Clear next steps. No guarantee of approval.";

/**
 * Hero (pages/home.md §5). The strongest obsidian moment on the page: the
 * headline takes six of twelve columns, the diagram takes five, and column
 * seven is deliberately left empty so the composition sits off-axis.
 *
 * The headline is the editorial voice, set in Source Serif 4 -- one of only
 * three places on the page where the serif appears, all of them on obsidian.
 * Everything that explains rather than states stays in Manrope.
 *
 * The band carries no photography by design and is complete without it.
 */
export function Hero() {
  return (
    <section data-surface="dark" className="bg-obsidian-900">
      <Container className="pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="border-t border-border-hairline pt-4 text-meta text-text-secondary">
              {EYEBROW}
            </p>

            {/* Balanced so the display lines break evenly instead of
                leaving a single short word on the first line. */}
            <h1 className="font-editorial text-display-hero mt-8 text-balance text-text-primary">
              {HEADLINE}
            </h1>

            <p className="measure text-body-lg mt-8 text-text-secondary">
              {SUPPORT}
            </p>

            <div className="mt-10 flex flex-col gap-3 min-[414px]:flex-row min-[414px]:flex-wrap min-[414px]:items-center">
              <AssessmentCta />
              <Button href="/how-it-works/" variant="secondary">
                See How We Work
              </Button>
            </div>
          </div>

          {/*
            The diagram starts at column eight and hangs slightly lower than
            the headline, so the two blocks read as one composition rather
            than as two halves of a split.
          */}
          <div className="mt-16 lg:col-span-5 lg:col-start-8 lg:mt-3">
            <DiagnosisDiagram />
          </div>
        </div>

        <div className="mt-16 border-t border-border-hairline pt-6 lg:mt-20">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:justify-between lg:gap-12">
            <p className="text-body text-text-primary">{TRUST_LINE}</p>
            <p className="text-body-sm text-text-secondary lg:shrink-0">
              {TRUST_QUALIFIER}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
