import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Switch,
    FormControlLabel,Button
 }from '@mui/material';
 import { DataGrid } from '@mui/x-data-grid';
const SalaryInfo=()=>{
    const [data,setData]=useState([])
    const columns = [
        { field: 'indexID', headerName: 'S.No'},
        {
          field: 'accountYearName',
          headerName: 'Revice Date',
          flex: 1,
        },
        {
          field: 'startDate',
          headerName: 'Gross Salary',
          flex: 1,
        },
        {
            field: 'endDate',
            headerName: 'Description',
            flex: 1,
          },  
          {
            field: 'endDate',
            headerName: 'Designation',
            flex: 1,
          }, 
          {
            field: 'action',
            headerName: 'Action',
            flex: 1,
          },  
       
      ];
    return(
        <>
         <MainCard title='Salary Information'>
         <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Gross Salary" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Professional Tax" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
   <input type='date' className='form-control'/>
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Description" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 3}}>
    <FormControlLabel control={<Switch defaultChecked/>} label="TDS Eligible" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 3}}>
    <TextField className='textField' fullWidth  label="TDS" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 3}}>
    <FormControlLabel control={<Switch defaultChecked/>} label="Update Designation" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 3}}>
    <TextField className='textField' fullWidth  label="Designation" variant="outlined" />
    </Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-4 d-flex justify-content-end">
<Button  className='mx-2' variant="contained" color="success">Save</Button>

<Button  variant="contained" color="error">Cancel</Button>
</Grid>
</Grid> 
<div className='mt-4'>
<DataGrid
        rows={data}
        columns={columns}
      />
</div>
        </MainCard>
        </>
    )
}
export default SalaryInfo