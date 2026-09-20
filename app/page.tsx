import type { Metadata } from "next";

import { Header, type NavItem } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { RouteComparisonTable } from "@/components/ui/RouteComparisonTable";
import { CalculatorShell } from "@/components/ui/CalculatorShell";
import { Hero } from "@/components/home/Hero";
import { ProblemSet } from "@/components/home/ProblemSet";
import { ConstructionBand } from "@/components/home/ConstructionBand";
import { AdvisoryProcess } from "@/components/home/AdvisoryProcess";
import { PathwayIndex } from "@/components/home/PathwayIndex";
import { DirectVsAdvisory } from "@/components/home/DirectVsAdvisory";
import { AssessmentCta } from "@/components/home/AssessmentCta";

export const metadata: Metadata = {
  title: "The Brokerage Advisory | Singapore Financing Advisory",
  description:
    "The Brokerage Advisory is a Singapore-based independent financing advisory that helps businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.",
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", current: true },
  { label: "Business Financing", href: "/business-financing/" },
  { label: "Trade Financing", href: "/trade-financing/" },
  { label: "Property Financing", href: "/property-financing/" },
  { label: "Project & Private Capital", href: "/project-private-capital/" },
  { label: "Construction & Engineering", href: "/construction-engineering-financing/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "About", href: "/about/" },
];

const ROUTE_ROWS = [
  {
    route: "Business financing",
    relevantFor: "Growth, operations, equipment or expansion",
    needsAssessing: "Business profile, cash flow, existing facilities and documents",
    nextStepLabel: "Discuss Your Situation",
    nextStepHref: "/business-financing/",
  },
  {
    route: "Trade financing",
    relevantFor: "Supplier payments and receivables timing",
    needsAssessing: "Invoices, contracts, counterparties and the trade cycle",
    nextStepLabel: "Discuss Cash Flow",
    nextStepHref: "/trade-financing/",
  },
  {
    route: "Property-backed financing",
    relevantFor: "Asset-backed or larger financing needs",
    needsAssessing: "Ownership, valuation, existing debt and repayment capacity",
    nextStepLabel: "Speak to a Specialist",
    nextStepHref: "/property-financing/",
  },
  {
    route: "Project financing",
    relevantFor: "Contract execution and mobilisation",
    needsAssessing: "The contract, payment terms, timing and supporting documents",
    nextStepLabel: "Discuss Your Project",
    nextStepHref: "/project-private-capital/",
  },
];

const ROUTE_NOTE =
  "This comparison is a guide to which conversation to have. It is not an indication of eligibility, availability, amount, rate, tenure or timing. Those depend on the information provided and the relevant financier's assessment.";

const FAQ_ITEMS = [
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
 * Homepage -- editorial credibility narrative (design-system pages/home.md).
 * Twelve bands carrying a diagnosis-first argument arc, with rhythm coming
 * from surface-temperature changes and varied internal structure rather
 * than repeated card grids. The two comparison modules are deliberately
 * separated by the calculator band.
 */
export default function HomePage() {
  return (
    <>
      <Header brandLabel="The Brokerage Advisory" navItems={NAV_ITEMS} />

      <main id="main-content" className="flex-1">
        <Hero />

        <Section surface="page">
          <ProblemSet />
        </Section>

        <Section surface="secondary">
          <ConstructionBand />
        </Section>

        <Section surface="page">
          <AdvisoryProcess />
        </Section>

        <Section surface="secondary">
          <PathwayIndex />
        </Section>

        <Section surface="page" containerSize="wide">
          <div className="max-w-prose">
            <h2 className="text-heading-l text-text-primary">Compare possible financing routes at a glance.</h2>
            <p className="mt-4 text-body-l text-text-secondary">
              Different facilities solve different situations. The right route depends on your purpose, cash flow,
              information, existing obligations and the relevant financier&rsquo;s assessment.
            </p>
          </div>

          <div className="mt-10">
            <RouteComparisonTable
              caption="Qualitative comparison of financing routes and what each usually requires."
              rows={ROUTE_ROWS}
              note={ROUTE_NOTE}
            />
          </div>

          <div className="mt-10">
            <AssessmentCta />
          </div>
        </Section>

        <Section surface="page" containerSize="wide">
          <div className="max-w-prose">
            <h2 className="text-heading-l text-text-primary">
              Estimate a monthly repayment for planning purposes.
            </h2>
            <p className="mt-4 text-body-l text-text-secondary">
              Use an illustrative estimate to understand how amount, rate and tenure can affect repayment. It is
              not a quote or financing offer.
            </p>
          </div>

          <div className="mt-10">
            <CalculatorShell />
          </div>

          <p className="mt-8">
            <a
              href="/tools/monthly-repayment-calculator/"
              className="text-body font-medium text-text-primary underline underline-offset-[0.15em]"
            >
              Try the Repayment Calculator
            </a>
          </p>
        </Section>

        <Section surface="dark">
          <DirectVsAdvisory />
        </Section>

        <Section surface="page">
          <div className="max-w-prose">
            <h2 className="text-heading-l text-text-primary">Questions we are usually asked first.</h2>
          </div>

          <div className="mt-8 max-w-prose">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>

          <p className="mt-8">
            <a href="/faq/" className="text-body font-medium text-text-primary underline underline-offset-[0.15em]">
              Read all frequently asked questions
            </a>
          </p>
        </Section>

        <Section surface="dark">
          <div className="max-w-prose">
            <h2 className="text-heading-l text-text-primary">
              Have a financing situation that is not straightforward?
            </h2>
            <p className="mt-5 text-body-l text-text-secondary">
              Start with a free initial assessment. We will understand the situation first, then discuss the
              possible next steps.
            </p>

            <div className="mt-8">
              <AssessmentCta />
            </div>

            <p className="mt-6 text-body text-text-secondary">
              Assessment first. Clear next steps. No guarantee of approval.
            </p>
          </div>
        </Section>
      </main>

      <Footer brandLabel="The Brokerage Advisory" navItems={NAV_ITEMS} />
    </>
  );
}
