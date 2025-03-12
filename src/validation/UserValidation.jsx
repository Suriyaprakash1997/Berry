import * as yup from 'yup';

export const roleValidator = yup.object({
    roleName: yup
     .string('please enter role name')
     .required('please enter role name'),
 });

export const userValidator = yup.object({
     userName: yup.string().required('please enter user name'),
     roleId: yup.number().required("please select role").positive("please select role").integer("please select role"),
     password: yup.string().min(8,'password must be 8 character').required('please enter password'),
     confirmPassword: yup.string()
     .min(8,'confirm password must be 8 character')
     .required('please enter confirm password')
     .oneOf([yup.ref('password'), null], 'passwords mis match'),
   });