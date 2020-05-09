import 'date-fns';
import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';

function CampaignDialog({open, setOpen}) {

    const [starting_date, setStartingDate] = useState(new Date('2020-05-08T21:11:54'));
    const [ending_date, setEndingDate] = useState(new Date('2020-05-08T21:11:54'));
  
    const handleDateChange = (setter, date) => {
      setter(date);
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Créer une azeazeaze</DialogTitle>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="flex-row-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date de début de la campagne"
          value={starting_date}
          onChange={handleDateChange(setStartingDate)}
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
          value={ending_date}
          onChange={handleDateChange(setEndingDate)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </div>
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
    )
}

export default CampaignDialog