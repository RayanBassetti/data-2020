import React from 'react';

import Donut from '../apex/Donut'
import StackedBars from '../apex/StackedBars'

function DataListClients({users}) {
    console.log(users)
    return (
        <>
            <Donut data={users} />
            <StackedBars data={users} />
        </>
    )
}

export default DataListClients