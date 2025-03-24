import MainCard from 'ui-component/cards/MainCard';
import Grid from '@mui/material/Grid2';
import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {TextField,Button}from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import SubmitButton from '../elements/SubmitButton';
import CancelButton from '../elements/CancelButton';
import { jobTypeValidator } from '../../validation/MasterValidation';
import * as JobTypeService from '../../services/Master/JobTypeService'
import CustomDataTable from '../elements/CustomDataTable';
import { ToastContainer, toast } from 'react-toastify';
const JobType=()=>{
  const[values,setValues]=useState({})
  const[visible,setVisible]=useState(false)
  const[model,setModel]=useState({});
    const[data,setData]=useState([]);
    const[totalCount,setTotalCount]=useState(1);
    const sort= {column:'jobTypeId',direction:'desc'};
    function Add(){
      setVisible(true)
  }
  function Cancel(){
    setVisible(false);
    setValues({})
  }
  
           const SaveLeaveType=(data)=>{
              JobTypeService.Save(data)
                   .then((res)=>{
                      var data=res.data;
                       if(data.status>0){
                          toast.success(data.message);
                          GetList()
                          Cancel()
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
  GetList();
  },[model])
  function GetList(){
      JobTypeService.GetPagination(model)
      .then((data)=>{
          setData(data.rows)
          setTotalCount(data.rowsTotal)
      })
      .catch((error)=>{
          console.log("Error:",error); 
      })
  }
  const columns = [
      { field: 'indexID',  width: 150, headerName: 'S.No',sortable:false},
      {
        field: 'jobType',
        headerName: 'Job Type',
        flex: 1,
        minwidth:200,
      },
     
    ];
  
    function handlePageChange(model){
           setModel(model)
    }
     const handleDeleteClick=(type,Id)=>{
            if(type==="Yes"){
       JobTypeService.Delete(Id)
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
           JobTypeService.Get(id)
              .then((res)=>{
                var data=res.data;
                setValues(data);
                setVisible(true)
                window.scrollTo(0, 0);
              })
              .catch((error)=>{
                console.log("Errors:",error);
                                         
              })
          }
    return(
        <>
        <ToastContainer/>
        {visible&&
<MainCard title='Job Type'>
  <Formik
   enableReinitialize
             initialValues={{
              jobTypeId:values.jobTypeId?values.jobTypeId:0,
              jobType:values.jobType?values.jobType:''
             }}
             validationSchema={jobTypeValidator}
             onSubmit={(values) => {
             SaveLeaveType(values);
            }}
  >
    {({setFieldValue, values})=>(
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
<CancelButton OnClick={()=>{Cancel()}}/>
    </Grid>
</Grid>
      </Form>
    )}
  </Formik>

</MainCard>
}
<div className='mt-2'>
    </div>
    <MainCard   title="Job Type List" secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
<CustomDataTable 
columns={columns}
rows={data}
sortModel={sort}
TotalCount={totalCount}
actionField='jobTypeId'
OnPaginationChange={handlePageChange}
OnEditConfirm={handleEdit}
OnDeleteConfirm={handleDeleteClick}
  />
</MainCard>
        </>
    )
}
export default JobType