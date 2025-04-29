import {useState,useRef,useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import MainCard from 'ui-component/cards/MainCard';
import {TextField,
    Button
 }from '@mui/material';
 import SubmitButton from '../elements/SubmitButton';
 import CancelButton from '../elements/CancelButton';
 import CustomFileUpload from '../elements/CustomFileUpload';
 import CustomDataTable from '../elements/CustomDataTable';
import { GetPagination,Get,Delete,Save } from '../../services/Master/PolicyService';
 import {useFormik } from 'formik';
 import * as yup from 'yup';
 import { ToastContainer, toast } from 'react-toastify';

 import Swal from 'sweetalert2';
  const validationSchema = yup.object({
     policyName: yup
      .string('please enter policy name')
      .required('please enter policy name'),
      
  });
const Policy=()=>{
  const filepath=import.meta.env.VITE_POLICY_PATH
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState([])
    const [files, setFiles] = useState(null);
    const initialValue={
      policyId:0,
      policyName: ''
    }
    const[model,setModel]=useState({
      PageIndex: 1,
      PageSize: 10,
      SORTDIR: 'desc',
      SORTCOL: 'policyId',
      SEARCHSTRING: ''
    });
    const[totalCount,setTotalCount]=useState(1);
           const formik = useFormik({
                  initialValues: { policyId:0,policyName: ''},
                  validationSchema: validationSchema,
                  onSubmit: (values) => {
                    const formData = new FormData();
                    formData.append('PolicyId', values.policyId);
                    formData.append('PolicyName', values.policyName);
                    formData.append('PolicyFile', files);
                    SavePolicy(formData);
                  },
                });
                 function SavePolicy(data){
                            Save(data)
                            .then((res)=>{
                              var data=res.data;
                            if(data.status>0){
                            toast.success(data.message);
                            formik.resetForm();
                            GetList()
                            }
                            else{
                              toast.error(data.message);
                            }
                            })
                            .catch((error)=>{
                              console.log("Error:",error);
                              
                            })
                          }
    function Add(){
        setVisible(true)
    }
    function Cancel(){
        setVisible(false)
        formik.resetForm()
    }
    const handleFileChange = (data) => {
      const file = data[0];
      if (file) {
        setFiles(file)
      }
    };
        useEffect(()=>{
          GetList();
          },[model])
        function GetList(){
            GetPagination(model)
            .then((res)=>{
                var data=res.data;
                setData(data.rows)
                setTotalCount(data.rowsTotal)
            })
            .catch((error)=>{
                console.log("Error:",error); 
            })
        }
        function handlePageChange(model){
                 setModel(model)
          }
           const handleDeleteClick=(type,Id)=>{
                  if(type==="Yes"){
                Delete(Id)
                   .then((res)=>{
                    var data=res.data;
                    if(data.status>0){
                      toast.success(data.message);
                      GetList();
                      }
                      else{
                        toast.error(data.message);
                      }
                    
                      })
                      .catch((error)=>{
                    console.log("Errors:",error);
                    
                      })
                  }
                 }
                 function handleEdit(id){
                      Get(id)
                             .then((res)=>{
                               var data=res.data;
                               formik.setValues(data);
                               setVisible(true)
                               window.scrollTo(0, 0);
                                 })
                                 .catch((error)=>{
                               console.log("Errors:",error);
                               
                                 })
                 }
                 const columns = [
                  { field: 'indexID',  width: 80, headerName: 'S.No',sortable:false},
                  {
                    field: 'policyName',
                    width: 100,
                    headerName: 'Policy Name',
                    flex: 1,
                  },
                  {
                    field: 'policyFileName',
                    headerName: 'Policy File Name',
                    flex: 1,
                    sortable:false,
                     renderCell: (params) => {
                                 var policyFileArr=params.row.policyFileName.split(',');
                                 var viewName=filepath+policyFileArr[1];
                                 var displayName=policyFileArr[0];
                                   return (
                                       <>
                                       <div>
                                          <a target='_blank' onClick={()=>ShowPolicyFile(viewName,displayName)} className=''>{policyFileArr[1]}</a>
                                       </div>
                                       </>
                                   );
                                 },
                  },
                ];
                function ShowPolicyFile(url,name){
                  Swal.fire({
                    title: name,
                    text: 'Modal with a custom PDF.',
                    html: `<iframe src=${url} width="100%" height="100%" frameborder="0"></iframe>`,
                    width: 700,
                    padding: '10px',
                    showConfirmButton: false
                  });
                }
    return (
        <>
        <ToastContainer/>
          {visible&&
        <MainCard title='Policy'>
          <form onSubmit={formik.handleSubmit} autoComplete='off'>

       
<Grid container spacing={2}>
<Grid size={{xs:12,sm:6}}>
  <input name='policyId' type='hidden' value={formik.values.policyId}/>
  <TextField
          fullWidth
          id="policyName"
          name="policyName"
          label="Policy Name"
          value={formik.values.policyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.policyName && Boolean(formik.errors.policyName)}
          helperText={formik.touched.policyName && formik.errors.policyName}
       
        />
</Grid>
<Grid size={{xs:12,sm:6}}>
<CustomFileUpload name='policyFile' accept='.pdf' OnFileChange={handleFileChange}/>
</Grid>
</Grid>
<Grid container>
<Grid size={12} className="mt-3 d-flex justify-content-end">
<SubmitButton/>
<CancelButton OnClick={Cancel}/>
</Grid>
</Grid>
</form>
        </MainCard>
}
                <div className='mt-2'>
                <MainCard title='Policy List' secondary={<Button onClick={()=>Add()} variant='contained'>Add</Button> }>
                <CustomDataTable 
columns={columns}
rows={data}
model={model}
setModel={setModel}
TotalCount={totalCount}
actionField='policyId'
OnPaginationChange={handlePageChange}
OnEditConfirm={handleEdit}
OnDeleteConfirm={handleDeleteClick}
  />
        </MainCard>
                </div>
        </>
    )
}
export default Policy