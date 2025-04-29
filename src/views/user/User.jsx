import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Button}from '@mui/material';
import { useFormik } from 'formik';
import SubmitButton from '../elements/SubmitButton';
import CancelButton from '../elements/CancelButton';
import { ToastContainer, toast } from 'react-toastify';
import CustomSelect from '../elements/CustomSelect';
import CustomPassword from '../elements/CustomPassword';
import CustomDataTable from '../elements/CustomDataTable';
import { GetDropdown } from '../../services/Common/CommonService';
import { GetPagination,Get,Delete,Save } from '../../services/User/UserService';
import {userValidator} from '../../validation/UserValidation'

const User=()=>{
    const[visible,setVisible]=useState(false)
 const[data,setData]=useState([])
 const[roleDropdown,setRoleDropdown]=useState([])
     const[model,setModel]=useState({
       PageIndex: 1,
       PageSize: 10,
       SORTDIR: 'desc',
       SORTCOL: 'userId',
       SEARCHSTRING: ''
     });
//  const[model,setModel]=useState({});
 const[totalCount,setTotalCount]=useState(1);
//  const sort= {column:'userId',direction:'desc'};
     const initialValue={
         roleId:0,
         userName:'',
         password:'',
         confirmPassword:''
       }
           const formik = useFormik({
               initialValues: initialValue,
               validationSchema: userValidator,
               onSubmit: (values) => {
                 console.log("Values:",JSON.stringify(values));
                 
                 SaveUser(values);
               },
             });
              function SaveUser(data){
                         Save(data)
                         .then((res)=>{
                           var data=res.data;
                         if(data.status>0){
                         toast.success(data.message);
                         formik.resetForm();
                         GetList()
                         }
                         else{
                           toast.error(data.message);
                         }
                         })
                         .catch((error)=>{
                           console.log("Error:",error);
                           
                         })
                       }
             useEffect(()=>{
              GetRoleDropdown('Role')
             },[])
             const GetRoleDropdown=(mode)=>{
              GetDropdown(mode)
              .then((res)=>{
                    var data=res.data;
                    setRoleDropdown(data);
              })
              .catch((error)=>{
                console.log("Error:",error);
                
              })
             }
    function Add(){
        setVisible(true)
    }
    function Cancel(){
        setVisible(false)
        formik.resetForm();
    }
     useEffect(()=>{
          GetList();
          },[model])
        function GetList(){
            GetPagination(model)
            .then((res)=>{
                var data=res.data;
                setData(data.rows)
                setTotalCount(data.rowsTotal)
            })
            .catch((error)=>{
                console.log("Error:",error); 
            })
        }
        function handlePageChange(model){
                 setModel(model)
          }
           const handleDeleteClick=(type,Id)=>{
                  if(type==="Yes"){
                Delete(Id)
                   .then((res)=>{
                    var data=res.data;
                    if(data.status>0){
                      toast.success(data.message);
                      GetList();
                      }
                      else{
                        toast.error(data.message);
                      }
                    
                      })
                      .catch((error)=>{
                    console.log("Errors:",error);
                    
                      })
                  }
                 }
                 function handleEdit(id){
                      Get(id)
                             .then((res)=>{
                               var data=res.data;
                               formik.setValues(data);
                               formik.values.confirmPassword=data.password;
                               setVisible(true)
                               window.scrollTo(0, 0);
                                 })
                                 .catch((error)=>{
                               console.log("Errors:",error);
                               
                                 })
                 }
                 const columns = [
                  { field: 'indexID',  width: 150, headerName: 'S.No',sortable:false},
                  {
                    field: 'userName',
                    headerName: 'User Name',
                    flex: 1,
                  },
                  {
                    field: 'roleName',
                    headerName: 'Role Name',
                    flex: 1,
                  },
                 
                ];
    return (
        <>
        <ToastContainer/>
          {visible&&
        <MainCard title='User'>
            <form onSubmit={formik.handleSubmit} autoComplete='off'>
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
<input type='hidden'  name="userId" value={formik.values.userId}/>
<TextField
          fullWidth
          id="userName"
          name="userName"
          label="User Name"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
       
        />
</Grid>
<Grid size={{xs:12,sm:6}}>
<CustomSelect 
label='Role' 
items={roleDropdown} 
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
                <CustomDataTable 
columns={columns}
rows={data}
model={model}
setModel={setModel}
TotalCount={totalCount}
actionField='userId'
OnPaginationChange={handlePageChange}
OnEditConfirm={handleEdit}
OnDeleteConfirm={handleDeleteClick}
  />
        </MainCard>
                </div>
        </>
    )
}
export default User