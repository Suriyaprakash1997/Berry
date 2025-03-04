import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Button,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
 import { DataGrid } from '@mui/x-data-grid';
const EmergencyContact=()=>{
    const [data,setData]=useState([])
    const columns = [
        { field: 'indexID', headerName: 'S.No'},
        {
          field: 'accountYearName',
          headerName: 'Name',
          flex: 1,
        },
        {
          field: 'startDate',
          headerName: 'Contact No',
          flex: 1,
        },
        {
            field: 'endDate',
            headerName: 'Address',
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
        <MainCard title='Emergency Contact'>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Name" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Relation" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Phone" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Address" variant="outlined" />
        </Grid>
        </Grid>
        <Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<Button  className='mx-2' variant="contained" color="success">Save</Button>

<Button  variant="contained" color="error">Cancel</Button>
</Grid>
</Grid>
        </MainCard>
        <div className='mt-3'>
<DataGrid
        rows={data}
        columns={columns}
      />
</div>
        </>
    )
}
export default EmergencyContact