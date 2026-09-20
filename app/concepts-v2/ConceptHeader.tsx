import { AssessmentCta } from "@/components/home/AssessmentCta";
import styles from "./concepts.module.css";

export function ConceptBrand() {
  return <a className={styles.brand} href="/"><span>THE BROKERAGE</span><small>ADVISORY</small></a>;
}

export function LightHeader({variant}:{variant:"editorial"|"works"}) {
  return <header className={styles.lightHeader}>
    <ConceptBrand/>
    <nav><a href="#story">Story</a><a href="#works">Works</a><a href="#method">Method</a><a href="#routes">Routes</a></nav>
    <a className={styles.headerCta} href="/get-a-free-financing-assessment/">Get an assessment ↗</a>
  </header>;
}

export function DarkHeader() {
  return <header className={styles.darkHeader}>
    <ConceptBrand/>
    <nav><a href="#situations">Situations</a><a href="#construction">Construction</a><a href="#method">Method</a><a href="#routes">Routes</a></nav>
    <a className={styles.headerCta} href="/get-a-free-financing-assessment/">Get an assessment ↗</a>
  </header>;
}

export function MobileHeader({dark=false}:{dark?:boolean}) {
  return <details className={styles.mobileHeader}>
    <summary><ConceptBrand/><span>Menu +</span></summary>
    <nav className={styles.mobileNav}><a href="#situations">Situations</a><a href="#construction">Construction</a><a href="#method">Method</a><a href="#routes">Routes</a><a href="#comparison">Compare</a><a href="#start">Start</a></nav>
  </details>;
}

export function Cta({children="Get a Free Financing Assessment"}:{children?:string}) {
  return <a className={styles.primaryCta} href="/get-a-free-financing-assessment/">{children} <span>↗</span></a>;
}