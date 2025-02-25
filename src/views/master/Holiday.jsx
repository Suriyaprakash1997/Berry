import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { Button,TextField } from '@mui/material';
import { useState,useEffect } from 'react';
import DeleteConfirmDialog from '../elements/DeleteConfirmDialog';
import CustomDatePicker from '../elements/CustomDatePicker';
const Holiday=()=>{
    const date=Date.now();
const[visible,setVisible]=useState(false)
const initialValue={
    holidayId:0,
    holidayName:'',
    holidayDate:date
  }
  const[values,setValues]=useState(initialValue)
function Add(){
    setVisible(true)
}
const handleEndDateChange=(type)=>{
    const newData={...values,holidayDate:type};
    setValues(newData);
   }
   function handleInput(event){
    const newData={...values,[event.target.name]:event.target.value};
    setValues(newData);
}
return(
    <>
    {visible&&
   
    <MainCard title="Holiday">
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
<CustomDatePicker dateValue={values.holidayDate} OnDateChange={handleEndDateChange} label="Holiday Date"/>
</Grid>
<Grid size={{xs:12,sm:6}}>
<TextField className='textField' fullWidth 
name='holidayName' value={values.holidayName}
onChange={handleInput}
 label="Holiday Name" variant="outlined" />

</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<Button className='mx-2' variant="outlined">Save</Button>
<Button variant="outlined">Cancel</Button>
</Grid>
</Grid>
    </MainCard>
     }
    <div className='mt-2'>
    </div>
    <MainCard   title="Holiday List" secondary={<Button onClick={()=>Add()} variant='outlined'>Add</Button>}>

</MainCard>
    </>
)
}
export default Holiday