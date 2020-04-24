import React from 'react';
import Header from '../common/components/Header'

import AlertesKanban from './AlertesKanban'

function Alertes() {
    return (
        <div className="content">
            <Header text={"Alertes en cours"} emoji={"clock"}/>
            <AlertesKanban />
        </div>

    )
}

export default Alertes