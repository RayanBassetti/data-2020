import React from 'react';

// import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Identity from './cards/Identity';
import Infos from './cards/Infos';


function ClientProfile(props) {
    return(
        <>
            <div className="cards_top flexed-row-around">
                <Identity props={props} />
                <Infos props={props} />
            </div>
            <div className="cards_bottom flexed-row-around">
            </div>
        </>
    )
}
 
export default ClientProfile