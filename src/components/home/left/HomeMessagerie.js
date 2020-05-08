import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import HomeTitle from '../HomeTitle'

function HomeMessagerie() {
    return(
    <Card style={{marginTop: '50px', padding: '35px'}}>
        <HomeTitle text="Messagerie Pro" size="12px" />
        <CardContent>
        </CardContent>
        <HomeTitle text="Messagerie Clients" size="12px" />
        <CardContent>
        </CardContent>
    </Card>
    )
}

export default HomeMessagerie