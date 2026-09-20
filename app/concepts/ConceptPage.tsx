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

const steps = [
  ["01", "Assess", "Establish the business, purpose, timing and information."],
  ["02", "Diagnose", "Name the constraint before naming the route."],
  ["03", "Structure", "Set out the routes that may be relevant."],
  ["04", "Approach", "Approach relevant banks and financiers where appropriate."],
];

const faqs = [
  ["What does a financing advisory do?", "It helps a business understand its financing situation before deciding where and how to approach a financier."],
  ["Is The Brokerage Advisory a bank or lender?", "No. The Brokerage Advisory is an independent financing advisory and does not lend."],
  ["Can you help after a bank rejection?", "The assessment starts with understanding why the answer was no before considering whether another route is worth pursuing."],
  ["Can you help construction and engineering companies?", "Yes. Construction and engineering is a priority client segment, including mobilisation, working-capital timing and performance bonds."],
];

const rows = [
  ["Business financing", "Growth / operations", "Profile · cash flow · facilities", "Discuss"],
  ["Trade financing", "Supplier / receivables timing", "Invoices · contracts · counterparties", "Discuss"],
  ["Property financing", "Asset-backed requirements", "Ownership · valuation · debt", "Discuss"],
  ["Project financing", "Contract / mobilisation", "Contract · payment terms · timing", "Discuss"],
];

function Logo({ dark=false }: {dark?: boolean}) {
  return <a href="/" className={styles.logo + (dark ? " " + styles.logoDark : "")}>
    <span>THE BROKERAGE</span><small>ADVISORY</small>
  </a>;
}
function Eyebrow({children}:{children:ReactNode}){return <div className={styles.eyebrow}>{children}</div>}

function Chamber() {
  return <div className={styles.chamber}>
    <header className={styles.chHeader}><Logo dark/><nav><a href="#situations">Situations</a><a href="#construction">Construction</a><a href="#method">Method</a><a href="#routes">Routes</a></nav><a className={styles.chHeaderCta} href="/get-a-free-financing-assessment/">Get an assessment ↗</a></header>

    <main>
      <section className={styles.chHero}>
        <div className={styles.chHeroImage}/>
        <div className={styles.chHeroVeil}/>
        <div className={styles.chHeroContent}>
          <Eyebrow>Independent financing advisory · Singapore</Eyebrow>
          <h1>When financing gets complicated, <i>start with the right diagnosis.</i></h1>
          <p>We help businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.</p>
          <div className={styles.chHeroActions}><AssessmentCta/><a href="#method">See how we work <span>↗</span></a></div>
        </div>
        <div className={styles.chHeroStamp}>CHAMBER × WORKS<br/><b>01</b></div>
      </section>

      <section id="situations" className={styles.chSituations}>
        <aside><Eyebrow>01 / Recognition</Eyebrow><p>Most financing conversations start with a symptom. We start by finding the situation underneath it.</p></aside>
        <div className={styles.chSituationFeature}><span>NOT EVERY</span><h2>Financing situation is solved by <i>another application.</i></h2></div>
        <div className={styles.chSituationList}>{situations.map(([n,t,b])=><article key={n}><b>{n}</b><div><h3>{t}</h3><p>{b}</p></div><span>↗</span></article>)}</div>
      </section>

      <section id="construction" className={styles.chConstruction}>
        <div className={styles.chConstructionPhoto}><span>CONSTRUCTION / PROJECT REALITY</span></div>
        <div className={styles.chConstructionCopy}>
          <Eyebrow>02 / Works</Eyebrow>
          <h2>Project growth can move faster than <i>cash flow.</i></h2>
          <p>Mobilisation, procurement, progress claims, certification and payment do not occur at the same moment.</p>
          <div className={styles.chCashBand}>
            <span>COMMIT</span><i></i><span>BUILD</span><i></i><span className={styles.live}>CLAIM</span><i></i><span>CERTIFY</span><i></i><span>RECEIVE</span>
          </div>
          <div className={styles.chExposure}><strong>CASH COMMITTED</strong><span>THE EXPOSURE WINDOW</span><strong>CASH RETURNS</strong></div>
          <a href="/construction-engineering-financing/" className={styles.chArrow}>Discuss your project <span>↗</span></a>
        </div>
      </section>

      <section id="method" className={styles.chMethod}>
        <div className={styles.chMethodTop}><Eyebrow>03 / Method</Eyebrow><h2>Experience matters when it makes the <i>next decision clearer.</i></h2></div>
        <div className={styles.chMethodBody}>
          {steps.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p><em>↗</em></article>)}
        </div>
      </section>

      <section id="routes" className={styles.chRoutes}>
        <div className={styles.chRoutesTitle}><Eyebrow>04 / Pathways</Eyebrow><h2>Different situations.<br/><i>Different routes.</i></h2></div>
        <div className={styles.chRoutesList}>{routes.map(([t,b,h],i)=><a href={h} key={t}><small>0{i+1}</small><strong>{t}</strong><span>{b}</span><b>Explore ↗</b></a>)}</div>
      </section>

      <section className={styles.chInstrument}>
        <div><Eyebrow>05 / Advisory instrument</Eyebrow><h2>See the financing landscape <i>before you enter it.</i></h2></div>
        <div className={styles.chTable}>
          <div className={styles.chTableHead}><span>ROUTE</span><span>RELEVANT FOR</span><span>ASSESS</span><span>NEXT</span></div>
          {rows.map(r=><div className={styles.chTableRow} key={r[0]}><strong>{r[0]}</strong><span>{r[1]}</span><span>{r[2]}</span><a href="/get-a-free-financing-assessment/">{r[3]} ↗</a></div>)}
        </div>
      </section>

      <section className={styles.chClose}><Eyebrow>06 / Start with the situation</Eyebrow><h2>Have a financing situation that is <i>not straightforward?</i></h2><p>Start with a free initial assessment.</p><AssessmentCta/></section>
    </main>
  </div>;
}

