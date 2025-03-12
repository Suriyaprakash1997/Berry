import * as yup from 'yup';

export const designationValidator = yup.object({
  designationName: yup
    .string('please enter designation')
    .required('please enter designation'),
});

export const holidayValidator = yup.object({
  holidayName: yup.string('please enter holiday name').required('please enter holiday name'),
  holidayDate: yup.date('Invalid date format').required('Holiday date is required').
  nullable().typeError('Invalid date format')
});