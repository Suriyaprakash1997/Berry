import { RouterProvider } from 'react-router-dom';

// routing
import router from 'routes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import ThemeCustomization from 'themes';
import 'bootstrap/dist/css/bootstrap.min.css';
// auth provider
import { UserProvider } from './hooks/useAddContext';
// ==============================|| APP ||============================== //

export default function App() {
  return (
    <ThemeCustomization>
      <NavigationScroll>
        <>
        <UserProvider>
        <RouterProvider router={router} />
        </UserProvider>
          
        </>
      </NavigationScroll>
    </ThemeCustomization>
  );
}
