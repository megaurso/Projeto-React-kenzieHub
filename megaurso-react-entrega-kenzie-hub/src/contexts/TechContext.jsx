import { useState } from "react";
import { createContext } from "react";

export const TechContext = createContext({})

export function TechProvider({children}){

    const [modalVisible, setModalVisible] = useState(false)


    return(
        <TechContext.Provider value={{modalVisible,setModalVisible}}>
            {children}
        </TechContext.Provider>
    )

}