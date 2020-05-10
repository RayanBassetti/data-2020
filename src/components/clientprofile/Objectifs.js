import React, {useState, useContext, useEffect} from 'react';
// import ProgressBar from '../common/components/ProgressBar';
import ObjectifsProgressBar from './cards/components/ObjectifsProgressBar'
import ObjectifsList from './ObjectifsList'
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';

import {CampaignContext} from '../contexts/CampaignContext'

function Objectifs({userId}) {

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [progress, setProgress] = useState(0)

    const {submitted, campaignData, setSubmit, fetchCampaign, objectifs, createObjectif, fetchObjectifs} = useContext(CampaignContext)

    useEffect(() => {
        fetchCampaign(userId)
        fetchObjectifs(userId)
        setSubmit()
    }, [submitted])

    const handleSubmit = () => {
        setOpen(false)
        setSubmit()
        createObjectif(userId, title, text)
    }
    return(
        <div className="objectifs_content">
            {!campaignData && 
            <p className="card_content_text oc_subtitle">Pas de campagne en cours.</p>
            }
            {campaignData && 
            <>
                <Button variant="outlined" onClick={() => setOpen(true)}>add objectif</Button>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Créer un nouvel objectif</DialogTitle>
                        <DialogContent>
                            <TextField placeholder="Titre" value={title} onChange={(event) => setTitle(event.currentTarget.value)}/>
                            <TextField placeholder="Texte" value={text} onChange={(event) => setText(event.currentTarget.value)}/>
                        </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={() => setOpen(false)}>Annuler</Button>
                        <Button variant="outlined" onClick={() => handleSubmit()}>Créer</Button>
                    </DialogActions>
                </Dialog>
                <p className="card_content_text oc_subtitle">Campagne lancée le {campaignData.starting_date} se termine le {campaignData.ending_date}</p>
                {objectifs && 
                <>
                    <ObjectifsProgressBar progress={progress}/>
                    <ObjectifsList objectifs={objectifs} setProgress={setProgress}/>
                </>
                }
            </>
            }
        </div>
    )
}

export default Objectifs