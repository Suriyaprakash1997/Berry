import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import report from './report';
import employee from './employee';
import master from './master';
import user from './user';
import attendance from './attendance'
import punchcard from './punchcard';
import policy from './policy';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard,user,master,policy, employee,attendance,punchcard,report]
};

export default menuItems;
