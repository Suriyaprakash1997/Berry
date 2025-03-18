import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Switch,FormControlLabel}from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import SubmitButton from '../../elements/SubmitButton';
import CancelButton from '../../elements/CancelButton';
import CustomDatePicker from '../../elements/CustomDatePicker';
import { EducationValidator,ExperienceValidator } from '../../../validation/EmployeeValidation';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteConfirmDialog from '../../elements/DeleteConfirmDialog';
const EducationInfo=({ educationInfo, setEducationInfo })=>{
  var date=Date.now()
    const educationValue={
      educationId:0,
      educationName:'',
      institutionName:'',
      academicYear:'',
      isDocumentAdd:false
    }
    const experienceValue={
      experienceId:0,
      companyName:'',
      designation:'',
      contactNo:'',
      contactEmail:'',
      fromDate:dayjs(date),
      toDate:dayjs(date)
    }
    const formik = useFormik({
       initialValues: educationValue,
       validationSchema: EducationValidator,
       onSubmit: (values) => {
          SaveEducationDetails(values)
          formik.resetForm()
        },
      });
      const expFormik = useFormik({
        initialValues:experienceValue,
        validationSchema: ExperienceValidator,
        onSubmit: (values) => {
           SaveExperienceDetails(values)
           expFormik.resetForm()
         },
       });
       function SaveEducationDetails(values){
        if(values.educationId===0){
          values.educationId=Math.floor((Math.random()*100)+1)
        }
        else{
          const selectedIndex=educationInfo.educationDetails.findIndex(a=>a.educationId===values.educationId)
          if(selectedIndex>=0){
           const newData = educationInfo.educationDetails.filter(item => item.educationId !== values.educationId); 
           newData.push(values);
           setEducationInfo({ ...educationInfo, educationDetails: newData });
           return
          }
        }
        const updatedData = [...educationInfo.educationDetails, values];
        setEducationInfo({ ...educationInfo, educationDetails: updatedData });
        }
        function SaveExperienceDetails(values){
          if(values.experienceId===0){
            values.experienceId=Math.floor((Math.random()*100)+1)
          }
          else{
            const selectedIndex=educationInfo.experienceDetails.findIndex(a=>a.experienceId===values.experienceId)
            if(selectedIndex>=0){
             const newData = educationInfo.experienceDetails.filter(item => item.experienceId !== values.experienceId); 
             newData.push(values);
             setEducationInfo({ ...educationInfo, experienceDetails: newData });
             return
            }
          }
          const updatedData = [...educationInfo.experienceDetails, values];
          setEducationInfo({ ...educationInfo, experienceDetails: updatedData });
          }
        const educationColumns = [
        
          {
            field: 'educationId',
            headerName: 'Action',
            width:100,
            sortable:false,
            renderCell: (params) => {
              var Id=params.row.educationId;
                return (
                    <>
                    <div >
                       <ModeEditOutlineIcon onClick={()=>(EditEducation(Id))}  className='mx-1 cursor_Pointer' color='primary'/>
                       <DeleteConfirmDialog  Id={Id} onConfirm={handleDeleteClick}/>
                    </div>
                    </>
                );
              },
          },
           {
          field: 'educationName',
          headerName: 'Education Name',
          flex: 1,
          minWidth:200
        },
        {
          field: 'institutionName',
          headerName: 'Institution Name',
          width:150,
        },
        {
          field: 'academicYear',
          headerName: 'Academic Year',
          width:150,
        },
        {
            field: 'isDocumentAdd',
            headerName: 'Is Document Add',
            width:200,
          },  
        
       
      ];
      const experienceColumns = [
        {
          field: 'experienceId',
          headerName: 'Action',
          width:100,
          sortable:false,
          renderCell: (params) => {
            var Id=params.row.experienceId;
              return (
                  <>
                  <div >
                     <ModeEditOutlineIcon onClick={()=>(EditExperience(Id))}  className='mx-1 cursor_Pointer' color='primary'/>
                     <DeleteConfirmDialog  Id={Id} onConfirm={handleExperienceDeleteClick}/>
                  </div>
                  </>
              );
            },
        },
        {
          field: 'fromDate',
          headerName: 'From Date',
          width:150,
          renderCell: (params) => {
            var fromDate=params.row.fromDate;
              return (
                  <>
                 {fromDate.format('DD-MM-YYYY')}
                  </>
              );
            },
        },
        {
          field: 'toDate',
          headerName: 'To Date',
          width:150,
          renderCell: (params) => {
            var toDate=params.row.toDate;
              return (
                  <>
                 {toDate.format('DD-MM-YYYY')}
                  </>
              );
            },
        },
        {
            field: 'companyName',
            headerName: 'Company Name',
            width:200,
          },  
          {
            field: 'designation',
            headerName: 'Designation',
            width:200,
          }, 
          {
            field: 'contactNo',
            headerName: 'Contact No',
            width:200,
          }, 
          {
            field: 'contactEmail',
            headerName: 'Contact Email',
            minWidth:200,
            flex: 1,
          }, 
      ];
      function EditEducation(Id){
        const newData =  educationInfo.educationDetails.find(item => item.educationId === Id); 
        formik.setValues(newData)
      }
      function handleDeleteClick(type,Id){
        if(type==='Yes'){
           const selectedIndex=educationInfo.educationDetails.findIndex(a=>a.educationId===Id)
           if(selectedIndex>=0){
            const newData = educationInfo.educationDetails.filter(item => item.educationId !== Id); 
            setEducationInfo({ ...educationInfo, educationDetails: newData });
           }
        }
     }
     function EditExperience(Id){
      const newData = educationInfo.experienceDetails.find(item => item.experienceId === Id); 
      expFormik.setValues(newData)
    }
    function handleExperienceDeleteClick(type,Id){
      if(type==='Yes'){
         const selectedIndex=educationInfo.experienceDetails.findIndex(a=>a.experienceId===Id)
         if(selectedIndex>=0){
          const newData = educationInfo.experienceDetails.filter(item => item.experienceId !== Id); 
          setEducationInfo({ ...educationInfo, experienceDetails: newData });
         }
      }
   }
    return(
        <>
          <MainCard title='Education Details'>
            <form onSubmit={formik.handleSubmit} autoComplete='off'>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <input type='hidden'  name="educationId" value={formik.values.educationId}/>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField  fullWidth  label="Education Name"
     name="educationName"
     value={formik.values.educationName}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     error={formik.touched.educationName && Boolean(formik.errors.educationName)}
     helperText={formik.touched.educationName && formik.errors.educationName}
    variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField  fullWidth  label="Institution Name"
    name="institutionName"
    value={formik.values.institutionName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.institutionName && Boolean(formik.errors.institutionName)}
    helperText={formik.touched.institutionName && formik.errors.institutionName}
    variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField  fullWidth  label="Academic Year"
    name="academicYear"
    value={formik.values.academicYear}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.academicYear && Boolean(formik.errors.academicYear)}
    helperText={formik.touched.academicYear && formik.errors.academicYear}
    variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <FormControlLabel control={
      <Switch  
      name='isDocumentAdd'
      onChange={(e) => formik.setFieldValue('isDocumentAdd', e.target.checked)}
      checked={formik.values.isDocumentAdd}
      />
      } 
      label="Is Document Added" />
    </Grid>
    </Grid>
    <Grid container>
<Grid size={12} className="mt-4 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={()=>{formik.resetForm()}}/>
</Grid>
</Grid> 
</form>
    <div className='mt-4'>
 <DataGrid
            rows={educationInfo.educationDetails}
            columns={educationColumns}
            getRowId={(row) => row.educationId}
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
          <div className='mt-2'></div>
          <MainCard title='Experience Details'>
            <form onSubmit={expFormik.handleSubmit} autoComplete='off'>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField  fullWidth  label="Company Name"
     name="companyName"
     value={expFormik.values.companyName}
     onChange={expFormik.handleChange}
     onBlur={expFormik.handleBlur}
     error={expFormik.touched.companyName && Boolean(expFormik.errors.companyName)}
     helperText={expFormik.touched.companyName && expFormik.errors.companyName}
    variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField fullWidth  label="Designation" 
     name="designation"
     value={expFormik.values.designation}
     onChange={expFormik.handleChange}
     onBlur={expFormik.handleBlur}
     error={expFormik.touched.designation && Boolean(expFormik.errors.designation)}
     helperText={expFormik.touched.designation && expFormik.errors.designation}
    variant="outlined" />
    </Grid>

    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField  fullWidth  label="Contact No"
     name="contactNo"
     value={expFormik.values.contactNo}
     onChange={expFormik.handleChange}
     onBlur={expFormik.handleBlur}
     error={expFormik.touched.contactNo && Boolean(expFormik.errors.contactNo)}
     helperText={expFormik.touched.contactNo && expFormik.errors.contactNo}
    variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <TextField  fullWidth  label="Contact Email"
     name="contactEmail"
     value={expFormik.values.contactEmail}
     onChange={expFormik.handleChange}
     onBlur={expFormik.handleBlur}
     error={expFormik.touched.contactEmail && Boolean(expFormik.errors.contactEmail)}
     helperText={expFormik.touched.contactEmail && expFormik.errors.contactEmail}
    variant="outlined" />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <CustomDatePicker 
            label='From Date' 
            name='fromDate'
            value={expFormik.values.fromDate}
            onChange={(newValue) => expFormik.setFieldValue('fromDate', newValue)}
            />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 6}}>
    <CustomDatePicker 
            label='To Date' 
            name='toDate'
            value={expFormik.values.toDate}
            onChange={(newValue) => expFormik.setFieldValue('toDate', newValue)}
            />
    </Grid>
    </Grid>
    <Grid container>
<Grid size={12} className="mt-4 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={()=>{expFormik.resetForm()}}/>
</Grid>
</Grid> 
</form>
    <div className='mt-4'>
    <DataGrid
            rows={educationInfo.experienceDetails}
            columns={experienceColumns}
            getRowId={(row) => row.experienceId}
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
        </>
    )
}
export default EducationInfo