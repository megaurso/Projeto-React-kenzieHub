import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/dashBoard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { ProtectedRoutes } from "../protectedRoutes";

export function RoutesMain(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<DashBoard/>}/>
            </Route>
        </Routes>
    )
}