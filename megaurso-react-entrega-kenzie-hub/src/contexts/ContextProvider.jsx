import { TechProvider } from "./TechContext";
import { UserProvider } from "./UserContext";

export function ContextProvider({children}) {
    return(
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>
    )
}