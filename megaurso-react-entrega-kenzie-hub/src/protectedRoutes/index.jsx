import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function ProtectedRoutes() {
  const { users, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return users ? <Outlet /> : <Navigate to="/" />;
}
