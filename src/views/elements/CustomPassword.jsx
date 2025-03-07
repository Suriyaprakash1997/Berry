import {useState} from 'react';
import {FormControl,InputLabel,
    OutlinedInput,InputAdornment,
    IconButton,FormHelperText
 }from '@mui/material';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
const CustomPassword=({label,value,onChange, onBlur, error, helperText, ...props})=>{
          const [showPassword, setShowPassword] = useState(false);
            const handleClickShowPassword = () => {
              setShowPassword(!showPassword);
            };
          
            const handleMouseDownPassword = (event) => {
              event.preventDefault();
            };
    return(
        <>
      <FormControl fullWidth error={error}>
        <InputLabel htmlFor={"pwd"+label}>{label}</InputLabel>
        <OutlinedInput
          id={"pwd"+label}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          {...props}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          inputProps={{}}
          label={label}
        />
          {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
        </>
    )
}
export default CustomPassword