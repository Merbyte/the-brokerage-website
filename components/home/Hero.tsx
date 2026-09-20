import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { AssessmentCta } from "./AssessmentCta";

const TRUST_LINE =
  "Independent, diagnosis-first advisory. Banks and financiers in our local and overseas network.";

const TRUST_NOTE = "Assessment first. Clear next steps. No guarantee of approval.";

/**
 * Homepage hero. Dark from 1024px, light below it -- the mobile hero stays
 * on the light surface (design.md §5). Carries no photograph by design:
 * composition comes from scale, measure and asymmetric space, so the band
 * is complete with no image assets.
 */
export function Hero() {
  return (
    <section data-surface-desktop="dark" className="bg-surface-page">
      <Container size="content" className="pt-10 pb-14 md:pt-16 md:pb-20 lg:pt-28 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <h1 className="text-display-xl text-text-primary text-balance">
            When financing gets complicated, start with the right diagnosis.
          </h1>

          <div className="flex flex-col gap-6 lg:pt-3">
            <p className="text-body-l text-text-secondary">
              We help businesses understand their financing situation before deciding where and how to approach
              banks, financiers or capital providers. The assessment comes first; the route follows from it.
            </p>

            <div className="flex flex-col gap-3 min-[414px]:flex-row min-[414px]:flex-wrap min-[414px]:items-center">
              <AssessmentCta />
              <Button href="/how-it-works/" variant="secondary" className="text-body-s">
                See How We Work
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border-hairline pt-6 lg:mt-16">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:justify-between lg:gap-10">
            <p className="text-body text-text-primary">{TRUST_LINE}</p>
            <p className="text-body text-text-secondary lg:shrink-0">{TRUST_NOTE}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
