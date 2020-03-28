import React, {createContext, useState} from 'react';

function ThemeContextProvider() {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {bg: '#eee'},
        dark: {bg: '#555'}
    })

    return (
        <ThemeContext.Provider value={{...theme}}>
            {this.props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider