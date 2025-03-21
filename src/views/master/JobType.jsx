import MainCard from 'ui-component/cards/MainCard';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {TextField,Button}from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import SubmitButton from '../elements/SubmitButton';
import CancelButton from '../elements/CancelButton';
import { jobTypeValidator } from '../../validation/MasterValidation';
const JobType=()=>{
  const[values,setValues]=useState({
     jobTypeId:0,
     jobType:''
  })
    return(
        <>
<MainCard title='Job Type'>
  <Formik
   enableReinitialize
             initialValues={values}
             validationSchema={jobTypeValidator}
             onSubmit={(values, { resetForm }) => {
             console.log("values:",values);
             
            }}
  >
    {({setFieldValue, values,resetForm})=>(
      <Form>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<input type='hidden'  name="jobTypeId" value={values.jobTypeId}/>
 <Grid  size={{xs: 12,sm: 12, md: 6}}>
    <TextField  fullWidth  label="Job Type" 
     name="jobType"
     value={values.jobType}
     onChange={(e) => setFieldValue('jobType', e.currentTarget.value)}
    variant="outlined" />
      <ErrorMessage className='spnError' name="jobType" component="div" style={{ color: 'red' }} />
    </Grid>
    <Grid  size={{xs: 12,sm: 12, md: 6}}>
    <SubmitButton/>
<CancelButton OnClick={()=>{resetForm()}}/>
    </Grid>
</Grid>
      </Form>
    )}
  </Formik>

</MainCard>
        </>
    )
}
export default JobType