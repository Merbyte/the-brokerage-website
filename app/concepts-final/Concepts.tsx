"use client";

import { useMemo, useState } from "react";

type Variant = "chamber" | "ledger" | "console" | "fieldbook";

const routes = ["Business Financing","Trade Financing","Property Financing","Project & Private Capital","Performance Bonds"];
const routeHrefs = ["/business-financing/","/trade-financing/","/property-financing/","/project-private-capital/","/performance-bonds/"];

export default function Concepts({variant}:{variant:Variant}){
  if (variant === "chamber") return <Chamber />;
  if (variant === "ledger") return <Ledger />;
  if (variant === "console") return <Console />;
  return <Fieldbook />;
}

function Brand({tone="light"}:{tone?: "light"|"dark"}){
  return <a className={"brand " + tone} href="/"><span>THE BROKERAGE</span><small>/ ADVISORY</small></a>;
}

function MobileMenu({items, dark}:{items:string[],dark:boolean}){
  const [open,setOpen]=useState(false);
  return <div className="mobileMenuWrap">
    <button className={"menuButton " + (dark?"menuDark":"")} onClick={()=>setOpen(!open)} aria-expanded={open}>{open?"Close":"Menu"}</button>
    {open && <nav className={"mobilePanel " + (dark?"mobilePanelDark":"")}>{items.map(x=><a key={x} href={"#" + x.toLowerCase().replaceAll(" ","-")} onClick={()=>setOpen(false)}>{x}</a>)}<a href="/get-a-free-financing-assessment/">Free assessment ↗</a></nav>}
  </div>
}

