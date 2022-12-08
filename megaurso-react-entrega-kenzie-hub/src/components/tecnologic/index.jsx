import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import lixeira  from "../../imgs/Vector.png"

export function Tecnologic({tec}){

    const {deleteTecnologic} = useContext(TechContext)

    return (
        <li key={tec.id}>
                <h3>{tec.title}</h3>
                <div>
                  <span>{tec.status}</span>
                  <img onClick={()=> deleteTecnologic(tec.id)} src={lixeira} alt="Excluir" />
                </div>
        </li>
    )
}