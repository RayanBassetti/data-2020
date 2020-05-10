import React from 'react';
import Header from '../common/components/Header'

import AlertesKanban from './AlertesKanban'
import AlertesContextProvider from '../contexts/AlertesContext';

function Alertes() {

    return (
        <div className="content">
            <Header text={"Alertes en cours"} emoji={"clock"}/>
            <AlertesContextProvider>
                <AlertesKanban />
            </AlertesContextProvider>
        </div>

    )
}

export default Alertes