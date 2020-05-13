import React, {useContext} from 'react'
import AlerteColonne from './AlerteColonne'

import {Waiting, Doing, ToCheck, Done} from './AlertesColors'
import { AlertesContext } from '../contexts/AlertesContext'

function AlertesKanban() {

    const {alertes} = useContext(AlertesContext)

    const handleData = (status) => {
        let list = []
        alertes.forEach(item => {
            if(item.status === status) {
                list.push(item)
            } else {
                return false
            }
        })
        return list
    }

    return (
        <div className="alertes_kanban flexed-row-around">
            <AlerteColonne title="En attente" titleStyle={Waiting} data={handleData(1)}/>
            <AlerteColonne title="En cours" titleStyle={Doing} data={handleData(2)}/>
            <AlerteColonne title="A vérifiées" titleStyle={ToCheck} data={handleData(3)}/>
            <AlerteColonne title="Terminées" titleStyle={Done} data={handleData(4)}/>
        </div>
    )
}

export default AlertesKanban