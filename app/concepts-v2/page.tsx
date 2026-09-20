import Link from "next/link";
import styles from "./concepts.module.css";

export default function ConceptsIndex(){
 const cards=[["CHAMBER","/concepts-v2/chamber","Cinematic · architectural · immersive"],["EDITORIAL","/concepts-v2/editorial","Image-led · sophisticated · narrative"],["WORKS","/concepts-v2/works","Financial intelligence · interactive · systems"]];
 return <main className={styles.index}><div className={styles.indexInner}><div className={styles.overline}>THE BROKERAGE / VISUAL LAB</div><h1>Three genuinely different directions.</h1><p>These are complete static frontend concepts. They share the business proposition, not the visual system.</p><div className={styles.indexGrid}>{cards.map(([t,h,d],i)=><Link key={t} href={h} className={styles.indexCard + " " + styles["index_"+i]}><small>0{i+1}</small><strong>{t}</strong><span>{d}</span><b>Open concept ↗</b></Link>)}</div></div></main>;
}