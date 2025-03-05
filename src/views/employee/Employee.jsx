import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box,Button} from '@mui/material';
import BasicInfo from './partials/BasicInfo';
import PersonalInfo from './partials/PersonalInfo';
import EmergencyContact from './partials/EmergencyContact';
import EducationInfo from './partials/EducationInfo';
import BankInfo from './partials/BankInfo';
import DocumentInfo from './partials/DocumentInfo';
import SalaryInfo from './partials/SalaryInfo';
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
    const handleNext = () => {
      if (value < 6) {
        setValue(value + 1);
        window.scrollTo(0, 0);
      }
    };
  
    const handleBack = () => {
      if (value > 0) {
        setValue(value - 1);
        window.scrollTo(0, 0);
      }
    };
    return(
        <>
        <h3>Employee</h3>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Employee" {...a11yProps(0)} />
          <Tab label="Personal" {...a11yProps(1)} />
          <Tab label="Emergency Contact" {...a11yProps(2)} />
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
       <PersonalInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <EmergencyContact/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <EducationInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
     <BankInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
    <DocumentInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      <SalaryInfo/>
      </CustomTabPanel>
      <div className="d-flex justify-content-end">
        {value!==0 &&(
          <Button variant='contained' onClick={handleBack} disabled={value === 0}>Back</Button>
        )}
           {value!==6 &&(
 <Button className='mx-2' variant='contained'  onClick={handleNext}
 disabled={value === 6}>Next</Button>
)}
        

       
             {value === 6 && (
            <Button
              variant="contained"
              style={{ color: 'white' }}
              color="success"
              className='mx-2'
            >
              Submit
            </Button>
          )}
      </div>
    </Box>
        </>
    )
}
export default Employee