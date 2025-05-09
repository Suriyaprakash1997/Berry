import {useEffect, useState}from 'react';
import {useNavigate,useParams} from 'react-router-dom';
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
import dayjs from 'dayjs';
import { SaveEmployee,GetEmployee,UpdateEmployee } from '../../services/Employee/EmployeeService';
import { ToastContainer,toast } from 'react-toastify';
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Employee=()=>{
    const navigate=useNavigate();
    const{employeeid}=useParams();
    const [value, setValue] = useState(0);
    const [basicInfo, setBasicInfo] = useState({
      employeeCode: '',
      employeeName: '',
      designation: 0,
      dateOfJoin: dayjs(),
      officialEmail: '',
      loginTime: dayjs(),
      logoutTime: dayjs(),
      graceTime: dayjs(),
    });
    const [personalInfo, setPersonalInfo] = useState({
      personalEmail: '',
      mobileNo: '',
      dateOfBirth: dayjs(),
      bloodGroup: '',
      jobType: 0,
      profileImage: '',
      fatherName: '',
      marriedStatus: 0,
      aadharNumber: '',
      partnerName: '',
      passportNumber: '',
      passportDate: dayjs(),
      residentialAddress: '',
      permenantAddress: '',
    });
    const [emergencyInfo, setEmergencyInfo] = useState([]);
    const [educationInfo, setEducationInfo] = useState({
      educationDetails:[],
      experienceDetails:[]
    });
    const [bankInfo, setBankInfo] = useState({
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      micrCode: '',
    });
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
      if(value==0){
         console.log("basicInfo:",basicInfo);
      }
      if(value==1){
        console.log("personalInfo:",personalInfo);
      }
      // if(value===3){
      //   console.log("educationInfo:",educationInfo);
      // }
      if(value===4){
        console.log("bankInfo:",bankInfo);
      }
      // if(value===5){
      //   console.log("documentInfo:",documentInfo);
      // }
    };
  
    const handleBack = () => {
      if (value > 0) {
        setValue(value - 1);
        window.scrollTo(0, 0);
      }
    };
    const convertFileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
    const handleSubmit = async()=>{
      const documentDetails = await Promise.all(
        documentInfo.map(async (doc) => {
          const base64File = doc.file ? await convertFileToBase64(doc.file) : null;
          return {
            documentType: doc.documentType,
            isVerified: doc.isVerified,
            file: base64File,
          };
        })
      );
      var newObject={
        BasicDetails:{...basicInfo,
          dateOfJoin:dayjs(basicInfo.dateOfJoin).format('YYYY-MM-DD'),
          loginTime:dayjs(basicInfo.loginTime).format('YYYY-MM-DD HH:mm'),
          logoutTime:dayjs(basicInfo.logoutTime).format('YYYY-MM-DD HH:mm'),
          graceTime:dayjs(basicInfo.graceTime).format('YYYY-MM-DD HH:mm'),
          ...personalInfo,
          dateOfBirth:dayjs(personalInfo.dateOfBirth).format('YYYY-MM-DD'),
          passportDate:(personalInfo.dateOfBirth&&dayjs(personalInfo.dateOfBirth).format('YYYY-MM-DD')),
          ...bankInfo,
        },
        EmergencyContactDetails:emergencyInfo,
        EducationDetails:educationInfo.educationDetails,
        ExperienceDetails:[...educationInfo.experienceDetails.map((item)=>{
          return{
            ...item,
            fromDate:dayjs(item.fromDate).format('YYYY-MM-DD').toString(),
            toDate:dayjs(item.toDate).format('YYYY-MM-DD').toString(),
          }
        })],
        DocumentDetails:documentDetails,
        SalaryDetails:[...salaryInfo.map((item)=>{
          return{
            ...item,
            revisionDate:dayjs(item.revisionDate).format('YYYY-MM-DD').toString(),
          }
        })]
      }
      console.log('newObject:',newObject)
      await handleSaveData(newObject);
    }
    const handleSaveData= async(values)=>{
      let response;
      if(employeeid){
        response=await UpdateEmployee(employeeid,values);
      }
      else{
        response=await SaveEmployee(values);
      }
if(response){
var data=response.data;
if(data.status>0){
toast.success(data.message);
setTimeout(() => {  
navigate('/employeeList');
}, 2000); 
}
else{
  toast.error(data.message);
}
}
else{
  toast.error("Something went wrong!");
}
 }
 useEffect(()=>{
if(employeeid){
  GetEmployeeData()
}
},[])
const GetEmployeeData = () =>{
  GetEmployee(employeeid)
  .then((res)=>{
    var data=res.data;
    console.log('data:',data)
    let basicdetails=data.basicDetails;
    setBasicInfo({
      employeeCode: basicdetails.employeeCode,
      employeeName: basicdetails.employeeName,
      designation: basicdetails.designation,
      officialEmail: basicdetails.officialEmail,
      dateOfJoin:dayjs(basicdetails.dateOfJoin),
      loginTime:dayjs(basicdetails.loginTime),
      logoutTime:dayjs(basicdetails.logoutTime),
      graceTime:dayjs(basicdetails.graceTime),
    })
  setPersonalInfo({
    personalEmail: basicdetails.personalEmail,
    mobileNo: basicdetails.mobileNo,
    dateOfBirth: dayjs(basicdetails.dateOfBirth),
    bloodGroup: basicdetails.bloodGroup,
    jobType: basicdetails.jobType,
    profileImage: basicdetails.profileImage,
    fatherName: basicdetails.fatherName,
    marriedStatus: basicdetails.marriedStatus,
    aadharNumber: basicdetails.aadharNumber,
    partnerName: basicdetails.partnerName,
    passportNumber: basicdetails.passportNumber,
    passportDate: dayjs(basicdetails.passportDate),
    residentialAddress: basicdetails.residentialAddress,
    permenantAddress: basicdetails.permenantAddress,
  })
setBankInfo({
  bankName: basicdetails.bankName,
  accountNumber: basicdetails.accountNumber,
  ifscCode: basicdetails.ifscCode,
  micrCode: basicdetails.micrCode,
})
setEmergencyInfo(data.emergencyContactDetails)
setEducationInfo({
  educationDetails:data.educationDetails,
  experienceDetails:[...data.experienceDetails.map((item)=>{
    return{
      ...item,
      fromDate:dayjs(item.fromDate),
      toDate:dayjs(item.toDate),
    }
  })]
})
setSalaryInfo([...data.salaryDetails.map((item)=>{
  return{
    ...item,
    revisionDate:dayjs(item.revisionDate),
  }
})])
  })
  .catch((err)=>{
    console.log(err.message)
  })
}
    return(
        <>
        <ToastContainer/>
        <MainCard title='Employee'  secondary={<Button onClick={()=>navigate('/employeelist')} variant='contained'>Back</Button>}>
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