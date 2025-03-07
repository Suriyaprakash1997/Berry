import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Button}from '@mui/material';
  import { useFormik } from 'formik';
  import * as yup from 'yup';
  import SubmitButton from '../elements/SubmitButton';
  import CancelButton from '../elements/CancelButton';
  import { ToastContainer, toast } from 'react-toastify';
  import CustomSelect from '../elements/CustomSelect';
  import CustomPassword from '../elements/CustomPassword';

  const validationSchema = yup.object({
    emailId: yup.string().email('Invalid email').required('please enter email'),
    roleId: yup.number().required("Role is required").positive().integer(),
    password: yup.string().min(8,'password must be 8 character').required('please enter password'),
    confirmPassword: yup.string()
    .min(8,'confirm password must be 8 character')
    .required('please enter confirm password')
    .oneOf([yup.ref('password'), null], 'passwords mis match'),
  });

const User=()=>{
    const[visible,setVisible]=useState(false)
 const[data,setData]=useState([])
     const initialValue={
         roleId:0,
         emailId:'',
         password:'',
         confirmPassword:''
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
     const items=[
        {value:1,text:'Admin'},
        {value:2,text:'Employee'}
      ]
    return (
        <>
          {visible&&
        <MainCard title='User'>
            <form onSubmit={formik.handleSubmit} autoComplete='off'>
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
<input type='hidden'  name="userId" value={formik.values.userId}/>
<TextField
          fullWidth
          id="emailId"
          name="emailId"
          label="Email Id"
          value={formik.values.emailId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.emailId && Boolean(formik.errors.emailId)}
          helperText={formik.touched.emailId && formik.errors.emailId}
       
        />
</Grid>
<Grid size={{xs:12,sm:6}}>
<CustomSelect 
label='Role' 
items={items} 
name='roleId'
value={formik.values.roleId}  // Pass the value from Formik
onChange={formik.handleChange}  // Handle change via Formik's handleChange
onBlur={formik.handleBlur}  // Handle blur via Formik's handleBlur
error={formik.touched.roleId && Boolean(formik.errors.roleId)}  // Show error if touched and has validation error
helperText={formik.touched.roleId && formik.errors.roleId}  />
</Grid>
<Grid size={{xs:12,sm:6}}>
    <CustomPassword 
    value={formik.values.password}
     name='password'
     label='Password'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     error={formik.touched.password && Boolean(formik.errors.password)}
     helperText={formik.touched.password && formik.errors.password}
     />
</Grid>
<Grid size={{xs:12,sm:6}}>
    <CustomPassword 
    value={formik.values.confirmPassword}
     name='confirmPassword'
     label='Confirm Password'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
     helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
     />
</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={Cancel}/>
</Grid>
</Grid>
</form>
        </MainCard>
}
                <div className='mt-2'>
                <MainCard title='User List' secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
        
        </MainCard>
                </div>
        </>
    )
}
export default User