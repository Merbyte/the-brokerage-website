import type { Metadata } from "next";

import { Header, type NavItem } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/home/Hero";
import { SituationMatrix } from "@/components/home/SituationMatrix";
import { ConstructionChapter } from "@/components/home/ConstructionChapter";
import { AdvisorySpine } from "@/components/home/AdvisorySpine";
import { PathwayIndex } from "@/components/home/PathwayIndex";
import { RouteComparison } from "@/components/home/RouteComparison";
import { DirectVsAdvisory } from "@/components/home/DirectVsAdvisory";
import { CalculatorTeaser } from "@/components/home/CalculatorTeaser";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "The Brokerage Advisory | Singapore Financing Advisory",
  description:
    "The Brokerage Advisory is a Singapore-based independent financing advisory that helps businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.",
};

const ROUTE_ITEMS: NavItem[] = [
  { label: "Business Financing", href: "/business-financing/" },
  { label: "Trade Financing", href: "/trade-financing/" },
  { label: "Property Financing", href: "/property-financing/" },
  { label: "Project & Private Capital", href: "/project-private-capital/" },
  { label: "Performance Bonds", href: "/performance-bonds/" },
];

const DESKTOP_ITEMS: NavItem[] = [
  {
    label: "Construction & Engineering",
    href: "/construction-engineering-financing/",
  },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "About", href: "/about/" },
];

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", current: true },
  ...ROUTE_ITEMS,
  ...DESKTOP_ITEMS,
];

/**
 * Homepage (design-system/the-brokerage-advisory/pages/home.md).
 *
 * Ten chapters, each with its own compositional identity, running: impact,
 * recognition, explanation, method, exploration, comparison, argument,
 * utility, resolution, close.
 *
 * Surfaces change because the mode of the content changes, not on a fixed
 * alternation: obsidian carries the three moments that need gravity plus the
 * route index, warm ivory carries reading, and stone carries the two chapters
 * built around a drawing and a tool.
 */
export default function HomePage() {
  return (
    <>
      <Header
        brandLabel="The Brokerage Advisory"
        navItems={NAV_ITEMS}
        routeItems={ROUTE_ITEMS}
        desktopItems={DESKTOP_ITEMS}
      />

      <main id="main-content" className="flex-1">
        <Hero />

        <Section surface="ivory" id="situations">
          <SituationMatrix />
        </Section>

        <Section surface="stone" id="construction">
          <ConstructionChapter />
        </Section>

        <Section surface="ivory" id="process">
          <AdvisorySpine />
        </Section>

        <Section surface="obsidian" id="pathways">
          <PathwayIndex />
        </Section>

        <Section surface="ivory" id="comparison">
          <RouteComparison />
        </Section>

        <Section surface="obsidian" rhythm="tall" id="approach">
          <DirectVsAdvisory />
        </Section>

        <Section surface="stone" id="calculator">
          <CalculatorTeaser />
        </Section>

        <Section surface="ivory" rhythm="quiet" id="faq">
          <FaqPreview />
        </Section>

        <Section surface="obsidian" rhythm="tall" id="start">
          <FinalCta />
        </Section>
      </main>

      <Footer brandLabel="The Brokerage Advisory" navItems={NAV_ITEMS} />
    </>
  );
}
