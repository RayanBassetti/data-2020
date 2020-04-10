import React, {useContext} from 'react';

import ListClients from './ListClients'
import {ThemeContext} from '../contexts/ThemeContext'


function Home() {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`content ${theme}`}>
            <ListClients />
        </div>
    )
}

export default Home