import { Link, useNavigate } from "react-router-dom";
import { DivRegister } from "./style";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"
import { useForm } from "react-hook-form";
import { Buttons } from "../../components/buttons";
import { Inputs } from "../../components/inputs";
import { Forms } from "../../components/form";
import { Header } from "../../components/header";
import { toast } from "react-toastify";

export function Register(){

    const navigate = useNavigate()
    const lowerCaseRegex = /(?=.*[a-z])/
    const upperCaseRegex = /(?=.*[A-Z])/
    const numericRegex = /(?=.*[0-9])/
    const caracterSpecialRegex = /\W|_/;

    const formSchema = yup.object().shape({
        name:yup.string().required("Nome Obrigatório"),
        email: yup.string().required("Email Obrigatório").email("Email invalido"),

        password: yup.string().matches(lowerCaseRegex,"Uma letra minúscula exigida").matches(caracterSpecialRegex,"Um caracter especial exigido")
            .matches(upperCaseRegex,"Uma letra maiúscula exigida").matches(numericRegex,"Um numero exigido")
            .min(8,"Minimo de 8 caracteres na sua senha")
            .required("Senha Obrigatória"),


        confirmPassword: yup.string().oneOf([yup.ref("password")],"Senha tem que ser a mesma").required("Confirmar senha"),

        bio: yup.string().required("Bio obrigatória"),
        
        contact: yup.string().required("Forma para contato obrigatória"),

        course_module: yup.string()
    })

    const {register , handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    async function postHandleSubmit(data) {
        delete data.confirmPassword
        try {
            await api.post("/users",data)
            toast.success("Conta criada com sucesso!")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <DivRegister>
            <Header>
                <h1>Kenzie Hub</h1>
                <Link to={"/"}>Voltar</Link>
            </Header>
            <Forms onSubmit={handleSubmit(postHandleSubmit)}>
                <h2>Crie sua conta</h2>
                <span>Rapido e grátis, vamos nessa</span>
                <section>
                    <label htmlFor="name">Nome</label>
                    <Inputs id="name" type="text" placeholder="Digite aqui seu nome" register={{...register("name")}}/>
                    <p aria-errormessage="error">{errors.name?.message}</p>

                    <label htmlFor="emai">Email</label>
                    <Inputs id="emai" type="email" placeholder="Digite aqui seu email" register={{...register("email")}}/>
                    <p aria-errormessage="error">{errors.email?.message}</p>

                    <label htmlFor="password">Senha</label>
                    <Inputs id="password" type="password" placeholder="Digite aqui sua senha" register={{...register("password")}}/>
                    <p aria-errormessage="error">{errors.password?.message}</p>

                    <label htmlFor="confirmPass">Confirmar Senha</label>
                    <Inputs id="confirmPass" type="password" placeholder="Confirme sua senha" register={{...register("confirmPassword")}}/>
                    <p aria-errormessage="error">{errors.confirmPassword?.message}</p>

                    <label htmlFor="bio">Bio</label>
                    <Inputs id="bio" type="text" placeholder="Fale sobre você" register={{...register("bio")}}/>
                    <p aria-errormessage="error">{errors.bio?.message}</p>

                    <label htmlFor="contact">Contato</label>
                    <Inputs id="contact" type="text" placeholder="Opção de contato" register={{...register("contact")}}/>
                    <p aria-errormessage="error">{errors.contact?.message}</p>

                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select {...register("course_module")}>
                        <option>Selecione uma opção</option>
                        <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo Módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto Módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                    <p aria-errormessage="error">{errors.module?.message}</p>

                    <Buttons type="submit">Cadastrar</Buttons>
                </section>
            </Forms>
        </DivRegister>
    )
}