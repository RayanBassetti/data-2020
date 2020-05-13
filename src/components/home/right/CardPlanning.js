import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import HomeTitle from '../HomeTitle';

function CardPlanning({title}) {
    return (
        <Card style={{width: '80%', marginTop: '5%'}}>
            <CardContent>
                <HomeTitle text={title} size="12px" />
            </CardContent>
        </Card>
    )
}

export default CardPlanning