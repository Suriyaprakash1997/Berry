import { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import { Button,TextField } from '@mui/material';
import CustomDatePicker from '../elements/CustomDatePicker';
import CustomDataTable from '../elements/CustomDataTable';
import { GetPagination,Get,Delete,Save } from '../../services/Master/HolidayService';
import { ToastContainer, toast } from 'react-toastify';
const Holiday=()=>{
const date=Date.now();
const[visible,setVisible]=useState(false)
const initialValue={
    holidayId:0,
    holidayName:'',
    holidayDate:date
  }
  const[values,setValues]=useState(initialValue)
  const[model,setModel]=useState({});
  const[data,setData]=useState([]);
  const[totalCount,setTotalCount]=useState(1);
  const sort= {column:'holidayId',direction:'desc'};
function Add(){
    setVisible(true)
}
function Cancel(){
    setVisible(false)
}
const handleEndDateChange=(type)=>{
    const newData={...values,holidayDate:type};
    setValues(newData);
   }
   function handleInput(event){
    const newData={...values,[event.target.name]:event.target.value};
    setValues(newData);
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
function Edit(id){
alert("ID:"+id)
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
alert("ParentComponent:"+id);
         }
return(
    <>
    <ToastContainer/>
    {visible&&
   
    <MainCard title="Holiday">
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
<CustomDatePicker dateValue={values.holidayDate} OnDateChange={handleEndDateChange} label="Holiday Date"/>
</Grid>
<Grid size={{xs:12,sm:6}}>
<TextField className='textField' fullWidth 
name='holidayName' value={values.holidayName}
onChange={handleInput}
 label="Holiday Name" variant="outlined" />

</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<Button color="primary" variant="contained"  type="submit" >Save</Button>
<Button className='mx-2' onClick={()=>Cancel()} color="error" variant="contained"  type="button">Cancel</Button>
</Grid>
</Grid>
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
 OnPaginationChange={handlePageChange}
 OnEditConfirm={handleEdit}
 OnDeleteConfirm={handleDeleteClick}
  />
</MainCard>
    </>
)
}
export default Holiday