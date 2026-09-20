import { Header, type NavItem } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { RouteComparisonTable } from "@/components/ui/RouteComparisonTable";
import { CalculatorShell } from "@/components/ui/CalculatorShell";
import { ASSESSMENT_FORM_CONSENT, ASSESSMENT_FORM_DISCLAIMER } from "@/lib/constants";

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

const FAQ_ITEMS = [
  {
    question: "What does a free financing assessment involve?",
    answer:
      "It is an initial discussion to understand your financing situation before identifying which routes may be worth exploring further.",
  },
  {
    question: "Is The Brokerage Advisory a bank or lender?",
    answer:
      "No. The Brokerage Advisory is an independent advisory and does not lend directly or act as a bank or licensed moneylender.",
  },
];

const ROUTE_ROWS = [
  {
    route: "Business Financing",
    relevantFor: "General working capital and business funding situations",
    needsAssessing: "Cash flow position, financials and existing facilities",
    nextStepLabel: "Discuss Your Situation",
    nextStepHref: "/business-financing/",
  },
  {
    route: "Trade Financing",
    relevantFor: "Import/export, invoice and trade-cycle situations",
    needsAssessing: "Trade cycle timing and receivables/payables structure",
    nextStepLabel: "Discuss Your Situation",
    nextStepHref: "/trade-financing/",
  },
  {
    route: "Construction & Engineering",
    relevantFor: "Project-based contracting and engineering works",
    needsAssessing: "Contract structure, bonding needs and project cash flow",
    nextStepLabel: "Discuss Your Project",
    nextStepHref: "/construction-engineering-financing/",
  },
];

/**
 * Internal foundation-preview harness -- NOT the production homepage.
 * Demonstrates the reusable design-system primitives (tokens, Header,
 * Footer, Button, FormField, Disclaimer, FaqAccordion,
 * RouteComparisonTable, CalculatorShell) using approved copy only. Final
 * homepage content, structure and imagery are a separate, later task.
 */
export default function FoundationPreviewPage() {
  return (
    <>
      <Header brandLabel="The Brokerage Advisory" navItems={NAV_ITEMS} />

      <main id="main-content" className="flex-1">
        <Section surface="page">
          <Disclaimer tone="warning">
            Internal design-foundation preview. This page demonstrates reusable components only and is not the
            production homepage.
          </Disclaimer>

          <div className="mt-10">
            <h1 className="text-display-l">Design foundation preview</h1>
            <p className="mt-4 max-w-prose text-body-l text-text-secondary">
              A working reference of the shared tokens, layout primitives and components available for building the
              site.
            </p>
          </div>
        </Section>

        <Section surface="secondary">
          <h2 className="text-heading-l">Buttons</h2>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button variant="primary">Get a Free Financing Assessment</Button>
            <Button variant="secondary">See How We Work</Button>
            <Button variant="tertiary">Contact Us</Button>
            <Button variant="primary" loading>
              Get a Free Financing Assessment
            </Button>
            <Button variant="primary" disabled>
              Get a Free Financing Assessment
            </Button>
          </div>
        </Section>

        <Section surface="page" containerSize="prose">
          <h2 className="text-heading-l">Form fields</h2>
          <div className="mt-6 flex flex-col gap-6">
            <FormField label="Name" name="name" required autoComplete="name" />
            <FormField label="Email" name="email" type="email" required autoComplete="email" />
            <FormField
              label="Phone number"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              helpText="Include your country code if outside Singapore."
            />
            <FormField label="Message" name="message" as="textarea" required />
            <FormField
              label="Email"
              name="email-error-demo"
              type="email"
              required
              error="Enter a valid email address."
            />
          </div>
          <p className="mt-6 text-disclaimer text-text-secondary">{ASSESSMENT_FORM_CONSENT}</p>
          <Disclaimer tone="neutral" className="mt-4">
            {ASSESSMENT_FORM_DISCLAIMER}
          </Disclaimer>
        </Section>

        <Section surface="secondary" containerSize="prose">
          <h2 className="text-heading-l">Disclaimer and alert tones</h2>
          <div className="mt-6 flex flex-col gap-4">
            <Disclaimer tone="information">Informational note for contextual guidance.</Disclaimer>
            <Disclaimer tone="warning">Warning-tone message for content requiring caution.</Disclaimer>
            <Disclaimer tone="error">Error-tone message for form validation failures.</Disclaimer>
            <Disclaimer tone="success">Success-tone message for confirmations.</Disclaimer>
          </div>
        </Section>

        <Section surface="page">
          <h2 className="text-heading-l">Qualitative route comparison</h2>
          <div className="mt-6">
            <RouteComparisonTable caption="Example financing routes and what they may involve" rows={ROUTE_ROWS} />
          </div>
        </Section>

        <Section surface="secondary">
          <h2 className="text-heading-l">Calculator shell</h2>
          <div className="mt-6">
            <CalculatorShell />
          </div>
        </Section>

        <Section surface="page" containerSize="prose">
          <h2 className="text-heading-l">FAQ accordion</h2>
          <div className="mt-6">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </Section>

        <Section surface="dark">
          <h2 className="text-heading-l">Dark surface context</h2>
          <p className="mt-4 max-w-prose text-body text-text-secondary">
            Components read semantic tokens, so they render correctly when nested inside a dark-surface section
            without any per-component dark-mode logic.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button variant="primary">Get a Free Financing Assessment</Button>
            <Button variant="secondary">See How We Work</Button>
          </div>
        </Section>
      </main>

      <Footer brandLabel="The Brokerage Advisory" navItems={NAV_ITEMS} />
    </>
  );
}
