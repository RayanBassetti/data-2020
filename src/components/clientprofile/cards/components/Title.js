import React, { useState, useContext } from 'react';
import { Button, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { CampaignContext } from '../../../contexts/CampaignContext'

const Title = ({text, sub_text, button, clientId}) => {

    const {campaign, createCampaign} = useContext(CampaignContext)

    const [open, setOpen] = useState(false)
    const [starting_date, setStartingDate] = useState(new Date())
    const [ending_date, setEndingDate] = useState(new Date())

    const handleSubmit = () => {
        setOpen(false)
        createCampaign(clientId, starting_date, ending_date)
    }
    
    return(
        <div className="client_card_title flexed-row-space">
            <p className="card_content_text cct_text">{text}</p>
            {sub_text && 
            <p className="card_content_text card_subtitle">Dernière activité le {sub_text}</p>
            }
            {(button === "objectifs" && !campaign) &&
            <>
                <Button 
                    variant="outlined"
                    onClick={() => setOpen(true)}
                >Nouvelle Campagne</Button>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Lancer une campagne</DialogTitle>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DialogContent>
                        <DatePicker disableToolbar value={starting_date} onChange={setStartingDate} format="dd/MM/yyyy" label="Début de campagne"/>
                        <DatePicker disableToolbar value={ending_date} onChange={setEndingDate} format="dd/MM/yyyy" label="Fin de campagne"/>
                        </DialogContent>
                    </MuiPickersUtilsProvider>
                    <DialogActions>
                        <Button variant="outlined" onClick={() => setOpen(false)}>Annuler</Button>
                        <Button variant="outlined" onClick={() => handleSubmit()}>Créer</Button>
                    </DialogActions>
                </Dialog>
              </>
            }
            {(button === "objectifs" && campaign) &&
            <>
                <Button 
                    variant="outlined"
                    onClick={() => setOpen(true)}
                >Modifier Campagne</Button>
              </>
            }
        </div>
    )
}

export default Title