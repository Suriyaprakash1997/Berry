import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,FormControlLabel ,Switch ,
    Button ,FormControl ,Select
 }from '@mui/material';
 import { DataGrid } from '@mui/x-data-grid';
const DocumentInfo=()=>{
    const [data,setData]=useState([])
    const columns = [
        { field: 'indexID', headerName: 'S.No'},
        {
          field: 'accountYearName',
          headerName: 'Document Type',
          flex: 1,
        },
        {
          field: 'File Name',
          headerName: 'Contact No',
          flex: 1,
        },
        {
            field: 'Is Verified',
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
        <MainCard title='Document Information'>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid size={{xs: 12,sm: 12, md: 4}}>
    <TextField className='textField' fullWidth  label="Document Type" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 4}}>
   <input type='file' className='form-control'/>
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 4}}>
    <FormControlLabel control={<Switch defaultChecked/>} label="Is Verified" />
    </Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
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
export default DocumentInfo