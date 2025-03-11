import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,Card,CardContent,
    CardHeader ,InputLabel ,Switch,
    MenuItem ,FormControl ,Select,
    FormControlLabel
 }from '@mui/material';
 import CustomDatePicker from '../../elements/CustomDatePicker';
 import CustomFileUpload from '../../elements/CustomFileUpload';
 import CustomSelect from '../../elements/CustomSelect';
const PersonalInfo=({ personalInfo, setPersonalInfo })=>{
  const [image, setImage] = useState(null);
    const date=Date.now();
    const initialJobType = personalInfo.jobType || 0;
    const initialMarried = personalInfo.marriedStatus || 0;
    const handleInputChange = (e) => {
      setPersonalInfo({
        ...personalInfo,
        [e.target.name]: e.target.value,
      });
    };
    function handleDateChange(name ,value){
      setPersonalInfo({...personalInfo, [name]: value});
   }
        const [age, setAge] = useState('');
        const handleChange = (event) => {
            setAge(event.target.value);
          };
          const handleFileChange = (data) => {
            const file = data[0]; // Get the file selected
            if (file) {
              const reader = new FileReader();
        
              // Read the file as a data URL
              reader.onloadend = () => {
                setImage(reader.result); // Set the image data URL as state
              };
        
              // Start reading the file
              reader.readAsDataURL(file);
            }
          };
          const items=[
            {value:1,text:'Admin'},
            {value:2,text:'Employee'}
          ]
    return (
        <>
       <MainCard title="Personal Information">
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="Personal Email"
         name='personalEmail'
         value={personalInfo.personalEmail || ''}
         onChange={handleInputChange}
         variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField fullWidth  label="Mobile No" 
        name='mobileNo'
        value={personalInfo.mobileNo || ''}
        onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomDatePicker 
            label='Date of Birth' 
            name='dateOfBirth'
            value={personalInfo.dateOfBirth}
            onChange={(newValue) => handleDateChange('dateOfBirth', newValue)}
            />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="Blood Group"
         name='bloodGroup'
         value={personalInfo.bloodGroup || ''}
         onChange={handleInputChange}
         variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomSelect label='Job Type' 
       items={items}
        name='jobType'
        value={initialJobType}
       onChange={handleInputChange}/>
        </Grid>
       
        </Grid>
       </MainCard>
       <div className='mt-2'>
       <MainCard title="Family Information">
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="Father Name"
        name='fatherName'
        value={personalInfo.fatherName || ''}
        onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomSelect label='Married Status' 
       items={items}
        name='marriedStatus'
        value={initialMarried}
       onChange={handleInputChange}/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField fullWidth  label="Aadhar Number"
           name='aadharNumber'
           value={personalInfo.aadharNumber || ''}
           onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField fullWidth  label="Partner Name"
            name='partnerName'
            value={personalInfo.partnerName || ''}
            onChange={handleInputChange}
         variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField fullWidth  label="Passport Number"
           name='passportNumber'
           value={personalInfo.passportNumber || ''}
           onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomDatePicker 
            label='Passport Date' 
            name='passportDate'
            value={personalInfo.passportDate}
            onChange={(newValue) => handleDateChange('passportDate', newValue)}
            />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="Residential Address"
           name='residentialAddress'
           value={personalInfo.residentialAddress || ''}
           onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField  fullWidth  label="Permanent Address"
           name='permenantAddress'
           value={personalInfo.permenantAddress || ''}
           onChange={handleInputChange}
        variant="outlined" />
        </Grid>
        </Grid>
</MainCard>
      </div>

        </>
    )
}
export default PersonalInfo