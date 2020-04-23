import React from 'react';
// import ProgressBar from '../common/components/ProgressBar';
import ObjectifsProgressBar from './cards/components/ObjectifsProgressBar'
import ObjectifsList from './ObjectifsList'

function Objectifs({data}) {
    return(
        <div className="objectifs_content">
            <p className="card_content_text oc_subtitle">Pas de campagne en cours.</p>
            {data && 
            <>
                <p className="card_content_text oc_subtitle">Campagne lancée le DATE se termine le DATE</p>
                <ObjectifsProgressBar progress={50}/>
                <ObjectifsList />
            </>
            }
        </div>
    )
}

export default Objectifs