import React from 'react';
import { Card, CardContent } from '@material-ui/core';

function ClientCard() {
    return(
        <div>
            <p className="card_content_text card_title_text">DERNIER PROFIL CONSULTÉ</p>
            <Card>
                <CardContent>
                    <h1>Profil</h1>
                </CardContent>
            </Card>
        </div>
    )
}

export default ClientCard