function Editorial() {
  return <div className={styles.editorial}>
    <header className={styles.edHeader}><Logo/><nav><a href="#story">The situation</a><a href="#works">Works</a><a href="#routes">Routes</a><a href="#questions">Questions</a></nav><a href="/get-a-free-financing-assessment/" className={styles.edHeaderLink}>Start a conversation ↗</a></header>
    <main>
      <section className={styles.edHero}>
        <div className={styles.edHeroText}><Eyebrow>Independent financing advisory / Singapore</Eyebrow><h1>Finance becomes clearer when you <i>start with the situation.</i></h1><p>Independent advice for businesses navigating growth, cash-flow pressure and financing that does not fit a standard application.</p><AssessmentCta/></div>
        <div className={styles.edHeroCollage}><div className={styles.edImageLarge}/><div className={styles.edImageSmall}/><div className={styles.edCollageNote}>THE BROKERAGE<br/><b>ADVISORY</b></div></div>
      </section>

      <section id="story" className={styles.edStory}>
        <div className={styles.edStoryQuote}>"Before choosing where to go, understand <i>what is happening.</i>"</div>
        <div className={styles.edStoryGrid}>{situations.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div>
      </section>

      <section id="works" className={styles.edWorks}>
        <div className={styles.edWorksImage}><span>02 / CONSTRUCTION & ENGINEERING</span></div>
        <div className={styles.edWorksText}><Eyebrow>Works / project reality</Eyebrow><h2>When project growth moves faster than <i>cash flow.</i></h2><p>Awarded work can create a timing gap between commitment and certification. That gap is worth understanding before selecting a route.</p><div className={styles.edWorkSteps}>{["Mobilise","Procure","Claim","Certify","Receive"].map((s,i)=><div key={s}><small>0{i+1}</small><strong>{s}</strong></div>)}</div><a href="/construction-engineering-financing/">Discuss your project ↗</a></div>
      </section>

      <section className={styles.edManifesto}><div><Eyebrow>03 / Method</Eyebrow><h2>Diagnosis before <i>direction.</i></h2><p>Four decisions organise the advisory conversation.</p></div><div className={styles.edManifestoSteps}>{steps.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><b>{b}</b></article>)}</div></section>

      <section id="routes" className={styles.edRoutes}><Eyebrow>04 / Pathways</Eyebrow><h2>The route follows the <i>reason.</i></h2><div className={styles.edRouteGrid}>{routes.map(([t,b,h],i)=><a key={t} href={h}><span>0{i+1}</span><h3>{t}</h3><p>{b}</p><b>View route ↗</b></a>)}</div></section>

      <section className={styles.edCompare}><div className={styles.edCompareTitle}><Eyebrow>05 / Advisory instrument</Eyebrow><h2>A clearer view of the <i>financing landscape.</i></h2></div><div className={styles.edCompareList}>{rows.map(r=><article key={r[0]}><small>{r[0]}</small><strong>{r[1]}</strong><span>{r[2]}</span><a href="/get-a-free-financing-assessment/">{r[3]} ↗</a></article>)}</div></section>

      <section id="questions" className={styles.edQuestions}><div><Eyebrow>06 / Questions</Eyebrow><h2>The questions that usually come <i>first.</i></h2></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.edClose}><Eyebrow>07 / Start here</Eyebrow><h2>Have a financing situation that is <i>not straightforward?</i></h2><AssessmentCta/></section>
    </main>
  </div>;
}

