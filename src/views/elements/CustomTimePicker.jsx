import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
const CustomTimePicker=({value,name,label,OnTimeChange,...props})=>{
    const OnValueChange=(newValue)=>{
        // const formattedDate = newValue.format('HH:mm');
        // OnTimeChange(name,formattedDate);
        if (newValue && newValue.isValid()) {
            OnTimeChange(newValue);
        }
     }
    return(
        <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
        value={value}
         ampm={false}
         label={label}
         name={name}
         onChange={OnValueChange}
         {...props}
          />
    </LocalizationProvider>
        </>
    )
}
export default CustomTimePicker