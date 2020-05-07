import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withRouter } from 'react-router-dom';
import { handleFeeling, handleProfil, handleFamily } from '../../common/methods/ConvertIntMethod';

import Feeling from '../../common/components/Feeling'
import ProfilTag from '../../common/components/ProfilTag'

function SingleClient(props) {
    const handleId = (idClient, user) => {
        delete user.tableData
        props.history.push(`/clients/${idClient}`, user)
    }
    const align = {
        alignItems: 'center'
    }

    const {data} = props.data
    console.log(props)
    return (
        <Card className="single_user" onClick={() => handleId(data.id, data)} style={{width: '15%', cursor: 'pointer'}}>
            <CardContent>
                <div className="flexed-row-around" style={align}>
                    <p>{data.name}</p>
                    <Feeling feeling={handleFeeling(data.feeling)} />
                </div>
                <div className="flexed-row-around" style={align}>
                <ProfilTag text={handleProfil(data.profil)} />
                <ProfilTag text={handleFamily(data.famille)} />
                </div>
            </CardContent>
        </Card>
    )
    
    
}

export default withRouter(SingleClient)