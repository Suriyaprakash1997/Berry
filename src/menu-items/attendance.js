import { IconUserCheck} from '@tabler/icons-react';
// constant


// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const attendance = {
  id: 'attendance',
  title: '',
  icon: '',
  type: 'group',
  children: [
    {
      id: 'attendances',
      title: 'Attendance',
      type: 'collapse',
      icon: IconUserCheck,
      children: [
        {
          id: 'leaveList',
          title: 'Leave List',
          type: 'item',
          url: '/leaveList',
          breadcrumbs: false
        },
        {
          id: 'permissionList',
          title: 'Permission List',
          type: 'item',
          url: '/permissionList',
          breadcrumbs: false
        },
        {
          id: 'penaltyList',
          title: 'Penalty List',
          type: 'item',
          url: '/penaltyList',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default attendance;