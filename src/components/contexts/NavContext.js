import React, {createContext} from 'react';

export const NavContext = createContext();

class NavContext extends React.Component {

    componentDidMount() {
        console.log(this.props)
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