import React, {useContext} from 'react';

import ListClients from './ListClients'
import {ThemeContext} from '../contexts/ThemeContext'


function Clients() {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`content ${theme}`}>
            <ListClients />
        </div>
    )
}

export default Clients