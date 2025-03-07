
import {InputLabel ,
    MenuItem ,FormControl ,Select
 }from '@mui/material';
const CustomSelect=(props)=>{
    const{label,name,items,OnCustomSelectChange}=props;
    function handleChange(event){
       const name=event.target.name;
       const value=event.target.value;
      OnCustomSelectChange(name,value);
    }
    return(
        <>
        <FormControl fullWidth>
        <InputLabel id={"lbl"+label}>{label}</InputLabel>
        <Select
          labelId={"lbl"+label}
          id={'ddl'+label}
          label={label}
          name={name}
          onChange={handleChange}
        >
                {...items.map(option=>(
                    <MenuItem value={option.value}>{option.text}</MenuItem>
))}
        </Select>
      </FormControl>
        </>
    )
}

export default CustomSelect