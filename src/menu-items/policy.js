// assets
import { IconFiles } from '@tabler/icons-react';



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const policy = {
  id: 'policy',
  title: '',
  type: 'group',
  children: [
    {
      id: 'policys',
      title: 'Policy',
      type: 'item',
      url: '/policy',
      icon: IconFiles,
      breadcrumbs: false
    }
  ]
};

export default policy;
