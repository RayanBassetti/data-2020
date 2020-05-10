import React from 'react';
import Header from '../common/components/Header'

import AlertesKanban from './AlertesKanban'

function Alertes() {

    const data = [
        {
            title: "Oui",
            client_name: "Jean_Bernard",
            tags: ["Oui", "Non"],
            status: 1
        },
        {
            title: "Oui",
            client_name: "Jean_Bernard",
            tags: ["Oui", "Non"],
            status: 1
        },
        {
            title: "Oui",
            client_name: "Jean_Bernard",
            tags: ["Oui", "Non"],
            status: 1
        },
        {
            title: "Oui",
            client_name: "Jean_Bernard",
            tags: ["Oui", "Non"],
            status: 2
        },
        {
            title: "Oui",
            client_name: "Jean_Bernard",
            tags: ["Oui", "Non"],
            status: 3
        },
        {
            title: "Oui",
            client_name: "Jean_Bernard",
            tags: ["Oui", "Non"],
            status: 4
        },
    ]


    return (
        <div className="content">
            <Header text={"Alertes en cours"} emoji={"clock"}/>
            <AlertesKanban data={data}/>
        </div>

    )
}

export default Alertes