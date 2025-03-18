import * as yup from 'yup';

export const EmergencyContactValidator = yup.object({
    name: yup.string().required('Please enter a name'),
    relation: yup.string().required('Please enter a relation'),
    phone: yup.string().required('Please enter a phone'),
    address: yup.string().required('Please enter an address'),
  });

  export const EducationValidator = yup.object({
    educationName: yup.string().required('Please enter a education name'),
    institutionName: yup.string().required('Please enter a  institution name'),
    academicYear: yup.string().required('Please enter a academic year'),
  });

  export const ExperienceValidator = yup.object({
    companyName: yup.string().required('Please enter a company name'),
    designation: yup.string().required('Please enter a  designation'),
    contactNo: yup.string().required('Please enter a contact no'),
    contactEmail: yup.string().required('Please enter a contact email'),
  });

  export const DocumentValidator = yup.object({
    documentType: yup.string().required('Please enter a document type'),
    documentFile: yup.mixed()
      .required('A file is required')
      .test('fileSize', 'File size is too large', (value) => {
        return value && value.size <= 5 * 1024 * 1024; // 2MB limit
      })
   
  });