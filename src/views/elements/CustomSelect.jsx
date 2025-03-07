
import {InputLabel ,
    MenuItem ,FormControl ,Select,FormHelperText
 }from '@mui/material';
const CustomSelect=({ label, items, value, onChange, onBlur, error, helperText, ...props })=>{
    return(
        <>
        <FormControl fullWidth error={error}>
        <InputLabel id={"lbl"+label}>{label}</InputLabel>
        <Select
          labelId={"lbl"+label}
          id={'ddl'+label}
          label={label}
          value={value}
          onChange={onChange}  // Pass the event to Formik's handleChange
          onBlur={onBlur}  // Pass blur to Formik's handleBlur
          {...props}
        >
           <MenuItem value={0}>---select---</MenuItem>
                {...items.map(option=>(
                    <MenuItem value={option.value}>{option.text}</MenuItem>
))}
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
        </>
    )
}

export default CustomSelect