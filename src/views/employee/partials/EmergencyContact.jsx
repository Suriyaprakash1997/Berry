import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Button,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
 import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
 import SubmitButton from '../../elements/SubmitButton';
 import CancelButton from '../../elements/CancelButton';
 import { EmergencyContactValidator } from '../../../validation/EmployeeValidation';

const EmergencyContact=({ emergencyInfo, setEmergencyInfo })=>{
 
    const [data,setData]=useState([])
const initialValue={
  contactId:0,
  name:'',
  relation:'',
  phone:'',
  address:''
}
      const formik = useFormik({
                   initialValues: initialValue,
                   validationSchema: EmergencyContactValidator,
                   onSubmit: (values) => {
                    console.log("Data:",JSON.stringify(values));
                    
                     //SaveRole(values);
                   },
                 });
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
          <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <input type='hidden'  name="contactId" value={formik.values.contactId}/>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                 
                  />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField
                    fullWidth
                    id="relation"
                    name="relation"
                    label="Relation"
                    value={formik.values.relation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.relation && Boolean(formik.errors.relation)}
                    helperText={formik.touched.relation && formik.errors.relation}
                  />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
              <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                  />
        </Grid>
        </Grid>
        <Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={()=>{formik.resetForm()}}/>
</Grid>
</Grid>
</form>
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