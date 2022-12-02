import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { DivFormLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Buttons } from "../../components/buttons";
import { Inputs } from "../../components/inputs";
import { Forms } from "../../components/form";
import { toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email(),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function postHandleSubmit(data) {
    try {
      const response = await api.post("/sessions", data);
      toast.success("Login efetuado com sucesso!");
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado tente novamente!");
    } finally {
    }
  }

  return (
    <DivFormLogin>
      <h1>Kenzie Hub</h1>
      <Forms onSubmit={handleSubmit(postHandleSubmit)}>
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
