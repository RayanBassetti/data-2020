import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';

import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

import PostMethod from '../../../common/methods/PostMethod'

const Title = ({text, sub_text, button, clientId}) => {

    const [open, setOpen] = useState(false)

    const [selectedDate, setSelectedDate] = useState(new Date('2020-05-0818T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    
    return(
        <div className="client_card_title flexed-row-space">
            <p className="card_content_text cct_text">{text}</p>
            {sub_text && 
            <p className="card_content_text card_subtitle">Dernière activité le {sub_text}</p>
            }
            {button && button === "objectifs" &&
            <>
                <Button 
                    variant="outlined"
                    onClick={() => setOpen(true)}
                >Nouvelle Campagne</Button>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Créer une campagne</DialogTitle>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date de début de la campagne"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date de fin de la campagne"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                        <DialogActions>
                        <Button onClick={() => setOpen(false)} color="primary">
                            Annuler
                        </Button>
                        <Button onClick={() => setOpen(false)} color="primary">
                            Créer
                        </Button>
                    </DialogActions>
              </Dialog>
              </>
            }
        </div>
    )
}

export default Title