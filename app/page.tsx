import type { Metadata } from "next";
import { Header, type NavItem } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AssessmentCta } from "@/components/home/AssessmentCta";

export const metadata: Metadata = {
  title: "The Brokerage Advisory | Singapore Financing Advisory",
  description:
    "Independent financing advisory for businesses navigating growth, cash-flow pressure and complex financing situations in Singapore.",
};

const ROUTE_ITEMS: NavItem[] = [
  { label: "Business Financing", href: "/business-financing/" },
  { label: "Trade Financing", href: "/trade-financing/" },
  { label: "Property Financing", href: "/property-financing/" },
  { label: "Project & Private Capital", href: "/project-private-capital/" },
  { label: "Performance Bonds", href: "/performance-bonds/" },
];

const DESKTOP_ITEMS: NavItem[] = [
  { label: "Construction & Engineering", href: "/construction-engineering-financing/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "About", href: "/about/" },
];

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", current: true },
  ...ROUTE_ITEMS,
  ...DESKTOP_ITEMS,
];

const situations = [
  ["01", "Growth before cash flow", "A project, expansion or equipment requirement arrives before the capacity to fund it is in place."],
  ["02", "A bank has said no", "Understand the reason behind a decline before sending the same file somewhere else."],
  ["03", "Facilities no longer fit", "The structure that worked years ago may no longer match how the business operates."],
  ["04", "The situation is non-standard", "Multiple entities, unusual collateral or several financing requirements need to be understood together."],
];

const routes = [
  ["Business Financing", "Growth, operations, equipment or working capital.", "/business-financing/"],
  ["Trade Financing", "Supplier obligations before customer receipts arrive.", "/trade-financing/"],
  ["Property Financing", "Property-backed requirements and larger facilities.", "/property-financing/"],
  ["Project & Private Capital", "Opportunities larger than the existing structure.", "/project-private-capital/"],
  ["Performance Bonds", "A bond requirement before project work can begin.", "/performance-bonds/"],
];

const faqs = [
  ["What does a financing advisory do?", "It helps a business understand its financing situation before deciding where and how to approach a financier. The assessment comes first, and possible routes follow from it."],
  ["Is The Brokerage Advisory a bank or lender?", "No. The Brokerage Advisory is an independent financing advisory. It does not lend."],
  ["Can you help after a bank rejection?", "A previous decline is one reason businesses get in touch. The assessment starts with understanding why the answer was no before considering whether another route is worth pursuing."],
  ["Can you help construction and engineering companies?", "Yes. Construction and engineering is a priority client segment, including project mobilisation, working-capital timing, performance bonds and existing facility constraints."],
];

