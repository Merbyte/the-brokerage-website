"use client";

import { useState } from "react";
import styles from "./eloqwnt.module.css";

const work = [
  {
    type:"CONSTRUCTION / SINGAPORE",
    title:"When project growth gets ahead of cash flow.",
    desc:"Project mobilisation, supplier commitments and payment timing need a financing structure that reflects the reality of the work.",
    stats:[["S$2.4M","contract value"],["45 days","cash-flow window"],["01","diagnosis"]],
    image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=88"
  },
  {
    type:"ENGINEERING / SINGAPORE",
    title:"The facility worked. Until the business changed.",
    desc:"Existing financing can stop fitting when the operating model, project cycle or collateral position changes.",
    stats:[["05","facilities"],["03","business entities"],["01","restructure"]],
    image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=88"
  },
  {
    type:"TRADE / WORKING CAPITAL",
    title:"A timing gap is not always a funding problem.",
    desc:"The first task is understanding why cash is committed before receipts arrive, then considering which routes are relevant.",
    stats:[["S$610k","receipts"],["S$190k","timing gap"],["04","route signals"]],
    image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=88"
  }
];

const serviceItems = [
  ["01","Business Financing","Growth, operations, equipment and working capital.","business"],
  ["02","Trade Financing","Supplier commitments, receivables and timing gaps.","trade"],
  ["03","Property Financing","Property-backed requirements and larger facilities.","property"],
  ["04","Project & Private Capital","Project execution or opportunities beyond the current structure.","project"],
  ["05","Performance Bonds","Bond requirements before project work can begin.","bond"],
];

const faqs = [
  ["What does a financing advisory do?","We help a business understand its financing situation before deciding where and how to approach banks, financiers or capital providers."],
  ["Can you help after a bank rejection?","Yes. A previous decline is a starting point for understanding the underlying constraint before considering whether another approach is worth pursuing."],
  ["Is The Brokerage Advisory a lender?","No. We are an independent financing advisory. We do not lend."],
  ["Do you work with construction and engineering businesses?","Yes. Construction and engineering is a priority pathway, including project mobilisation, working-capital timing, performance bonds and existing facility constraints."],
];

function Brand() {
  return <a href="/" className={styles.brand}><strong>THE BROKERAGE</strong><span>/ ADVISORY</span></a>;
}

function MenuButton({open,onClick}:{open:boolean;onClick:()=>void}) {
  return <button className={styles.menuButton} onClick={onClick} aria-expanded={open} aria-controls="mobile-nav">{open?"CLOSE":"MENU"}</button>;
}

