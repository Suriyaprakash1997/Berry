import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box,Button} from '@mui/material';
import BasicInfo from './partials/basicInfo'
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Employee=()=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <>
        <h3>Employee</h3>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Employee" {...a11yProps(0)} />
          <Tab label="Personal" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />
          <Tab label="Education" {...a11yProps(3)} />
          <Tab label="Bank" {...a11yProps(4)} />
          <Tab label="Document" {...a11yProps(5)} />
          <Tab label="Salary" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <BasicInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Personal
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Profile
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       Education
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       Bank
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
       Document
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
       Salary
      </CustomTabPanel>
      <div>
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </Box>
        </>
    )
}
export default Employee