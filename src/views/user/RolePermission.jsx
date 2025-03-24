import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Checkbox,Button,FormControlLabel ,Switch} from "@mui/material";
import { GetMenu ,Save} from '../../services/User/RolePermissionService';
import CustomSelect from '../elements/CustomSelect';
import { GetDropdown } from '../../services/Common/CommonService';
import { ToastContainer, toast } from 'react-toastify';
const RolePermission=()=>{
      const [data, setData] = useState([]);
      const [roleDropdown, setRoleDropdown] = useState([]);
      const[roleId,setRoleId]=useState(0)
      const [visible, setVisible] = useState(false);
      useEffect(()=>{
        GetRoleDropdown()
        //GetList()
      },[])
      const GetList=async(id)=>{
        GetMenu(id).then((res)=>{
            var data=res.data;
            setData(data)
            setVisible(true)
        })
      }
      const SaveMenu=async(value)=>{
        Save(value).then((res)=>{
            var data=res.data;
            if(data.status>0){
                toast.success(data.message);
                GetList(role)
            }
            else{
                 toast.error(data.message);
            }
        })
        .catch((err)=>{
            console.log(err);
            
        })
      }
      const GetRoleDropdown=async()=>{
        GetDropdown('Role').then((res)=>{
            var data=res.data;
            setRoleDropdown(data)
        })
      }
      const handleHeaderCheckboxChange = (field) => {
        const allChecked = data.every((row) => row[field]); // Check if all are selected
        setData((prevData) =>
          prevData.map((row) => ({ ...row, [field]: !allChecked })) // Toggle all
        );
      };
    
      // ✅ Check if All Rows Are Selected (For Header Checkbox)
      const isAllChecked = (field) => data.length > 0 && data.every((row) => row[field]);
      const columns = [
        { field: "subMenuName", headerName: "Menu Name", flex: 1 ,minWidth:150},
        {
          field: "fullControl",
          headerName: (
            <>
            <FormControlLabel control={<Switch    checked={isAllChecked("fullControl")}
             onChange={() => handleHeaderCheckboxChange("fullControl")}/>} label="Full" />
             </>
          ),
          width: 150,
          sortable:false,
          renderCell: (params) => {
              return (
                  <>
                  <Switch   checked={params.row.fullControl || false}
                onChange={() => handleCheckboxChange(params.row.subMenuId, "fullControl")} />
                  </>
              );
            },
        },
        {
            field: "newItem",
            headerName: (
                <>
                <FormControlLabel control={<Switch    checked={isAllChecked("newItem")}
                 onChange={() => handleHeaderCheckboxChange("newItem")}/>} label="Add" />
                 </>
              ),
            width: 140,
            sortable:false,
            renderCell: (params) => {
                return (
                    <>
                   <Switch   checked={params.row.newItem || false}
                onChange={() => handleCheckboxChange(params.row.subMenuId, "newItem")} />
                    </>
                );
              },
          },
          {
            field: "editItem",
            headerName: (
                <>
                <FormControlLabel control={<Switch    checked={isAllChecked("editItem")}
                 onChange={() => handleHeaderCheckboxChange("editItem")}/>} label="Edit" />
                 </>
              ),
            width: 140,
            sortable:false,
            renderCell: (params) => {
                return (
                    <>
                   <Switch   checked={params.row.editItem || false}
                onChange={() => handleCheckboxChange(params.row.subMenuId, "editItem")} />
                    </>
                );
              },
          },
          {
            field: "deleteItem",
            headerName: (
                <>
                <FormControlLabel control={<Switch    checked={isAllChecked("deleteItem")}
                 onChange={() => handleHeaderCheckboxChange("deleteItem")}/>} label="Delete" />
                 </>
              ),
            width: 160,
            sortable:false,
            renderCell: (params) => {
                return (
                    <>
                   <Switch   checked={params.row.deleteItem || false}
                onChange={() => handleCheckboxChange(params.row.subMenuId, "deleteItem")} />
                    </>
                );
              },
          },
          {
            field: "viewItem",
            headerName: (
                <>
                <FormControlLabel control={<Switch    checked={isAllChecked("viewItem")}
                 onChange={() => handleHeaderCheckboxChange("viewItem")}/>} label="View" />
                 </>
              ),
            width: 150,
            sortable:false,
            renderCell: (params) => {
                return (
                    <>
                   <Switch   checked={params.row.viewItem || false}
                onChange={() => handleCheckboxChange(params.row.subMenuId, "viewItem")} />
                    </>
                );
              },
          },
      ];
      const handleCheckboxChange = (id, field) => {
        setData((prevData) =>
          prevData.map((row) =>
            row.subMenuId === id ? { ...row, [field]: !row[field] } : row
          )
        );
      };
      const handleSubmit = () => {
        const saveData={
            RoleId:roleId,
            lstRolePermission:data
        };
        SaveMenu(saveData)
      };
      const handleChange=(event)=>{
const role=event.target.value;
setRoleId(role)
GetList(role)
      }
    return(
      
        <>
          <ToastContainer/>
        <MainCard title='Role Permission' secondary={<Button onClick={handleSubmit} variant='contained'>Save</Button>}>
        <Grid container spacing={2}>
<Grid size={{xs:12,sm:4}}>
<CustomSelect 
label='Role' 
items={roleDropdown} 
name='roleId'
value={roleId}
onChange={handleChange}
 />
</Grid>
        </Grid>
        {visible&&
      
        <div className='mt-4' style={{width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        hideFooter
     getRowId={(row)=>row.subMenuId}
     disableRowSelectionOnClick
                disableColumnResize={true}
                disableColumnMenu={true}
      />
    </div>
      }
        </MainCard>
        </>
    )
}
export default RolePermission