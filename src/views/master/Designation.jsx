import { useState,useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button,TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteConfirmDialog from '../elements/DeleteConfirmDialog';
import { GetPagination,Get,Delete,Save } from '../../services/Master/DesignationService';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
const validationSchema = yup.object({
  designationName: yup
    .string('please enter designation')
    .required('please enter designation'),
});
const Designation=()=>{
  const[visible,setVisible]=useState(false)
  const initialValue={
    designationId:0,
    designationName: '',
  }
  const[data,setData]=useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [pagingConfig, setPagingConfig] = useState({ page:1, pageSize: 10 });
  const [sortConfig, setSortConfig] = useState({ column: 'designationID', state: 'desc' });
  const [Totalpagecount,setTotalpagecount]=useState(1);
  const [loading, setLoading] = useState(false);
  const [values,setValues]=useState(initialValue)
  function Add(){
    setVisible(true)
}
function Cancel(){
    setVisible(false)
    formik.resetForm();
}
    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => {
          SaveDesignation(values);
        },
      });
      function SaveDesignation(data){
Save(data)
.then((res)=>{
  var data=res.data;

if(data.status>0){
toast.success(data.message);
formik.resetForm();
setValues(initialValue);
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
      const PaginationRequest={
        PageIndex : pagingConfig.page,
        PageSize : pagingConfig.pageSize,
        SORTDIR : sortConfig.state,
        SORTCOL : sortConfig.column,
        SEARCHSTRING : searchTerm
    };
      useEffect(()=>{
          GetList()
      },[pagingConfig, searchTerm, sortConfig])
      function GetList(){
        setLoading(true);
      GetPagination(PaginationRequest)
      .then((res)=>{
      var data=res.data;
      console.log("Res:",res);
      setTotalpagecount(data.rowsTotal)
      setData(data.rows);
      
      }).catch((error)=>{
          console.log("error:",error);
      }).finally(
        setLoading(false)
      )
      }
      function Edit(id){
        Get(id)
        .then((res)=>{
          var data=res.data;
          setValues(data)
          formik.setValues(data);
          setVisible(true)
            })
            .catch((error)=>{
          console.log("Errors:",error);
          
            })
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
      const columns = [
        { field: 'indexID',  width: 150, headerName: 'S.No',sortable:false},
        {
          field: 'designationName',
          headerName: 'Designation Name',
          flex: 1,
        },
        
          {
            field: 'designationId',
            headerName: 'Action',
            width: 150,
            sortable:false,
            renderCell: (params) => {
              var Id=params.row.designationId;
                return (
                    <>
                    <div>
                       <ModeEditOutlineIcon onClick={()=>(Edit(Id))} className='mx-2 cursor_Pointer' color='primary'/>
                       <DeleteConfirmDialog Id={Id} onConfirm={handleDeleteClick}/>
                    </div>
                    </>
                );
              },
          },
       
      ];
      const handleSortChange = (item) => {
            var sColumn=item[0].field;
            var sDirection=item[0].sort;
            const validDirection = sDirection === 'asc' || sDirection === 'desc' ? sDirection: 'asc';
            setSortConfig({
              column:sColumn,
              state:validDirection
            }); 
      };
      const handlePageModelChange=(item)=>{
        setPagingConfig({
          page:item.page+1,
          pageSize:item.pageSize
        });
      }
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    return(
        <>
              <ToastContainer/>
          {visible&&
         <div>
          <MainCard title="Designation">
          <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <Grid container spacing={2} className="d-flex align-items-center">
        <Grid size={{xs:12,sm:6}}>
          <input type='hidden'  name="designationId" value={formik.values.designationId}/>
        <TextField
          fullWidth
          id="designationName"
          name="designationName"
          label="Designation Name"
          value={formik.values.roleName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.roleName && Boolean(formik.errors.roleName)}
          helperText={formik.touched.roleName && formik.errors.roleName}
       
        />
        </Grid>
        <Grid size={{xs:12,sm:6}} className="d-flex justify-content-end">
        <Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>
        <Button className='mx-2' onClick={()=>Cancel()} color="error" variant="contained"  type="button">
          Cancel
        </Button>
        </Grid>
        </Grid>
      </form>
          </MainCard>

    </div>
}
    <div className='my-3'>
      <MainCard title="Designation List" secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
      <div className='row d-flex flex-reverse justify-content-end'>
  <div className='col-lg-4'>
  <TextField  label="Search" value={searchTerm} onChange={handleSearchChange}/>
  </div>

</div>
<div className='mt-4'>
<DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.indexID}
paginationMode='server'
rowCount={Totalpagecount}

        sortingMode="server"
        sortingOrder={['asc', 'desc']}
        initialState={{
          pagination: {
            paginationModel:pagingConfig
          },
        }}
        onPaginationModelChange={handlePageModelChange}
        onSortModelChange={handleSortChange}
        pageSizeOptions={[5,10,25, 50, 100]}
        disableRowSelectionOnClick
        disableColumnResize={true}
        disableColumnMenu={true}
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
    </div>
        </>
    )
}
export default Designation