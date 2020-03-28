import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        theme: "light"
    }
    toggleTheme = () => {
        this.state.isLightTheme ? this.setState({
            isLightTheme: !this.state.isLightTheme,
            theme: "dark"
        }) : this.setState({
            isLightTheme: !this.state.isLightTheme,
            theme: "light"
        })
    }
    render() {
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider