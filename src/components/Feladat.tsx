import type { AllapotTipus, TodoTipus } from "../adat"

interface FeladatProps{
    elem:TodoTipus,
  index:number,
  setAllapot:(index:number, allapot:AllapotTipus)=>void
}
function Feladat({elem,index,setAllapot}:FeladatProps) {
  return (
    <div className="todo">
        <span className="szoveg"> | {elem.tennivalo} </span>
        <span className="allapot"> | {elem.allapot} </span>
        <button onClick={()=>setAllapot(index,"kész")} title="kész">KÉSZ</button>
        <button onClick={()=>setAllapot(index,"folyamatban")}title="folyamatban>">FOLYAMATBAN</button>
        <button onClick={()=>setAllapot(index,"törölve")}title="töröl>">TÖRÖL</button>
        <button onClick={()=>setAllapot(index,"létrehozva")} title="alap>">ALAP</button>
    </div>
  )
}

export default Feladat