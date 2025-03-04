import {useState,useRef,useEffect} from 'react';
import Box from '@mui/material/Box';
import {TextField,Card,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomTimePicker from '../../elements/CustomTimePicker';
const basicInfo=()=>{
  const date=Date.now();
    const [age, setAge] = useState('');
    const dateRef=useRef();
    const [value, setValue] =useState(dayjs(date));
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    useEffect(()=>{
        if (dateRef.current) {
            // Apply styles using the ref directly
            dateRef.current.style.width = '100% !important';
          }
    },[])
    function handelTimeChange(name,value){
console.log(`${name}:`,value);

    }
    return(
        <>
        <Card>
        <CardHeader
    title="Basic Information"
  />
<CardContent>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' style={{width:'100%'}}  label="Employee Code" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  style={{width:'100%'}} label="Employee Name" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        inputRef={dateRef}
          label="Date of Join"
          value={value}
          format='DD-MM-YYYY'
          onChange={(newValue) => setValue(newValue)}
        />

    </LocalizationProvider>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Designation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Ten</MenuItem>
          <MenuItem value={2}>Twenty</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' style={{width:'100%'}}  label="Official EMail" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <CustomTimePicker name='loginTime' label='Login Time'  OnTimeChange={handelTimeChange}/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <CustomTimePicker name='logoutTime' label='Logout Time' OnTimeChange={handelTimeChange}/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <CustomTimePicker name='graceTime' label='Grace Time' OnTimeChange={handelTimeChange}/>
        </Grid>
      </Grid>
</CardContent>
        </Card>
        <Card style={{marginTop:'10px'}}>
        <CardHeader
    title="PF/ESI Information"
  />
<CardContent>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' style={{width:'100%'}}  label="PAN Number" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  style={{width:'100%'}} label="UAN Number" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} sty>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          format='DD-MM-YYYY'
          label="PF Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  style={{width:'100%'}} label="Voluntory PF" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth label="Attendance Code" variant="outlined" />
        </Grid>
        <Grid size={{xs:12,sm:3}}>
<FormControlLabel control={<Switch defaultChecked  />} label="Rating by admin" />
</Grid>
<Grid size={{xs:12,sm:3}}>
<FormControlLabel control={<Switch defaultChecked  />} label="Reporting person" />
</Grid>
<Grid size={{xs:12,sm:3}}>
<FormControlLabel control={<Switch defaultChecked  />} label="ESI Eligible" />
</Grid>
<Grid size={{xs:12,sm:3}}>
<FormControlLabel control={<Switch defaultChecked  />} label="Is Relieved" />
</Grid>
      </Grid>
</CardContent>
        </Card>
        </>
    )
}
export default basicInfo