import React, {createContext, useState} from 'react';

export const ListDisplayContext = createContext();

function ListDisplayContextProvider({children}) {
    const [theme, setTheme] = useState("List")

    const toggleDisplay = (display) => {
        setTheme(display)
    }

    return (
        <ListDisplayContext.Provider value={{
            theme: theme, 
            toggleDisplay: toggleDisplay
        }}>
            {children}
        </ListDisplayContext.Provider>
    )
}

export default ListDisplayContextProvider