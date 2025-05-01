import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button ,Card,CardHeader,CardContent,Checkbox} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CheckBox } from '@mui/icons-material';

const CreateUserForm = () => {
    const initialValues = {
        name: '',
        emailId: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        emailId: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const onSubmit = (values) => {
        console.log('Form data', values);
    };

    return (
        <>
        <Card style={{ padding: '20px', margin: '20px' }}>
            <CardHeader title="Create User" />  
            <CardContent>
            <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    helperText={<ErrorMessage name="name" component="span" style={{ color: 'red' }} />}
                                />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Field
                                    as={TextField}
                                    fullWidth
                                    id="emailId"
                                    name="emailId"
                                    label="Email ID"
                                    variant="outlined"
                                    helperText={<ErrorMessage name="emailId" component="span" style={{ color: 'red' }} />}
                                />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Field
                                    as={Checkbox}
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    />
                                    <label htmlFor="terms">Accept Terms and Conditions</label>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{mt:2}} >
                                    <Grid item xs={12} sm={12} md={4}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                style={{ padding: '10px' }}
                            >
                                Submit
                            </Button>
                            </Grid>
                             </Grid>
                          
                        </Form>
                    )}
                </Formik>
                </CardContent>
            </Card>
        </>
    );
};

export default CreateUserForm;
