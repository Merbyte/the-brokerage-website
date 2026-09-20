import Link from "next/link";
export default function Page(){
  const concepts=[["CHAMBER","/concepts/chamber","Black architecture · cinematic · premium"],["EDITORIAL","/concepts/editorial","Image-led · editorial · composed"],["WORKS","/concepts/works","Finance intelligence · systems · data"]];
  return <main style={{fontFamily:"var(--font-manrope)",padding:"64px",background:"#f5f1e8",minHeight:"100vh"}}>
    <h1 style={{fontSize:"56px",marginBottom:"12px"}}>The Brokerage — visual concepts</h1>
    <p style={{fontSize:"18px",maxWidth:"680px",marginBottom:"40px"}}>Three independent homepage art directions for comparison. These are prototypes, not the final production design.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
      {concepts.map(x=><Link key={x[0]} href={x[1]} style={{display:"block",padding:"32px",background:"#111",color:"#fff",textDecoration:"none",minHeight:"180px"}}>
        <div style={{fontSize:"11px",letterSpacing:".16em"}}>{x[0]}</div><h2 style={{fontSize:"30px",margin:"55px 0 10px"}}>{x[2]}</h2><span>Open concept ↗</span>
      </Link>)}
    </div>
  </main>;
}
