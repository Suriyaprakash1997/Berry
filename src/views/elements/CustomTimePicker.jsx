import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
const CustomTimePicker=(props)=>{
    const{name,label,OnTimeChange}=props;
    const OnValueChange=(newValue)=>{
        const formattedDate = newValue.format('HH:mm');
        OnTimeChange(name,formattedDate);
     }
    return(
        <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
         ampm={false}
         label={label}
         name={name}
         onChange={OnValueChange}
          />
    </LocalizationProvider>
        </>
    )
}
export default CustomTimePicker