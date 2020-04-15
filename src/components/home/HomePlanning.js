import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import EmojiMethod from '../common/methods/EmojiMethod'

function HomePlanning() {
    return(
        <Card className="card_planning card_top">
            <CardContent>
                {EmojiMethod("memo")}<p>Mes tâches</p>
            </CardContent>
        </Card>
    )
}

export default HomePlanning