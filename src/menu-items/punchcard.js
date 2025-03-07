import { IconUsersPlus} from '@tabler/icons-react';


// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const punchcard = {
  id: 'punchcard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'punchcards',
      title: 'Punchcard Details',
      type: 'collapse',
      icon: IconUsersPlus,
      children: [
        {
          id: 'importPunchcard',
          title: 'Import Punchcard',
          type: 'item',
          url: '/importPunchcard',
          breadcrumbs: false
        },
        {
          id: 'punchcardList',
          title: 'Punchcard List',
          type: 'item',
          url: '/punchcardList',
          breadcrumbs: false
        },
        {
          id: 'punchcardFine',
          title: 'Punchcard Fine Details',
          type: 'item',
          url: '/punchcardFine',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default punchcard;