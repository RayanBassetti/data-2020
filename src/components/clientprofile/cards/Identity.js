import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ProfilTag from '../../common/components/ProfilTag';
import Feeling from '../../common/components/Feeling';
import { handleProfil, handleFamily, handleFeeling } from '../../common/methods/ConvertIntMethod';
import ProgressBar from '../../common/components/ProgressBar';
import CardNormalText from './components/CardNormalText';
// import Title from './components/Title';



function Identity(props) {
    const {id, name, birthdate, gender, profil, famille, feeling, satisfaction, relation} = props.props.user
    return(
        <Card className="card_top">
            {/* <Title text="Test"/> */}
            <CardContent className="card_top_content flexed-row">
                <div className="ctc_left fullwidth">
                    <p className="card_subtitle">Identité</p>
                    <CardNormalText title="ID" text={id} />
                    <CardNormalText title="Prénom/Nom" text={name} />
                    <CardNormalText title="Naissance" text={birthdate} />
                    <CardNormalText title="Genre" text={gender} />
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="ctc_right fullwidth">
                    <p className="card_subtitle">Profils</p>
                    <div className="ctc_right_content">
                        <div className="ctc_right_subpart flexed-row-space">
                            <ProfilTag text={handleProfil(profil)} />
                            <ProfilTag text={handleFamily(famille)} />
                            <Feeling feeling={handleFeeling(feeling)} />
                        </div>
                        <div className="ctc_right_subpart">
                            <div className="flexed-row-space"><span className="card_content_text card_title_text">Satisfaction</span><ProgressBar width={satisfaction}/></div>
                            <div className="flexed-row-space"><span className="card_content_text card_title_text">Relation</span><ProgressBar width={relation}/></div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
 
export default Identity