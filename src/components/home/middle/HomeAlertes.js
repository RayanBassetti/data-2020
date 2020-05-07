import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import HomeTitle from '../HomeTitle';

function HomeAlertes() {
    return(
        <Card style={{marginTop: '50px'}}>
            <CardContent>
                <HomeTitle text="Alertes cette semaine" size="12px" />

            </CardContent>
        </Card>
    )
}

export default HomeAlertes