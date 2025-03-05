import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Switch,
    FormControlLabel,Button
 }from '@mui/material';
const User=()=>{
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
        <MainCard title='User'>
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
  <input name='roleId' type='hidden' />
  <TextField  className='textField' name='accountYearName' 
  fullWidth   label="User Name" variant="outlined" />
</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<Button  className='mx-2' variant="contained" color="success">Save</Button>

<Button onClick={()=>Cancel()} variant="contained" color="error">Cancel</Button>
</Grid>
</Grid>
        </MainCard>
}
                <div className='mt-2'>
                <MainCard title='User List' secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
        
        </MainCard>
                </div>
        </>
    )
}
export default User