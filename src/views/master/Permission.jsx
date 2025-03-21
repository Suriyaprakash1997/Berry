import MainCard from 'ui-component/cards/MainCard';
import Grid from '@mui/material/Grid2';
import { useState,useEffect } from 'react';
import {TextField,Button}from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import SubmitButton from '../elements/SubmitButton';
import CancelButton from '../elements/CancelButton';
import { permissionValidator } from '../../validation/MasterValidation';
import { Get,Save } from '../../services/Master/PermissionService';
import { ToastContainer, toast } from 'react-toastify';
const Permission=()=>{
    const[values,setValues]=useState({})
    useEffect(()=>{
      GetPermission();
    },[])
    function GetPermission(){
      Get()
      .then((res)=>{
        var data=res.data;
        setValues(data)
      })
      .catch((error)=>{
        console.log('Error:',error)
      })
    }
    const SavePermission=(data)=>{
                 Save(data)
                     .then((res)=>{
                        var data=res.data;
                         if(data.status>0){
                            toast.success(data.message);
                            location.reload()
                          }
                          else{
                            toast.error(data.message);
                          }
                      })
                      .catch((error)=>{
                        console.log("Error:",error);                       
                       })
               }
return(
    <>
    <ToastContainer/>
    <MainCard title='Permission'>
  <Formik
   enableReinitialize
             initialValues={{
                permissionId:values.permissionId?values.permissionId:0,
                allowPerMonth:values.allowPerMonth?values.allowPerMonth:0,
                allowHours:values.allowHours?values.allowHours:0,
             }}
             validationSchema={permissionValidator}
             onSubmit={(values, { resetForm }) => {
              console.log("values:",values);
              SavePermission(values)
          
             
            }}
  >
    {({setFieldValue, values,resetForm})=>(
      <Form>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<input type='hidden'  name="permissionId" value={values.permissionId}/>
 <Grid  size={{xs: 12,sm: 12, md: 4}}>
    <TextField  fullWidth  label="Allow per Month" 
      type='number'
     name="allowPerMonth"
     value={values.allowPerMonth}
     onChange={(e) => setFieldValue('allowPerMonth', e.currentTarget.value)}
    variant="outlined" />
      <ErrorMessage className='spnError' name="allowPerMonth" component="div" style={{ color: 'red' }} />
    </Grid>
    <Grid  size={{xs: 12,sm: 12, md: 4}}>
    <TextField  fullWidth  label="Allow Hours" 
    type='number'
     name="allowHours"
     value={values.allowHours}
     onChange={(e) => setFieldValue('allowHours', e.currentTarget.value)}
    variant="outlined" />
      <ErrorMessage className='spnError' name="allowHours" component="div" style={{ color: 'red' }} />
    </Grid>
    <Grid  size={{xs: 12,sm: 12, md: 4}}>
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
export default Permission;