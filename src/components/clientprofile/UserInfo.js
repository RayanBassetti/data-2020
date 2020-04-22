import React from 'react';

// import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Identity from './cards/Identity';
import Infos from './cards/Infos';
import MyPower from './cards/MyPower';
import ConsProd from './cards/ConsProd';
import Historique from './cards/Historique';


function ClientProfile(props) {
    return(
        <>
            <div className="cards_top flexed-row-around">
                <Identity props={props} />
                <Infos props={props} />
            </div>
            <div className="cards_bottom flexed-row-around">
                <MyPower props={props} />
                <ConsProd props={props} />
                <Historique props={props} />
            </div>
        </>
    )
}
 
export default ClientProfile