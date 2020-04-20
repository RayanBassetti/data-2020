import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Identity from './cards/Identity';
import Title from './cards/Title';


function ClientProfile(props) {
    const {last_activity} = props.data
    return(
        <div className="single_client_content">
            <div className="cards_top flexed-row">
                <Identity props={props} />
                <Card className="card_top">
                    <CardContent>
                    <Title text="Informations Clients" sub_text={last_activity}/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
 
export default ClientProfile