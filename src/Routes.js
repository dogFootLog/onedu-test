import { useRoutes } from 'react-router-dom';
import ONEDU001 from './ONEDU001';
import ONEDU002 from './ONEDU002';
import ONEDU003 from './ONEDU003';

const Routes = () => {
  const route = [
    { path: '/', element: <ONEDU001 /> },
    { path: '/ONEDU002', element: <ONEDU002 /> },
    { path: '/ONEDU003', element: <ONEDU003 /> },
  ];

  const routes = useRoutes(route);
  return routes;
};

export default Routes;
