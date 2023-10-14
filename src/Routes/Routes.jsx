import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../layout/MainRoot';
import Home from '../Pages/Home/Home';
import AddCoffee from '../Pages/AddCoffee/AddCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5500/coffee'),
      },
      {
        path: '/addcoffee',
        element: <AddCoffee />,
      },
      {
        path: '/updatecoffee',
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
