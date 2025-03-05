import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import report from './report';
import employee from './employee';
import master from './master';
import user from './user';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard,user,master, employee,report,pages, utilities, other]
};

export default menuItems;
