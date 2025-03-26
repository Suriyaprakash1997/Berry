import * as yup from 'yup';

export const accountYearValidator = yup.object({
  accountYearName: yup
    .string('please enter account year name')
    .required('please enter account year name'),
});
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
export const jobTypeValidator = yup.object({
  jobType: yup.string('please enter job type').required('please enter job type'),
});
export const leaveTypeValidator = yup.object({
  leaveType: yup.string('please enter leave type').required('please enter leave type'),
  leaveAllowPerMonth: yup
  .number()
  .typeError('Please enter a valid number')
  .required('Please enter leave allow per month')
  .moreThan(0, 'leave allow per month must be greater than 0'),
  totalLeaveProvide: yup
  .number()
  .typeError('Please enter a valid number')
  .required('Please enter total leave provide')
  .moreThan(0, 'Total leave provide must be greater than 0'),
 });
export const permissionValidator = yup.object({
  allowHours: yup
    .number()
    .typeError('Please enter a valid number')
    .required('Please enter allow hours')
    .moreThan(0, 'Allow hours must be greater than 0'),
    allowPerMonth: yup
    .number()
    .typeError('Please enter a valid number')
    .required('Please enter allow per month')
    .moreThan(0, 'Allow per month must be greater than 0'),
});