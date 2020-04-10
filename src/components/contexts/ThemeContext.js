import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    componentDidMount() {
        const params = JSON.parse(localStorage.getItem("params"))
        if(Object.keys(params).length === 0 || !params) {
            this.setState({
                theme: "light"
            })
        } else {
            this.setState(params)
        }
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