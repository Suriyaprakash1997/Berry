import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Button,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
 import { DataGrid } from '@mui/x-data-grid';
const EducationInfo=()=>{
    const [data,setData]=useState([])
    const educationColumns = [
        { field: 'indexID', headerName: 'S.No'},
        {
          field: 'accountYearName',
          headerName: 'Education Name',
          flex: 1,
        },
        {
          field: 'startDate',
          headerName: 'Institution Name',
          flex: 1,
        },
        {
            field: 'endDate',
            headerName: 'Academic Year',
            flex: 1,
          },  
         
          {
            field: 'action',
            headerName: 'Action',
            flex: 1,
          },  
       
      ];
      const experienceColumns = [
        { field: 'indexID', headerName: 'S.No'},
        {
          field: 'accountYearName',
          headerName: 'From Date',
          flex: 1,
        },
        {
          field: 'startDate',
          headerName: 'To Date',
          flex: 1,
        },
        {
            field: 'endDate',
            headerName: 'Company Name',
            flex: 1,
          },  
          {
            field: 'endDate',
            headerName: 'Designation',
            flex: 1,
          }, 
          {
            field: 'endDate',
            headerName: 'Contact No',
            flex: 1,
          }, 
          {
            field: 'endDate',
            headerName: 'Contact Email',
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
          <MainCard title='Education Details'>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Education Name" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Institution Name" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Academic Year" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 3}}>
    <FormControlLabel control={<Switch defaultChecked/>} label="Is Document Added" />
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
            columns={educationColumns}
          />
    </div>
          </MainCard>
          <div className='mt-2'></div>
          <MainCard title='Experience Details'>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Company Name" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Designation" variant="outlined" />
    </Grid>

    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Contact Name" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Contact Email" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
<input type='date' className='form-control'/>
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <input type='date' className='form-control'/>
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
            columns={experienceColumns}
          />
    </div>
        </MainCard>
        </>
    )
}
export default EducationInfo