import React,{ useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteConfirmDialog from './DeleteConfirmDialog';
const CustomDataTable=(props)=>{
    const { model,setModel, rows,columns,loading,TotalCount,actionField,
         OnEditConfirm,OnDeleteConfirm
    } = props;
    // const [searchTerm, setSearchTerm] = useState('');
    // const [pagingConfig, setPagingConfig] = useState({ page:1, pageSize: 10 });
    // const [sortConfig, setSortConfig] = useState({ column: sortModel.column, state: sortModel.direction });
     const newData = [...columns];
    const objAction= {
           field: actionField,
           headerName: 'Action',
           width: 150,
           sortable:false,
           renderCell: (params) => {
             var Id=params.row[actionField];
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
    // useEffect(() => {
    //     const PaginationRequest = {
    //         PageIndex: pagingConfig.page,
    //         PageSize: pagingConfig.pageSize,
    //         SORTDIR: sortConfig.state,
    //         SORTCOL: sortConfig.column,
    //         SEARCHSTRING: searchTerm
    //     };
    //     OnPaginationChange(PaginationRequest); 
    // }, [sortConfig, pagingConfig, searchTerm]);
  //   useEffect(() => {
  //     OnPaginationChange(model);  
  // }, [model, OnPaginationChange]);
    const handleSortChange = (item) => {
        var sColumn=item[0].field;
        var sDirection=item[0].sort;
        setModel(prevModel => ({
          ...prevModel,
          SORTCOL: sColumn,
          SORTDIR: sDirection
        }));
  };
  const handlePageModelChange=(item)=>{
    setModel(prevModel => ({
      ...prevModel,
      PageSize: item.pageSize,
      PageIndex: item.page + 1
    }));
  }
  const handleSearchChange = (event) => {
    setModel(prevModel => ({
      ...prevModel,
      SEARCHSTRING: event.target.value  // Remove extra []
    }));
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
          <TextField  label="Search" name='SEARCHSTRING' value={model.SEARCHSTRING} onChange={handleSearchChange}/>
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
                    paginationModel:{
                      page:model?.PageIndex||1,
                      pageSize:model?.PageSize||10
                    }
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
export default React.memo(CustomDataTable);