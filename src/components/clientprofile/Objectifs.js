import React, {useState, useContext} from 'react';
// import ProgressBar from '../common/components/ProgressBar';
import ObjectifsProgressBar from './cards/components/ObjectifsProgressBar'
import ObjectifsList from './ObjectifsList'
import { Button } from '@material-ui/core';

import {CampaignContext} from '../contexts/CampaignContext'

function Objectifs() {
    const [objectifs, setObjectifs] = useState([])

    const {campaignData} = useContext(CampaignContext)
    console.log(campaignData)

    const addNewObjectif = () => {
        let item = {title: "Lorem Ipsum", text: "Faire les courses", status: false}
        setObjectifs(objectifs => [...objectifs, item])
    }

    return(
        <div className="objectifs_content">
            <Button variant="outlined" onClick={() => addNewObjectif()}>add objectif</Button>
            {!campaignData && 
            <p className="card_content_text oc_subtitle">Pas de campagne en cours.</p>
            }
            {campaignData && 
            <>
                <p className="card_content_text oc_subtitle">Campagne lancée le {campaignData[0].starting_date} se termine le {campaignData[0].ending_date}</p>
                <ObjectifsProgressBar progress={50}/>
                <ObjectifsList objectifs={objectifs}/>
            </>
            }
        </div>
    )
}

export default Objectifs