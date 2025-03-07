import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,
    Button
 }from '@mui/material';
 import SubmitButton from '../elements/SubmitButton';
 import CancelButton from '../elements/CancelButton';
 import CustomFileUpload from '../elements/CustomFileUpload';

const Policy=()=>{
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState([])
    function Add(){
        setVisible(true)
    }
    function Cancel(){
        setVisible(false)
    }
    const handleFileChange = (data) => {
      const file = data[0]; // Get the file selected
      if (file) {
        
      }
    };
   
    return (
        <>
          {visible&&
        <MainCard title='Policy'>
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
  <input name='roleId' type='hidden' />
  <TextField  className='textField' name='accountYearName' 
  fullWidth   label="Policy Name" variant="outlined" />
</Grid>
<Grid size={{xs:12,sm:6}}>
<CustomFileUpload OnFileChange={handleFileChange}/>
</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={Cancel}/>

</Grid>
</Grid>
        </MainCard>
}
                <div className='mt-2'>
                <MainCard title='Policy List' secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
        
        </MainCard>
                </div>
        </>
    )
}
export default Policy