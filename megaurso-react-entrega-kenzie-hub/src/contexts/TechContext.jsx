import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { newTecnologic, setNewTecnologic, getApi } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);

  async function createTecnologic(info) {
    try {
      const response = await api.post("/users/techs", info);
      const newResponse = response.data;
      toast.success("Tecnología adicionada a lista ");
      const newUser = [...newTecnologic, newResponse];
      setNewTecnologic(newUser);
      setModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTecnologic(id) {
    try {
      await api.delete(`/users/techs/${id}`);
      const filterUser = newTecnologic.filter((userId) => userId.id !== id);
      setNewTecnologic(filterUser);
      setModalVisibleEdit(false);
      toast.success("Tecnología excluida");
    } catch (error) {
      console.log(error);
    }
  }

  async function editTecnologic(status) {
    try {
      await api.put(`/users/techs/${currentValue.id}`, status);
      getApi();
      setModalVisibleEdit(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <TechContext.Provider
      value={{
        modalVisible,
        setModalVisible,
        createTecnologic,
        deleteTecnologic,
        editTecnologic,
        modalVisibleEdit,
        setModalVisibleEdit,
        currentValue,
        setCurrentValue,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
