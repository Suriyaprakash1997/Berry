import { useState,useEffect } from 'react';
import {Box,
MenuItem ,Select
 }from '@mui/material';
 import { GetDropdown } from '../../../../services/Common/CommonService';
const  AccountYearComponent=()=> {
       const [accountYear, setAccountYear] = useState('');
        const handleChange = (event) => {
            setAccountYear(event.target.value);
        };
        const [data, setData] = useState([]);
        useEffect(()=>{
            LoadMenuItems("AccountYear");
        },[])
        function LoadMenuItems(mode){
            GetDropdown(mode)
            .then((res)=>{
                var data=res.data;
                var activeAccYear=data.filter((item)=>item.isActive);
                var activeAccYearId=activeAccYear[0].value;
                setData(data)
                setAccountYear(activeAccYearId)
            })
            .catch((error)=>{
                console.log("Error:",error);
                
            })
        }
return(
    <>
      <Box >
        <Select
          value={accountYear}
          sx={{ width: { xs: 200,md:300, lg: 350 }, ml: 2, px: 2 }}
          onChange={handleChange}
          displayEmpty
        >
             {...data.map(option=>(
                 <MenuItem value={option.value}>{option.text}</MenuItem>
))}   
        </Select>
      </Box>
    </>
)

}
export default AccountYearComponent