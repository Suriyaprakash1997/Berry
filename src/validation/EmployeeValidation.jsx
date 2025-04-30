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
    file: yup.mixed()
      .required('A file is required')
      .test('fileSize', 'File size is too large', (value) => {
        return value && value.size <= 5 * 1024 * 1024; // 2MB limit
      })
  });
  export const SalaryValidator = yup.object({
    salaryAmount:   yup.number()
    .typeError('Please enter a valid number')
    .required('Please enter salary amount')
    .moreThan(0, 'salary amount must be greater than 0'),
    professionalTax: yup.number()
    .typeError('Please enter a valid number')
    .required('Please enter professional tax')
    .moreThan(0, 'professional tax must be greater than 0'),
    revisionDate: yup
    .date()
    .transform((value, originalValue) =>
      originalValue === '' ? null : value
    )
    .nullable()
    .required('Revision date is required')
    .typeError('Invalid date format'),
  });