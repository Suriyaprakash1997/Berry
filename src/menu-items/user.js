import { IconKey ,IconUser} from '@tabler/icons-react';
// constant
const icons = {
  IconKey,IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const user = {
  id: 'users',
  title: 'User',
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
        },
        {
          id: 'user_add',
          title: 'User',
          type: 'item',
          url: '/user',
        },
        {
          id: 'role_Form',
          title: 'Role Form',
          type: 'item',
          url: '/roleForm',
        },
        {
            id: 'role_Permission',
            title: 'Role Permission',
            type: 'item',
            url: '/rolepermission',
          }
      ]
    }
  ]
};

export default user;