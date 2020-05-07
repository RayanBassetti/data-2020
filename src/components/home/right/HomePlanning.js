import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import HomeTitle from '../HomeTitle';

function HomePlanning() {
    return(
        <div>
            <HomeTitle text="Aujourd'hui" size="20px" />
            <Card>
                <CardContent>
                    <p>Single Card</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default HomePlanning