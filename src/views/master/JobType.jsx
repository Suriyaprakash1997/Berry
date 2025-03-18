import MainCard from 'ui-component/cards/MainCard';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import axios from 'axios';
import Tesseract from "tesseract.js";
import FileUploadForm from '../elements/FileUploadForm';
const JobType=()=>{
const [file,setFile]=useState(null)
    const handleOnSubmit=async ()=>{
        const subscriptionKey = "EGaOemg77VS4bbi6d0tSRH9PTjtk04pQ8SMnvNYJyTwIhSOEKeDbJQQJ99BCACqBBLyXJ3w3AAAFACOGUTIP";
        const endpoint = "https://mscomputervisionui.cognitiveservices.azure.com/";
        const url = `${endpoint}/vision/v3.2/ocr?language=unk&detectOrientation=true`;
      
        const formData = new FormData();
        formData.append("file", file);
      
        const headers = {
          "Ocp-Apim-Subscription-Key": subscriptionKey,
          "Content-Type": "multipart/form-data",
        };
        try {
            const response = await axios.post(url, formData, { headers });
            console.log(response.data);
          } catch (error) {
            console.error("Error extracting text:", error);
          }
    }
    const extractText =async () => {
        Tesseract.recognize(
          file,
          "eng", // Language
          {
            logger: (m) => console.log(m), // Progress logging
          }
        ).then(({ data: { text } }) => {
          console.log("Extracted text:", text);
        });
      };
    return(
        <>
<MainCard title='Job Type'>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <FileUploadForm/>

</Grid>
</MainCard>
        </>
    )
}
export default JobType