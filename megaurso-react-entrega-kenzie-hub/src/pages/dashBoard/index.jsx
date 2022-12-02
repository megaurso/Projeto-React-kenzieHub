import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { api } from "../../services/api";
import { DivDashBoard } from "./style";

export function DashBoard(){
    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState("")

    function getLocalStorage(){
        const token = localStorage.getItem("@TOKEN") || ""

        if(token == ""){
            navigate("/")
        }
        return token
    }

    useEffect(()=>{
        async function getApi(){
            const token = getLocalStorage()
            try {
                const response = await api.get("/profile",{
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                setUserInfo(response.data) 
            } catch (error) {
                console.log(error)
            }
        }getApi()
    },[])

    function removeLocalStorage(){
        const remove = localStorage.removeItem("@TOKEN") && localStorage.removeItem("@USERID")
       
        return remove
    }


    return (
        <DivDashBoard>
        <Header>
            <h1>Kenzie Hub</h1>
            <Link onClick={removeLocalStorage} to={"/"}>Sair</Link>
        </Header>
        <section>
            <h1>Olá, {userInfo.name}</h1>
            <span>{userInfo.course_module}</span>
        </section>
        <main>
            <h1>Que pena! Estamos em desenvolvimento :(</h1>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </main>
        </DivDashBoard>
    )
}