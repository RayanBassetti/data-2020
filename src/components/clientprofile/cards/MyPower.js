import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import CardNormalText from './components/CardNormalText';
import Title from './components/Title';

const cardSpecs = {
    width: '400px'
}

function MyPower({user}) {
    const {engie_time, nb_panneaux, gender, facture} = user
    
    return(
        <Card className="card_bottom" style={cardSpecs}>
            <Title text="Client MyPower"/>
            <CardContent className="card_bottom_content flexed-row">
                <div className="fullwidth">
                    <p className="card_subtitle">Informations</p>
                    <CardNormalText title="Client chez Engie depuis" text={engie_time} />
                    <CardNormalText title="Factures" text={facture} />
                    <CardNormalText title="Appareils" text={gender} />
                    <CardNormalText title="Dernier entretien" text={gender} />
                    <CardNormalText title="Nombre de panneaux" text={nb_panneaux} />
                </div>
            </CardContent>
        </Card>
    )
}
 
export default MyPower