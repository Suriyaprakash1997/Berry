import {useState,useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {TextField,Card,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import CustomTimePicker from '../../elements/CustomTimePicker';
import CustomSelect from '../../elements/CustomSelect';
import CustomDatePicker from '../../elements/CustomDatePicker';
const BasicInfo=({ basicInfo, setBasicInfo })=>{
  const date=Date.now();
    const initialDesignation = basicInfo.designation || 0;
    const handleInputChange = (e) => {
      setBasicInfo({
        ...basicInfo,
        [e.target.name]: e.target.value,
      });
    };
    function handelTimeChange(name,value){
console.log(`${name}:`,value);
const formattedDate = value.format('HH:mm')
setBasicInfo({...basicInfo,[name]: value});

    }
     const handleSelectChange=(name,value)=>{
    console.log("Name:",name);
    console.log("value:",value);
    
        }
        const items=[
          {value:1,text:'Admin'},
          {value:2,text:'Employee'}
        ]
        function handleDateChange(name ,value){
           setBasicInfo({...basicInfo, [name]: value});
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
        <TextField  
        label="Employee Code"
        name='employeeCode'
        value={basicInfo.employeeCode || ''}
        onChange={handleInputChange}
         variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField 
        label="Employee Name" 
        name='employeeName'
        value={basicInfo.employeeName || ''}
        onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomDatePicker 
            label='Date of Join' 
            name='dateOfJoin'
            value={basicInfo.dateOfJoin}
            onChange={(newValue) => handleDateChange('dateOfJoin', newValue)}
            />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
       <CustomSelect label='Designation' 
       items={items}
        name='designation'
        value={initialDesignation}
       onChange={handleInputChange}/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  
        label="Official EMail" 
        name='officialEmail'
        value={basicInfo.officialEmail || ''}
        onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <CustomTimePicker 
          name='loginTime'
          label='Login Time' 
          value={basicInfo.loginTime}
          OnTimeChange={(newValue) => handelTimeChange('loginTime', newValue)}
          />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <CustomTimePicker   
           value={basicInfo.logoutTime} 
           name='logoutTime' label='Logout Time'
           OnTimeChange={(newValue) => handelTimeChange('logoutTime', newValue)}/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <CustomTimePicker  value={basicInfo.graceTime} name='graceTime' 
          label='Grace Time' 
          OnTimeChange={(newValue) => handelTimeChange('graceTime', newValue)}/>
        </Grid>
      </Grid>
</CardContent>
        </Card>
        {/* <Card style={{marginTop:'10px'}}>
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
<FormControlLabel control={<Switch defaultChecked  />} label="Is Relieved" />
</Grid>
      </Grid>
</CardContent>
        </Card> */}
        </>
    )
}
BasicInfo.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  setBasicInfo: PropTypes.func.isRequired,
};
export default BasicInfo