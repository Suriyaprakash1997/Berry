import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Switch,
    FormControlLabel,Button
 }from '@mui/material';
 import { Formik, Form, ErrorMessage } from 'formik';
import SubmitButton from '../../elements/SubmitButton';
import CancelButton from '../../elements/CancelButton';
import CustomDatePicker from '../../elements/CustomDatePicker';
 import { DataGrid } from '@mui/x-data-grid';
 import { SalaryValidator } from '../../../validation/EmployeeValidation';
 import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteConfirmDialog from '../../elements/DeleteConfirmDialog';
import dayjs from 'dayjs';
const SalaryInfo=({ salaryInfo, setSalaryInfo })=>{
    const [data,setData]=useState(salaryInfo)
     const initialValues = {
      salaryDetailId:0,
      salaryAmount:0,
      professionalTax:0,
      revisionDate:null,
      description:'',
      };
      const[formValue,setFormValue]=useState(initialValues)
      function SaveSalaryDetails(values) {
        let newData;
        
        if (values.salaryDetailId === 0) {
          values.salaryDetailId = Math.floor(Math.random() * 100) + 1;
          newData = [...data, values];
        } else {
          newData = data.map(item => (item.salaryDetailId === values.salaryDetailId ? values : item));
        }
      
        return newData;
      }
      function Edit(Id){
        const newData = data.find(item => item.documentId === Id); 
        setFormValue(newData)
      }
      function handleDeleteClick(type,Id){
        if(type==='Yes'){
           const selectedIndex=data.findIndex(a=>a.documentId===Id)
           if(selectedIndex>=0){
            const newData = data.filter(item => item.documentId !== Id); 
            setData(newData);
            setDocumentInfo(newData);
           }
        }
     }
      const handleDateChange = (name, value) => {
        setFormValue({ ...formValue, [name]: value });
      }
    const columns = [
      
        {
          field: 'revisionDate',
          headerName: 'Revision Date',
          sortable:false,
          width:200,
          renderCell: (params) => {
          var rDate=params.row.revisionDate;
            return (
                <>
               {rDate&&dayjs(rDate).format('DD-MM-YYYY')}
                </>
            );
          },
        },
        {
          field: 'salaryAmount',
          headerName: 'Gross Salary',
          cellClassName: 'rightAlign',
          flex: 1,
        },
        {
            field: 'description',
            headerName: 'Description',
            sortable:false,
            flex: 1,
          },  
          {
            field: 'salaryDetailId',
            headerName: 'Action',
            width:100,
            sortable:false,
            renderCell: (params) => {
              var Id=params.row.salaryDetailId;
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
      ];
    return(
        <>
           <MainCard title='Salary Information'>
                  <Formik
                  enableReinitialize
                   initialValues={formValue}
                   validationSchema={SalaryValidator}
                   onSubmit={(values, { resetForm }) => {
                    const updatedData = SaveSalaryDetails(values);
                    console.log("UpdatedData:",updatedData);  
                    setFormValue(initialValues);
                    setData(updatedData); 
                    setSalaryInfo(updatedData);
                    resetForm({ values: initialValues });
                  }}
                  >
        {({setFieldValue, values,setValues,resetForm})=>(
          <Form autoComplete="off">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <input type='hidden'  name="salaryDetailId" value={values.salaryDetailId}/>
            <Grid  size={{xs: 12,sm: 12, md: 6}}>
            <TextField  fullWidth  label="Salary Amount" 
             name="salaryAmount"
             value={values.salaryAmount}
             onChange={(e) => setFieldValue('salaryAmount', e.currentTarget.value)}
            variant="outlined" />
              <ErrorMessage className='spnError' name="salaryAmount" component="div" style={{ color: 'red' }} />
            </Grid>
            <Grid  size={{xs: 12,sm: 12, md: 6}}>
            <TextField  fullWidth  label="Professional Tax" 
             name="professionalTax"
             value={values.professionalTax}
             onChange={(e) => setFieldValue('professionalTax', e.currentTarget.value)}
            variant="outlined" />
              <ErrorMessage className='spnError' name="professionalTax" component="div" style={{ color: 'red' }} />
            </Grid>
            <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomDatePicker 
            label='Revision Date' 
            name='revisionDate'
            value={values.revisionDate}
            onChange={(newValue) => handleDateChange('revisionDate', newValue)}
            // onChange={(newValue) => formik.setFieldValue('revisionDate', newValue)}
            />
            <ErrorMessage className='spnError' name="revisionDate" component="div" style={{ color: 'red' }} />
        </Grid>
        <Grid  size={{xs: 12,sm: 12, md: 6}}>
            <TextField  fullWidth  label="Description" 
             name="description"
             value={values.description}
             onChange={(e) => setFieldValue('description', e.currentTarget.value)}
            variant="outlined" />
              <ErrorMessage className='spnError' name="description" component="div" style={{ color: 'red' }} />
            </Grid>
            </Grid>
            <Grid container>
        <Grid size={12} className="mt-3 d-flex justify-content-end">
        <SubmitButton/>
        <CancelButton OnClick={()=>{
          resetForm({ values: initialValues })}}/>
        </Grid>
        </Grid>
          </Form>
        )}
          </Formik>
         <div className='mt-4'>
         <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row.salaryDetailId}
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
                </MainCard>
         {/* <MainCard title='Salary Information'>
         <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Gross Salary" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Professional Tax" variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <CustomDatePicker 
            label='Date of Join' 
            name='dateOfJoin'
            value={basicInfo.dateOfJoin}
            onChange={(newValue) => handleDateChange('dateOfJoin', newValue)}
            />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField className='textField' fullWidth  label="Description" variant="outlined" />
    </Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-4 d-flex justify-content-end">
<Button  className='mx-2' variant="contained" color="success">Save</Button>

<Button  variant="contained" color="error">Cancel</Button>
</Grid>
</Grid> 
<div className='mt-4'>
<DataGrid
        rows={data}
        columns={columns}
      />
</div>
        </MainCard> */}
        </>
    )
}
export default SalaryInfo