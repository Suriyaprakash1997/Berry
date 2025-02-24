// assets
import { IconKey,IconFileTypeDoc } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,IconFileTypeDoc
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const master = {
  id: 'master',
  title: '',
  icon: icons.IconFileTypeDoc,
  type: 'group',
  children: [
    {
      id: 'Masters',
      title: 'Master',
      type: 'collapse',
      icon: icons.IconFileTypeDoc,
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
        }
      ]
    }
  ]
};

export default master;