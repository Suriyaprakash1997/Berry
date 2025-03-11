import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Card,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
const BankInfo=({ bankInfo, setBankInfo })=>{
    const handleInputChange = (e) => {
        setBankInfo({
          ...bankInfo,
          [e.target.name]: e.target.value,
        });
      };
    return(
        <>
        <MainCard title="Bank Account Information">
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="Bank Name"
         name='bankName'
         value={bankInfo.bankName || ''}
         onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField fullWidth  label="Account Number" 
         name='accountNumber'
         value={bankInfo.accountNumber || ''}
         onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="IFSC Code"
         name='ifscCode'
         value={bankInfo.ifscCode || ''}
         onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="MICR Code" 
         name='micrCode'
         value={bankInfo.micrCode || ''}
         onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        </Grid>
        </MainCard>
        </>
    )
}
export default BankInfo