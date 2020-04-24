import React from 'react'
import AlerteColonne from './AlerteColonne'

function AlertesKanban() {
    return (
        <div className="alertes_kanban flexed-row-around">
            <AlerteColonne title="En attente"/>
            <AlerteColonne title="En cours"/>
            <AlerteColonne title="A vérifiées"/>
            <AlerteColonne title="Terminées"/>
        </div>
    )
}

export default AlertesKanban