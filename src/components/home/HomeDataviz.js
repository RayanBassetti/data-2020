import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import EmojiMethod from '../common/methods/EmojiMethod'

function HomePlanning() {
    return(
        <Card className="card_dataviz card_top">
            <CardContent>
                {EmojiMethod("calendar")}<p>Rapport d'activité</p>
            </CardContent>
        </Card>
    )
}

export default HomePlanning