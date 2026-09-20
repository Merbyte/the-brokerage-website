"use client";

import { useState } from "react";
import styles from "./page.module.css";

const situations = [
  ["Growth opportunity", "A project, expansion or equipment requirement arrives before the capacity to fund it is ready.", "Business Financing"],
  ["Bank rejection", "Understand what sits behind a decline before repeating the same application elsewhere.", "Business Financing"],
  ["Existing facilities", "The structure that worked before may no longer match how the business operates today.", "Business Financing"],
  ["Complex situation", "Multiple entities, unusual collateral or several financing needs need to be viewed together.", "Project & Private Capital"],
];

const routes = [
  ["Business Financing", "Growth, operations, equipment or working capital.", "/business-financing/"],
  ["Trade Financing", "Supplier obligations before customer receipts arrive.", "/trade-financing/"],
  ["Property Financing", "Property-backed requirements and larger facilities.", "/property-financing/"],
  ["Project & Private Capital", "Opportunities larger than the existing structure.", "/project-private-capital/"],
  ["Performance Bonds", "A bond requirement before project work can begin.", "/performance-bonds/"],
];

const faqs = [
  ["What does a financing advisory do?", "We help a business understand its financing situation before deciding where and how to approach banks, financiers or capital providers."],
  ["Is The Brokerage Advisory a bank or lender?", "No. The Brokerage Advisory is an independent financing advisory. It does not lend."],
  ["Can you help after a bank rejection?", "Yes. The assessment starts with understanding why the answer was no before considering whether another route is worth pursuing."],
  ["Can you help construction and engineering companies?", "Yes. Construction and engineering is a priority pathway, including project mobilisation, working-capital timing, performance bonds and existing facility constraints."],
];

