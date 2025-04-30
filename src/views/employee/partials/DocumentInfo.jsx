import {useState,useRef} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,FormControlLabel ,Switch }from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Formik, Form, ErrorMessage } from 'formik';
import SubmitButton from '../../elements/SubmitButton';
import CancelButton from '../../elements/CancelButton';
import { DocumentValidator } from '../../../validation/EmployeeValidation';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteConfirmDialog from '../../elements/DeleteConfirmDialog';
const DocumentInfo=({ documentInfo, setDocumentInfo })=>{
  const [data,setData]=useState(documentInfo)
  const fileInputRef = useRef(null);
 const initialValues = {
  documentId:0,
  documentType:'',
  file:null,
  isVerified:false
  };
  const[formValue,setFormValue]=useState(initialValues)
  function SaveDocument(values) {
    let newData;
    
    if (values.documentId === 0) {
      values.documentId = Math.floor(Math.random() * 100) + 1;
      newData = [...data, values];
    } else {
      newData = data.map(item => (item.documentId === values.documentId ? values : item));
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
    const columns = [
      {
        field: 'documentId',
        headerName: 'Action',
        width:100,
        sortable:false,
        renderCell: (params) => {
          var Id=params.row.documentId;
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
          field: 'documentType',
          headerName: 'Document Type',
          flex: 1,
          minwidth:200,
        },
        {
          field: 'File Name',
          headerName: 'file',
          sortable:false,
          width:200,
        renderCell: (params) => {
          var files=params.row.file;
            return (
                <>
               {files&&files.name}
                </>
            );
          },
        },
        {
            field: 'isVerified',
            headerName: 'Is Verified',
            width:150
          },  
      ];
    return(
        <>
        <MainCard title='Document Information'>
          <Formik
          enableReinitialize
           initialValues={formValue}
           validationSchema={DocumentValidator}
           onSubmit={(values, { resetForm }) => {
            const updatedData = SaveDocument(values);
            setData(updatedData); 
            setDocumentInfo(updatedData);
            if (fileInputRef.current) {
              fileInputRef.current.value = null;
            }
            resetForm({ values: initialValues });
          }}
          >
{({setFieldValue, values,setValues,resetForm})=>(
  <Form>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <input type='hidden'  name="documentId" value={values.documentId}/>
    <Grid  size={{xs: 12,sm: 12, md: 4}}>
    <TextField  fullWidth  label="Document Type" 
     name="documentType"
     value={values.documentType}
     onChange={(e) => setFieldValue('documentType', e.currentTarget.value)}
    variant="outlined" />
      <ErrorMessage className='spnError' name="documentType" component="div" style={{ color: 'red' }} />
    </Grid>
    <Grid  size={{xs: 12,sm: 12, md: 4}}>
<input
              className='form-control'
                type="file"
                id="file"
                name="file"
                style={{lineHeight:'2.5'}}
                ref={fileInputRef}
                onChange={(e) => setFieldValue('file', e.currentTarget.files[0])}
              />
              <ErrorMessage className='spnError' name="file" component="div" style={{ color: 'red' }} />
    </Grid>
    <Grid size={{xs: 12,sm: 12, md: 4}}>
    <FormControlLabel 
    control={<Switch 
    checked={values.isVerified}
    onChange={(e)=>setFieldValue('isVerified',e.target.checked)}
    />}
     label="Is Verified" />
    </Grid>
    </Grid>
    <Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={()=>{
   if (fileInputRef.current) {
    fileInputRef.current.value = null; // Reset the file input manually
  }
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
        getRowId={(row) => row.documentId}
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
export default DocumentInfo