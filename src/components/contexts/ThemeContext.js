import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    componentDidMount() {
        const params = JSON.parse(localStorage.getItem("params"))
        if(params) {
            this.setState(params)
        } else {
            this.setState({
                isLightTheme: true,
                theme: "light"
            })
        }
    }

    applyTheme = (bool, color) => {
        localStorage.setItem("params", JSON.stringify({isLightTheme: bool, theme: color}))
        return this.setState({
            isLightTheme: bool,
            theme: color
        })
    }

    toggleTheme = () => {
        const {isLightTheme} = this.state
        if(isLightTheme) {
            this.applyTheme(false, "dark")
        } else {
            this.applyTheme(true, "light")
        }
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