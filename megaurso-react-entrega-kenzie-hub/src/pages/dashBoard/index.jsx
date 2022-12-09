import { useContext } from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../../components/buttons";
import { Header } from "../../components/header";
import { Modal } from "../../components/modal";
import { Tecnologic } from "../../components/tecnologic";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { DivDashBoard } from "./style";

export function DashBoard() {
  const { users, removeLocalStorage } = useContext(UserContext);
  const { modalVisible, setModalVisible } = useContext(TechContext);

  return (
    <>
      <DivDashBoard>
        <Header>
          <h1>Kenzie Hub</h1>
          <Link onClick={removeLocalStorage} to={"/"}>
            Sair
          </Link>
        </Header>
        <section>
          <h1>Olá, {users.name}</h1>
          <span>{users.course_module}</span>
        </section>
        <main>
          <section>
            <h2>Tecnologías</h2>
            <Buttons onClick={() => setModalVisible(true)}>+</Buttons>
          </section>
          <div>
            {users.techs?.length > 0 ? (
              <ul>
                {users.techs.map((tec) => (
                  <Tecnologic key={tec.id} tec={tec} />
                ))}
              </ul>
            ) : (
              <h1>Que pena! Você ainda não tem tecnologias</h1>
            )}
          </div>
        </main>
      </DivDashBoard>
      {modalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null}
    </>
  );
}
