import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    componentDidMount() {
        const params = JSON.parse(localStorage.getItem("params"))
        if(this.emptyObject(params)) {
            this.setState({
                isLightTheme: true,
                theme: "light"
            })
        } else {
            this.setState(params)
        }
    }

    emptyObject = (object) => {
        for(var value in object) {
            if(object.hasOwnProperty(value)) {
                return false
            }
        }
        return true
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