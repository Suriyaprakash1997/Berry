import {useState}from 'react';
import {Box,Button,Tabs,Tab} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CustomTabPanel from '../elements/CustomTabPanel';
import MainForm from './Partials/MainForm';
import SubForm from './Partials/SubForm';
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const RoleForm=()=>{
        const [value, setValue] = useState(0);
        const handleChange = (event, newValue) => {
            setValue(newValue);
          };
return(
    <>
    <MainCard title='Role Form'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Main Form" {...a11yProps(0)} />
          <Tab label="Sub Form" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <MainForm/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
     <SubForm/>
      </CustomTabPanel>
    </Box>
    </MainCard>
    </>
)
}
export default RoleForm