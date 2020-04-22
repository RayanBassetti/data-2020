import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Title from './components/Title';
import CardNormalText from './components/CardNormalText'


function Infos(props) {
    const {phone_number, email, address, last_activity} = props.props.user
    return(
        <Card className="card_top">
            <Title text="Informations Client" sub_text={last_activity}/>
            <CardContent className="card_top_content flexed-row">
                <div className="ctc_left fullwidth">
                    <p className="card_subtitle">Contact</p>
                    <CardNormalText title="Téléphone" text={phone_number} />
                    <CardNormalText title="Mail" text={email} />
                    <CardNormalText title="Adresse" text={address} />
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="ctc_right fullwidth">
                    <p className="card_subtitle">Onboarding</p>
                </div>
            </CardContent>
        </Card>
    )
}
 
export default Infos