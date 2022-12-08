import { useContext } from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../../components/buttons";
import { Header } from "../../components/header";
import { Modal } from "../../components/modal";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { DivDashBoard } from "./style";

export function DashBoard() {
  const { users,removeLocalStorage } = useContext(UserContext);
  const { modalVisible,setModalVisible } = useContext(TechContext)

  return (
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
          {modalVisible ? <Modal onClose={()=> setModalVisible(false)}/> : null}
        </section>
        <div>
        {/* <h1>Que pena! Você ainda não tem tecnologias</h1> */}
          <ul>
            <li>
              <h3>React JS</h3>
              <span>Intermediário</span>
            </li>
            <li>
              <h3>Next JS</h3>
              <span>Iniciante</span>
            </li>
            <li>
              <h3>Styled-Components</h3>
              <span>Avançado</span>
            </li>
            <li>
              <h3>Chakra UI</h3>
              <span>Iniciante</span>
            </li>
            <li>
              <h3>Chakra UI</h3>
              <span>Iniciante</span>
            </li>
          </ul>
        </div>
      </main>
    </DivDashBoard>
  );
}