export default function MercuryNumeHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [situation, setSituation] = useState(0);
  const [route, setRoute] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="/" className={styles.brand}><span>THE BROKERAGE</span><small>ADVISORY</small></a>

        <nav className={styles.desktopNav}>
          <div className={styles.navGroup}>
            <span>Financing</span>
            <div className={styles.navDropdown}>
              {routes.map(([title,,href]) => <a key={title} href={href}>{title}</a>)}
            </div>
          </div>
          <a href="/construction-engineering-financing/">Construction & Engineering</a>
          <a href="/how-it-works/">How It Works</a>
          <a href="/about/">About</a>
        </nav>

        <a className={styles.navCta} href="/get-a-free-financing-assessment/">Get assessed <span>↗</span></a>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? "Close" : "Menu"}</button>
        {menuOpen && <nav className={styles.mobileNav}>
          <a href="#solutions" onClick={()=>setMenuOpen(false)}>Situations</a>
          <a href="#routes" onClick={()=>setMenuOpen(false)}>Financing routes</a>
          <a href="#method" onClick={()=>setMenuOpen(false)}>How it works</a>
          <a href="#faq" onClick={()=>setMenuOpen(false)}>Questions</a>
          <a href="/get-a-free-financing-assessment/" onClick={()=>setMenuOpen(false)}>Get a free assessment ↗</a>
        </nav>}
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroTopline}><span>INDEPENDENT FINANCING ADVISORY · SINGAPORE</span><span>EST. 2026</span></div>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.livePill}><i /> DIAGNOSIS FIRST</div>
            <h1>Financing for the business you&apos;re <em>actually running.</em></h1>
            <p>We help established businesses understand the financing situation before deciding where and how to approach banks, financiers or capital providers.</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="/get-a-free-financing-assessment/">Get a free financing assessment <span>↗</span></a>
              <a className={styles.secondary} href="#solutions">See where we help <span>↓</span></a>
            </div>
            <div className={styles.heroTrust}><span>Independent advisory</span><span>Local + overseas financier network</span><span>No guarantee of approval</span></div>
          </div>

          <div className={styles.financeMockup}>
            <div className={styles.mockTop}><span>FINANCING SNAPSHOT</span><button aria-label="More options">•••</button></div>
            <div className={styles.mockMain}>
              <div className={styles.mockHeadline}><small>ILLUSTRATIVE BUSINESS</small><h2>Project cash flow</h2><strong>S$ 420,000</strong><span>cash committed</span></div>
              <div className={styles.chart}>
                <div className={styles.chartAxis}><span>S$600k</span><span>S$300k</span><span>S$0</span></div>
                <svg viewBox="0 0 620 220" preserveAspectRatio="none" aria-label="Illustrative cash flow chart">
                  <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#5266eb" stopOpacity=".24"/><stop offset="1" stopColor="#5266eb" stopOpacity="0"/></linearGradient></defs>
                  <path d="M0 150 C80 132 110 140 160 124 S250 106 300 128 S372 182 432 110 S520 54 620 70 V220 H0 Z" fill="url(#area)" />
                  <path d="M0 150 C80 132 110 140 160 124 S250 106 300 128 S372 182 432 110 S520 54 620 70" fill="none" stroke="#5266eb" strokeWidth="3" />
                  <line x1="372" x2="372" y1="25" y2="205" stroke="#8f98bf" strokeDasharray="4 5"/>
                  <circle cx="372" cy="158" r="5" fill="#5266eb"/>
                </svg>
                <div className={styles.chartTag}>TIMING GAP</div>
                <div className={styles.chartMonths}><span>NOW</span><span>+30D</span><span>+60D</span><span>+90D</span></div>
              </div>
              <div className={styles.metricGrid}>
                <div><span>RECEIPTS</span><b>S$ 610k</b><small>expected</small></div>
                <div><span>GAP</span><b>S$ 190k</b><small>illustrative</small></div>
                <div><span>ROUTE</span><b>Project</b><small>signal</small></div>
              </div>
            </div>
            <div className={styles.mockBottom}><span>Updated 09:42</span><b>View scenario ↗</b></div>
          </div>
        </div>
      </section>

      <section className={styles.trustBand}>
        <span>Designed for established businesses</span>
        <div><i />Growth<span>•</span><i />Construction<span>•</span><i />Engineering<span>•</span><i />Trade<span>•</span><i />Property<span>•</span><i />Projects</div>
      </section>

      <section className={styles.solutions} id="solutions">
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>01 / START WITH THE SITUATION</span>
          <h2>Not every financing problem needs <em>another application.</em></h2>
          <p>Select the situation closest to yours. The point is not to predict an approval; it is to make the financing question clearer.</p>
        </div>

        <div className={styles.solutionLayout}>
          <div className={styles.solutionList}>
            {situations.map(([title,desc,routeName], i) => (
              <button key={title} className={i===situation ? styles.solutionActive : styles.solution} onClick={()=>setSituation(i)}>
                <span>0{i+1}</span><div><strong>{title}</strong><p>{desc}</p></div><b>{i===situation ? "Selected" : "Explore"} ↗</b>
              </button>
            ))}
          </div>
          <div className={styles.solutionPreview}>
            <div className={styles.previewTop}><span>CURRENT SIGNAL</span><small>01 / 04</small></div>
            <div className={styles.previewVisual}>
              <div className={styles.signalRing} />
              <div className={styles.signalCore}><span>THE QUESTION</span><strong>{situations[situation][2]}</strong></div>
              <div className={styles.signalLabel}>purpose</div>
              <div className={styles.signalLabel2}>timing</div>
              <div className={styles.signalLabel3}>existing obligations</div>
            </div>
            <div className={styles.previewCopy}><span>WHY IT MATTERS</span><p>{situations[situation][1]}</p><a href="/get-a-free-financing-assessment/">Discuss your situation ↗</a></div>
          </div>
        </div>
      </section>

      <section className={styles.productSection}>
        <div className={styles.productCopy}>
          <span className={styles.eyebrow}>02 / CASH-FLOW REALITY</span>
          <h2>See the pressure before you <em>name the facility.</em></h2>
          <p>Projects can absorb cash well before certification and payment. The timing of commitments, progress claims and receipts can matter as much as the size of the contract.</p>
          <div className={styles.productFacts}><div><span>COMMIT</span><strong>S$240k</strong><small>mobilisation + procurement</small></div><div><span>WAIT</span><strong>45 days</strong><small>illustrative payment window</small></div><div><span>RETURN</span><strong>S$610k</strong><small>illustrative receipts</small></div></div>
          <a className={styles.darkLink} href="/construction-engineering-financing/">Explore construction financing ↗</a>
        </div>
        <div className={styles.cashInterface}>
          <div className={styles.interfaceHeader}><span>PROJECT / CASH POSITION</span><span>LIVE SCENARIO</span></div>
          <div className={styles.cashRows}>
            <div><span>01</span><strong>Mobilise</strong><b>− S$ 90k</b></div>
            <div><span>02</span><strong>Procure</strong><b>− S$ 150k</b></div>
            <div className={styles.highlight}><span>03</span><strong>Progress claim</strong><b>S$ 190k gap</b></div>
            <div><span>04</span><strong>Certify</strong><b>waiting</b></div>
            <div><span>05</span><strong>Payment</strong><b>+ S$ 610k</b></div>
          </div>
          <div className={styles.cashFooter}><span>THE GAP IS A TIMING PROBLEM BEFORE IT IS A FUNDING PROBLEM.</span><i>↗</i></div>
        </div>
      </section>

      <section className={styles.routes} id="routes">
        <div className={styles.routeHeader}>
          <div><span className={styles.eyebrow}>03 / FINANCING ROUTES</span><h2>One starting point.<br/><em>Different routes.</em></h2></div>
          <p>Select a route to see the kind of conversation it can lead to. Directional only; actual suitability depends on the situation.</p>
        </div>
        <div className={styles.routeTabs}>
          {routes.map(([title,desc,href],i)=><button key={title} className={i===route ? styles.routeActive : styles.routeTab} onClick={()=>setRoute(i)}><span>0{i+1}</span><strong>{title}</strong><small>{desc}</small><b>{i===route ? "Open" : "Explore"} ↗</b></button>)}
        </div>
        <div className={styles.routeDetail}>
          <div><span>SELECTED</span><strong>{routes[route][0]}</strong></div>
          <p>{routes[route][1]} Start by understanding purpose, timing, information and existing obligations.</p>
          <a href={routes[route][2]}>Open pathway ↗</a>
        </div>
      </section>

      <section className={styles.method} id="method">
        <div className={styles.methodVisual}>
          <div className={styles.methodOrb}><span>01</span><i>→</i><strong>02</strong><i>→</i><em>03</em><i>→</i><b>04</b></div>
          <div className={styles.methodCaption}><span>THE SEQUENCE</span><strong>Assess → Diagnose → Structure → Approach</strong></div>
        </div>
        <div className={styles.methodCopy}><span className={styles.eyebrow}>04 / HOW IT WORKS</span><h2>A clearer case starts <em>before the application.</em></h2><p>We do not begin by forcing the situation into a product. We work from the commercial reality: what the business is doing, what cash is doing, what the existing structure allows, and what needs to happen next.</p><div className={styles.stepList}>{[["01","Assess","Purpose, timing, business profile and available information."],["02","Diagnose","Name the constraint before naming a route."],["03","Structure","Set out relevant routes and what each would require."],["04","Approach","Where appropriate, approach relevant institutions with a clearer case."]].map(([n,t,d])=><div key={n}><span>{n}</span><strong>{t}</strong><small>{d}</small></div>)}</div></div>
      </section>

      <section className={styles.proof}>
        <div className={styles.proofCard}><span>INDEPENDENT / DIAGNOSIS-FIRST</span><strong>“The useful outcome is a clearer financing conversation.”</strong><small>THE BROKERAGE ADVISORY</small></div>
        <div className={styles.proofCopy}><span className={styles.eyebrow}>05 / THE DIFFERENCE</span><h2>Clarity before route. <em>Evidence before application.</em></h2><p>We are not a lender. Our role is to help you understand the situation and the available conversations before deciding what comes next.</p><div className={styles.proofTags}><span>Independent</span><span>Business-first</span><span>Local + overseas network</span></div></div>
      </section>

      <section className={styles.faq} id="faq">
        <div className={styles.faqIntro}><span className={styles.eyebrow}>06 / QUESTIONS</span><h2>Questions before <em>the conversation.</em></h2></div>
        <div className={styles.faqList}>{faqs.map(([q,a],i)=><div key={q} className={styles.faqItem}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>0{i+1}</span><strong>{q}</strong><b>{faqOpen===i?"−":"+"}</b></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaGlow}/>
        <span className={styles.eyebrow}>07 / START HERE</span>
        <h2>Have a financing situation that is <em>not straightforward?</em></h2>
        <p>Start with the situation. We will work from there.</p>
        <a className={styles.primary} href="/get-a-free-financing-assessment/">Get a free financing assessment <span>↗</span></a>
      </section>

      <footer className={styles.footer}>
        <div><Brand/><p>Independent financing advisory for established Singapore businesses.</p></div>
        <div><span>EXPLORE</span><a href="#solutions">Situations</a><a href="#routes">Financing routes</a><a href="/how-it-works/">How it works</a><a href="/about/">About</a></div>
        <div><span>START</span><a href="/get-a-free-financing-assessment/">Free assessment ↗</a><a href="/tools/monthly-repayment-calculator/">Repayment calculator</a></div>
        <div><span>CONTACT</span><a href="tel:+6580118194">+65 8011 8194</a><a href="mailto:admin@thebrokerage-advisory.com">admin@thebrokerage-advisory.com</a><small>Singapore</small></div>
        <div className={styles.footerBottom}><span>© {new Date().getFullYear()} The Brokerage Advisory</span><span>Independent financing advisory</span></div>
      </footer>
    </main>
  );
}
