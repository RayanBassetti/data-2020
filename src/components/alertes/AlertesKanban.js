import React from 'react'
import AlerteColonne from './AlerteColonne'

import {Waiting, Doing, ToCheck, Done} from './AlertesColors'

function AlertesKanban() {
    return (
        <div className="alertes_kanban flexed-row-around">
            <AlerteColonne title="En attente" titleStyle={Waiting}/>
            <AlerteColonne title="En cours" titleStyle={Doing}/>
            <AlerteColonne title="A vérifiées" titleStyle={ToCheck}/>
            <AlerteColonne title="Terminées" titleStyle={Done}/>
        </div>
    )
}

export default AlertesKanban