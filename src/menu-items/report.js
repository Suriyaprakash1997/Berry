// assets
import { IconFileDescription } from '@tabler/icons-react';

// constant
const icons = {
IconFileDescription
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const report = {
  id: 'report',
  title: '',
  icon: icons.IconFileDescription,
  type: 'group',
  children: [
    {
      id: 'ReportsGroup',
      title: 'Reports',
      type: 'collapse',
      icon: icons.IconFileDescription,
      children: [
        {
          id: 'leaveReports',
          title: 'Leave Report',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'assetReports',
          title: 'Asset Report',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    }
  ]
};

export default report;