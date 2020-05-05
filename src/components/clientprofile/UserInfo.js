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


function ClientProfile({user}) {
    return(
        <>
            <div className="cards_top flexed-row-around">
                <Identity user={user} />
                <Infos user={user} />
            </div>
            <div className="cards_bottom flexed-row-around">
                <MyPower user={user} />
                <ConsProd userId={user.id} />
                <Historique user={user} />
            </div>
        </>
    )
}
 
export default ClientProfile