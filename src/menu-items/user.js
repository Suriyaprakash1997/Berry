import { IconKey ,IconUser} from '@tabler/icons-react';
// constant
const icons = {
  IconKey,IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const user = {
  id: 'users',
  title: 'User',
  icon: icons.BrandReact,
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'User',
      type: 'collapse',
      icon: icons.IconUser,
      children: [
        {
          id: 'role',
          title: 'Role',
          type: 'item',
          url: '/role',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'user_add',
          title: 'User',
          type: 'item',
          url: '/user',
          breadcrumbs: false
        },
        {
            id: 'role_Permission',
            title: 'Role Permission',
            type: 'item',
            url: '/rolepermission',
            breadcrumbs: false
          }
      ]
    }
  ]
};

export default user;