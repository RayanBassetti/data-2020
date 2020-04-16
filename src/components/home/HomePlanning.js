import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import CardTitle from '../common/components/CardTitle'

function HomePlanning() {
    return(
        <Card className="card_planning card_top">
            <CardContent>
                <CardTitle emoji={"memo"} emWidth={20} emHeight={20} text={"Mes tâches"}/>
            </CardContent>
        </Card>
    )
}

export default HomePlanning