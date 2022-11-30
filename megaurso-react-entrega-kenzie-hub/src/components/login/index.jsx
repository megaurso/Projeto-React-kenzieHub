import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { DivFormLogin } from "./style";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

export function Login(){

    const formSchema = yup.object().shape({
        email: yup.string().required("Email Obrigatório").email(),
        password: yup.string().required("Senha Obrigatória")
    })

    const {register , handleSubmit , formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    async function postHandleSubmit(data) {
        try {
            console.log(data)
            const response = await api.post("/sessions",data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <DivFormLogin>
            <h1>Kenzie Hub</h1>
            <form onSubmit={handleSubmit(postHandleSubmit)}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Digite seu email" {...register("email")}/>
                    <p aria-errormessage="error">{errors.email?.message}</p>
                    <label htmlFor="pass">Senha</label>
                    <input id="pass" type="password" placeholder="Digite sua senha"  {...register("password")}/>
                    <p aria-errormessage="error">{errors.password?.message}</p>
                </div>
                <button type="submit">Entrar</button>
                <span>Ainda não possui uma conta?</span>
                <Link to={"/register"}>Cadastre-se</Link>
            </form>
        </DivFormLogin>
    )
}