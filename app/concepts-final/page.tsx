import Link from "next/link";
import styles from "./conceptStyles.module.css";

const concepts = [
  ["01","CHAMBER","Cinematic advisory environment","Full-bleed imagery, oversized type, spatial navigation and scroll-led reveals","/concepts-final/chamber"],
  ["02","LEDGER","Editorial finance narrative","Image-led stories, magazine rhythm, asymmetric grids and live story switching","/concepts-final/ledger"],
  ["03","CONSOLE","Interactive financing intelligence","Diagnostic controls, live route signals, cash-flow visualisation and touch-first UI","/concepts-final/console"],
  ["04","FIELDBOOK","Project & construction story","Documentary imagery, project timeline, timing-gap visualisation and field notes","/concepts-final/fieldbook"],
];

export default function ConceptsIndex(){
  return <main className={styles.lab}>
    <header className={styles.labHeader}><span>THE BROKERAGE / HOMEPAGE LAB</span><span>04 RESPONSIVE DIRECTIONS</span></header>
    <section className={styles.labHero}><p>ONE BUSINESS. FOUR EXPERIENCES.</p><h1>Same proposition.<br/><i>Different website.</i></h1><span>Open each direction and judge it as a real mobile + desktop homepage, not a static mockup.</span></section>
    <section className={styles.labGrid}>{concepts.map(([n,name,title,desc,href])=><Link key={name} href={href} className={styles.labCard}><span>{n}</span><div><strong>{name}</strong><em>↗</em></div><h2>{title}</h2><p>{desc}</p><b>View concept</b></Link>)}</section>
  </main>;
}
