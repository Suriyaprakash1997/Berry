import {useState}from 'react';
import {Box,Button,Tabs,Tab} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import BasicInfo from './partials/basicInfo';
import PersonalInfo from './partials/PersonalInfo';
import EmergencyContact from './partials/EmergencyContact';
import EducationInfo from './partials/EducationInfo';
import BankInfo from './partials/BankInfo';
import DocumentInfo from './partials/DocumentInfo';
import SalaryInfo from './partials/SalaryInfo';
import CustomTabPanel from '../elements/CustomTabPanel';
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Employee=()=>{
    const [value, setValue] = useState(0);
    const [basicInfo, setBasicInfo] = useState({});
    const [personalInfo, setPersonalInfo] = useState({});
    const [emergencyInfo, setEmergencyInfo] = useState([]);
    const [educationInfo, setEducationInfo] = useState({
      educationDetails:[],
      experienceDetails:[]
    });
    const [bankInfo, setBankInfo] = useState({});
    const [documentInfo, setDocumentInfo] = useState([]);
    const [salaryInfo, setSalaryInfo] = useState([]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleNext = () => {
      if (value < 6) {
        setValue(value + 1);
        window.scrollTo(0, 0);
      }
      // if(value==0){
      //    console.log("basicInfo:",basicInfo);
      // }
      // if(value==1){
      //   console.log("personalInfo:",personalInfo);
      // }
      // if(value===3){
      //   console.log("educationInfo:",educationInfo);
      // }
      if(value===5){
        console.log("documentInfo:",documentInfo);
      }
    };
  
    const handleBack = () => {
      if (value > 0) {
        setValue(value - 1);
        window.scrollTo(0, 0);
      }
    };
    const handleSubmit=()=>{
      var newObject={...basicInfo,...personalInfo,...bankInfo}
      console.log("FinalObj:",newObject);
      
    }
    return(
        <>
        <MainCard title='Employee'>
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
       <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <EmergencyContact emergencyInfo={emergencyInfo}setEmergencyInfo={setEmergencyInfo}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <EducationInfo educationInfo={educationInfo}setEducationInfo={setEducationInfo}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
     <BankInfo bankInfo={bankInfo} setBankInfo={setBankInfo}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
    <DocumentInfo documentInfo={documentInfo} setDocumentInfo={setDocumentInfo}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      <SalaryInfo salaryInfo={salaryInfo} setSalaryInfo={setSalaryInfo}/>
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
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
      </div>
    </Box>
    </MainCard>
        </>
    )
}
export default Employee