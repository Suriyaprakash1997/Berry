import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';

// project imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'ui-component/Logo';
import Ufourslogo from 'assets/images/ufourslogo.png';

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection() {
  return (
    <Link component={RouterLink} to={DASHBOARD_PATH} aria-label="theme-logo">
      {/* <Logo /> */}
      <img
        src={Ufourslogo}
        alt="ufours logo"
        // style={{
        //   width: '150px',
        //   height: '80px',
        //   display: 'block',
        // }}
      />
    </Link>
  );
}
