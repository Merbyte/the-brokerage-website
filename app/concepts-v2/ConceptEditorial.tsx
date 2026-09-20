import { routes, situations, steps, faq } from "./concept-data";
import { Cta, ConceptFooter, LightHeader, MobileHeader } from "./ConceptHeader";
import styles from "./concepts.module.css";

export default function EditorialConcept(){
 return <div className={styles.editorial}>
  <LightHeader variant="editorial"/><MobileHeader/>
  <main>
   <section className={styles.edHero}>
    <div className={styles.edHeroCopy}><div className={styles.overline}>Independent financing advisory / Singapore</div><h1>Finance becomes clearer when you <i>start with the situation.</i></h1><p>Independent advice for businesses navigating growth, cash-flow pressure and financing that does not fit a standard application.</p><Cta/></div>
    <div className={styles.edCollage}><div className={styles.edImageMain}/><div className={styles.edImageInset}/><div className={styles.edCaption}><span>THE BROKERAGE</span><b>FIELD NOTES / 01</b></div></div>
   </section>

   <section id="story" className={styles.edStory}><div className={styles.edQuote}>“Before deciding where to go, <i>understand what is happening.</i>”</div><div className={styles.edStoryGrid}>{situations.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></section>

   <section id="works" className={styles.edWorks}><div className={styles.edWorksPhoto}><span>FIELD NOTE 02 / CONSTRUCTION</span></div><div className={styles.edWorksCopy}><div className={styles.overline}>Works / project reality</div><h2>When project growth moves faster than <i>cash flow.</i></h2><p>Awarded work can create a timing gap between commitment and certification. That gap is worth understanding before selecting a route.</p><div className={styles.edSteps}>{["Mobilise","Procure","Claim","Certify","Receive"].map((x,i)=><div key={x}><small>0{i+1}</small><strong>{x}</strong></div>)}</div><a href="/construction-engineering-financing/">Discuss your project ↗</a></div></section>

   <section id="method" className={styles.edMethod}><div className={styles.edMethodLead}><div className={styles.overline}>03 / Method</div><h2>Diagnosis before <i>direction.</i></h2><p>We establish the situation before deciding which route is worth exploring.</p></div><div className={styles.edMethodList}>{steps.map(([n,t,b])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div><b>→</b></article>)}</div></section>

   <section id="routes" className={styles.edRoutes}><div className={styles.overline}>04 / Pathways</div><h2>The route follows the <i>reason.</i></h2><div className={styles.edRouteGrid}>{routes.map(([t,b,h],i)=><a href={h} key={t}><small>0{i+1}</small><h3>{t}</h3><p>{b}</p><b>View route ↗</b></a>)}</div></section>

   <section id="comparison" className={styles.edCompare}><div className={styles.edCompareHead}><div><div className={styles.overline}>05 / Advisory instrument</div><h2>A clearer view of the <i>financing landscape.</i></h2></div><p>Qualitative information organised around the questions an owner needs answered first.</p></div><div className={styles.edCompareRows}>{routes.slice(0,4).map(([t,b],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{b}</p><small>Assess → purpose · cash flow · obligations · information</small><a href="/get-a-free-financing-assessment/">Discuss ↗</a></article>)}</div></section>

   <section id="questions" className={styles.edFaq}><div><div className={styles.overline}>06 / Questions</div><h2>The questions that usually come <i>first.</i></h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
   <section id="start" className={styles.edClose}><div className={styles.overline}>07 / Start here</div><h2>Have a financing situation that is <i>not straightforward?</i></h2><p>Start with a free initial assessment.</p><Cta/></section>
  </main>
  <ConceptFooter/>
 </div>;
}