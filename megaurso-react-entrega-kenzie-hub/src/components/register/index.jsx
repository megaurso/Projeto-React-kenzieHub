import { Link } from "react-router-dom";
import { DivRegister } from "./style";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"
import { useForm } from "react-hook-form";

export function Register(){
    const lowerCaseRegex = /(?=.*[a-z])/
    const upperCaseRegex = /(?=.*[A-Z])/
    const numericRegex = /(?=.*[0-9])/
    const caracterSpecialRegex = /\W|_/;

    const  formSchema = yup.object().shape({
        name: yup.string().required("Nome Obrigatório"),
        email: yup.string().lowercase().required("Email Obrigatório").email(),
        password: yup.string().matches(lowerCaseRegex,"Uma letra minúscula exigida").matches(caracterSpecialRegex,"Um caracter especial exigido")
        .matches(upperCaseRegex,"Uma letra maiúscula exigida").matches(numericRegex,"Um numero exigido")
        .min(8,"Minimo de 8 caracteres na sua senha")
        .required("Senha Obrigatória"),
        confirmPassword: yup.string().oneOf([yup.ref("password")],"Senha tem que ser a mesma").required("Confirmar senha"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Forma para contato obrigatória"),
        course_module: yup.string().required("Selecione uma opção")

    })

    const {register , handleSubmit , formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    async function postHandleSubmit(data) {
        try {
            console.log(data)
            const response = await api.post("/users",data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <DivRegister>
            <header>
                <h1>Kenzie Hub</h1>
                <Link to={"/"}>Voltar</Link>
            </header>
            <form onSubmit={handleSubmit(postHandleSubmit)}>
                <h2>Crie sua conta</h2>
                <span>Rapido e grátis, vamos nessa</span>
                <section>
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
                    <p aria-errormessage="error">{errors.name?.message}</p>

                    <label htmlFor="emai">Email</label>
                    <input id="emai" type="email" placeholder="Digite aqui seu email" {...register("email")}/>
                    <p aria-errormessage="error">{errors.email?.message}</p>

                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                    <p aria-errormessage="error">{errors.password?.message}</p>

                    <label htmlFor="confirmPass">Confirmar Senha</label>
                    <input id="confirmPass" type="password" placeholder="Confirme sua senha" {...register("confirmPassword")}/>
                    <p aria-errormessage="error">{errors.confirmPassword?.message}</p>

                    <label htmlFor="bio">Bio</label>
                    <input id="bio" type="text" placeholder="Fale sobre você" {...register("bio")}/>
                    <p aria-errormessage="error">{errors.bio?.message}</p>

                    <label htmlFor="contact">Contato</label>
                    <input id="contact" type="text" placeholder="Opção de contato" {...register("contact")}/>
                    <p aria-errormessage="error">{errors.contact?.message}</p>

                    <label htmlFor="select">Selecionar módulo</label>
                    <select id="select" {...register("course_module")}>
                        <option>Primeiro módulo (Introdução ao Frontend)</option>
                        <option>Segundo módulo (Frontend Avançado)</option>
                        <option>Terceiro módulo (Introdução ao Backend)</option>
                        <option>Quarto módulo (Backend Avançado)</option>
                    </select>
                    <p aria-errormessage="error">{errors.module?.message}</p>

                    <button type="submit">Cadastrar</button>
                </section>
            </form>
        </DivRegister>
    )
}