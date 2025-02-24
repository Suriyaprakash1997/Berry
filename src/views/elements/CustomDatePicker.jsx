
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useState} from 'react';
import dayjs from 'dayjs';
const CustomDatePicker=(props)=>{
    const { OnDateChange, label } = props;
    const date=Date.now();
     const [value, setValue] =useState(dayjs(date));
     function OnValueChange(newValue){
        const formattedDate = newValue.format('YYYY-MM-DD');
        OnDateChange(formattedDate);
        setValue(newValue)
     }
    return(
        <>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={value}
          format='DD-MM-YYYY'
          onChange={(newValue) => OnValueChange(newValue)}
        />

    </LocalizationProvider>
        </>
    )
}
export default CustomDatePicker;