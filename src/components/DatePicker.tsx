import 'date-fns';
import React, { useState } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

interface DatePickerProps{
    onChange : (value: Date) => void;
    initialDate ?: Date;
}

const DatePicker = ({onChange, initialDate = new Date()} : DatePickerProps) => {
    const [selectedDate, setSelectedDate] = useState(initialDate);

    const handleDateChange = (muiDate: MaterialUiPickersDate) => {
        let date = muiDate as Date;
        setSelectedDate(date);
        onChange(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePicker;