function Chamber(){
  const [selected,setSelected]=useState(3);
  return <main className="concept conceptChamber">
    <header className="chNav"><Brand/><nav>{["Situations","Method","Routes","Questions"].map(x=><a key={x} href={"#" + x.toLowerCase()}>{x}</a>)}</nav><a className="navCta" href="/get-a-free-financing-assessment/">Start with the situation ↗</a><MobileMenu dark items={["Situations","Method","Routes","Questions"]}/></header>

    <section className="chHero">
      <div className="chHeroPhoto"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=86" alt="Modern construction structure"/><span className="chPhotoIndex">FIELD / 001</span></div>
      <div className="chHeroGradient"/>
      <div className="chHeroCopy"><span className="eyebrow">INDEPENDENT FINANCING ADVISORY · SINGAPORE</span><h1>When financing gets complicated, <i>start with the right diagnosis.</i></h1><p>We help businesses understand the financing situation before deciding where and how to approach banks, financiers or capital providers.</p><div className="heroActions"><a className="goldButton" href="/get-a-free-financing-assessment/">Get a free financing assessment ↗</a><a className="underLink" href="#method">See how we work</a></div></div>
      <div className="chHeroData"><span>DIAGNOSIS BEFORE ROUTE</span><strong>04</strong><small>WAYS A FINANCING<br/>QUESTION CAN CHANGE</small></div>
      <div className="chScroll">Scroll <span>↓</span></div>
    </section>

    <section className="chStatement" id="situations">
      <div className="sectionMarker">02 / RECOGNITION</div><div><h2>Not every financing problem begins with a financing product.</h2><p>Start with what is actually happening underneath the request.</p></div>
      <div className="chStack">{[
        ["01","Growth before cash flow","A project, expansion or equipment requirement arrives before the funding capacity is ready."],
        ["02","A bank has said no","Understand the reason behind a decline before sending the same file somewhere else."],
        ["03","Existing facilities no longer fit","The structure that worked years ago may not match how the business operates today."],
        ["04","The situation is non-standard","Several entities, unusual collateral or multiple financing needs need to be seen together."]
      ].map(([n,t,b])=><article key={n} className="chStackItem"><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div><b>↗</b></article>)}</div>
    </section>

    <section className="chScene"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=86" alt="Contemporary advisory environment"/><div><span>THE USEFUL QUESTION</span><strong>What is the actual constraint?</strong></div></section>

    <section className="chMethod" id="method"><div className="chMethodLead"><span className="sectionMarker">03 / METHOD</span><h2>Experience is useful when it makes the <i>next decision clearer.</i></h2><p>We do not start by forcing a situation into a product.</p></div><div className="chSteps">{[["01","Assess","Purpose, timing, business profile, information available."],["02","Diagnose","Name the constraint before naming a financing route."],["03","Structure","Set out possible routes and what each would require."],["04","Approach","Take a clearer case to relevant institutions, where appropriate."]].map(([n,t,b])=><button key={n} className="chStep"><span>{n}</span><strong>{t}</strong><p>{b}</p><b>+</b></button>)}</div></section>

    <section className="chRoutes" id="routes"><div className="chRoutesHead"><div><span className="sectionMarker">04 / ROUTES</span><h2>Which conversation<br/><i>comes next?</i></h2></div><p>Tap a route. The panel changes. This is directional, not an eligibility decision.</p></div><div className="chRouteRail">{routes.map((r,i)=><button key={r} className={"chRouteTab " + (selected===i?"active":"")} onClick={()=>setSelected(i)}><span>0{i+1}</span><strong>{r}</strong><b>{selected===i?"Selected":"Explore"} ↗</b></button>)}</div><div className="chRoutePanel"><span>SELECTED PATHWAY</span><h3>{routes[selected]}</h3><p>We start by testing whether this route actually fits the purpose, timing, cash flow and existing obligations.</p><a href={routeHrefs[selected]}>Open route ↗</a></div></section>

    <section className="chCompare" id="questions"><div><span className="sectionMarker">05 / BEFORE THE APPLICATION</span><h2>Diagnosis first.<br/><i>Then the route.</i></h2></div><div className="chCompareVisual"><div><span>DIRECT</span><strong>One institution first.</strong><p>Begin with a familiar institution or product and work through its process.</p></div><div className="compareLine"/><div><span>ADVISORY</span><strong>Situation first.</strong><p>Clarify purpose, timing and constraints, then consider which routes are worth approaching.</p></div><a className="goldButton" href="/get-a-free-financing-assessment/">Start with the situation ↗</a></div></section>

    <section className="chClose"><div className="closeLetter">TBA</div><span className="sectionMarker">06 / START HERE</span><h2>Have a financing situation that is <i>not straightforward?</i></h2><p>Start with a free initial assessment. Understand the situation first, then discuss possible next steps.</p><a className="goldButton" href="/get-a-free-financing-assessment/">Get a free financing assessment ↗</a></section>
  </main>
}

