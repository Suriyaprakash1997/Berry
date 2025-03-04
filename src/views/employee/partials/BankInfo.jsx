import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Card,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
const BankInfo=()=>{
    return(
        <>
        <MainCard title="Bank Account Information">
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Bank Name" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Account Number" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="IFSC Code" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="MICR Code" variant="outlined" />
        </Grid>
        </Grid>
        </MainCard>
        </>
    )
}
export default BankInfo