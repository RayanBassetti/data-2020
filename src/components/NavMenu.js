import React from 'react';

class NavMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            valide: false
        }
    }

    render() {
        return(
            <div className="navMain">
                <div className="navMain_header">
                    <img src="" alt="logo engie"></img>
                    <h1 className="mainTitle">Dashboard Engie</h1>
                </div>
            </div>
        )
    }
}

export default NavMenu