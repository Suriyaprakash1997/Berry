import { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteConfirmDialog from './DeleteConfirmDialog';
const CustomDataTable=(props)=>{
    const { sortModel, rows,columns,loading,TotalCount,
        OnPaginationChange ,OnEditConfirm,OnDeleteConfirm
    } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [pagingConfig, setPagingConfig] = useState({ page:1, pageSize: 10 });
    const [sortConfig, setSortConfig] = useState({ column: sortModel.column, state: sortModel.direction });
    const newData = [...columns];
    const objAction= {
           field: 'holidayId',
           headerName: 'Action',
           width: 150,
           sortable:false,
           renderCell: (params) => {
             var Id=params.row.holidayId;
               return (
                   <>
                   <div>
                      <ModeEditOutlineIcon onClick={()=>(Edit(Id))}  className='mx-2 cursor_Pointer' color='primary'/>
                      <DeleteConfirmDialog Id={Id} onConfirm={handleDeleteClick}/>
                   </div>
                   </>
               );
             },
         }
         newData.push(objAction);
    useEffect(() => {
        const PaginationRequest = {
            PageIndex: pagingConfig.page,
            PageSize: pagingConfig.pageSize,
            SORTDIR: sortConfig.state,
            SORTCOL: sortConfig.column,
            SEARCHSTRING: searchTerm
        };
        OnPaginationChange(PaginationRequest);  // Call SendValues with updated PaginationRequest
    }, [sortConfig, pagingConfig, searchTerm]);
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
  function handleDeleteClick(type,Id){
     OnDeleteConfirm(type,Id)
  }
  function Edit(id){
    OnEditConfirm(id)
  }
    return(
        <>
              <div className='row d-flex flex-reverse justify-content-end'>
          <div className='col-lg-4'>
          <TextField  label="Search" value={searchTerm} onChange={handleSearchChange}/>
          </div>
        
        </div>
        <div className='mt-4'>
        <DataGrid
                rows={rows}
                columns={newData}
                loading={loading}
                getRowId={(row) => row.indexID}
        paginationMode='server'
        rowCount={TotalCount}
        
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
        </>
    )
}
export default CustomDataTable;