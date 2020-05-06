import React from 'react';

import Donut from '../apex/Donut'
import StackedBars from '../apex/StackedBars'
import { CardContent, Card } from '@material-ui/core';
import CardTitle from '../common/components/CardTitle';

function DataListClients({users}) {
    console.log(users)
    return (
        <div className="list_users_data flexed-row-around">
            <Card>
                <CardTitle text="Etat des utilisateurs" />
                <CardContent>
                    <Donut data={users} />
                </CardContent>
            </Card>
            <Card>
                <CardTitle text="Profil et type de famille" />
                <CardContent>
                    <StackedBars data={users} />
                </CardContent>
            </Card>
        </div>
    )
}

export default DataListClients