import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import Spline from '../apex/Spline'
import CardTitle from '../common/components/CardTitle'

function HomePlanning() {
    return(
        <Card className="card_dataviz card_top">
            <CardContent>
                <CardTitle emoji={"calendar"} emWidth={20} emHeight={20} text={"Rapport d'activité"}/>
                <Spline height={200}/>
            </CardContent>
        </Card>
    )
}

export default HomePlanning