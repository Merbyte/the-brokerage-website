import type { ReactNode } from "react";
import { AssessmentCta } from "@/components/home/AssessmentCta";
import styles from "./concepts.module.css";

type Variant = "chamber" | "editorial" | "works";

const situations = [
  ["01", "Growth before cash flow", "A project, expansion or equipment requirement arrives before the capacity to fund it is in place."],
  ["02", "A bank has said no", "Understand the reason behind a decline before sending the same file somewhere else."],
  ["03", "Facilities no longer fit", "The structure that worked years ago may no longer match how the business operates."],
  ["04", "The situation is non-standard", "Several entities, unusual collateral or multiple financing needs need to be understood together."],
];

const routes = [
  ["Business Financing", "Growth, operations, equipment or working capital.", "/business-financing/"],
  ["Trade Financing", "Supplier obligations before customer receipts arrive.", "/trade-financing/"],
  ["Property Financing", "Property-backed requirements and larger facilities.", "/property-financing/"],
  ["Project & Private Capital", "Opportunities larger than the existing structure.", "/project-private-capital/"],
  ["Performance Bonds", "A bond requirement before project work can begin.", "/performance-bonds/"],
];

const faq = [
  ["What does a financing advisory do?", "It helps a business understand its financing situation before deciding where and how to approach a financier."],
  ["Is The Brokerage Advisory a bank or lender?", "No. The Brokerage Advisory is an independent financing advisory and does not lend."],
  ["Can you help after a bank rejection?", "The assessment starts with understanding why the answer was no before considering whether another route is worth pursuing."],
  ["Can you help construction and engineering companies?", "Yes. Construction and engineering is a priority client segment, including mobilisation, working-capital timing and performance bonds."],
];

const routeRows = [
  ["Business financing", "Growth, operations, equipment", "Business profile, cash flow, existing facilities", "Discuss your situation"],
  ["Trade financing", "Supplier payments & receivables", "Invoices, contracts, counterparties", "Discuss cash flow"],
  ["Property financing", "Asset-backed requirements", "Ownership, valuation, existing debt", "Speak to a specialist"],
  ["Project financing", "Contract execution & mobilisation", "Contract, payment terms, timing", "Discuss your project"],
];

function Logo() {
  return (
    <a href="/" className={styles.logo} aria-label="The Brokerage Advisory home">
      <span>THE BROKERAGE</span>
      <small>ADVISORY</small>
    </a>
  );
}

function ConceptHeader({ variant }: { variant: Variant }) {
  return (
    <header className={styles.header + " " + styles["header_" + variant]}>
      <Logo />
      <nav className={styles.nav} aria-label="Concept navigation">
        <a href="#situations">Situations</a>
        <a href="#construction">Construction</a>
        <a href="#method">Method</a>
        <a href="#routes">Routes</a>
        <a href="#comparison">Compare</a>
      </nav>
      <a className={styles.navCta} href="/get-a-free-financing-assessment/">Get a Free Financing Assessment</a>
    </header>
  );
}

function NumberedLabel({ children }: { children: ReactNode }) {
  return <span className={styles.overline}>{children}</span>;
}

