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
const PersonalInfo=()=>{
  const [image, setImage] = useState(null);
    const date=Date.now();
    const handleDateChange=(type)=>{
        const newData={...values,startDate:type};
        setValues(newData);
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
    return (
        <>
       <MainCard title="Personal Information">
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Personal Email" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Mobile No" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomDatePicker dateValue={date} OnDateChange={handleDateChange} label="Date of Birth"/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Blood Group" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Job Type"
          onChange={handleChange}
        >
          <MenuItem value={1}>Full Time</MenuItem>
          <MenuItem value={2}>Part Time</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
            <CustomFileUpload accept="image/*" OnFileChange={handleFileChange}/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
          {image&&
            <img src={image} alt="Preview" style={{ width: "200px", height: "auto" }}/>
          }
        </Grid>
        </Grid>
       </MainCard>
       <div className='mt-2'>
       <MainCard title="Family Information">
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Father Name" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Married Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Married Status"
          onChange={handleChange}
        >
          <MenuItem value={1}>Married</MenuItem>
          <MenuItem value={2}>Un Married</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Aadhar Number" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Partner Name" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Passport Number" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <CustomDatePicker dateValue={date} OnDateChange={handleDateChange} label="Passport Date"/>
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Residential Address" variant="outlined" />
        </Grid>
        <Grid size={{xs: 12,sm: 12, md: 6}}>
        <TextField className='textField' fullWidth  label="Permanent Address" variant="outlined" />
        </Grid>
        </Grid>
</MainCard>
      </div>

        </>
    )
}
export default PersonalInfo