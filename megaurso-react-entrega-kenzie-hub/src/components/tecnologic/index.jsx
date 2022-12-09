import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import lixeira from "../../imgs/Vector.png";
import { Buttons } from "../buttons";
import { Modal, ModalEdit } from "../modal";

export function Tecnologic({ tec }) {
  const {
    deleteTecnologic,
    modalVisible,
    setModalVisible,
    modalVisibleEdit,
    setModalVisibleEdit,
    currentValue,
    setCurrentValue,
  } = useContext(TechContext);

  return (
    <>
      <li key={tec.id}>
        <h3>{tec.title}</h3>
        <div>
          <span>{tec.status}</span>
          <Buttons
            onClick={() => {
              setModalVisibleEdit(true);
              setCurrentValue(tec);
            }}
          >
            Editar
          </Buttons>
          <img
            onClick={() => deleteTecnologic(tec.id)}
            src={lixeira}
            alt="Excluir"
          />
        </div>
      </li>
      {modalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null}
      {modalVisibleEdit ? (
        <ModalEdit
          currentValue={currentValue}
          onClose={() => setModalVisibleEdit(false)}
        />
      ) : null}
    </>
  );
}
