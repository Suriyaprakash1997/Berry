import {useState,useRef,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Switch,
    FormControlLabel,Button
 }from '@mui/material';
 import { ToastContainer,toast } from 'react-toastify';
import { GetPagination,DeleteEmployee } from '../../services/Employee/EmployeeService';
import CustomDataTable from '../elements/CustomDataTable';
const EmployeeList=()=>{
const navigate=useNavigate();
    const[data,setData]=useState([])
    const[model,setModel]=useState({
        PageIndex: 1,
        PageSize: 10,
        SORTDIR: 'desc',
        SORTCOL: 'employeeId',
        SEARCHSTRING: ''
      });
    const[totalCount,setTotalCount]=useState(1);
      useEffect(()=>{
      GetList();
      },[model])
      function GetList(){
          GetPagination(model)
          .then((res)=>{
            var data=res.data;
            console.log("Data:",data);
              setData(data.rows)
              setTotalCount(data.rowsTotal)
          })
          .catch((error)=>{
              toast.error("Error:",error.message);
          })
      }
    const columns = [
        { field: 'indexID',  width: 100, headerName: 'S.No',sortable:false},
        {
          field: 'employeeCode',
          headerName: 'Employee Code',
          width:150,
          sortable:false,
        },
        {
            field: 'employeeName',
            headerName: 'Employee Name',
            flex: 1,
            minWidth:200,
          },
          {
            field: 'dateOfJoin',
            headerName: 'Date Of Join',
            width:150,
            sortable:false,
          },
          {
            field: 'officialEmail',
            headerName: 'Official Email',
            flex: 1,
            minWidth:200,
          },
      ];
      function handlePageChange(model){
                 setModel(model)
          }
           const handleDeleteClick=(type,Id)=>{
                  if(type==="Yes"){
             DeleteEmployee(Id)
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
                //  JobTypeService.Get(id)
                //     .then((res)=>{
                //       var data=res.data;
                //       setValues(data);
                //       setVisible(true)
                //       window.scrollTo(0, 0);
                //     })
                //     .catch((error)=>{
                //       console.log("Errors:",error);
                                               
                //     })
                }
    return (
        <>
         <ToastContainer/>
<MainCard title='Employee List' secondary={<Button onClick={()=>navigate('/employee')} variant='contained'>Add</Button>}>
<CustomDataTable 
columns={columns}
rows={data}
model={model}
setModel={setModel}
TotalCount={totalCount}
actionField='employeeId'
OnPaginationChange={handlePageChange}
OnEditConfirm={handleEdit}
OnDeleteConfirm={handleDeleteClick}
  />
</MainCard>

        </>
    )
}
export default EmployeeList