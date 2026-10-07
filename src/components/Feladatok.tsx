import type { AllapotTipus, TodoTipus } from '../adat'
import Feladat from './Feladat'

type FeladatokProps = {
    lista: TodoTipus[]
    setAllapot: (index: number, allapot: AllapotTipus) => void
}

function Feladatok({ lista, setAllapot }: FeladatokProps) {
    return (
        <div>
            {
                lista.map((elem, index) => (
                    <Feladat elem={elem} index={index} key={index} />
                ))
            }
        </div>
    )
}

export default Feladatok