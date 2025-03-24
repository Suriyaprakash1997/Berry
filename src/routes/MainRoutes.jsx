import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
//User
const Role = Loadable(lazy(() => import('views/user/Role')));
const User = Loadable(lazy(() => import('views/user/User')));
const RoleForm = Loadable(lazy(() => import('views/user/RoleForm')));
//Master
const AccountYear = Loadable(lazy(() => import('views/master/AccountYear')));
const Holiday = Loadable(lazy(() => import('views/master/Holiday')));
const Designation = Loadable(lazy(() => import('views/master/Designation')));
const JobType = Loadable(lazy(() => import('views/master/JobType')));
const LeaveType = Loadable(lazy(() => import('views/master/LeaveType')));
const Permission = Loadable(lazy(() => import('views/master/Permission')));
const Policy = Loadable(lazy(() => import('views/policy/Policy')));
//Employee
const Employee = Loadable(lazy(() => import('views/employee/Employee')));
const EmployeeList = Loadable(lazy(() => import('views/employee/EmployeeList')));
// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'typography',
      element: <UtilsTypography />
    },
    {
      path: 'color',
      element: <UtilsColor />
    },
    {
      path: 'shadow',
      element: <UtilsShadow />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    },
    {
      path: 'employee',
      element: <Employee />
    },
    {
      path: 'employeeList',
      element: <EmployeeList />
    },
    {
      path: 'holiday',
      element: <Holiday />
    },
    {
      path: 'accountYear',
      element: <AccountYear />
    },
    {
      path: 'designation',
      element: <Designation />
    },
    {
      path: 'role',
      element: <Role />
    },
    {
      path: 'user',
      element: <User />
    },
    {
      path: 'roleForm',
      element: <RoleForm />
    },
    {
      path: 'policy',
      element: <Policy />
    },
    {
      path: 'jobType',
      element: <JobType />
    },
    {
      path: 'leaveType',
      element: <LeaveType />
    },
    {
      path: 'permission',
      element: <Permission />
    },
  ]
};

export default MainRoutes;
