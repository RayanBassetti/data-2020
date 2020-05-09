import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import HomeTitle from '../HomeTitle'
import MessagerieLine from './MessagerieLine'

function HomeMessagerie() {
    return(
    <Card style={{marginTop: '50px', paddingRight: '35px', paddingLeft: '35px'}}>
        <HomeTitle text="Messagerie Pro" size="12px" />
        <CardContent>
            <MessagerieLine icon="mail" text="Lorem ipsum dolor sit amet." />
            <MessagerieLine icon="mail" text="Lorem ipsum dolor sit amet." />
            <MessagerieLine icon="mail" text="Lorem ipsum dolor sit amet." />
        </CardContent>
        <HomeTitle text="Messagerie Clients" size="12px" />
        <CardContent>
            <MessagerieLine icon="mail" text="Lorem ipsum dolor sit amet." />
            <MessagerieLine icon="mail" text="Lorem ipsum dolor sit amet." />
            <MessagerieLine icon="mail" text="Lorem ipsum dolor sit amet." />
        </CardContent>
    </Card>
    )
}

export default HomeMessagerie