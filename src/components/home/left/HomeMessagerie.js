import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import HomeTitle from '../HomeTitle'
import MessagerieLine from './MessagerieLine'

function HomeMessagerie() {
    return(
    <Card style={{marginTop: '50px', paddingRight: '35px', paddingLeft: '35px'}}>
        <HomeTitle text="Messagerie Pro" size="12px" />
        <CardContent>
            <MessagerieLine icon="mail" text="A propos des conditions générales" />
            <MessagerieLine icon="mail" text="Compte rendu de la dernière réunion" />
            <MessagerieLine icon="mail" text="Prochaine mise à jour de l'interface CRM" />
        </CardContent>
        <HomeTitle text="Messagerie Clients" size="12px" />
        <CardContent>
            <MessagerieLine icon="mail" text="A propos des conditions générales" />
            <MessagerieLine icon="mail" text="Problème avec ma batterie" />
            <MessagerieLine icon="mail" text="Suite à notre appel : les obstacles" />
        </CardContent>
    </Card>
    )
}

export default HomeMessagerie