function Ledger(){
  const [story,setStory]=useState(0);
  const stories=[
    {label:"BUSINESS",title:"Growth before cash flow",body:"A contract is awarded. Capital goes out before receipts return. The financing question is about timing, structure and evidence.",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=86"},
    {label:"REASSESS",title:"When a bank says no",body:"A decline is an outcome, not a diagnosis. The useful work is understanding the constraint before repeating the same approach.",image:"https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1500&q=86"},
    {label:"REFRAME",title:"A structure that no longer fits",body:"Business models change. Facilities do too. The question is whether today's financing structure still reflects how the company operates.",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=86"}
  ];
  const current=stories[story];
  return <main className="concept conceptLedger">
    <header className="ldNav"><Brand tone="dark"/><nav>{["Stories","Approach","Routes","FAQ"].map(x=><a key={x} href={"#" + x.toLowerCase()}>{x}</a>)}</nav><a className="ldCta" href="/get-a-free-financing-assessment/">Free assessment ↗</a><MobileMenu items={["Stories","Approach","Routes","FAQ"]} dark={false}/></header>

    <section className="ldMast">
      <div className="issueLine"><span>ISSUE 01</span><span>FINANCING / BUSINESS / SINGAPORE</span><span>THE BROKERAGE ADVISORY</span></div>
      <div className="mastGrid"><div><h1>The financing<br/>question is <i>rarely</i><br/><span>just the financing.</span></h1><p>Independent advisory for businesses navigating growth, cash-flow pressure and complex financing situations.</p><a className="inkButton" href="#stories">Read the situations ↓</a></div><div className="mastAside"><span>EDITOR'S NOTE</span><strong>Look beneath<br/>the product.</strong><small>Cash flow · timing · obligations · structure</small></div></div>
      <div className="mastStamp">TBA<br/><small>ADVISORY</small></div>
    </section>

    <section className="ldStories" id="stories"><div className="ldSectionTitle"><span>01 / SITUATIONS</span><h2>Three ways the<br/><i>story changes.</i></h2><p>The same business can have a very different financing conversation depending on what is happening underneath the request.</p></div><div className="storyDesk"><div className="storyIndex">{stories.map((s,i)=><button key={s.title} onClick={()=>setStory(i)} className={story===i?"selected":""}><span>{s.id || "0"+(i+1)}</span><strong>{s.title}</strong><em>{s.label}</em></button>)}</div><article className="storyFeature"><div className="featureImage"><img src={current.image} alt=""/></div><div className="featureCopy"><span>{current.label}</span><h3>{current.title}</h3><p>{current.body}</p><a href="/get-a-free-financing-assessment/">Discuss this situation ↗</a></div></article></div></section>

    <section className="ldPull"><span>FIELD NOTE / 02</span><blockquote>Not every financing situation is solved by another application.</blockquote><small>The useful work is naming what is actually causing the pressure.</small></section>

    <section className="ldApproach" id="approach"><div className="ldPhoto"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1700&q=86" alt="Modern meeting environment"/><span>VISUAL NOTE / ADVISORY WORK</span></div><div className="ldApproachCopy"><span>03 / APPROACH</span><h2>A process built around <i>clarity.</i></h2><p>Assess. Diagnose. Structure. Approach. The sequence matters because the route depends on what the situation tells us.</p><div className="ldStepList">{["Assess","Diagnose","Structure","Approach"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><b>↗</b></div>)}</div></div></section>

    <section className="ldRoutes" id="routes"><div><span>04 / FINANCING ROUTES</span><h2>Five routes.<br/><i>One starting point.</i></h2></div><div className="ldRouteSpread">{routes.map((r,i)=><a key={r} href={routeHrefs[i]}><span>0{i+1}</span><h3>{r}</h3><p>Situation, information and common considerations.</p><b>Open ↗</b></a>)}</div></section>

    <section className="ldCompare"><div><span>05 / COMPARISON</span><h2>See the route<br/><i>from both sides.</i></h2></div><div className="ldCompareCards"><article><span>DIRECT</span><h3>One institution first</h3><p>Begin with a familiar institution or product and work through its process and documentation.</p></article><article><span>ADVISORY</span><h3>Situation first</h3><p>Discuss the purpose and constraints, then consider which approaches are worth pursuing.</p></article></div></section>

    <section className="ldClose" id="faq"><span>06 / START A CONVERSATION</span><h2>Bring the situation.<br/><i>We'll start there.</i></h2><a className="inkButton" href="/get-a-free-financing-assessment/">Get a free financing assessment ↗</a></section>
  </main>
}

function Console(){
  const [situation,setSituation]=useState("Growth");
  const [purpose,setPurpose]=useState("Project mobilisation");
  const [stage,setStage]=useState(2);
  const [menu,setMenu]=useState(false);
  const route = useMemo(()=>{
    const table:Record<string,string>={"Growth|Working capital":"Business Financing","Growth|Project mobilisation":"Project & Private Capital","Growth|Trade / receivables":"Trade Financing","Growth|Property-backed":"Property Financing","Bank rejection|Working capital":"Business Financing","Bank rejection|Project mobilisation":"Project & Private Capital","Bank rejection|Trade / receivables":"Trade Financing","Bank rejection|Property-backed":"Property Financing","Existing facilities|Working capital":"Business Financing","Existing facilities|Project mobilisation":"Project & Private Capital","Existing facilities|Trade / receivables":"Trade Financing","Existing facilities|Property-backed":"Property Financing","Complex / non-standard|Working capital":"Business Financing","Complex / non-standard|Project mobilisation":"Project & Private Capital","Complex / non-standard|Trade / receivables":"Trade Financing","Complex / non-standard|Property-backed":"Property Financing"};
    return table[situation+"|"+purpose] || "Business Financing";
  },[situation,purpose]);

  return <main className="concept conceptConsole">
    <header className="coNav"><a href="/" className="consoleBrand"><strong>TBA</strong><span>THE BROKERAGE / ADVISORY</span></a><nav><a href="#diagnostic">Diagnostic</a><a href="#system">Route system</a><a href="#calculator">Planning tool</a><a href="#faq">Questions</a></nav><a className="consoleCta" href="/get-a-free-financing-assessment/">Free assessment ↗</a><button className="consoleMenu" onClick={()=>setMenu(!menu)}>{menu?"×":"☰"}</button>{menu&&<nav className="consoleMobile"><a href="#diagnostic">Diagnostic</a><a href="#system">Route system</a><a href="#calculator">Planning tool</a><a href="#faq">Questions</a><a href="/get-a-free-financing-assessment/">Free assessment ↗</a></nav>}</header>

    <section className="coHero"><div className="coTopline"><span>01 / FINANCING INTELLIGENCE</span><span>LIVE VIEW / ADVISORY MODEL</span></div><div className="coHeroGrid"><div className="coCopy"><small><span/> READY TO DIAGNOSE</small><h1>Find the <i>constraint</i><br/>before the route.</h1><p>Financing starts with understanding the situation. Change the inputs and see how the conversation moves.</p><a className="consolePrimary" href="#diagnostic">Run the diagnostic ↓</a></div><div className="coGraph"><svg viewBox="0 0 680 360" aria-label="Illustrative cash flow graph"><defs><linearGradient id="fade" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopOpacity=".5"/><stop offset="1" stopOpacity="0"/></linearGradient></defs><g className="gridLines"><path d="M0 60H680M0 140H680M0 220H680M0 300H680"/></g><path className="signalA" d="M20 270 C115 252 140 240 220 248 S340 285 430 136 S535 115 660 60"/><path className="signalB" d="M20 110 C115 116 182 151 260 142 S405 105 486 198 S590 235 660 255"/><line className="cursorLine" x1="430" x2="430" y1="35" y2="325"/><circle className="cursorDot" cx="430" cy="136" r="7"/><text x="450" y="132">timing gap</text></svg><div className="graphMetrics"><div><span>OUTFLOW</span><b>S$ 420k</b></div><div><span>RECEIPTS</span><b>S$ 610k</b></div><div><span>GAP</span><b>S$ 190k</b></div></div></div></div></section>

    <section className="coDiagnostic" id="diagnostic"><div className="coDiagTitle"><span>02 / DIAGNOSTIC</span><h2>Change the facts.<br/><i>Watch the route move.</i></h2><p>Directional demonstration only. It is not an approval, pricing or eligibility engine.</p></div><div className="coDiagGrid"><div className="coControls"><label>Situation</label><div className="pillRow">{["Growth","Bank rejection","Existing facilities","Complex / non-standard"].map(x=><button key={x} onClick={()=>setSituation(x)} className={situation===x?"active":""}>{x}</button>)}</div><label>Funding purpose</label><div className="pillRow">{["Working capital","Project mobilisation","Trade / receivables","Property-backed"].map(x=><button key={x} onClick={()=>setPurpose(x)} className={purpose===x?"active":""}>{x}</button>)}</div><label>Process stage</label><input type="range" min="1" max="4" value={stage} onChange={e=>setStage(Number(e.target.value))}/><div className="rangeEnds"><span>Planning</span><span>Underway</span><span>Committed</span><span>Waiting</span></div></div><div className="coOutput"><span>ILLUSTRATIVE ROUTE SIGNAL</span><div className="signalCard"><small>CURRENT SIGNAL</small><h3>{route}</h3><p>The conversation may centre on purpose, timing, existing obligations and the evidence available.</p><a href="/get-a-free-financing-assessment/">Discuss the actual situation ↗</a></div><div className="barSignals"><span style={{width:(35+stage*11)+"%"}}/><span style={{width:(68-stage*5)+"%"}}/><span style={{width:(52+stage*4)+"%"}}/></div><div className="barLabels"><span>Purpose fit</span><span>Timing pressure</span><span>Information readiness</span></div></div></div></section>

    <section className="coSystem" id="system"><div className="coSystemCopy"><span>03 / ROUTE SYSTEM</span><h2>Financing routes are <i>connected.</i></h2><p>One situation can touch several routes. The relevant path becomes clearer when the underlying constraints are explicit.</p></div><div className="network"><div className="networkCore">YOUR<br/><strong>SITUATION</strong></div>{["Business","Trade","Property","Project","Bonds"].map((x,i)=><button key={x} className={"networkNode " + (stage===i+1?"active":"")} onClick={()=>setStage(i+1)} style={{transform:"rotate("+(i*72-72)+"deg) translateY(-170px) rotate("+(72-i*72)+"deg)"}}><span>0{i+1}</span><b>{x}</b></button>)}</div></section>

    <section className="coTool" id="calculator"><div><span>04 / PLANNING TOOL</span><h2>Make the timing gap <i>visible.</i></h2><p>Illustrative only. Actual terms, pricing, tenure and availability depend on the final facility and financier assessment.</p></div><div className="coToolCard"><div className="toolHeader"><span>ILLUSTRATIVE CASE</span><b>PROJECT MOBILISATION</b></div><div className="toolMoney"><div><span>COMMIT</span><b>S$ 240k</b></div><strong>→</strong><div className="gapBox"><span>GAP</span><b>S$ 190k</b></div><strong>→</strong><div><span>RECEIPT</span><b>S$ 610k</b></div></div><input type="range" min="120" max="320" defaultValue="190"/><div className="toolReadout"><span>Funding gap</span><strong>S$ 190,000</strong></div><a href="/tools/monthly-repayment-calculator/">Open repayment calculator ↗</a></div></section>

    <section className="coFaq" id="faq"><div><span>05 / QUESTIONS</span><h2>Good questions make <i>better files.</i></h2></div><div>{["What does a financing advisory do?","Can you help after a bank rejection?","Is The Brokerage Advisory a lender?","Can you work with construction and engineering businesses?"].map((q,i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{["It helps a business understand the financing situation before deciding where and how to approach relevant capital providers.","Yes. The assessment starts with the reason for the decline before considering whether another route is worth pursuing.","No. The Brokerage Advisory is an independent financing advisory and does not lend.","Yes. Project mobilisation, working-capital timing, performance bonds and existing facility constraints are priority situations."][i]}</p></details>)}</div></section>

    <section className="coClose"><span>06 / NEXT STEP</span><h2>Bring the facts.<br/><i>We'll structure the conversation.</i></h2><a className="consolePrimary" href="/get-a-free-financing-assessment/">Get a free financing assessment ↗</a></section>
  </main>
}

function Fieldbook(){
  const [active,setActive]=useState(2);
  const stageData=[
    ["01","Mobilise","Plant, labour and project commitments begin.","OUTFLOW"],
    ["02","Procure","Supplier and subcontractor obligations accumulate.","OUTFLOW"],
    ["03","Progress claim","Work is completed but cash has not returned.","PRESSURE"],
    ["04","Certify","The claim moves through certification.","WAIT"],
    ["05","Payment","Receipts return and the cycle resets.","INFLOW"]
  ];
  const current=stageData[active];

  return <main className="concept conceptFieldbook">
    <header className="fbNav"><Brand/><nav><a href="#field">Field notes</a><a href="#timeline">Timeline</a><a href="#routes">Routes</a><a href="#start">Start</a></nav><a className="fbCta" href="/get-a-free-financing-assessment/">Discuss a project ↗</a><MobileMenu items={["Field notes","Timeline","Routes","Start"]} dark={true}/></header>

    <section className="fbHero" id="field"><div className="fbHeroPhoto"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=86" alt="Construction site"/></div><div className="fbHeroTint"/><div className="fbHeroCopy"><span>01 / CONSTRUCTION + ENGINEERING</span><h1>Built for businesses where project growth moves faster than <i>cash flow.</i></h1><p>Award. Mobilise. Commit. Claim. Wait. The financing question often appears in the gap between work completed and cash received.</p><a href="/construction-engineering-financing/">See construction financing ↗</a></div><div className="fbHeroNote">FIELD NOTE 01<br/><small>SINGAPORE PROJECT CYCLE</small></div></section>

    <section className="fbIntro"><div><span>02 / THE SEQUENCE</span><h2>A project does not move in <i>balance-sheet order.</i></h2></div><p>Real businesses commit cash before they collect it. That mismatch can become a financing pressure point long before the underlying project is unprofitable.</p></section>

    <section className="fbTimeline" id="timeline"><div className="fbRail">{stageData.map((s,i)=><button key={s[0]} onClick={()=>setActive(i)} className={active===i?"active":""} style={{top:(12+i*19)+"%"}}><b>{s[0]}</b></button>)}</div><div className="fbTimelineCopy"><span>03 / LIVE PROJECT CYCLE</span><small>SELECT A STAGE</small><h2>{current[1]}</h2><p>{current[2]}</p><b className="fbPressure">{current[3]}</b><a href="/get-a-free-financing-assessment/">Discuss this timing point ↗</a></div><div className="fbCycle"><div className="cycleCenter"><span>CASH</span><strong>↕</strong><span>TIMING</span></div>{stageData.map((s,i)=><button key={s[0]} onClick={()=>setActive(i)} className={"cycleNode n"+i+" " + (active===i?"active":"")}><span>{s[0]}</span><b>{s[1]}</b></button>)}<div className="cycleArc"/></div></section>

    <section className="fbImageBand"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2100&q=86" alt="Business environment"/><div><span>WORK DOES NOT WAIT FOR CERTIFICATION</span><strong>The file has to explain the timing.</strong></div></section>

    <section className="fbRoutes" id="routes"><div><span>04 / FINANCING PATHWAYS</span><h2>Different routes.<br/><i>Different jobs.</i></h2></div><div className="fbRouteCards">{routes.map((r,i)=><a key={r} href={routeHrefs[i]}><span>0{i+1}</span><h3>{r}</h3><p>{["Working capital, operating needs, equipment","Supplier obligations before customer receipts","Property-backed requirements and larger facilities","Opportunities larger than the current structure","A bond requirement before project work begins"][i]}</p><b>Explore ↗</b></a>)}</div></section>

    <section className="fbDirect"><div><span>05 / THE WORK BEFORE THE FILE</span><h2>The better question is <i>what gets established first.</i></h2></div><div className="fbDirectCards"><article><small>DIRECT</small><h3>Start with a bank or financier.</h3><p>Move directly into one institution's application and documentation process.</p></article><article><small>ADVISORY</small><h3>Start with the situation.</h3><p>Clarify purpose, timing and constraints, then consider which routes are worth approaching.</p></article></div></section>

    <section className="fbStart" id="start"><div className="fbSeal">TBA</div><span>06 / START WITH THE PROJECT</span><h2>Show us where<br/><i>the timing breaks.</i></h2><p>Free initial assessment. No guarantee of approval. Just a clearer starting point.</p><a href="/get-a-free-financing-assessment/">Discuss your project ↗</a></section>
  </main>
}
