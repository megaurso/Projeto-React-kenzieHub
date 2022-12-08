import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({})

export function TechProvider({children}){

    const [modalVisible, setModalVisible] = useState(false)

    
    async function createTecnologic(info){
        try {
            await api.post("/users/techs",info)
            toast.success("Tecnología adicionada a lista ")
            setModalVisible(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteTecnologic(id){
        try {
            await api.delete(`/users/techs/${id}`)
            toast.success("Tecnología excluida")
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <TechContext.Provider value={{modalVisible,setModalVisible, createTecnologic,deleteTecnologic}}>
            {children}
        </TechContext.Provider>
    )

}