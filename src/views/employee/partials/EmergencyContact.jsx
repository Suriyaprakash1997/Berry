import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField}from '@mui/material';
 import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
 import SubmitButton from '../../elements/SubmitButton';
 import CancelButton from '../../elements/CancelButton';
 import { EmergencyContactValidator } from '../../../validation/EmployeeValidation';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteConfirmDialog from '../../elements/DeleteConfirmDialog';
const EmergencyContact=({ emergencyInfo, setEmergencyInfo })=>{
const [data,setData]=useState(emergencyInfo)
const initialValue={
  contactId:0,
  name:'',
  relation:'',
  phone:'',
  address:''
}
const formik = useFormik({
   initialValues: initialValue,
   validationSchema: EmergencyContactValidator,
   onSubmit: (values) => {
      SaveEmergencyContact(values)
      formik.resetForm()
    },
  });
function SaveEmergencyContact(values){
  if(values.contactId===0){
    values.contactId=Math.floor((Math.random()*100)+1)
  }
  else{
    const selectedIndex=data.findIndex(a=>a.contactId===values.contactId)
    if(selectedIndex>=0){
     const newData = data.filter(item => item.contactId !== values.contactId); 
     setData(newData);
    }
  }
  setData(prevData => {
    const newData = [...prevData, values];
    setEmergencyInfo(newData);
    return newData;
  });
  }
  function Edit(Id){
    const newData = data.find(item => item.contactId === Id); 
    formik.setValues(newData)
  }
  function handleDeleteClick(type,Id){
    if(type==='Yes'){
       const selectedIndex=data.findIndex(a=>a.contactId===Id)
       if(selectedIndex>=0){
        const newData = data.filter(item => item.contactId !== Id); 
        setData(newData);
        setEmergencyInfo(newData);
       }
    }
 }
    const columns = [
        
          {
            field: 'contactId',
            headerName: 'Action',
            width:100,
            sortable:false,
            renderCell: (params) => {
              var Id=params.row.contactId;
                return (
                    <>
                    <div >
                       <ModeEditOutlineIcon onClick={()=>(Edit(Id))}  className='mx-1 cursor_Pointer' color='primary'/>
                       <DeleteConfirmDialog Id={Id} onConfirm={handleDeleteClick}/>
                    </div>
                    </>
                );
              },
          },
           {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          minWidth:200
        },
        {
          field: 'relation',
          headerName: 'Relation',
          width:150,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width:150,
        },
        {
            field: 'address',
            headerName: 'Address',
            width:200,
          },  
        
       
      ];
    return(
        <>
        <MainCard title='Emergency Contact'>
          <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <input type='hidden'  name="contactId" value={formik.values.contactId}/>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                 
                  />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField
                    fullWidth
                    id="relation"
                    name="relation"
                    label="Relation"
                    value={formik.values.relation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.relation && Boolean(formik.errors.relation)}
                    helperText={formik.touched.relation && formik.errors.relation}
                  />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
              <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                  />
        </Grid>
        </Grid>
        <Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={()=>{formik.resetForm()}}/>
</Grid>
</Grid>
</form>
        </MainCard>
        <div className='mt-3'>
       <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.contactId}
        sortingOrder={['asc', 'desc']}
        disableRowSelectionOnClick
        disableColumnResize={true}
        disableColumnMenu={true}
        hideFooterPagination={true}
        
        sx={{
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-cell.Mui-selected': {
            border: 'none',
          },
        }}
      />
</div>
        </>
    )
}
export default EmergencyContact