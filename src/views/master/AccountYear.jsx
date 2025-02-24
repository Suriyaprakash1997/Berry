import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { Button,TextField,Checkbox,
    FormGroup ,FormControlLabel ,Switch 
  } from '@mui/material';
import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GetPagination,
  GetAccountYear,DeleteAccountYear,
  SaveAccountYear } from '../../services/Master/AccountYearService';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CustomDatePicker from '../elements/CustomDatePicker';
import DeleteConfirmDialog from '../elements/DeleteConfirmDialog';
import { ToastContainer, toast } from 'react-toastify';
const AccountYear=()=>{
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ column: 'categoryID', state: 'desc' });
    const [Totalpagecount,setTotalpagecount]=useState(1);
    const [loading, setLoading] = useState(false);
    const date=Date.now();
    const initialValue={
      accountYearId:0,
      accountYearName:'',
      startDate:date,
      endDate:date,
      isActive:true
    }
    const[values,setValues]=useState(initialValue)
function Add(){
    setVisible(true)
}
function Cancel(){
    setVisible(false)
}
const PaginationRequest={
    PageIndex : currentPage,
    PageSize : itemsPerPage,
    SORTDIR : sortConfig.state,
    SORTCOL : sortConfig.column,
    SEARCHSTRING : searchTerm
};
useEffect(()=>{
    GetList()
},[currentPage, itemsPerPage, searchTerm, sortConfig])
function GetList(){
GetPagination(PaginationRequest)
.then((res)=>{
var data=res.data;
setData(data.rows);

}).catch((error)=>{
    console.log("error:",error);
})
}
const columns = [
    { field: 'indexID', headerName: 'S.No'},
    {
      field: 'accountYearName',
      headerName: 'Account Year',
      flex: 1,
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
    },
    {
        field: 'endDate',
        headerName: 'End Date',
        flex: 1,
      },
      {
        field: 'isActive',
        headerName: 'Is Active',
        flex: 1,
        renderCell: (params) => {
            return    <Switch  disabled defaultChecked={params.value} />;
          },
      },
   
      {
        field: 'accountYearId',
        headerName: 'Action',
        flex: 1,
        renderCell: (params) => {
          var Id=params.row.accountYearId;
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
  
 function Edit(data){
  toast.success("Success")
   console.log("Data:",data);
   
 }

 const handleDeleteClick=(type,Id)=>{
  console.log("Type:",type);
  console.log("ID:",Id);
  
 }
  const handleSortChange = (item) => {
    if(item.length>0){
        var sColumn=item[0].field;
        var sDirection=item[0].sort;
        const validDirection = sDirection === 'asc' || sDirection === 'desc' ? sDirection: 'asc';
        setSortConfig({
          column:sColumn,
          state:validDirection
        }); 
    }
    
  };
  const handlePageModelChange=(item)=>{
setItemsPerPage(item.pageSize);
setCurrentPage(item.page);

  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleStartDateChange=(type)=>{
   const newData={...values,startDate:type};
   setValues(newData);
  }
  const handleEndDateChange=(type)=>{
    const newData={...values,endDate:type};
    setValues(newData);
   }
   function handleInput(event){
    const newData={...values,[event.target.name]:event.target.value};
    setValues(newData);
}
function handleCheckInput(event){
  var check=event.target.checked;
  const newData={...values,isActive:check};
  setValues(newData);
}
    return(

        <>
          <ToastContainer/>
          {visible&&
          <MainCard title="Account Year">
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
  <input name='accountYearId' type='hidden' value={values.accountYearId}/>
<CustomDatePicker dateValue={values.startDate} OnDateChange={handleStartDateChange} label="Start Date"/>
</Grid>
<Grid size={{xs:12,sm:6}}>
<CustomDatePicker dateValue={values.endDate} OnDateChange={handleEndDateChange} label="End Date"/>
</Grid>
<Grid size={{xs:12,sm:6}}>
<TextField value={values.accountYearName} className='textField'
 onChange={handleInput} name='accountYearName' 
  fullWidth   label="Account Year Name" variant="outlined" />

</Grid>
<Grid size={{xs:12,sm:6}}>
<FormControlLabel control={<Switch defaultChecked={values.isActive} onChange={handleCheckInput} />} label="Is Active" />
</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<Button className='mx-2' variant="contained" color="success">Save</Button>

<Button onClick={()=>Cancel()} variant="contained" color="error">Cancel</Button>
</Grid>
</Grid>
          </MainCard>
          }
      <div className='mt-2'>
      
          </div>
          <MainCard   title="Account Year List" secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button>}>
<div className='row d-flex flex-reverse justify-content-end'>
  <div className='col-lg-4'>
  <TextField  label="Search" value={searchTerm} onChange={handleSearchChange}/>
  </div>

</div>

<div className='mt-4'>
<DataGrid
        rows={data}
        columns={columns}
        pageSize={itemsPerPage}
        rowCount={Totalpagecount * itemsPerPage} // Provide total row count
        paginationMode="server" // Server-side pagination
        onPaginationModelChange={handlePageModelChange}
        onSortModelChange={handleSortChange}
        getRowId={(row) => row.indexID}
          pageSizeOptions={[5,10,20,50,100]}
          paginationModel={{
            page: currentPage - 1, // Zero-based page
            pageSize: itemsPerPage,
          }}
          disableRowSelectionOnClick
          // sx={{
          //   '& .MuiDataGrid-cell:focus': {
          //     outline: 'none',
          //   },
          //   '& .MuiDataGrid-cell.Mui-selected': {
          //     border: 'none',
          //   },
          // }}
      />
</div>
        
      </MainCard>
        </>
    )
}
export default AccountYear;