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


function Identity(props) {
    const {id, name, birthdate, gender, profil, famille, feeling, satisfaction, relation} = props.props.data
    return(
        <Card className="card_top">
            <CardContent className="card_top_content flexed-row">
                <div className="infos fullwidth">
                    <p className="card_subtitle">Identité</p>
                    <p><span className="bold_title">ID</span> {id}</p>
                    <p><span className="bold_title">Prénom/Nom</span> {name}</p>
                    <p><span className="bold_title">Naissance</span>  {birthdate}</p>
                    <p><span className="bold_title">Genre</span>  {gender}</p>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="scoring fullwidth">
                    <p className="card_subtitle">Profils</p>
                    <div className="scoring_subpart flexed-row-space">
                        <p><ProfilTag text={handleProfil(profil)} /></p>
                        <p><ProfilTag text={handleFamily(famille)} /></p>
                        <p><Feeling feeling={handleFeeling(feeling)} /></p>
                    </div>
                    <div className="scoring_subpart">
                        <p className="flexed-row-space"><span className="bold_title">Satisfaction</span><ProgressBar width={satisfaction}/></p>
                        <p className="flexed-row-space"><span className="bold_title">Relation</span><ProgressBar width={relation}/></p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
 
export default Identity