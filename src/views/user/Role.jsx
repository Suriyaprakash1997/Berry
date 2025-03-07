import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Button
 }from '@mui/material';
 import { useFormik } from 'formik';
 import * as yup from 'yup';
 import SubmitButton from '../elements/SubmitButton';
 import CancelButton from '../elements/CancelButton';
 import { ToastContainer, toast } from 'react-toastify';
 const validationSchema = yup.object({
    roleName: yup
     .string('please enter role name')
     .required('please enter role name'),
 });
const Role=()=>{
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState([])
    const initialValue={
        roleId:0,
        roleName: '',
      }
      const [values,setValues]=useState(initialValue)
          const formik = useFormik({
              initialValues: values,
              validationSchema: validationSchema,
              onSubmit: (values) => {
                console.log("Values:",JSON.stringify(values));
                
                // SaveDesignation(values);
              },
            });
    function Add(){
        setVisible(true)
    }
    function Cancel(){
        setVisible(false)
        formik.resetForm();
    }
    return (
        <>
          {visible&&
        <MainCard title='Role'>
               <form onSubmit={formik.handleSubmit} autoComplete='off'>
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
<input type='hidden'  name="roleId" value={formik.values.roleId}/>
<TextField
          fullWidth
          id="roleName"
          name="roleName"
          label="Role Name"
          value={formik.values.roleName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.roleName && Boolean(formik.errors.roleName)}
          helperText={formik.touched.roleName && formik.errors.roleName}
       
        />
</Grid>
<Grid size={{xs:12,sm:6}}>
<SubmitButton/>
<CancelButton OnClick={Cancel}/>
</Grid>
</Grid>
</form>
        </MainCard>
}
        <div className='mt-2'>
        <MainCard title='Role List' secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>

</MainCard>
        </div>
        </>
    )
}
export default Role