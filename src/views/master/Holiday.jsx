import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { Button,TextField } from '@mui/material';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import DeleteConfirmDialog from '../elements/DeleteConfirmDialog';
const Holiday=()=>{
const[visible,setVisible]=useState(false)
function Add(){
    setVisible(true)
}


return(
    <>
    {visible&&
   
    <MainCard title="Holiday">
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
<input type='date' className='form-control'></input>
</Grid>
<Grid size={{xs:12,sm:6}}>
<TextField className='textField' style={{width:'100%'}}  label="Holiday Name" variant="outlined" />

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