export default function HomePage() {
  return (
    <>
      <Header brandLabel="THE BROKERAGE / ADVISORY" navItems={NAV_ITEMS} routeItems={ROUTE_ITEMS} desktopItems={DESKTOP_ITEMS} />

      <main id="main-content">
        <section className="v3-hero">
          <div className="v3-hero-grid">
            <div className="v3-hero-copy">
              <div className="v3-kicker"><span /> Independent financing advisory · Singapore</div>
              <h1>When financing gets complicated, <em>start with the right diagnosis.</em></h1>
              <p className="v3-hero-lede">We help businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.</p>
              <div className="v3-actions"><AssessmentCta /><a className="v3-text-link v3-light-link" href="#method">See how we work <span>↗</span></a></div>
            </div>

            <div className="v3-hero-art" aria-label="Illustration of cash committed before receipts return">
              <div className="v3-art-top"><span>THE CASH-FLOW PROBLEM</span><span>01 — 05</span></div>
              <div className="v3-flow">
                <div className="v3-flow-line" />
                <div className="v3-flow-node n1"><b>01</b><span>Commit</span></div>
                <div className="v3-flow-node n2"><b>02</b><span>Build</span></div>
                <div className="v3-flow-node n3 active"><b>03</b><span>Claim</span></div>
                <div className="v3-flow-node n4"><b>04</b><span>Certify</span></div>
                <div className="v3-flow-node n5"><b>05</b><span>Receive</span></div>
                <div className="v3-exposure"><span>cash committed</span><strong>→</strong><span>cash returns</span></div>
              </div>
              <div className="v3-art-note">The timing gap is often the first thing worth understanding.</div>
            </div>
          </div>
          <div className="v3-hero-foot"><span>Diagnosis first.</span><span>Banks & financiers in our local and overseas network.</span><span>Assessment first · No guarantee of approval.</span></div>
        </section>

        <section className="v3-recognition">
          <div className="v3-container">
            <div className="v3-section-intro">
              <div className="v3-overline">01 / RECOGNITION</div>
              <h2>Not every financing situation is solved by <i>another application.</i></h2>
              <p>Most enquiries begin somewhere in this territory. The important question is what is actually causing the financing pressure.</p>
            </div>
            <div className="v3-situations">
              {situations.map(([num, title, body]) => (
                <article className="v3-situation" key={num}>
                  <span className="v3-num">{num}</span>
                  <div><h3>{title}</h3><p>{body}</p><a href="/how-it-works/">Understand the approach ↗</a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="v3-construction">
          <div className="v3-photo" role="img" aria-label="Construction project environment" />
          <div className="v3-construction-content">
            <div className="v3-overline">02 / WORKS · CONSTRUCTION & ENGINEERING</div>
            <h2>Built for businesses where project growth moves faster than <i>cash flow.</i></h2>
            <p className="v3-lead">A contract is awarded. Plant, subcontractors and materials are committed. The first progress claim is still waiting to be certified.</p>
            <div className="v3-project-sequence">
              <div><span>01</span><b>Mobilise</b><small>Cash leaves</small></div>
              <div><span>02</span><b>Procure</b><small>Commitments build</small></div>
              <div className="hot"><span>03</span><b>Progress claim</b><small>Work is done</small></div>
              <div><span>04</span><b>Certify</b><small>Timing depends</small></div>
              <div><span>05</span><b>Payment</b><small>Cash returns</small></div>
            </div>
            <div className="v3-callout"><strong>The gap opens here.</strong><span>It is a timing problem before it is a funding problem.</span></div>
            <a className="v3-arrow-link" href="/construction-engineering-financing/">Discuss your project <span>↗</span></a>
          </div>
        </section>

        <section className="v3-method" id="method">
          <div className="v3-container">
            <div className="v3-method-head">
              <div><div className="v3-overline">03 / METHOD</div><h2>Experience is useful when it makes the <i>next decision clearer.</i></h2></div>
              <p>We do not start by forcing a situation into a product. We start by understanding what is in front of us.</p>
            </div>
            <div className="v3-method-grid">
              <div className="v3-method-big"><span>01</span><h3>Assess</h3><p>Understand the business, purpose, timing and information available.</p></div>
              <div className="v3-method-big"><span>02</span><h3>Diagnose</h3><p>Name the constraint before naming a financing route.</p></div>
              <div className="v3-method-big"><span>03</span><h3>Structure</h3><p>Set out the routes that may be relevant and what each would require.</p></div>
              <div className="v3-method-big"><span>04</span><h3>Approach</h3><p>Where appropriate, approach relevant banks and financiers with a clearer case.</p></div>
            </div>
            <div className="v3-method-bottom"><span>ASSESS</span><i>→</i><span>DIAGNOSE</span><i>→</i><span>STRUCTURE</span><i>→</i><span>APPROACH</span></div>
          </div>
        </section>

        <section className="v3-routes">
          <div className="v3-container">
            <div className="v3-routes-head"><div><div className="v3-overline">04 / PATHWAYS</div><h2>Five routes. <i>Different situations.</i></h2></div><p>The assessment decides which conversation is worth having.</p></div>
            <div className="v3-route-list">
              {routes.map(([name, desc, href], i) => (
                <a href={href} className="v3-route" key={name}>
                  <span>0{i + 1}</span><h3>{name}</h3><p>{desc}</p><b>Explore ↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="v3-comparison">
          <div className="v3-container">
            <div className="v3-comparison-top"><div><div className="v3-overline">05 / ADVISORY INSTRUMENT</div><h2>Compare the routes <i>at a glance.</i></h2></div><p>Different facilities solve different situations. The relevant route depends on purpose, cash flow, information and existing obligations.</p></div>
            <div className="v3-route-board">
              <div className="v3-board-head"><span>ROUTE</span><span>MAY BE RELEVANT FOR</span><span>WHAT NEEDS ASSESSING</span><span>NEXT STEP</span></div>
              {[
                ["Business financing","Growth, operations, equipment","Business profile, cash flow, existing facilities","Discuss your situation"],
                ["Trade financing","Supplier payments & receivables","Invoices, contracts, counterparties","Discuss cash flow"],
                ["Property financing","Asset-backed requirements","Ownership, valuation, existing debt","Speak to a specialist"],
                ["Project financing","Contract execution & mobilisation","Contract, payment terms, timing","Discuss your project"],
              ].map((r) => <div className="v3-board-row" key={r[0]}><strong>{r[0]}</strong><span>{r[1]}</span><span>{r[2]}</span><a href="/get-a-free-financing-assessment/">{r[3]} ↗</a></div>)}
            </div>
            <p className="v3-note">A qualitative comparison only. It is not an indication of eligibility, availability, amount, rate, tenure or timing. Those depend on the information provided and the relevant financier's assessment.</p>
          </div>
        </section>

        <section className="v3-argument">
          <div className="v3-container">
            <div className="v3-overline">06 / BEFORE THE APPLICATION</div>
            <h2>The difference is not whether you go direct.<br /><i>It is what gets established first.</i></h2>
            <div className="v3-argument-grid">
              <div><span>01</span><h3>Approaching a financier directly</h3><p>Starting with a familiar product or institution. Working through one institution's process first. Discovering documentation or fit gaps later. Reassessing after a decline or mismatch.</p></div>
              <div className="v3-argument-divider" />
              <div><span>02</span><h3>Working with The Brokerage Advisory</h3><p>Discuss the funding purpose before selecting a route. Review facility and lender-fit considerations. Identify information gaps. Compare possible routes across banks and financiers in our local and overseas network.</p></div>
            </div>
            <div className="v3-argument-bottom"><strong>Diagnosis first.</strong><span>Then the route. Then the application.</span><AssessmentCta /></div>
          </div>
        </section>

        <section className="v3-tool">
          <div className="v3-container v3-tool-grid">
            <div><div className="v3-overline">07 / PLANNING TOOL</div><h2>Estimate a monthly repayment for <i>planning purposes.</i></h2><p>Understand how amount, rate and tenure can affect an illustrative repayment. This is not a quotation, financing offer or approval.</p><a className="v3-arrow-link" href="/tools/monthly-repayment-calculator/">Open repayment calculator ↗</a></div>
            <div className="v3-calculator"><div><label>Financing amount</label><strong>S$ 250,000</strong></div><div><label>Illustrative rate</label><strong>—</strong></div><div><label>Tenure</label><strong>36 months</strong></div><div className="v3-result"><span>Estimated monthly repayment</span><b>S$ —</b></div><small>Illustrative estimate only. Actual repayment, interest, fees, tenure and availability depend on final facility terms.</small></div>
          </div>
        </section>

        <section className="v3-faq">
          <div className="v3-container">
            <div className="v3-faq-grid"><div><div className="v3-overline">08 / QUESTIONS</div><h2>The questions that usually come <i>first.</i></h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div>
          </div>
        </section>

        <section className="v3-close" id="start">
          <div className="v3-close-orbit" />
          <div className="v3-container">
            <div className="v3-overline">09 / START WITH THE SITUATION</div>
            <h2>Have a financing situation that is <i>not straightforward?</i></h2>
            <p>Start with a free initial assessment. Understand the situation first, then discuss the possible next steps.</p>
            <AssessmentCta />
            <div className="v3-contact-strip"><span>+65 8011 8194</span><span>admin@thebrokerage-advisory.com</span><span>31A Lowland Road, Singapore 547424</span></div>
          </div>
        </section>
      </main>

      <Footer brandLabel="The Brokerage Advisory" navItems={NAV_ITEMS} />
    </>
  );
}
