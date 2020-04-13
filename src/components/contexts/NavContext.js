import React, {createContext} from 'react';

export const NavContext = createContext();

class NavContext extends React.Component {

    componentDidMount() {

    }


    render() {
        return(
            <NavContext.Provider value={{...this.state}}>
            {this.props.children}
            </NavContext.Provider>
        )
    }
}

export default NavContext