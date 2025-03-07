// assets
import { IconBrandCodesandbox } from '@tabler/icons-react';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const master = {
  id: 'master',
  title: '',
  icon: IconBrandCodesandbox,
  type: 'group',
  children: [
    {
      id: 'Masters',
      title: 'Master',
      type: 'collapse',
      icon:IconBrandCodesandbox,
      children: [
        {
          id: 'accountYear',
          title: 'Account Year',
          type: 'item',
          url: '/accountYear',
          breadcrumbs: false
        },
        {
          id: 'holiday',
          title: 'Holidays',
          type: 'item',
          url: '/holiday',
          breadcrumbs: false
        },
        {
          id: 'designation',
          title: 'Designation',
          type: 'item',
          url: '/designation',
          breadcrumbs: false
        },
        {
          id: 'jobType',
          title: 'Job Type',
          type: 'item',
          url: '/jobType',
          breadcrumbs: false
        },
        {
          id: 'leaveType',
          title: 'Leave Type',
          type: 'item',
          url: '/leaveType',
          breadcrumbs: false
        },
        {
          id: 'permission',
          title: 'Permission',
          type: 'item',
          url: '/permission',
          breadcrumbs: false
        },
        {
          id: 'penaltyMail',
          title: 'Penalty Mail',
          type: 'item',
          url: '/penaltyMail',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default master;