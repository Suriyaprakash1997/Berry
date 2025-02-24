// assets
import { IconDashboard,IconHome } from '@tabler/icons-react';

// constant
const icons = { IconDashboard,IconHome };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconHome,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
