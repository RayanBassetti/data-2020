import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import HomeTitle from '../HomeTitle'
import BarsActivity from '../../apex/BarsActivity';

function Comparatif() {
    return(
        <>
        <HomeTitle text="Comparatif d'activité hebdomadaire" size="12px" />
        <Card>
            <CardContent>
                <BarsActivity />
            </CardContent>
        </Card>
        </>
    )
}

export default Comparatif