function Works() {
  const metrics = ["Purpose","Cash flow","Existing facilities","Information","Timing"];
  return <div className={styles.works}>
    <header className={styles.woHeader}><Logo/><div className={styles.woHeaderSystem}>FINANCING SYSTEM / 01</div><a href="/get-a-free-financing-assessment/">Get a Free Financing Assessment ↗</a></header>
    <main>
      <section className={styles.woHero}>
        <div><Eyebrow>Independent financing advisory · Singapore</Eyebrow><h1>Understand the financing problem <i>before you solve it.</i></h1><p>Diagnose the situation, structure the possible routes and decide how to approach banks, financiers or capital providers.</p><AssessmentCta/></div>
        <div className={styles.woInstrument}>
          <div className={styles.woInstrumentTop}><span>CASH POSITION</span><span>PROJECT / 01</span></div>
          <svg viewBox="0 0 600 360" className={styles.woGraph} aria-label="Illustrative cash-flow timing diagram"><path d="M40 310 H560" /><path d="M40 90 C170 140 180 40 300 120 S430 220 560 80" /><path d="M40 230 C180 270 220 160 330 200 S470 270 560 200" /><circle cx="390" cy="170" r="7" /><line x1="40" y1="320" x2="560" y2="320" className={styles.woGoldLine}/></svg>
          <div className={styles.woInstrumentLabels}><span>COMMIT</span><span>CLAIM</span><span>RECEIVE</span></div>
          <div className={styles.woInstrumentNote}>OUTGOING COMMITMENTS ARRIVE BEFORE RECEIPTS</div>
        </div>
      </section>

      <section className={styles.woSignals} id="situations">
        <div className={styles.woSignalsLead}><Eyebrow>01 / Recognition</Eyebrow><h2>Signals that the situation needs <i>diagnosing.</i></h2></div>
        <div className={styles.woSignalStack}>{situations.map(([n,t,b])=><article key={n}><small>{n}</small><div><h3>{t}</h3><p>{b}</p></div><span>↗</span></article>)}</div>
      </section>

      <section className={styles.woSystem} id="method">
        <div className={styles.woSystemLead}><Eyebrow>02 / Advisory system</Eyebrow><h2>One system.<br/><i>Four decisions.</i></h2><p>Every conversation moves through the same logic: establish the facts, name the constraint, structure the routes, then approach.</p></div>
        <div className={styles.woSystemWheel}>{steps.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p><i>↗</i></article>)}</div>
      </section>

      <section className={styles.woCash} id="construction">
        <div className={styles.woCashCopy}><Eyebrow>03 / Works · Construction & Engineering</Eyebrow><h2>Construction financing is a <i>timing system.</i></h2><p>Mobilisation, procurement, progress claims, certification and payment happen at different moments.</p><a href="/construction-engineering-financing/">Discuss your project ↗</a></div>
        <div className={styles.woCashGraphic}><div className={styles.woAxis}/><div className={styles.woWindow}><span>COMMITTED</span><b>EXPOSURE WINDOW</b><span>RECEIVED</span></div>{["Mobilisation","Procurement","Progress claim","Certification","Payment"].map((x,i)=><div className={(i===2?styles.woPointHot:styles.woPoint)} key={x} style={{top:(18+i*16)+"%"}}><small>0{i+1}</small><strong>{x}</strong></div>)}</div>
      </section>

      <section className={styles.woRoutes} id="routes">
        <div className={styles.woRoutesIntro}><Eyebrow>04 / Pathways</Eyebrow><h2>Route selection is a <i>context problem.</i></h2><p>The assessment determines which conversation is worth having.</p></div>
        <div className={styles.woRouteMatrix}>{routes.map(([t,b,h],i)=><a key={t} href={h}><small>0{i+1}</small><h3>{t}</h3><p>{b}</p><span>OPEN ↗</span></a>)}</div>
      </section>

      <section className={styles.woCompare}>
        <div className={styles.woCompareTop}><div><Eyebrow>05 / Advisory instrument</Eyebrow><h2>A financing view built around <i>the situation.</i></h2></div><div className={styles.woMetricRail}>{metrics.map((m,i)=><span key={m}><b>0{i+1}</b>{m}</span>)}</div></div>
        <div className={styles.woCompareGrid}>{rows.map(r=><article key={r[0]}><small>{r[0]}</small><strong>{r[1]}</strong><span>{r[2]}</span><a href="/get-a-free-financing-assessment/">Discuss ↗</a></article>)}</div>
      </section>

      <section className={styles.woClose}><div className={styles.woCloseGrid}><div><Eyebrow>06 / Start with the situation</Eyebrow><h2>Have a financing situation that is <i>not straightforward?</i></h2><p>Start with a free initial assessment.</p><AssessmentCta/></div><div className={styles.woMark}>+</div></div></section>
    </main>
  </div>;
}

export default function ConceptPage({variant}:{variant:Variant}){
  return variant==="chamber" ? <Chamber/> : variant==="editorial" ? <Editorial/> : <Works/>;
}
