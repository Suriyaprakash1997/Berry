import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
//Master
const AccountYear = Loadable(lazy(() => import('views/master/AccountYear')));
const Holiday = Loadable(lazy(() => import('views/master/Holiday')));
const Designation = Loadable(lazy(() => import('views/master/Designation')));
//Employee
const Employee = Loadable(lazy(() => import('views/employee/Employee')));
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
  ]
};

export default MainRoutes;
