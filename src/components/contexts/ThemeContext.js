import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({children}) {

    const [theme, setTheme] = useState("light")

    const toggleDisplay = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <ThemeContext.Provider value={{
            theme: theme, 
            toggleDisplay: toggleDisplay
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider