import React, {useState, useContext, useEffect} from 'react';
// import ProgressBar from '../common/components/ProgressBar';
import ObjectifsProgressBar from './cards/components/ObjectifsProgressBar'
import ObjectifsList from './ObjectifsList'
import { Button } from '@material-ui/core';

import {CampaignContext} from '../contexts/CampaignContext'

function Objectifs({userId}) {
    const [objectifs, setObjectifs] = useState([])

    const {campaignData, fetchCampaign} = useContext(CampaignContext)

    useEffect(() => {
        fetchCampaign(userId)
    }, [userId])

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
                <p className="card_content_text oc_subtitle">Campagne lancée le {campaignData.starting_date} se termine le {campaignData.ending_date}</p>
                <ObjectifsProgressBar progress={50}/>
                <ObjectifsList objectifs={objectifs}/>
            </>
            }
        </div>
    )
}

export default Objectifs