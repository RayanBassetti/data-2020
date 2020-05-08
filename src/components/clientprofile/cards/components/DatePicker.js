import 'date-fns';
import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker() {
  // The first commit of Material-UI
  const [starting_date, setStartingDate] = useState(new Date('2020-05-08T21:11:54'));
  const [ending_date, setEndingDate] = useState(new Date('2020-05-08T21:11:54'));

  const handleDateChange = (setter, date) => {
    setter(date);
  };

  return (
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
  );
}