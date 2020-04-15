import React from 'react'
import { Card, CardContent } from '@material-ui/core'

import RadialBar from '../apex/RadialBar'
function HomePlanning() {

    return(
        <div className="cards_stats flexed-row-space">
        <Card className="card_stat card_top">
            <CardContent>
                <RadialBar text={"Nouveaux Lead"}/>
            </CardContent>
        </Card>
        <Card className="card_stat card_top">
            <CardContent>
                <RadialBar text={"Nouveaux prospects"}/>
            </CardContent>
        </Card>
        <Card className="card_stat card_top">
            <CardContent>
                <RadialBar text={"Nouveaux clients"}/>
            </CardContent>
        </Card>

        </div>
    )
}

export default HomePlanning