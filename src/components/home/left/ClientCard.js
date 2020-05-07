import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import ProfilTag from '../../common/components/ProfilTag'

function ClientCard() {
    return(
        <div>
            <p className="card_content_text card_title_text" style={{width: '100%', textTransform: 'uppercase'}}>DERNIER PROFIL CONSULTÉ</p>
            <Card>
                <CardContent className="flexed-row-around">
                    <div>
                        <p className="card_content_text">name</p>
                        <p className="card_content_text">Dernière activité: last_activity</p>
                        <p className="card_content_text">Etat de l'alerte</p>
                        <p >client_alerte</p>
                        <p className="card_content_text">Priorité</p>
                        <p>priority</p>
                    </div>
                    <div>
                        <div className="flexed-row-space">
                            <ProfilTag text="Eco." />
                            <ProfilTag text="Eco." />
                        </div>
                        <p>client_messages</p>
                        <p>feeling</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ClientCard