import React, {useContext} from 'react';

import ListClients from './ListClients'
import {ThemeContext} from '../contexts/ThemeContext'
import Header from '../common/components/Header';


function Clients() {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`content ${theme}`}>
            <Header text={"Mes clients"} emoji={"sun"}/>
            <ListClients />
        </div>
    )
}

export default Clients