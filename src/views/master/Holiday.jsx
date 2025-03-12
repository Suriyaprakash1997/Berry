import { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import { Button,TextField } from '@mui/material';
import CustomDatePicker from '../elements/CustomDatePicker';
import CustomDataTable from '../elements/CustomDataTable';
import { GetPagination,Get,Delete,Save } from '../../services/Master/HolidayService';
import { ToastContainer, toast } from 'react-toastify';
import {  useFormik } from 'formik';
import dayjs from 'dayjs';
import { holidayValidator } from '../../validation/MasterValidation';
const Holiday=()=>{
const date=Date.now();
const[visible,setVisible]=useState(false)
const initialValue={
    holidayId:0,
    holidayName:'',
    holidayDate:dayjs(date)
  }
  const[model,setModel]=useState({});
  const[data,setData]=useState([]);
  const[totalCount,setTotalCount]=useState(1);
  const sort= {column:'holidayId',direction:'desc'};
     const formik = useFormik({
          initialValues: initialValue,
          validationSchema: holidayValidator,
          onSubmit: (values) => {
            const formattedDate = values.holidayDate.format('YYYY-MM-DD');
            values.holidayDate = formattedDate;
            SaveHoliday(values);
          },
        });
         const SaveHoliday=(data)=>{
             Save(data)
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
function Add(){
    setVisible(true)
}
function Cancel(){
    setVisible(false)
    formik.setValues(initialValue)
}
useEffect(()=>{
GetList();
},[model])
function GetList(){
    GetPagination(1,model)
    .then((res)=>{
        var data=res.data;
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
        field: 'holidayDate',
        headerName: 'Holiday Date',
        flex: 1,
      },
    {
      field: 'holidayName',
      headerName: 'Holiday Name',
      flex: 1,
    },
   
  ];

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
              data.holidayDate=dayjs(data.holidayDate);
              formik.setValues(data);
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
   
    <MainCard title="Holiday">

        <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
<input type='hidden'  name="holidayId" value={formik.values.holidayId}/>
<Grid size={{xs:12,sm:6}}>
<CustomDatePicker 
label='Holiday Date' 
name='holidayDate'
value={formik.values.holidayDate && dayjs(formik.values.holidayDate)}
onChange={(newValue) => formik.setFieldValue('holidayDate', newValue)}
onBlur={formik.handleBlur}
error={formik.touched.holidayDate && Boolean(formik.errors.holidayDate)} 
helperText={formik.touched.holidayDate && formik.errors.holidayDate}
/>
</Grid>
<Grid size={{xs:12,sm:6}}>
<TextField fullWidth
          id="holidayName"
          name="holidayName"
          label="Holiday Name"
          value={formik.values.holidayName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.holidayName && Boolean(formik.errors.holidayName)}
          helperText={formik.touched.holidayName && formik.errors.holidayName} />

</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<Button color="primary" variant="contained"  type="submit" >Save</Button>
<Button className='mx-2' 
onClick={() => Cancel()}
 color="error" variant="contained"  type="button">Cancel</Button>
</Grid>
</Grid>
        </form>
    </MainCard>
     }
    <div className='mt-2'>
    </div>
    <MainCard   title="Holiday List" secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
<CustomDataTable 
columns={columns}
rows={data}
sortModel={sort}
TotalCount={totalCount}
actionField='holidayId'
OnPaginationChange={handlePageChange}
OnEditConfirm={handleEdit}
OnDeleteConfirm={handleDeleteClick}
  />
</MainCard>
    </>
)
}
export default Holiday