function Chamber() {
  return (
    <div className={styles.page + " " + styles.chamber}>
      <ConceptHeader variant="chamber" />
      <main>
        <section className={styles.chHero}>
          <div className={styles.chHeroImage} />
          <div className={styles.chHeroOverlay} />
          <div className={styles.chHeroContent}>
            <NumberedLabel>Independent financing advisory · Singapore</NumberedLabel>
            <h1>When financing gets complicated, <em>start with the right diagnosis.</em></h1>
            <p>We help businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.</p>
            <div className={styles.heroActions}><AssessmentCta /><a href="#method" className={styles.ghostLight}>See how we work <span>↗</span></a></div>
          </div>
          <div className={styles.chHeroDiagram} aria-label="Illustration of cash committed before receipts return">
            <div className={styles.diagramLabel}>PROJECT CASH FLOW / TIMING</div>
            <div className={styles.diagramAxis}><span>COMMIT</span><span>BUILD</span><span>CLAIM</span><span>CERTIFY</span><span>RECEIVE</span></div>
            <div className={styles.diagramLine}><i /><i /><i className={styles.activeDot} /><i /><i /></div>
            <div className={styles.diagramSpan}><b>CASH COMMITTED</b><span>↗</span><b>CASH RETURNS</b></div>
          </div>
        </section>

        <section id="situations" className={styles.chRecognition}>
          <div className={styles.chRecognitionLead}>
            <NumberedLabel>01 / Recognition</NumberedLabel>
            <h2>Not every financing situation is solved by <em>another application.</em></h2>
          </div>
          <div className={styles.chRecognitionList}>
            {situations.map(([n, title, body]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p><a href="/how-it-works/">Understand the approach ↗</a></div></article>)}
          </div>
        </section>

        <section id="construction" className={styles.chConstruction}>
          <div className={styles.chConstructionMedia}><div className={styles.mediaCaption}>CONSTRUCTION / PROJECT REALITY</div></div>
          <div className={styles.chConstructionCopy}>
            <NumberedLabel>02 / Works · Construction & Engineering</NumberedLabel>
            <h2>Project growth moves faster than <em>cash flow.</em></h2>
            <p className={styles.lede}>A contract is awarded. Plant, subcontractors and materials are committed. The first progress claim is still waiting to be certified.</p>
            <div className={styles.cashSequence}>
              {[["01","Mobilisation","Cash leaves"],["02","Procurement","Commitments build"],["03","Progress claim","Work is done"],["04","Certification","Timing depends"],["05","Payment","Cash returns"]].map(([n,t,d], i) =>
                <div className={i === 2 ? styles.hotStep : ""} key={n}><small>{n}</small><b>{t}</b><span>{d}</span></div>
              )}
            </div>
            <div className={styles.chCallout}><strong>The gap opens before payment arrives.</strong><span>It is a timing problem before it is a funding problem.</span></div>
            <a href="/construction-engineering-financing/" className={styles.arrowLink}>Discuss your project <span>↗</span></a>
          </div>
        </section>

        <section id="method" className={styles.chMethod}>
          <div className={styles.chMethodTitle}><NumberedLabel>03 / Method</NumberedLabel><h2>Experience is useful when it makes the <em>next decision clearer.</em></h2></div>
          <div className={styles.methodChapters}>
            {[["01","Assess","Understand the business, purpose, timing and information available."],["02","Diagnose","Name the constraint before naming a financing route."],["03","Structure","Set out the routes that may be relevant and what each would require."],["04","Approach","Approach relevant banks and financiers with a clearer case where appropriate."]].map(([n,t,d]) =>
              <article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>
            )}
          </div>
        </section>

        <section id="routes" className={styles.chRoutes}>
          <div><NumberedLabel>04 / Pathways</NumberedLabel><h2>Five routes. <em>Different situations.</em></h2><p>The assessment decides which conversation is worth having.</p></div>
          <div className={styles.routeStack}>
            {routes.map(([name, desc, href], i) => <a key={name} href={href}><span>0{i+1}</span><h3>{name}</h3><p>{desc}</p><b>Explore ↗</b></a>)}
          </div>
        </section>

        <section id="comparison" className={styles.chComparison}>
          <div className={styles.chComparisonHead}><div><NumberedLabel>05 / Advisory instrument</NumberedLabel><h2>Compare the routes <em>at a glance.</em></h2></div><p>Different facilities solve different situations. The relevant route depends on purpose, cash flow, information and existing obligations.</p></div>
          <div className={styles.board}>
            <div className={styles.boardHead}><span>Route</span><span>May be relevant for</span><span>What needs assessing</span><span>Next step</span></div>
            {routeRows.map(r=><div className={styles.boardRow} key={r[0]}><strong>{r[0]}</strong><span>{r[1]}</span><span>{r[2]}</span><a href="/get-a-free-financing-assessment/">{r[3]} ↗</a></div>)}
          </div>
          <p className={styles.note}>Qualitative comparison only. Not an indication of eligibility, availability, amount, rate, tenure or timing.</p>
        </section>

        <section className={styles.chClose}>
          <div><NumberedLabel>06 / Start with the situation</NumberedLabel><h2>Have a financing situation that is <em>not straightforward?</em></h2><p>Start with a free initial assessment. Understand the situation first, then discuss the possible next steps.</p><AssessmentCta /></div>
        </section>
      </main>
    </div>
  );
}

function Editorial() {
  return (
    <div className={styles.page + " " + styles.editorial}>
      <ConceptHeader variant="editorial" />
      <main>
        <section className={styles.edHero}>
          <div className={styles.edHeroCopy}><NumberedLabel>Independent financing advisory / Singapore</NumberedLabel><h1>Finance becomes clearer when you <em>start with the situation.</em></h1><p>Independent advice for businesses navigating growth, cash-flow pressure and financing that does not fit a standard application.</p><AssessmentCta /></div>
          <div className={styles.edHeroFrame}><div className={styles.edImage} /><span>01 — DIAGNOSIS</span></div>
        </section>
        <section id="situations" className={styles.edManifesto}><NumberedLabel>01 / Recognition</NumberedLabel><h2>Not every financing situation is solved by <em>another application.</em></h2><div className={styles.edSituationGrid}>{situations.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></section>
        <section id="construction" className={styles.edSplit}><div className={styles.edSplitImage}><span>CONSTRUCTION / SINGAPORE</span></div><div className={styles.edSplitCopy}><NumberedLabel>02 / Works</NumberedLabel><h2>When project growth moves faster than <em>cash flow.</em></h2><p>Awarded work can create a timing gap: mobilisation and supplier commitments happen before progress claims are certified and paid.</p><div className={styles.edTimeline}>{["Mobilise","Procure","Claim","Certify","Receive"].map((x,i)=><div key={x}><small>0{i+1}</small><strong>{x}</strong></div>)}</div><a href="/construction-engineering-financing/" className={styles.darkLink}>Discuss your project ↗</a></div></section>
        <section id="method" className={styles.edMethod}><div className={styles.edMethodLead}><NumberedLabel>03 / Method</NumberedLabel><h2>Diagnosis before <em>direction.</em></h2><p>We establish the situation before deciding which route is worth exploring.</p></div><div className={styles.edMethodList}>{[["Assess","What is happening?","Business, purpose, timing, information."],["Diagnose","What is really causing the pressure?","Constraint, existing facilities, information gaps."],["Structure","What could fit?","Relevant routes and what each requires."],["Approach","Who should be approached?","Banks and financiers in our local and overseas network."]].map(x=><article key={x[0]}><h3>{x[0]}</h3><b>{x[1]}</b><p>{x[2]}</p></article>)}</div></section>
        <section id="routes" className={styles.edRoutes}><div className={styles.edRoutesHead}><NumberedLabel>04 / Pathways</NumberedLabel><h2>The route follows the <em>reason.</em></h2></div>{routes.map(([n,d,h],i)=><a key={n} href={h} className={styles.edRoute}><span>0{i+1}</span><strong>{n}</strong><p>{d}</p><b>View ↗</b></a>)}</section>
        <section id="comparison" className={styles.edCompare}><div className={styles.edCompareHead}><NumberedLabel>05 / Advisory instrument</NumberedLabel><h2>See the financing landscape <em>before you enter it.</em></h2></div><div className={styles.edCompareCards}>{routeRows.map(r=><article key={r[0]}><small>ROUTE</small><h3>{r[0]}</h3><span>{r[1]}</span><p>{r[2]}</p><a href="/get-a-free-financing-assessment/">{r[3]} ↗</a></article>)}</div></section>
        <section className={styles.edFaq}><div><NumberedLabel>06 / Questions</NumberedLabel><h2>The questions that usually come <em>first.</em></h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
        <section className={styles.edClose}><NumberedLabel>07 / Start here</NumberedLabel><h2>Have a financing situation that is <em>not straightforward?</em></h2><p>Start with a free initial assessment.</p><AssessmentCta /></section>
      </main>
    </div>
  );
}

function Works() {
  return (
    <div className={styles.page + " " + styles.works}>
      <ConceptHeader variant="works" />
      <main>
        <section className={styles.woHero}><div className={styles.woHeroText}><NumberedLabel>Independent financing advisory · Singapore</NumberedLabel><h1>Understand the financing problem <em>before you solve it.</em></h1><p>We help businesses diagnose the situation, structure the possible routes and decide how to approach banks, financiers or capital providers.</p><AssessmentCta /></div><div className={styles.woHeroInstrument}><div className={styles.instrumentTop}><span>CASH POSITION</span><span>PROJECT 01</span></div><div className={styles.graph}><i /><i /><i /><i /><i /><b className={styles.graphAccent} /></div><div className={styles.graphLabels}><span>COMMIT</span><span>CLAIM</span><span>PAY</span></div><div className={styles.instrumentBottom}>WHEN OUTGOING COMMITMENTS ARRIVE BEFORE RECEIPTS</div></div></section>
        <section id="situations" className={styles.woSituations}><div className={styles.woIntro}><NumberedLabel>01 / Recognition</NumberedLabel><h2>Four signals that the <em>route needs diagnosing.</em></h2></div>{situations.map(([n,t,b])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div></article>)}</section>
        <section id="construction" className={styles.woConstruction}><div><NumberedLabel>02 / Works</NumberedLabel><h2>Construction financing is often a <em>timing system.</em></h2><p>Mobilisation, procurement, progress claims, certification and payment do not occur at the same moment.</p><a href="/construction-engineering-financing/" className={styles.darkLink}>Discuss your project ↗</a></div><div className={styles.woCashMap}><div className={styles.mapAxis} /><div className={styles.mapWindow}><span>COMMITTED</span><b>EXPOSURE WINDOW</b><span>RECEIVED</span></div>{["Mobilisation","Procurement","Progress claim","Certification","Payment"].map((x,i)=><div key={x} className={i===2?styles.mapHot:styles.mapPoint} style={{top: (14+i*18) + "%"}}><small>0{i+1}</small><strong>{x}</strong></div>)}</div></section>
        <section id="method" className={styles.woMethod}><NumberedLabel>03 / Method</NumberedLabel><h2>One advisory system. <em>Four decisions.</em></h2><div className={styles.woSteps}>{["Assess","Diagnose","Structure","Approach"].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>{["Establish the facts.","Name the constraint.","Map the possible routes.","Approach relevant financiers."][i]}</p><i>↗</i></article>)}</div></section>
        <section id="routes" className={styles.woRoutes}><div className={styles.woRouteLead}><NumberedLabel>04 / Pathways</NumberedLabel><h2>Five routes. One thing in common: <em>context first.</em></h2></div><div className={styles.woRouteGrid}>{routes.map(([n,d,h],i)=><a key={n} href={h}><small>0{i+1}</small><h3>{n}</h3><p>{d}</p><span>Explore ↗</span></a>)}</div></section>
        <section id="comparison" className={styles.woCompare}><div className={styles.woCompareLead}><NumberedLabel>05 / Advisory instrument</NumberedLabel><h2>A clearer view of the <em>financing landscape.</em></h2><p>Qualitative guidance only. The relevant route depends on the situation and the financier's assessment.</p></div><div className={styles.woCompareGrid}>{routeRows.map(r=><article key={r[0]}><small>{r[0]}</small><strong>{r[1]}</strong><span>{r[2]}</span><a href="/get-a-free-financing-assessment/">{r[3]} ↗</a></article>)}</div></section>
        <section className={styles.woClose}><div className={styles.woCloseMark}>+</div><NumberedLabel>06 / Start with the situation</NumberedLabel><h2>Have a financing situation that is <em>not straightforward?</em></h2><p>Start with a free initial assessment.</p><AssessmentCta /></section>
      </main>
    </div>
  );
}

export default function ConceptPage({ variant }: { variant: Variant }) {
  return variant === "chamber" ? <Chamber /> : variant === "editorial" ? <Editorial /> : <Works />;
}
