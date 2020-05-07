import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {handleProfil, handleFeeling} from '../../common/methods/ConvertIntMethod'

import Feeling from '../../common/components/Feeling';
import ProfilTag from '../../common/components/ProfilTag';

function SingleClient(props) {

    const {data} = props.data;
    return (
        <Card className="single_user">
            <CardContent>
                <p>{data.name}</p>
            </CardContent>
        </Card>
    )
    
    
}

export default SingleClient