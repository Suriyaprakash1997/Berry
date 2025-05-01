import {useState,useRef,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Switch,
    FormControlLabel,Button
 }from '@mui/material';
const EmployeeList=()=>{
const navigate=useNavigate();
    const[data,setData]=useState([])
    function Add(){

    }

    return (
        <>
<MainCard title='Employee List' secondary={<Button onClick={()=>navigate('/employee')} variant='contained'>Add</Button>}>

</MainCard>

        </>
    )
}
export default EmployeeList