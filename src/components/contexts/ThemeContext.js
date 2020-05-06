import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    componentDidMount() {
        this.setState({
            theme: "light"
        })
    }

    applyTheme = (color) => {
        localStorage.setItem("params", JSON.stringify({theme: color}))
        return this.setState({
            theme: color
        })
    }

    toggleTheme = () => {
        const {theme} = this.state
        theme === "dark" ? this.applyTheme("light") : this.applyTheme("dark");
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