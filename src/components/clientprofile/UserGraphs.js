import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import Title from './cards/components/Title'
import Radar from '../apex/Radar'
import Objectifs from './Objectifs'

import CampaignContextProvider from '../contexts/CampaignContext'

function UserGraphs({user}) {
    return (
        <div className="client_stats_content flexed-row-around">
            <Card className="client_graph">
                <CardContent>
                    <Title text="Cycle de l'utilisateur" />
                    <Radar data={user}/>
                </CardContent>
            </Card>
            <Card className="client_objectifs">
                <CampaignContextProvider>
                    <CardContent>
                        <Title text="Objectifs" button="objectifs" clientId={user.id}/>
                        <Objectifs />
                    </CardContent>
                </CampaignContextProvider>
            </Card>
        </div>
    )
}

export default UserGraphs