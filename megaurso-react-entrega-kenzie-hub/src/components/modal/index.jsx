import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { formSchemaModal } from "../../lib/yup";
import { Buttons } from "../buttons";
import { Forms } from "../form";
import { Header } from "../header";
import { Inputs } from "../inputs";
import { DivModal, DivModalEdit } from "./style";

export function Modal({ id = "modal", onClose }) {
  const { createTecnologic } = useContext(TechContext);

  function handleOutSideClick(event) {
    if (event.target.id === id) {
      onClose();
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaModal),
  });

  return (
    <DivModal id={id} onClick={handleOutSideClick}>
      <div>
        <Header>
          <h2>Cadastrar Tecnologia</h2>
          <Buttons onClick={onClose}>X</Buttons>
        </Header>
        <Forms onSubmit={handleSubmit(createTecnologic)}>
          <label htmlFor="tecnologia">Nome</label>
          <Inputs
            register={{ ...register("title") }}
            id={"tecnologia"}
            type={"text"}
            placeholder={"Dige o assunto"}
          ></Inputs>
          <p aria-errormessage="error">{errors.title?.message}</p>
          <label htmlFor="select">Selecionar status</label>
          <select {...register("status")} id="select">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p aria-errormessage="error">{errors.status?.message}</p>
          <Buttons type="submit">Cadastrar Tecnologia</Buttons>
        </Forms>
      </div>
    </DivModal>
  );
}

export function ModalEdit({ id = "modalEdit", onClose, currentValue }) {
  const { editTecnologic, deleteTecnologic } = useContext(TechContext);

  function handleOutSideClick(event) {
    if (event.target.id === id) {
      onClose();
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <DivModalEdit id={id} onClick={handleOutSideClick}>
      <div>
        <Header>
          <h2>Tecnologia Detalhes</h2>
          <Buttons onClick={onClose}>X</Buttons>
        </Header>
        <Forms onSubmit={handleSubmit(editTecnologic)}>
          <label htmlFor="tecnologia">Nome</label>
          <Inputs
            readOnly
            value={currentValue.title}
            id={"tecnologia"}
            type={"text"}
            placeholder={"Digite o assunto"}
          ></Inputs>
          <p aria-errormessage="error">{errors.title?.message}</p>
          <label htmlFor="select">Status</label>
          <select {...register("status")} id="select">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p aria-errormessage="error">{errors.status?.message}</p>
          <div>
            <Buttons type="submit">Salvar alterações</Buttons>
            <Buttons onClick={() => deleteTecnologic(currentValue.id)}>
              Excluir
            </Buttons>
          </div>
        </Forms>
      </div>
    </DivModalEdit>
  );
}
