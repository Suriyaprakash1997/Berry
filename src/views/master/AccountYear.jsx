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
import { GetPagination } from '../../services/Master/AccountYearService';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CustomDatePicker from '../elements/CustomDatePicker';
const AccountYear=()=>{
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ column: 'categoryID', state: 'desc' });
    const [Totalpagecount,setTotalpagecount]=useState(1);
    const [loading, setLoading] = useState(false);
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
            return <Checkbox style={{color:'blue'}} checked={params.value} disabled />;
          },
      },
   
      {
        field: 'accountYearId',
        headerName: 'Action',
        flex: 1,
        renderCell: (params) => {
            return (
                <>
                <div>
                   <ModeEditOutlineIcon onClick={()=>(Edit({params}))} className='mx-2' color='primary'/>
                    <DeleteIcon onClick={()=>(Delete({params}))}   color='error'/>
                </div>
                </>
            );
          },
      },
   
  ];
  
 function Edit(data){
    var row=data.params.row;
   console.log("Data:",data.params.row);
   
 }
 function Delete(data){
    var row=data.params.row;
   console.log("Data:",data.params.row);
   
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
   console.log("StartDate:",type);
   
  }
    return(

        <>
          {visible&&
          <MainCard title="Account Year">
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
<CustomDatePicker OnDateChange={handleStartDateChange} label="Start Date"/>
</Grid>
<Grid size={{xs:12,sm:6}}>
<CustomDatePicker label="End Date"/>
</Grid>
<Grid size={{xs:12,sm:6}}>
<TextField className='textField' style={{width:'100%'}}  label="Account Year Name" variant="outlined" />

</Grid>
<Grid size={{xs:12,sm:6}}>
<FormControlLabel control={<Switch defaultChecked />} label="Is Active" />
</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<Button className='mx-2' variant="outlined">Save</Button>
<Button onClick={()=>Cancel()} variant="outlined">Cancel</Button>
</Grid>
</Grid>
          </MainCard>
          }
      <div className='mt-2'>
      
          </div>
          <MainCard   title="Account Year List" secondary={<Button onClick={()=>Add()} variant='outlined'>Add</Button>}>
<div className='d-flex justify-content-end'>
<TextField label="Search" value={searchTerm} onChange={handleSearchChange}/>
</div>


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
      />
      </MainCard>
        </>
    )
}
export default AccountYear;