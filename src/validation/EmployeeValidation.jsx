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
    contactName: yup.string().required('Please enter a contact name'),
  });