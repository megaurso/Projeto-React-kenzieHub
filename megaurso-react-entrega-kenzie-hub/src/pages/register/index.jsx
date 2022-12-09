import { Link } from "react-router-dom";
import { DivRegister } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Buttons } from "../../components/buttons";
import { Inputs } from "../../components/inputs";
import { Forms } from "../../components/form";
import { Header } from "../../components/header";
import { formSchemaRegister } from "../../lib/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Register() {
  const { myRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <DivRegister>
      <Header>
        <h1>Kenzie Hub</h1>
        <Link to={"/"}>Voltar</Link>
      </Header>
      <Forms onSubmit={handleSubmit(myRegister)}>
        <h2>Crie sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <section>
          <label htmlFor="name">Nome</label>
          <Inputs
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            register={{ ...register("name") }}
          />
          <p aria-errormessage="error">{errors.name?.message}</p>

          <label htmlFor="emai">Email</label>
          <Inputs
            id="emai"
            type="email"
            placeholder="Digite aqui seu email"
            register={{ ...register("email") }}
          />
          <p aria-errormessage="error">{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <Inputs
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            register={{ ...register("password") }}
          />
          <p aria-errormessage="error">{errors.password?.message}</p>

          <label htmlFor="confirmPass">Confirmar Senha</label>
          <Inputs
            id="confirmPass"
            type="password"
            placeholder="Confirme sua senha"
            register={{ ...register("confirmPassword") }}
          />
          <p aria-errormessage="error">{errors.confirmPassword?.message}</p>

          <label htmlFor="bio">Bio</label>
          <Inputs
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            register={{ ...register("bio") }}
          />
          <p aria-errormessage="error">{errors.bio?.message}</p>

          <label htmlFor="contact">Contato</label>
          <Inputs
            id="contact"
            type="text"
            placeholder="Opção de contato"
            register={{ ...register("contact") }}
          />
          <p aria-errormessage="error">{errors.contact?.message}</p>

          <label htmlFor="course_module">Selecionar módulo</label>
          <select {...register("course_module")}>
            <option>Selecione uma opção</option>
            <option value="Primeiro Módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo Módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro Módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto Módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <p aria-errormessage="error">{errors.module?.message}</p>

          <Buttons type="submit">Cadastrar</Buttons>
        </section>
      </Forms>
    </DivRegister>
  );
}
