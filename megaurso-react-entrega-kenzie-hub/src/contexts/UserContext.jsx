import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newTecnologic, setNewTecnologic] = useState(null);

  const navigate = useNavigate();

  async function login(dataUser) {
    try {
      const response = await api.post("/sessions", dataUser);
      const { token, user } = response.data;
      setUsers(user);
      toast.success("Login efetuado com sucesso!");
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", token);
      window.localStorage.setItem("@USERID", user.id);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado tente novamente!");
    }
  }

  async function myRegister(data) {
    delete data.confirmPassword;
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Email ja existe use outro email");
      console.log(error);
    }
  }

  async function getApi() {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get("/profile");
      setUsers(response.data);
      setNewTecnologic(response.data.techs);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getApi();
  }, [newTecnologic]);

  function removeLocalStorage() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  }

  return (
    <UserContext.Provider
      value={{
        login,
        getApi,
        myRegister,
        users,
        loading,
        removeLocalStorage,
        setUsers,
        newTecnologic,
        setNewTecnologic,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