export default function EloqwntLevel(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [workIndex,setWorkIndex]=useState(0);
  const [service,setService]=useState(0);
  const [faq,setFaq]=useState<number|null>(0);
  const current=work[workIndex];

  return (
    <main className={styles.site}>
      <header className={styles.header}>
        <Brand/>
        <nav className={styles.nav} aria-label="Primary">
          <a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a><a href="#faq">FAQ</a>
        </nav>
        <a href="/get-a-free-financing-assessment/" className={styles.headerCta}>Start a conversation <span>↗</span></a>
        <MenuButton open={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}/>
        {menuOpen && <nav id="mobile-nav" className={styles.mobileNav}>
          <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
          <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
          <a href="#faq" onClick={()=>setMenuOpen(false)}>FAQ</a>
          <a href="/get-a-free-financing-assessment/" onClick={()=>setMenuOpen(false)}>Free assessment ↗</a>
        </nav>}
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroMeta}><span>01</span><span>INDEPENDENT FINANCING ADVISORY<br/>SINGAPORE</span></div>
          <div className={styles.heroCopy}>
            <h1>When financing gets <em>complicated.</em><br/>Start with the right diagnosis.</h1>
            <p>We help businesses understand the situation before deciding where and how to approach banks, financiers or capital providers.</p>
            <div className={styles.heroActions}>
              <a href="/get-a-free-financing-assessment/" className={styles.primary}>Get a free financing assessment <span>↗</span></a>
              <a href="#work" className={styles.textLink}>See the work <span>↓</span></a>
            </div>
          </div>
          <div className={styles.heroOrb} aria-hidden="true"><div className={styles.orbCore}>DIAGNOSE</div><div className={`${styles.orbit} ${styles.one}`}/><div className={`${styles.orbit} ${styles.two}`}/><div className={`${styles.orbit} ${styles.three}`}/><span>ROUTE</span><span>STRUCTURE</span><span>APPROACH</span></div>
        </div>
        <div className={styles.heroRail}><span>THE BROKERAGE / 2026</span><span>DIAGNOSIS → STRUCTURE → APPROACH</span><span>SCROLL ↓</span></div>
      </section>

      <section className={styles.marquee} aria-label="Trust signals">
        <div><span>Independent</span><i>·</i><span>Diagnosis-first</span><i>·</i><span>Local + overseas financier network</span><i>·</i><span>No guarantee of approval</span><i>·</i><span>Independent</span><i>·</i><span>Diagnosis-first</span><i>·</i><span>Local + overseas financier network</span></div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.sectionKicker}>WHO WE ARE</div>
        <div className={styles.aboutVisual}><div className={styles.aboutCard}><span>THE USEFUL QUESTION</span><strong>What is actually causing the financing pressure?</strong><small>Purpose / Timing / Cash flow / Structure</small></div><div className={styles.aboutIndex}>02 / 06</div></div>
        <div className={styles.aboutCopy}>
          <h2>Not every financing problem begins with a <em>financing product.</em></h2>
          <p>Businesses usually arrive with a request: a facility, a project, additional working capital, a bond. We start one step earlier — understanding the commercial situation that produced the request.</p>
          <a className={styles.arrowLink} href="/about/">About The Brokerage Advisory <span>↗</span></a>
        </div>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.workHead}><div><span className={styles.sectionKicker}>SELECTED WORK / SITUATIONS</span><h2>Cases where the <em>question changed.</em></h2></div><p>The work is not about presenting a product catalogue. It is about making the financing situation clearer.</p></div>
        <div className={styles.workFeature}>
          <div className={styles.workImage}><img key={current.image} src={current.image} alt=""/></div>
          <div className={styles.workCopy}>
            <span>{current.type}</span>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>
            <div className={styles.statGrid}>{current.stats.map(([a,b])=><div key={a}><strong>{a}</strong><small>{b}</small></div>)}</div>
            <a className={styles.arrowLink} href="/get-a-free-financing-assessment/">Discuss a similar situation <span>↗</span></a>
          </div>
        </div>
        <div className={styles.workIndex}>
          {work.map((item,i)=><button key={item.title} className={i===workIndex?styles.workIndexActive:""} onClick={()=>setWorkIndex(i)}><span>0{i+1}</span><strong>{item.title}</strong><em>{item.type}</em><b>↗</b></button>)}
        </div>
        <a className={styles.outlineLink} href="/construction-engineering-financing/">Explore financing pathways <span>↗</span></a>
      </section>

      <section className={styles.clients}>
        <div className={styles.clientsTop}><span className={styles.sectionKicker}>WHO WE WORK WITH</span><h2>Established businesses where financing has become <em>strategic.</em></h2></div>
        <div className={styles.clientWall}>
          {["CONSTRUCTION","ENGINEERING","TRADE","PROPERTY","PROJECTS","OWNER-LED BUSINESS","SPECIALIST CONTRACTOR","GROWTH BUSINESS"].map((x,i)=><div key={x} className={styles.clientTile}><span>0{i+1}</span><strong>{x}</strong><small>FINANCING SITUATIONS</small></div>)}
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.servicesIntro}><span className={styles.sectionKicker}>OUR FINANCING PATHWAYS</span><h2>One starting point.<br/><em>Different routes.</em></h2><p>Select a pathway and the visual field changes. The route is directional; eligibility depends on the actual situation and financier assessment.</p></div>
        <div className={styles.servicesList}>
          {serviceItems.map(([n,t,d,key],i)=><button className={i===service?styles.serviceActive:styles.service} key={key} onMouseEnter={()=>setService(i)} onFocus={()=>setService(i)} onClick={()=>setService(i)}>
            <span>{n}</span><div><strong>{t}</strong><p>{d}</p></div><b>{i===service?"01":"+"}</b>
          </button>)}
        </div>
        <div className={styles.servicePreview}>
          <div className={styles.previewNumber}>0{service+1}</div>
          <div className={styles.previewGraphic}><div className={styles.previewLine}/><div className={styles.previewDot}/><div className={styles.previewLabel}>{serviceItems[service][1]}</div></div>
          <p>Explore the pathway with its purpose, common information requirements and typical timing considerations.</p>
          <a href={routeHrefs[service]} className={styles.arrowLink}>Open pathway <span>↗</span></a>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processVisual}><div className={styles.processBig}>4</div><span>STEPS / ONE CONVERSATION</span><div className={styles.processLine}><i/><i/><i/><i/></div></div>
        <div className={styles.processCopy}><span className={styles.sectionKicker}>HOW WE WORK</span><h2>From a financing question to a <em>clearer case.</em></h2><p>Assess the situation. Diagnose the constraint. Structure the possible routes. Approach the relevant institutions where appropriate.</p><div className={styles.processSteps}>{["Assess","Diagnose","Structure","Approach"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div>
      </section>

      <section className={styles.faq} id="faq">
        <div className={styles.faqIntro}><span className={styles.sectionKicker}>FAQ</span><h2>Frequently<br/><em>asked questions.</em></h2></div>
        <div className={styles.faqList}>
          {faqs.map(([q,a],i)=><div key={q} className={styles.faqItem}><button onClick={()=>setFaq(faq===i?null:i)}><span>0{i+1}</span><strong>{q}</strong><b>{faq===i?"−":"+"}</b></button>{faq===i&&<div className={styles.faqAnswer}><p>{a}</p><div className={styles.answerGraphic}><span>THE BROKERAGE</span><strong>CLARITY<br/>BEFORE<br/>ROUTE</strong></div></div>}</div>)}
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className={styles.quoteMark}>“</div>
        <p>“The useful outcome is not another financing application. It is a clearer understanding of what the business is actually trying to solve.”</p>
        <div className={styles.quoteMeta}><span>THE BROKERAGE ADVISORY</span><small>INDEPENDENT FINANCING ADVISORY</small></div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactKicker}>THE NEXT CONVERSATION</div>
        <div className={styles.contactMain}><h2>Have a financing situation that is <em>not straightforward?</em></h2><p>Tell us what is happening. Start with the situation and we will work from there.</p><a className={styles.primary} href="/get-a-free-financing-assessment/">Get a free financing assessment <span>↗</span></a></div>
        <div className={styles.contactSide}><span>CONTACT</span><a href="tel:+6580118194">+65 8011 8194</a><a href="mailto:admin@thebrokerage-advisory.com">admin@thebrokerage-advisory.com</a><span>Singapore</span></div>
      </section>

      <footer className={styles.footer}>
        <Brand/><div><span>EXPLORE</span><a href="/about/">About</a><a href="/how-it-works/">How it works</a><a href="/construction-engineering-financing/">Construction & engineering</a><a href="#services">Financing pathways</a></div><div><span>START</span><a href="/get-a-free-financing-assessment/">Free financing assessment ↗</a><a href="/tools/monthly-repayment-calculator/">Repayment calculator</a></div><div className={styles.footerMeta}><span>© 2026 The Brokerage Advisory</span><span>Singapore</span></div></footer>
    </main>
  );
}

const routeHrefs=[
  "/business-financing/",
  "/trade-financing/",
  "/property-financing/",
  "/project-private-capital/",
  "/performance-bonds/"
];
