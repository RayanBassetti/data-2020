import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Title from './components/Title';
import LineLabels from '../../apex/LineLabels';

const cardSpecs = {
    width: '500px'
}

function ConsProd({userId}) {
    return(
        <Card className="card_bottom" style={cardSpecs}>
            <Title text="Consommation et production"/>
            <CardContent className="card_bottom_content flexed-row" style={{width: '100%'}}>
                <LineLabels userId={userId} />
            </CardContent>
        </Card>
    )
}
 
export default ConsProd