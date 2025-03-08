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
 import CustomDataTable from '../elements/CustomDataTable';
 import { GetPagination,Get,Delete,Save } from '../../services/User/RoleService';
 const validationSchema = yup.object({
    roleName: yup
     .string('please enter role name')
     .required('please enter role name'),
 });
const Role=()=>{
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState([])
    const[model,setModel]=useState({});
    const[totalCount,setTotalCount]=useState(1);
    const sort= {column:'roleId',direction:'desc'};
    const initialValue={
        roleId:0,
        roleName: '',
      }
      const [values,setValues]=useState(initialValue)
          const formik = useFormik({
              initialValues: values,
              validationSchema: validationSchema,
              onSubmit: (values) => {
                SaveRole(values);
              },
            });
            function SaveRole(data){
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
                field: 'roleName',
                headerName: 'Role Name',
                flex: 1,
              },
             
            ];
    return (
        <>
         <ToastContainer/>
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
        <CustomDataTable 
columns={columns}
rows={data}
sortModel={sort}
TotalCount={totalCount}
actionField='roleId'
OnPaginationChange={handlePageChange}
OnEditConfirm={handleEdit}
OnDeleteConfirm={handleDeleteClick}
  />
</MainCard>
        </div>
        </>
    )
}
export default Role