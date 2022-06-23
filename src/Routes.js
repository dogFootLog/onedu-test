import { useRoutes } from 'react-router-dom';
import ONEDU001 from './ONEDU001';
import ONEDU002 from './ONEDU002';

const Routes = () => {
  const route = [
    { path: '/', element: <ONEDU001 /> },
    { path: '/ONEDU002', element: <ONEDU002 /> },
  ];

  const routes = useRoutes(route);
  return routes;
};

export default Routes;
