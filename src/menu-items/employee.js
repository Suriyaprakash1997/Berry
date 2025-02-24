import { IconKey ,IconUser} from '@tabler/icons-react';
// constant
const icons = {
  IconKey,IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const employee = {
  id: 'employee',
  title: '',
  icon: icons.BrandReact,
  type: 'group',
  children: [
    {
      id: 'Employees',
      title: 'Employee',
      type: 'collapse',
      icon: icons.IconUser,
      children: [
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          url: '/employee',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'employeeList',
          title: 'Employee List',
          type: 'item',
          url: '/employeeList',
        }
      ]
    }
  ]
};

export default employee;