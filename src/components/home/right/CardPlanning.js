import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import HomeTitle from '../HomeTitle';

function CardPlanning({title}) {
    return (
        <Card>
            <CardContent>
                <HomeTitle text={title} size="12px" />
            </CardContent>
        </Card>
    )
}

export default CardPlanning