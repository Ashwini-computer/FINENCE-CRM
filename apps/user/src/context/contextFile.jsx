// src/context/contextFile.js
import { createContext, useContext, useState } from "react";

// Capitalized context name
const ContextFile = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [EMITableData, setEMITableData] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("otp_verified");
        localStorage.removeItem("loginTime");
        localStorage.removeItem('userinfo'); // remove user info after login 
        setLoggedIn(false);
    };

    return (
        <ContextFile.Provider value={{
            user,
            setUser,
            loggedIn,
            setLoggedIn,
            handleLogout,
            EMITableData,
            setEMITableData
        }}>
            {children}
        </ContextFile.Provider>
    );
};

// Also update here
export const useContextFile = () => useContext(ContextFile);
