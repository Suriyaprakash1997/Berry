import {Button}from '@mui/material';
const CancelButton=(props)=>{
    const{OnClick}=props;
    return(
        <>
      <Button onClick={OnClick} variant="contained" color="error">Cancel</Button>
        </>
    )
}
export default CancelButton