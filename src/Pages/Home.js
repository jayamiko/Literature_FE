// Import React
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

// Import Pages
import AdminPage from './AdminPage/AdminPage'
import SearchPage from "./SearchPage/Search";

export default function Landing() {

    const { stateAuth, dispatch } = useContext(AuthContext);
    console.log(stateAuth.user.status);

    return (
        <>
            {
                stateAuth.user.status === "admin" ? (
                    <>
                        <AdminPage />
                    </>
                ) : (
                    <SearchPage />
                )
            }
        </>
    )
}