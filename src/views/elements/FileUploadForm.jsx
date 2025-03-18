import React from 'react';
import { Button, TextField } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FileUploadForm = () => {
  // Initial form values
  const initialValues = {
    phone:'',
    file: null,
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    phone:Yup.string().required('please enter phone'),
    file: Yup.mixed()
      .required('A file is required')
      .test('fileSize', 'File size is too large', (value) => {
        return value && value.size <= 2 * 1024 * 1024; // 2MB limit
      })
      .test('fileType', 'Only .jpg and .png files are allowed', (value) => {
        return value && (value.type === 'image/jpeg' || value.type === 'image/png');
      }),
  });

  // Form submission handler
  const onSubmit = (values) => {
    console.log(values.file);
    // You can handle file upload here (e.g., upload to a server)
  };

  return (
  
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className='row'>
<div className='col-4'>
 <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    onChange={(e) => setFieldValue('phone', e.currentTarget.value)}
                    
                  />
                   <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
</div>
<div className='col-4'>
              <input
              className='form-control'
                type="file"
                id="file"
                name="file"
                onChange={(e) => setFieldValue('file', e.currentTarget.files[0])}
              />
              <ErrorMessage name="file" component="div" style={{ color: 'red' }} />
            </div>
            <div className='col-4'>
              <Button type='submit' variant='outlined'>Submit</Button>
            </div>
            </div>
  
            {values.file && (
              <div>
                <p>Selected File: {values.file.name}</p>
                <p>File Size: {(values.file.size / 1024).toFixed(2)} KB</p>
              </div>
            )}
          
          </Form>
        )}
      </Formik>
 
  );
};

export default FileUploadForm;
