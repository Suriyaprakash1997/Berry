import React,{useState,useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button ,Card,CardHeader,CardContent,
    FormControlLabel,Switch,Modal,} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DataGrid } from '@mui/x-data-grid';
import { UserContext } from 'hooks/useAddContext';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import DeleteConfirmDialog from '../elements/DeleteConfirmDialog';
const CreateUserForm = () => {
    const { items, addItem, updateItem, deleteItem } =useContext(UserContext);
    const initialValues = {
        id: null,
        name: '',
        emailId: '',
        isTFA:false,
        tfaType:''
    };
const [formValues, setFormValues] = useState(initialValues);
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        emailId: Yup.string().email('Invalid email format').required('Email is required'),
        isTFA: Yup.boolean(),
        tfaType: Yup.string().when('isTFA', {
            is: true,
            then: () => Yup.string().required('TFA Type is required'),
            otherwise: () => Yup.string().notRequired()
        })
    });

    const onSubmit = (values) => {
        if (values.id) {
            updateItem(values);
            toast.success("User Updated Successfully");
        }
        else{
            addItem({...values, id: uuidv4()});
            toast.success("User Saved Successfully");
        }
        setFormValues(initialValues);
        setOpen(false);
        handleClose();
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEdit = (Id) => {
        const selectedItem = items.find(item => item.id === Id);
        if (selectedItem) {
            console
            setOpen(true);
            setFormValues(selectedItem);
        }   
    };
    const handleDeleteClick=(type,Id)=>{
        if(type==="Yes"){
          deleteItem(Id);
          toast.success("User Deleted Successfully");
        }
    }
    const columns = [
        { field: 'sno', headerName: 'S.No', width: 90,
            renderCell: (params) => {
                const rowIds = params.api.getSortedRowIds();
    const rowIndex = rowIds.indexOf(params.id);
    return rowIndex + 1;
                },
         },
        {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          minWidth: 200,
        },
        {
          field: 'emailId',
          headerName: 'Email ID',
          flex: 1,
          minWidth: 200,
        },
        {
          field: 'isTFA',
          headerName: 'TFA Enabled',
          width: 150,
          sortable: false,
           renderCell: (params) => {
                        var isVerified=params.row.isTFA;
                          return (
                              <>
                              {isVerified?
                                <Switch checked={true} disabled={true} />
                                 :
                                 <Switch checked={false} disabled={true} />
                              }
                              </>
                          );
                        },
        },
        {
          field: 'tfaType',
          headerName: 'TFA Type',
          sortable: false,
          width: 160,
        },
        {
            field: 'id',
            headerName: 'Action',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                var Id=params.row.id;
                  return (
                      <>
                    <EditIcon sx={{ color: '#3085d6', cursor: 'pointer' }} onClick={()=>handleEdit(Id)} />
                    <DeleteConfirmDialog Id={Id} onConfirm={handleDeleteClick}/>
                      </>
                  );
                },
          },
      ];
      
    return (
        <>
        <ToastContainer/>
        <Card>
            <CardHeader title="User" />
            <div className='d-flex justify-content-end'>
            <Button variant="contained" color="primary" sx={{ margin: 2,paddingRight:3}} onClick={handleOpen}>
                Add User
            </Button>
            </div>
            
            <CardContent>
            <DataGrid
        rows={items}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,25,50]}
        disableRowSelectionOnClick
        disableColumnMenu
      />
            </CardContent>
        </Card>

        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Card sx={{ maxWidth: 400, margin: 'auto', mt: 10, p: 2 }}>
                    <CardHeader title={formValues.id?"Update User":"Create User"} />
                    <CardContent>
                    <Formik
                    enableReinitialize
                    initialValues={formValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, setFieldValue,setValues }) => (
                        <Form>
                            <Grid container spacing={2}>
                                <input type='hidden' name="id" value={values.id}/>
                                <Grid size={{ xs: 12}}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={(e) => setFieldValue('name', e.currentTarget.value)}
                                        label="Name"
                                        variant="outlined"
                                        helperText={<ErrorMessage name="name" component="span" style={{ color: 'red' }} />}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12}}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        id="emailId"
                                        name="emailId"
                                        value={values.emailId}
                                        onChange={(e) => setFieldValue('emailId', e.currentTarget.value)}
                                        label="Email ID"
                                        variant="outlined"
                                        helperText={<ErrorMessage name="emailId" component="span" style={{ color: 'red' }} />}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12}}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={values.isTFA}
                                                onChange={(e) => setFieldValue('isTFA', e.target.checked)}
                                            />
                                        }
                                        label="Is TFA Enable"
                                    />
                                </Grid>
                                {values.isTFA && (
                                    <Grid size={{ xs: 12}}>
                                        <Field
                                            as={TextField}
                                            fullWidth
                                            id="tfaType"
                                            name="tfaType"
                                            value={values.tfaType}
                                            onChange={(e) => setFieldValue('tfaType', e.currentTarget.value)}
                                            label="TFA Type"
                                            variant="outlined"
                                            helperText={<ErrorMessage name="tfaType" component="span" style={{ color: 'red' }} />}
                                        />
                                    </Grid>
                                )}
                                 <Grid size={{ xs: 12}}>
                                 <Button size="small"  type="submit" variant='contained' color="primary">
                            Save
                        </Button>   
                        <Button className='mx-1' size="small" variant='contained' color="error" onClick={()=>{handleClose(); setFormValues(initialValues)}}>
                            Cancel
                        </Button>
                                 </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
                
                    </CardContent>
                    
                </Card>
            </Modal>
        </div>
        </>
    );
};

export default CreateUserForm;
