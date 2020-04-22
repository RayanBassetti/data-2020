import React, {createContext} from 'react';

export const ClientDisplayContext = createContext();

class ClientDisplayContextProvider extends React.Component {

    componentDidMount() {
        this.setState({
            theme: "Infos"
        })
    }

    applyDisplay = (display) => {
        return this.setState({
            theme: display
        })
    }

    toggleDisplay = () => {
        const {theme} = this.state
        theme === "Infos" ? this.applyDisplay("Stats") : this.applyDisplay("Infos");
    }

    render() {
        return(
            <ClientDisplayContext.Provider value={{...this.state, toggleDisplay: this.toggleDisplay}}>
                {this.props.children}
            </ClientDisplayContext.Provider>
        )
    }
}

export default ClientDisplayContextProvider