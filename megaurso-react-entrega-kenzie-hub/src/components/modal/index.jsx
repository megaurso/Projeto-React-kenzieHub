import { Buttons } from "../buttons";
import { Forms } from "../form";
import { Header } from "../header";
import { Inputs } from "../inputs";
import { DivModal } from "./style";

export function Modal({id = "modal",onClose}){

    function handleOutSideClick(event){
        if(event.target.id === id){
            onClose()
        }       
    }

    return(
        <DivModal id={id} onClick={handleOutSideClick}>
            <div>
                <Header>
                    <h2>Cadastrar Tecnologia</h2>
                    <Buttons onClick={onClose}>X</Buttons>
                </Header>
                <Forms>
                    <label htmlFor="tecnologia">Nome</label>
                    <Inputs id={"tecnologia"} type={"text"} placeholder={"Dige o assunto"}></Inputs>
                    <label htmlFor="select">Selecionar status</label>
                    <select id="select">
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <Buttons type="submit">Cadastrar Tecnologia</Buttons>
                </Forms>
            </div>
        </DivModal>
    )
}