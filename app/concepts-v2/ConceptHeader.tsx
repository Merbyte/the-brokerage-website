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

export function ConceptFooter({dark=false}:{dark?:boolean}) {
  return <footer className={styles.conceptFooter + (dark ? " " + styles.conceptFooterDark : "")}>
    <div><ConceptBrand/><p>An independent Singapore financing advisory. Diagnose the situation first, then decide the route.</p></div>
    <nav><a href="/about/">About</a><a href="/how-it-works/">How it works</a><a href="/faq/">FAQ</a><a href="/contact/">Contact</a></nav>
    <div className={styles.footerContact}><a href="tel:+6580118194">+65 8011 8194</a><a href="mailto:admin@thebrokerage-advisory.com">admin@thebrokerage-advisory.com</a><span>31A Lowland Road, Singapore 547424</span></div>
  </footer>;
}