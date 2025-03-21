import MainCard from 'ui-component/cards/MainCard';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import {TextField,Button}from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import SubmitButton from '../elements/SubmitButton';
import CancelButton from '../elements/CancelButton';
import { leaveTypeValidator } from '../../validation/MasterValidation';
import CustomDataTable from '../elements/CustomDataTable';
import { ToastContainer, toast } from 'react-toastify';
const LeaveType=()=>{
  const[visible,setVisible]=useState(false)
    const[values,setValues]=useState({
      leaveTypeId: 0,
      leaveType: '',
      leaveAllowPerMonth: 0,
      totalLeaveProvide: 0,
    })
      const[model,setModel]=useState({});
      const[data,setData]=useState([]);
      const[totalCount,setTotalCount]=useState(1);
      const sort= {column:'leaveTypeId',direction:'desc'};
      function Add(){
        setVisible(true)
    }
      const columns = [
          { field: 'indexID',  width: 150, headerName: 'S.No',sortable:false},
          {
              field: 'leaveType',
              headerName: 'Leave Type',
              minWidth:150,
              flex: 1,
            },
            {
              field: 'leaveAllowPerMonth',
              headerName: 'Leave Allow Per Month',
              width:200,
            },
          {
            field: 'totalLeaveProvide',
            headerName: 'Total Leave Provide',
            width:175,
          },
         
        ];
      
        function handlePageChange(model){
               setModel(model)
        }
         const handleDeleteClick=(type,Id)=>{
              //   if(type==="Yes"){
              // Delete(Id)
              //    .then((res)=>{
              //     var data=res.data;
              //     if(data.status>0){
              //       toast.success(data.message);
              //       GetList();
              //       }
              //       else{
              //         toast.error(data.message);
              //       }
                  
              //       })
              //       .catch((error)=>{
              //     console.log("Errors:",error);
                  
              //       })
              //   }
               }
              function handleEdit(id){
                // Get(id)
                //   .then((res)=>{
                //     var data=res.data;
                //     setValues(data);
                //     setVisible(true)
                //     window.scrollTo(0, 0);
                //   })
                //   .catch((error)=>{
                //     console.log("Errors:",error);
                                             
                //   })
              }
return(
    <>
        <ToastContainer/>
        {visible&&
    <MainCard title='Leave Type'>
  <Formik
   enableReinitialize
             initialValues={values}
             validationSchema={leaveTypeValidator}
             onSubmit={(values, { resetForm }) => {
             console.log("values:",values);
             
            }}
  >
    {({setFieldValue, values,resetForm})=>(
      <Form>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<input type='hidden'  name="leaveTypeId" value={values.leaveTypeId}/>
 <Grid  size={{xs: 12,sm: 12, md: 4}}>
    <TextField  fullWidth  label="Leave Type" 
     name="leaveType"
     value={values.leaveType}
     onChange={(e) => setFieldValue('leaveType', e.currentTarget.value)}
    variant="outlined" />
      <ErrorMessage className='spnError' name="leaveType" component="div" style={{ color: 'red' }} />
    </Grid>
    <Grid  size={{xs: 12,sm: 12, md: 4}}>
    <TextField  fullWidth  label="Leave Allow Per Month" 
      type='number'
     name="leaveAllowPerMonth"
     value={values.leaveAllowPerMonth}
     onChange={(e) => setFieldValue('leaveAllowPerMonth', e.currentTarget.value)}
    variant="outlined" />
      <ErrorMessage className='spnError' name="leaveAllowPerMonth" component="div" style={{ color: 'red' }} />
    </Grid>
    <Grid  size={{xs: 12,sm: 12, md: 4}}>
    <TextField  fullWidth  label="Total Leave Provide" 
      type='number'
     name="totalLeaveProvide"
     value={values.totalLeaveProvide}
     onChange={(e) => setFieldValue('totalLeaveProvide', e.currentTarget.value)}
    variant="outlined" />
      <ErrorMessage className='spnError' name="leaveAllowPerMonth" component="div" style={{ color: 'red' }} />
    </Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
    <SubmitButton/>
<CancelButton OnClick={()=>{
  setVisible(false)
  resetForm()}}/>
    </Grid>
</Grid>
      </Form>
    )}
  </Formik>
    </MainCard>
}
    <div className='mt-2'>
    </div>
    <MainCard   title="Leave Type List" secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
<CustomDataTable 
columns={columns}
rows={data}
sortModel={sort}
TotalCount={totalCount}
actionField='leaveTypeId'
OnPaginationChange={handlePageChange}
OnEditConfirm={handleEdit}
OnDeleteConfirm={handleDeleteClick}
  />
</MainCard>
    </>
)
}
export default LeaveType;