import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import CardNormalText from '../clientprofile/cards/components/CardNormalText'


function CardKanban() {
    return (
        <Card>
            <CardContent className="flexed-row">
                <div className="ck_checkbox">
                    <input type="checkbox" />
                </div>
                <div className="ck_content">
                    <p className="alerte_title">Dysfonctionnement sur une des batteries</p>
                    <CardNormalText title="Client" text="J. BERNARD"/>
                    <p className="card_content_text card_title_text">Priorité</p>
                    <p className="card_content_text card_subtitle">Ouvert le 28/24 à 25h14</p>
                    <div className="flexed-row">
                        <span>tag</span>
                        <span>tag</span>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}

export default CardKanban