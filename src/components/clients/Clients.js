import React, {useContext} from 'react';

import ListClients from './ListClients'
import {ThemeContext} from '../contexts/ThemeContext'
import Header from '../common/components/Header';
import ListDisplayContextProvider from '../contexts/ListDisplayContext';


function Clients() {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`content ${theme}`}>
            <Header text={"Mes clients"} emoji={"sun"}/>
            <ListDisplayContextProvider>
                <ListClients />
            </ListDisplayContextProvider>
        </div>
    )
}

export default Clients