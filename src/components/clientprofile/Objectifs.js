import React, {useState, useContext, useEffect} from 'react';
// import ProgressBar from '../common/components/ProgressBar';
import ObjectifsProgressBar from './cards/components/ObjectifsProgressBar'
import ObjectifsList from './ObjectifsList'
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';

import {CampaignContext} from '../contexts/CampaignContext'

function Objectifs({userId}) {

    const [open, setOpen] = useState(false)

    const {campaignData, fetchCampaign, objectifs, createObjectif, fetchObjectifs} = useContext(CampaignContext)

    useEffect(() => {
        fetchCampaign(userId)
        fetchObjectifs(userId)
    }, [campaignData, objectifs])

    const handleSubmit = (id, title, text) => {
        setOpen(false)
        createObjectif(id, title, text)
    }

    return(
        <div className="objectifs_content">
            <Button variant="outlined" onClick={() => setOpen(true)}>add objectif</Button>
            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Créer un nouvel objectif</DialogTitle>
                    <DialogContent>
                        <TextField/>
                        <TextField />
                    </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => setOpen(false)}>Annuler</Button>
                    <Button variant="outlined" onClick={() => handleSubmit(userId, "Test", "Je test comment ça marche")}>Créer</Button>
                </DialogActions>
            </Dialog>
            {!campaignData && 
            <p className="card_content_text oc_subtitle">Pas de campagne en cours.</p>
            }
            {campaignData && 
            <>
                <p className="card_content_text oc_subtitle">Campagne lancée le {campaignData.starting_date} se termine le {campaignData.ending_date}</p>
                {objectifs && 
                <>
                    <ObjectifsProgressBar progress={50}/>
                    <ObjectifsList objectifs={objectifs}/>
                </>
                }
            </>
            }
        </div>
    )
}

export default Objectifs