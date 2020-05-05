import React, {createContext} from 'react';

export const ListDisplayContext = createContext();

class ListDisplayContextProvider extends React.Component {

    componentDidMount() {
        this.setState({
            theme: "List"
        })
    }

    toggleDisplay = (display) => {
        return this.setState({
            theme: display
        })
    }

    render() {
        return(
            <ListDisplayContext.Provider value={{...this.state, toggleDisplay: this.toggleDisplay}}>
                {this.props.children}
            </ListDisplayContext.Provider>
        )
    }
}

export default ListDisplayContextProvider