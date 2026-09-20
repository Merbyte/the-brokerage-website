import { routes, situations, steps } from "../concept-data";
import { Cta, ConceptFooter, DarkHeader, MobileHeader } from "../ConceptHeader";
import styles from "../concepts.module.css";

export default function ChamberConcept(){
 return <div className={styles.chamber}>
  <DarkHeader/><MobileHeader dark/>
  <main>
   <section className={styles.chHero}>
    <div className={styles.chHeroVisual}><div className={styles.chHeroImage}/><div className={styles.chHeroGrid}/><div className={styles.chHeroLine}/><span>FINANCING / 01</span></div>
    <div className={styles.chHeroCopy}><div className={styles.overline}>Independent financing advisory · Singapore</div><h1>When financing gets complicated, <i>start with the right diagnosis.</i></h1><p>We help businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.</p><div className={styles.actionRow}><Cta/><a href="#method" className={styles.ghost}>See how we work <span>↓</span></a></div></div>
    <div className={styles.chHeroFooter}><span>Diagnosis first.</span><span>01 — 09</span><span>Black & Gold / Chamber × Works</span></div>
   </section>

   <section id="situations" className={styles.chSituations}>
    <div className={styles.chIntro}><div className={styles.overline}>01 / Recognition</div><h2>Not every financing situation is solved by <i>another application.</i></h2><p>Most enquiries begin with a symptom. The useful work is understanding what sits underneath it.</p></div>
    <div className={styles.chSituationList}>{situations.map(([n,t,b])=><a href="#method" key={n}><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div><b>↗</b></a>)}</div>
   </section>

   <section id="construction" className={styles.chConstruction}>
    <div className={styles.chConstructionImage}><span>FIELD NOTE / CONSTRUCTION & ENGINEERING</span></div>
    <div className={styles.chConstructionCopy}><div className={styles.overline}>02 / Works</div><h2>Project growth can move faster than <i>cash flow.</i></h2><p>Mobilisation, procurement, progress claims, certification and payment do not occur at the same moment.</p>
      <div className={styles.chTimeline}>{["Mobilise","Procure","Claim","Certify","Receive"].map((x,i)=><div className={i===2?styles.chTimelineActive:""} key={x}><small>0{i+1}</small><strong>{x}</strong></div>)}</div>
      <div className={styles.chExposure}><span>COMMITTED</span><b>EXPOSURE WINDOW</b><span>RECEIVED</span></div>
      <a className={styles.inlineLink} href="/construction-engineering-financing/">Discuss your project ↗</a>
    </div>
   </section>

   <section id="method" className={styles.chMethod}>
    <div className={styles.chMethodTop}><div className={styles.overline}>03 / Method</div><h2>Experience matters when it makes the <i>next decision clearer.</i></h2><p>Four decisions organise the advisory conversation.</p></div>
    <div className={styles.chSteps}>{steps.map(([n,t,b])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{b}</p><span>↗</span></article>)}</div>
   </section>

   <section id="routes" className={styles.chRoutes}>
    <div className={styles.chRoutesHead}><div><div className={styles.overline}>04 / Pathways</div><h2>Different situations.<br/><i>Different routes.</i></h2></div><p>Five routes remain discoverable. The assessment determines which conversation is worth having.</p></div>
    <div className={styles.chRouteStack}>{routes.map(([t,b,h],i)=><a href={h} key={t}><small>0{i+1}</small><strong>{t}</strong><span>{b}</span><b>Explore ↗</b></a>)}</div>
   </section>

   <section id="comparison" className={styles.chComparison}>
    <div className={styles.chComparisonHead}><div className={styles.overline}>05 / Advisory instrument</div><h2>See the financing landscape <i>before you enter it.</i></h2><p>Different facilities solve different situations. The relevant route depends on purpose, cash flow, information and existing obligations.</p></div>
    <div className={styles.chCompareGrid}>{routes.slice(0,4).map(([t,b],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><b>{b}</b><p>What needs assessing: business profile, cash flow, documents, existing facilities and timing.</p><a href="/get-a-free-financing-assessment/">Discuss the situation ↗</a></article>)}</div>
    <small className={styles.disclaimer}>Qualitative guidance only. Not an indication of eligibility, availability, amount, rate, tenure or timing.</small>
   </section>

   <section className={styles.chDirect}><div className={styles.overline}>06 / Before the application</div><h2>The difference is not whether you go direct.<br/><i>It is what gets established first.</i></h2><div className={styles.chDirectCols}><article><span>01</span><h3>Approaching a financier directly</h3><p>Starting with a familiar product or institution and working through one institution's process first.</p></article><article><span>02</span><h3>Working with The Brokerage Advisory</h3><p>Discuss the purpose, assess the situation and compare possible routes before an application is made.</p></article></div><Cta/></section>

   <section id="start" className={styles.chClose}><div className={styles.chCloseOrb}/><div className={styles.overline}>07 / Start with the situation</div><h2>Have a financing situation that is <i>not straightforward?</i></h2><p>Start with a free initial assessment.</p><Cta/></section>
  </main>
  <ConceptFooter dark/>
 </div>;
}