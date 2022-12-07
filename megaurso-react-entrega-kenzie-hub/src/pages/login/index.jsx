import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { DivFormLogin } from "./style";
import { useForm } from "react-hook-form";
import { Buttons } from "../../components/buttons";
import { Inputs } from "../../components/inputs";
import { Forms } from "../../components/form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { formSchemaLogin } from "../../lib/yup";


export function Login() {

  const { login } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

 
  return (
    <DivFormLogin>
      <h1>Kenzie Hub</h1>
      <Forms onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <Inputs
            id="email"
            type="email"
            placeholder="Digite seu email"
            register={{ ...register("email") }}
          />
          <p aria-errormessage="error">{errors.email?.message}</p>
          <label htmlFor="pass">Senha</label>
          <Inputs
            id="pass"
            type="password"
            placeholder="Digite sua senha"
            register={{ ...register("password") }}
          />
          <p aria-errormessage="error">{errors.password?.message}</p>
        </div>
        <Buttons type="submit">Entrar</Buttons>
        <span>Ainda não possui uma conta?</span>
        <Link to={"/register"}>Cadastre-se</Link>
      </Forms>
    </DivFormLogin>
  );
}
