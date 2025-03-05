import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Switch,
    FormControlLabel,Button
 }from '@mui/material';
const Role=()=>{
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState([])
    function Add(){
        setVisible(true)
    }
    function Cancel(){
        setVisible(false)
    }
    return (
        <>
          {visible&&
        <MainCard title='Role'>
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
  <input name='roleId' type='hidden' />
  <TextField  className='textField' name='accountYearName' 
  fullWidth   label="Role Name" variant="outlined" />
</Grid>
<Grid size={{xs:12,sm:6}}>
<Button  className='mx-2' variant="contained" color="success">Save</Button>

<Button onClick={()=>Cancel()} variant="contained" color="error">Cancel</Button>
</Grid>
</Grid>
        </MainCard>
}
        <div className='mt-2'>
        <MainCard title='Role List' secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>

</MainCard>
        </div>
        </>
    )
}
export default Role