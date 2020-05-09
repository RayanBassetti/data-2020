import React from 'react';
import HomeTitle from '../HomeTitle';
import CardPlanning from './CardPlanning'
function HomePlanning() {
    return(
        <>
            <HomeTitle text="Aujourd'hui" size="20px" />
            <CardPlanning title="Mes RDV" />
            <CardPlanning title="Mes campagnes" />
            <CardPlanning title="Prise de contact" />
            <CardPlanning title="Réunion" />
            <CardPlanning title="Alertes en cours" />
        </>
    )
}

export default HomePlanning