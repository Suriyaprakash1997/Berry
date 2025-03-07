import { IconUsers} from '@tabler/icons-react';
// constant
const icons = {
  IconUsers
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
      icon: icons.IconUsers,
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
          breadcrumbs: false
        },
        {
          id: 'relievedEmployee',
          title: 'Relieved Employee',
          type: 'item',
          url: '/relievedEmployee',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default employee;