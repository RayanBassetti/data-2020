import React, {createContext, useState} from 'react';

export const ClientDisplayContext = createContext();

function ClientDisplayContextProvider({children}) {

    const [theme, setTheme] = useState("Infos")

    const toggleDisplay = () => {
        theme === "Infos" ? setTheme("Stats") : setTheme("Infos");
    }

    return(
        <ClientDisplayContext.Provider value={{
            theme: theme, 
            toggleDisplay: toggleDisplay
        }}>
            {children}
        </ClientDisplayContext.Provider>
    )
}

export default ClientDisplayContextProvider